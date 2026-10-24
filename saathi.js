// SaathiGo: one chat, seven AgenticOrg agents, live Supabase data.
// Publishable key only; no secrets in this file. Interface text lives in saathi-i18n.js.
const sb = supabase.createClient('https://kmuyybpapggcfyrjiblp.supabase.co', 'sb_publishable_CXMQAI014bU-_zEMVK2jTQ_yJNrwLLr');
const $ = id => document.getElementById(id);
const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
const say = (n, t, k) => { n.textContent = t; n.className = 'msg' + (k ? ' ' + k : ''); n.hidden = !t; };
const OUT = 'INDIA_TO_OVERSEAS', IN = 'OVERSEAS_TO_INDIA';
const BOXES = {
  [OUT]: [['Festival Dabba', 'Sweets, murukku and puja items', 2], ['Pickle & Snacks Dabba', 'Sealed pickles and snacks', 3], ['Masala & Spices Dabba', 'Ground masalas, sealed', 2], ['Silk & Gifts Dabba', 'Small textile pieces and gifts', 1]],
  [IN]: [['Electronics Dabba', 'Phones, earbuds, Kindle cases. Extra checks apply', 3], ['Vitamins & Care Dabba', 'Vitamins and personal care, sealed', 2], ['Shoes & Sports Dabba', 'Running shoes and sportswear', 3], ['Chocolate & Gifts Dabba', 'Chocolates and small gifts', 2]]
};
const INDIA = ['Chennai, India', 'Mumbai, India', 'Delhi, India', 'Bengaluru, India', 'Hyderabad, India'];
const ABROAD = ['Dallas, US', 'London, UK', 'Dubai, UAE', 'New York, US', 'San Francisco, US'];
// UPI payment settings. Put the SaathiGo UPI ID here (GPay → profile → UPI ID).
const UPI = { id: '', name: 'SaathiGo' };
const AGENTS = ['concierge', 'intake', 'curator', 'compliance', 'matching', 'negotiation', 'tracking'];
let mode = 'signup', user = null, profileName = '', order = null, cands = [], sel = -1, offer = null;
const draft = {};
let step = null;

// ---------- language ----------
let lang = 'en';
try { lang = localStorage.getItem('saathi_lang') || 'en'; } catch (_) {}
if (!I18N[lang]) lang = 'en';
const T = () => I18N[lang];
const city = c => String(c || '').split(',')[0];
const fmtDate = s => new Date(s + 'T00:00:00').toLocaleDateString(T()._locale, { day: 'numeric', month: 'short' });
const money = (n, cur) => new Intl.NumberFormat(T()._locale, { style: 'currency', currency: cur || 'INR', maximumFractionDigits: 0 }).format(n);
function applyLang() {
  document.documentElement.lang = lang; $('lang').value = lang;
  document.querySelectorAll('[data-i18n]').forEach(n => { const v = T()[n.dataset.i18n]; if (typeof v === 'string') n.textContent = v; });
  drawAgents();
}
$('lang').addEventListener('change', () => {
  lang = $('lang').value; try { localStorage.setItem('saathi_lang', lang); } catch (_) {}
  applyLang(); if (user) { loadAll(); startChat(); }
});

// ---------- agent strip ----------
const agentState = {};
function drawAgents() {
  const s = $('agents'); s.replaceChildren();
  AGENTS.forEach((a, i) => {
    const d = el('div', undefined, 'ag ' + (agentState[a] || ''));
    d.append(el('i', agentState[a] === 'done' ? '✓' : String(i + 1)), el('span', T().agentShort[a]));
    s.append(d);
  });
}
function setAgent(a, st) { agentState[a] = st; drawAgents(); }
function resetAgents() { AGENTS.forEach(a => delete agentState[a]); drawAgents(); }
applyLang();

// ---------- auth ----------
function setMode(m) {
  mode = m; $('signupOnly').hidden = m !== 'signup';
  $('authTitle').textContent = m === 'signup' ? 'Create your account' : 'Sign in';
  $('authBtn').textContent = m === 'signup' ? 'Sign up' : 'Sign in';
  $('swap').textContent = m === 'signup' ? 'I already have an account' : 'Create a new account';
}
$('swap').onclick = () => setMode(mode === 'signup' ? 'login' : 'signup');
$('authForm').addEventListener('submit', async e => {
  e.preventDefault(); say($('authMsg'), ''); $('authBtn').disabled = true;
  const email = $('email').value.trim(), password = $('password').value;
  try {
    if (mode === 'signup') {
      const { data, error } = await sb.auth.signUp({ email, password, options: { data: { name: $('name').value.trim() || email.split('@')[0], role: $('role').value } } });
      if (error) throw error;
      if (!data.session) { say($('authMsg'), 'Account created. Confirm your email, then sign in.'); setMode('login'); }
    } else { const { error } = await sb.auth.signInWithPassword({ email, password }); if (error) throw error; }
  } catch (err) { say($('authMsg'), err.message || 'Could not complete that.', 'err'); }
  $('authBtn').disabled = false;
});
$('out').onclick = () => { closeSheets(); sb.auth.signOut(); };
let started = false;
async function render(session) {
  user = session ? session.user : null;
  $('auth').hidden = !!user; $('menuBtn').hidden = !user;
  $('app').style.display = user ? 'flex' : 'none'; $('app').hidden = !user;
  if (!user) { started = false; return; }
  const { data } = await sb.from('profiles').select('name').eq('id', user.id).maybeSingle();
  profileName = (data && data.name) || '';
  loadAll();
  if (!started) { started = true; startChat(); }
}
sb.auth.onAuthStateChange((_e, s) => setTimeout(() => render(s), 0));
sb.auth.getSession().then(({ data }) => render(data.session));

// ---------- sheets ----------
function closeSheets() { document.querySelectorAll('.sheet').forEach(s => s.hidden = true); }
function openSheet(id) { closeSheets(); $(id).hidden = false; if (id === 'requests' || id === 'travel') loadAll(); }
$('menuBtn').onclick = () => openSheet('menu');
document.querySelectorAll('[data-close]').forEach(b => b.onclick = closeSheets);
document.querySelectorAll('[data-open]').forEach(a => a.onclick = () => openSheet(a.dataset.open));
const plusDays = n => { const x = new Date(); x.setDate(x.getDate() + n); return x.toISOString().slice(0, 10); };
$('tDate').value = plusDays(21);

// ---------- chat primitives ----------
const thread = $('thread');
const scrollDown = () => requestAnimationFrame(() => { thread.scrollTop = thread.scrollHeight; });
function me(text) { thread.append(el('div', text, 'ask')); scrollDown(); }
function bot(content, label, opts = {}) {
  const b = el('div', undefined, 'bot' + (opts.wide ? ' wide' : ''));
  if (typeof content === 'string') b.textContent = content; else b.append(content);
  thread.append(el('div', label || 'SAATHIGO', 'who' + (opts.agent ? ' agent' : '')), b); scrollDown(); return b;
}
function botNode(node) { thread.append(node); scrollDown(); }
function dots() { const t = el('div', undefined, 'bot typing'); t.append(el('i'), el('i'), el('i')); thread.append(t); scrollDown(); return t; }
async function typing(ms = 400) { const t = dots(); await new Promise(r => setTimeout(r, ms)); t.remove(); }
function chips(list, cls) {
  const c = $('chips'); c.replaceChildren();
  list.forEach(item => {
    const [label, value] = Array.isArray(item) ? item : [item, item];
    const b = el('button', label, 'chip' + (cls ? ' ' + cls : '')); b.type = 'button';
    b.onclick = () => answer(value, label);
    c.append(b);
  });
}
const setPlaceholder = t => { $('say').placeholder = t; };
const msgBox = (t, k) => el('div', t, 'msg' + (k ? ' ' + k : ''));
function feedback(agent) {
  const f = el('div', undefined, 'fb'); f.append(el('span', T().helpful));
  [['👍', true], ['👎', false]].forEach(([icon, ok]) => {
    const b = el('button', icon); b.type = 'button'; b.setAttribute('aria-label', ok ? 'Helpful' : 'Not helpful');
    b.onclick = async () => {
      f.querySelectorAll('button').forEach(x => x.disabled = true); b.classList.add('on');
      await sb.from('agent_feedback').insert({ order_id: order ? order.id : null, agent, helpful: ok });
      f.lastChild.textContent = T().thanks;
    };
    f.append(b);
  });
  f.append(el('span', ''));
  return f;
}
// One agent call, with the strip lit while it works.
async function runA(agent, extra = {}) {
  setAgent(agent, 'work');
  try {
    const { data, error } = await sb.functions.invoke('run-agents', { body: { agent, lang, order_id: order ? order.id : undefined, ...extra } });
    if (error || !data) throw new Error('call failed');
    setAgent(agent, data.agent_error && !data.parsed && !data.text ? 'fail' : 'done');
    return data;
  } catch (_) { setAgent(agent, 'fail'); return { agent_error: T().noAgent }; }
}
// ---------- natural language understanding ----------
const CITIES = { chennai: 'Chennai, India', madras: 'Chennai, India', mumbai: 'Mumbai, India', bombay: 'Mumbai, India', bengaluru: 'Bengaluru, India', bangalore: 'Bengaluru, India', delhi: 'Delhi, India', 'new delhi': 'Delhi, India', hyderabad: 'Hyderabad, India', kolkata: 'Kolkata, India', pune: 'Pune, India', kochi: 'Kochi, India', ahmedabad: 'Ahmedabad, India',
  dallas: 'Dallas, US', houston: 'Houston, US', 'new york': 'New York, US', 'san francisco': 'San Francisco, US', 'bay area': 'San Francisco, US', seattle: 'Seattle, US', chicago: 'Chicago, US', 'new jersey': 'New Jersey, US', boston: 'Boston, US', atlanta: 'Atlanta, US',
  london: 'London, UK', manchester: 'Manchester, UK', dubai: 'Dubai, UAE', 'abu dhabi': 'Abu Dhabi, UAE', singapore: 'Singapore, Singapore', toronto: 'Toronto, Canada', sydney: 'Sydney, Australia', melbourne: 'Melbourne, Australia' };
const inIndia = c => /India$/.test(c || '');
function inferDir() {
  if (draft.origin && inIndia(draft.origin) && (!draft.destination || !inIndia(draft.destination))) draft.direction = OUT;
  else if (draft.destination && inIndia(draft.destination)) draft.direction = IN;
  else if (draft.origin && !inIndia(draft.origin)) draft.direction = IN;
}
const MON = { jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec',
  'नवंबर': 'Nov', 'दिसंबर': 'Dec', 'अक्टूबर': 'Oct', 'जनवरी': 'Jan', 'நவம்பர்': 'Nov', 'டிசம்பர்': 'Dec', 'அக்டோபர்': 'Oct', 'ஜனவரி': 'Jan', 'నవంబర్': 'Nov', 'డిసెంబర్': 'Dec', 'అక్టోబర్': 'Oct', 'జనవరి': 'Jan' };
function parseDate(t) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
  let s = String(t).toLowerCase();
  Object.keys(MON).forEach(k => { if (s.includes(k)) s = s.replace(k, ' ' + MON[k] + ' '); });
  const dm = s.match(/(\d{1,2})\D{0,12}?\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/) || s.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\D{0,6}?(\d{1,2})\b/);
  if (!dm) return null;
  const day = /\d/.test(dm[1]) ? dm[1] : dm[2], mon = /\d/.test(dm[1]) ? dm[2] : dm[1];
  const p = Date.parse(day + ' ' + mon + ' ' + new Date().getFullYear());
  if (Number.isNaN(p)) return null;
  const x = new Date(p); if (x < new Date()) x.setFullYear(x.getFullYear() + 1);
  return new Date(x.getTime() - x.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
const toCity = t => { const s = t.trim().toLowerCase(); const n = Object.keys(NATIVE_CITIES).find(k => t.includes(k)); if (n) return NATIVE_CITIES[n]; const k = Object.keys(CITIES).find(k => s.startsWith(k) || s.includes(k)); return k ? CITIES[k] : t.trim(); };
function extract(text) {
  const t = ' ' + text.toLowerCase().replace(/\u200c|\u200d/g, '').replace(/[.,!?।]/g, ' ') + ' ';
  const found = [];
  Object.keys(CITIES).forEach(k => { const i = t.indexOf(' ' + k + ' '); if (i >= 0) found.push({ i: i + 1, len: k.length, city: CITIES[k] }); });
  Object.keys(NATIVE_CITIES).forEach(k => { const key = k.replace(/்$/, ''); const i = t.indexOf(key); if (i >= 0) found.push({ i, len: key.length, city: NATIVE_CITIES[k], native: true }); });
  found.sort((a, b) => a.i - b.i);
  const roleOf = f => {
    const before = t.slice(Math.max(0, f.i - 16), f.i), after = t.slice(f.i + f.len, f.i + f.len + 14);
    if (f.native) {
      if (/^\s*से|^்?(இலிருந்து|யிலிருந்து|லிருந்து|ிலிருந்து)|^\s*నుండి|^\s*నుంచి/.test(after)) return 'origin';
      if (/^\s*में|^்?(யில்|இல்|ில்)\s|^\s*లో/.test(after)) return 'home';
      if (/^\s*(को|तक|के लिए)|^்?(க்கு|உக்கு|ுக்கு)|^\s*(కు|కి)/.test(after)) return 'destination';
      return '';
    }
    if (/from\s*$/.test(before)) return 'origin';
    if (/\b(i am|i'm|im|we are|living|based)\s+in\s*$/.test(before)) return 'home';
    if (/(to|for|in|at|reach)\s*$/.test(before)) return 'destination';
    return '';
  };
  const res = {};
  found.forEach(f => { const r = roleOf(f); if (r === 'origin' && !res.origin) res.origin = f.city; else if (r === 'destination' && !res.destination) res.destination = f.city; else if (r === 'home' && !res.home) res.home = f.city; });
  const rest = found.map(f => f.city).filter(c => c !== res.origin && c !== res.destination && c !== res.home);
  if (res.home && !res.destination && res.home !== res.origin) res.destination = res.home;
  if (!res.origin && rest.length) res.origin = rest.shift();
  if (!res.destination && rest.length) res.destination = rest.shift();
  if (res.home && !res.origin && res.home !== res.destination) res.origin = res.home;
  const kg = t.match(/(\d+(?:\.\d+)?)\s*(kg|kgs|kilo|किलो|கிலோ|కిలో)/); if (kg) res.kg = parseFloat(kg[1]);
  res.need_by = parseDate(t) || undefined;
  const w = t.match(/in\s+(\d+|a|one|two|three|four)\s+(week|month)/); if (!res.need_by && w) { const n = { a: 1, one: 1, two: 2, three: 3, four: 4 }[w[1]] || +w[1]; res.need_by = plusDays(n * (w[2] === 'week' ? 7 : 30)); }
  if (/diwali|दिवाली|தீபாவளி|దీపావళి/.test(t) && !res.need_by) res.need_by = parseDate('8 Nov');
  const box = [...BOXES[OUT], ...BOXES[IN]].find(b => t.includes(b[0].toLowerCase().split(' ')[0]) && t.includes('dabba'));
  if (box) res.box = box[0];
  return res;
}

const STEPS_CHAT = {
  async dir() { await typing(); bot(T().askDir); chips([[T().dirOut, OUT], [T().dirIn, IN]]); setPlaceholder(T().phPick); },
  async what() {
    await typing(); bot(draft.direction === IN ? T().whatIn : T().whatOut);
    chips([...BOXES[draft.direction || OUT].map(b => [b[0], b[0]]), [T().seeInside, 'browse']], draft.direction === IN ? 'in' : '');
    setPlaceholder(T().phItem);
  },
  async from() { await typing(); bot(T().fromQ(draft.destination ? city(draft.destination) : '')); chips((draft.direction === IN ? ABROAD : INDIA).map(c => [city(c), c])); setPlaceholder(T().phCity); },
  async to() { await typing(); bot(T().toQ); chips((draft.direction === IN ? INDIA : ABROAD).map(c => [city(c), c])); setPlaceholder(T().phCity); },
  async by() { await typing(); bot(T().byQ(city(draft.destination))); chips([[T().w2, plusDays(14)], [T().w3, plusDays(21)], [T().m1, plusDays(30)], [T().w6, plusDays(42)]]); setPlaceholder(T().phDate); },
  async kg() { await typing(); bot(T().kgQ); chips(T().kgChips.map((l, i) => [l, ['2', '5', '8', '10'][i]])); setPlaceholder(T().phKg); },
  async confirm() {
    await typing();
    const c = el('div'); c.style.cssText = 'display:flex;flex-direction:column;gap:8px';
    c.append(el('b', T().sumTitle));
    [[T().lDabba, draft.box || T().custom], [T().lItems, draft.item], [T().lRoute, city(draft.origin) + ' → ' + city(draft.destination)], [T().lBy, fmtDate(draft.need_by)], [T().lWeight, T().about + ' ' + draft.kg + ' kg']]
      .forEach(([k, v]) => { const r = el('div', undefined, 'sumrow'); r.append(el('span', k), el('span', v)); c.append(r); });
    bot(c, undefined, { wide: true });
    chips([[T().findT, 'go'], [T().startOver, 'restart']]);
    setPlaceholder(T().phChange);
  }
};
async function ask(s) { step = s; await STEPS_CHAT[s](); }
async function nextMissing() {
  if (!draft.direction && !draft.origin && !draft.destination) return ask('dir');
  if (!draft.item && !draft.box) return ask('what');
  if (!draft.origin) return ask('from');
  if (!draft.destination) return ask('to');
  inferDir();
  if (!draft.need_by) return ask('by');
  if (!draft.kg) return ask('kg');
  return ask('confirm');
}

async function answer(value, label) {
  if (!step || step === 'busy') return;
  const text = String(value).trim(); if (!text) return;
  me(label || text); $('chips').replaceChildren(); $('say').value = '';
  if (text === 'restart' || /^(new request|नया अनुरोध|புதிய கோரிக்கை|కొత్త అభ్యర్థన)$/i.test(text)) return startChat();
  switch (step) {
    case 'free': return understand(text);
    case 'dir': {
      const v = text === IN || /to india|videshi|विदेशी|விதேசி|విదేశీ/i.test(text) ? IN : text === OUT || /india|swadeshi|स्वदेशी|சுதேசி|స్వదేశీ|overseas|abroad/i.test(text) ? OUT : null;
      if (!v) { await typing(); bot(T().pickOne); return ask('dir'); }
      draft.direction = v; return nextMissing();
    }
    case 'what': {
      if (text === 'browse') { openSheet(draft.direction === IN ? 'videshi' : 'swadeshi'); return; }
      const b = BOXES[draft.direction || OUT].find(x => x[0] === text);
      if (b) { draft.box = b[0]; draft.item = b[1]; draft.kg = draft.kg || b[2]; } else { draft.box = ''; draft.item = text.slice(0, 600); }
      return nextMissing();
    }
    case 'from': draft.origin = toCity(text); inferDir(); return nextMissing();
    case 'to': draft.destination = toCity(text); inferDir(); return nextMissing();
    case 'by': { const dt = parseDate(text); if (!dt) { await typing(); bot(T().dateErr); return ask('by'); } draft.need_by = dt; return nextMissing(); }
    case 'kg': { const n = parseFloat(text); if (!(n > 0 && n <= 100)) { await typing(); bot(T().kgErr); return ask('kg'); } draft.kg = n; return nextMissing(); }
    case 'confirm': {
      if (text === 'go' || /^(yes|go|ok|find|हाँ|हां|ठीक|ஆம்|சரி|అవును|సరే)/i.test(text)) return submit();
      const got = extract(text); const ch = Object.entries(got).filter(([k, v]) => v && k !== 'home');
      if (ch.length) { Object.assign(draft, Object.fromEntries(ch)); inferDir(); await typing(); bot(T().updated); return ask('confirm'); }
      await typing(); bot(T().changeHelp); return ask('confirm');
    }
    case 'pick': { await typing(); bot(T().pickTraveler); return; }
    case 'offer': {
      if (text === 'accept') return acceptOffer();
      if (text === 'lower') return lowerOffer();
      await typing(); bot(T().pickTraveler); return;
    }
    case 'track': {
      if (text === 'handed' || text === 'delivered') return setStatus(text === 'handed' ? 'Handed over' : 'Delivered');
      await typing(); bot(T().afterDone); return;
    }
    default: { await typing(); bot(T().afterDone); chips([[T().newReq, 'restart']]); }
  }
}
$('composer').addEventListener('submit', e => { e.preventDefault(); answer($('say').value); });

// ---------- stage 1: Concierge + Intake read the message ----------
async function understand(text) {
  if (text === 'browse') { openSheet('swadeshi'); return; }
  if (text === 'traveler') { openSheet('travel'); step = 'free'; return; }
  const local = extract(text);
  step = 'busy'; $('chips').replaceChildren(); setPlaceholder(T().reading);
  const t = dots();
  const [ci, cc] = await Promise.all([runA('intake', { message: text }), runA('concierge', { message: text, known: local })]);
  t.remove();
  // Our own reading wins where it found something; the Intake agent fills the gaps.
  const p = ci.parsed || {};
  const agentVals = { item: p.items, origin: p.origin_city && toCity(p.origin_city), destination: p.destination_city && toCity(p.destination_city), need_by: p.need_by, kg: p.weight_kg, direction: p.direction };
  Object.entries(agentVals).forEach(([k, v]) => { if (v && !draft[k]) draft[k] = v; });
  Object.entries(local).forEach(([k, v]) => { if (v && k !== 'home') draft[k] = v; });
  draft.item = draft.item || text.slice(0, 600);
  inferDir();
  const bits = [];
  if (draft.origin) bits.push(T().from + ' ' + city(draft.origin));
  if (draft.destination) bits.push(T().to + ' ' + city(draft.destination));
  if (draft.need_by) bits.push(T().by + ' ' + fmtDate(draft.need_by));
  if (draft.kg) bits.push(T().about + ' ' + draft.kg + ' kg');
  if (cc.text) { const b = bot(cc.text, T().agentsFull.concierge.toUpperCase(), { agent: true }); b.append(feedback('concierge')); }
  else bot(bits.length ? T().gotIt(bits.join(', ')) : T().noted);
  return nextMissing();
}
async function startChat() {
  Object.keys(draft).forEach(k => delete draft[k]);
  order = null; cands = []; sel = -1; offer = null; resetAgents();
  step = null; thread.replaceChildren(); $('chips').replaceChildren();
  await typing(350);
  bot(T().greet1(profileName ? profileName.split(' ')[0] : ''));
  await typing(450);
  bot(T().greet2);
  const tiles = el('div', undefined, 'brandtiles');
  [['sw', 'swadeshi', T().swTag, T().swLine], ['vi', 'videshi', T().viTag, T().viLine]].forEach(([cls, sheet, tag, line]) => {
    const b = el('button', undefined, 'tile ' + cls); b.type = 'button';
    b.append(el('span', tag, 'tg'), el('span', T()[sheet], 'tt'), el('span', line, 'tl'), el('span', T().explore + ' →', 'tx'));
    b.onclick = () => openSheet(sheet);
    tiles.append(b);
  });
  botNode(tiles);
  step = 'free';
  chips([T().ex1, T().ex2, [T().imTraveler, 'traveler'], [T().browse, 'browse']]);
  setPlaceholder(T().phFree);
}

// ---------- stage 2: Curator + Compliance, then Matching ----------
async function submit() {
  step = 'busy'; setPlaceholder(T().working);
  try {
    const row = { direction: draft.direction || OUT, box_id: (draft.box || '').toLowerCase().replace(/\W+/g, '-').slice(0, 40), box_name: draft.box || 'Custom request', origin: draft.origin, destination: draft.destination, need_by: draft.need_by, kg: Number(draft.kg) || 0, item: String(draft.item || '').slice(0, 200), notes: String(draft.item || '').slice(200, 800) };
    const { data, error } = await sb.from('orders').insert(row).select().single();
    if (error) throw error;
    order = data; sel = -1;
    await typing(250); bot(T().saved2);
    const t = dots();
    const [cu, co] = await Promise.all([runA('curator'), runA('compliance')]);
    t.remove();
    showCurator(cu); showCompliance(co);
    const t2 = dots();
    const ma = await runA('matching');
    t2.remove();
    showMatching(ma);
    loadAll();
  } catch (err) { document.querySelectorAll('#thread .typing').forEach(n => n.remove()); botNode(msgBox(err.message || 'Something went wrong.', 'err')); step = 'done'; chips([[T().newReq, 'restart']]); }
}
function showCurator(r) {
  const c = el('div'); const p = r.parsed || {};
  c.append(el('b', T().suggested + ': ' + (p.dabba || draft.box || T().custom)));
  if (Array.isArray(p.pack_list) && p.pack_list.length) { c.append(el('div', T().packList, 'muted')); const ul = el('ul', undefined, 'list'); p.pack_list.slice(0, 8).forEach(i => ul.append(el('li', String(i)))); c.append(ul); }
  if (p.tip) c.append(el('div', String(p.tip), 'reason'));
  if (!r.parsed && r.text) c.append(el('div', r.text.slice(0, 600)));
  if (r.agent_error && !r.parsed && !r.text) c.append(msgBox(T().noAgent, 'warn'));
  c.append(feedback('curator'));
  bot(c, T().agentsFull.curator.toUpperCase(), { agent: true, wide: true });
}
function showCompliance(r) {
  const c = el('div'); c.style.cssText = 'display:flex;flex-direction:column;gap:6px';
  const p = r.parsed || {};
  const rules = r.rules || [];
  const worst = p.verdict || (rules.some(x => x.verdict === 'restricted') ? 'restricted' : rules.some(x => x.verdict === 'declare') ? 'declare' : rules.some(x => x.verdict === 'check') ? 'check' : 'ok');
  c.append(el('span', T().verdict[worst] || worst, 'pill ' + worst));
  if (Array.isArray(p.notes)) p.notes.slice(0, 4).forEach(n => c.append(el('div', '• ' + n)));
  if (Array.isArray(p.avoid) && p.avoid.length) c.append(el('div', T().avoid + ': ' + p.avoid.join(', '), 'reason'));
  if (!r.parsed && r.text) c.append(el('div', r.text.slice(0, 600)));
  rules.slice(0, 5).forEach(x => { const d = el('div', undefined, 'rule'); d.append(el('b', (T().verdict[x.verdict] || x.verdict) + ' · ' + x.category), el('div', x.guidance), el('small', x.source)); c.append(d); });
  c.append(el('small', T().rulesFrom, 'muted'));
  if (r.agent_error && !r.parsed && !r.text) c.append(msgBox(T().noAgent, 'warn'));
  c.append(feedback('compliance'));
  bot(c, T().agentsFull.compliance.toUpperCase(), { agent: true, wide: true });
}
function travRow(t, i, reason) {
  const b = el('button', undefined, 'trav'), w = el('div'); w.style.flex = '1'; w.style.minWidth = '0';
  w.append(el('b', t.name), el('small', T().arrives + ' ' + fmtDate(t.arrival) + ' · ' + (t.rating ? '★ ' + t.rating + ' · ' : '') + t.spare_kg + ' ' + T().spare));
  const tags = el('div', undefined, 'tags');
  if (t.verified) tags.append(el('span', '✓ ' + T().verified, 'tag'));
  if (t.trips_done) tags.append(el('span', T().trips(t.trips_done), 'tag g'));
  if (t.member) tags.append(el('span', T().member, 'tag'));
  if (t.langs) tags.append(el('span', T().speaks + ': ' + t.langs, 'tag g'));
  w.append(tags);
  if (reason) w.append(el('div', reason, 'reason'));
  const sc = el('div', undefined, 'score'); sc.append(el('b', String(t.score ?? '')), el('span', T().matchWord));
  b.append(el('div', String(t.name).slice(0, 2).toUpperCase(), 'av'), w, sc);
  b.onclick = () => pickTraveler(i);
  return b;
}
function showMatching(r) {
  cands = r.candidates || [];
  const rank = (r.parsed && Array.isArray(r.parsed.ranking)) ? r.parsed.ranking : [];
  const reasons = {}; rank.forEach((x, i) => { reasons[x.name] = { reason: x.reason, pos: i }; });
  if (rank.length) cands.sort((a, b) => (reasons[a.name]?.pos ?? 99) - (reasons[b.name]?.pos ?? 99));
  if (!cands.length) {
    bot(T().none(city(order.origin), city(order.destination), fmtDate(order.need_by)));
    step = 'done'; chips([[T().newReq, 'restart']]); setPlaceholder(T().phAny); return;
  }
  const c = el('div'); c.style.cssText = 'display:flex;flex-direction:column;gap:8px';
  c.append(el('b', T().bestMatches));
  if (r.parsed && r.parsed.summary) c.append(el('div', String(r.parsed.summary), 'muted'));
  else if (!r.parsed && r.text) c.append(el('div', r.text.slice(0, 500), 'muted'));
  const list = el('div'); list.id = 'travList'; list.style.cssText = 'display:flex;flex-direction:column;gap:8px';
  cands.forEach((t, i) => list.append(travRow(t, i, reasons[t.name]?.reason)));
  c.append(list);
  if (r.dropped) c.append(msgBox(T().dropped(r.dropped), 'warn'));
  if (r.agent_error && !r.parsed && !r.text) c.append(msgBox(T().noAgent, 'warn'));
  c.append(feedback('matching'));
  bot(c, T().agentsFull.matching.toUpperCase(), { agent: true, wide: true });
  bot(T().pickTraveler);
  step = 'pick'; setPlaceholder(T().phAny);
}

// ---------- stage 3: Negotiation ----------
async function pickTraveler(i) {
  if (step === 'busy') return;
  sel = i; const t = cands[i];
  document.querySelectorAll('#travList .trav').forEach((n, j) => n.classList.toggle('sel', j === i));
  me(T().choose(t.name));
  step = 'busy';
  await sb.from('orders').update({ selected_traveler: t.name, status: 'Traveler chosen' }).eq('id', order.id);
  order.selected_traveler = t.name; order.status = 'Traveler chosen';
  const d = dots();
  const r = await runA('negotiation', { traveler: t.name });
  d.remove();
  const base = r.baseline || { currency: order.direction === IN ? 'USD' : 'INR', low: 600, high: 900 };
  const p = r.parsed || {};
  offer = { amount: Number(p.reward) || Math.round((base.low + base.high) / 2), currency: base.currency, base };
  const c = el('div'); c.style.cssText = 'display:flex;flex-direction:column;gap:6px';
  c.append(el('div', T().reward, 'muted'), el('div', money(offer.amount, offer.currency), 'big'), el('small', T().fair(money(base.low, base.currency) + ' – ' + money(base.high, base.currency)), 'muted'));
  if (Array.isArray(p.terms)) { const ul = el('ul', undefined, 'list'); p.terms.slice(0, 5).forEach(x => ul.append(el('li', String(x)))); c.append(ul); }
  if (p.message_to_traveler) c.append(el('div', '“' + p.message_to_traveler + '”', 'reason'));
  if (!r.parsed && r.text) c.append(el('div', r.text.slice(0, 500)));
  if (r.adjusted) c.append(msgBox(T().adjusted, 'warn'));
  if (r.agent_error && !r.parsed && !r.text) c.append(msgBox(T().noAgent, 'warn'));
  c.append(feedback('negotiation'));
  bot(c, T().agentsFull.negotiation.toUpperCase(), { agent: true, wide: true });
  step = 'offer'; chips([[T().accept, 'accept'], [T().lower, 'lower']]); setPlaceholder(T().phAny);
}
async function lowerOffer() {
  offer.amount = offer.base.low;
  await typing(); bot(T().lowered + ' ' + money(offer.amount, offer.currency));
  chips([[T().accept, 'accept']]);
}
async function acceptOffer() {
  step = 'busy';
  const label = money(offer.amount, offer.currency);
  await sb.from('orders').update({ reward: label }).eq('id', order.id);
  order.reward = label;
  await typing(); bot(T().accepted(label, cands[sel].name.replace(/\.$/, '')));
  showPayment();
  await runTracking();
}

// ---------- stage 4: Tracking ----------
async function runTracking() {
  const d = dots();
  const r = await runA('tracking', { traveler: cands[sel] ? cands[sel].name : order.selected_traveler });
  d.remove();
  const c = el('div'); c.style.cssText = 'display:flex;flex-direction:column;gap:6px';
  const steps = T().steps, cur = Math.max(0, ['Request saved', 'Travelers found', 'Traveler chosen', 'Handed over', 'Delivered'].indexOf(order.status));
  steps.forEach((s, i) => c.append(el('div', (i <= cur ? '✓ ' : '○ ') + s, i <= cur ? '' : 'muted')));
  const p = r.parsed || {};
  if (p.status_update) c.append(el('div', String(p.status_update), 'reason'));
  if (Array.isArray(p.next_steps)) { const ul = el('ul', undefined, 'list'); p.next_steps.slice(0, 4).forEach(x => ul.append(el('li', String(x)))); c.append(ul); }
  if (!r.parsed && r.text) c.append(el('div', r.text.slice(0, 500)));
  if (r.agent_error && !r.parsed && !r.text) c.append(msgBox(T().noAgent, 'warn'));
  c.append(feedback('tracking'));
  bot(c, T().agentsFull.tracking.toUpperCase(), { agent: true, wide: true });
  step = 'track'; setPlaceholder(T().phAny);
  const next = order.status === 'Handed over' ? [[T().delivered, 'delivered']] : order.status === 'Delivered' ? [] : [[T().handedOver, 'handed'], [T().delivered, 'delivered']];
  chips([...next, [T().newReq, 'restart']]);
}
async function setStatus(s) {
  step = 'busy';
  await sb.from('orders').update({ status: s }).eq('id', order.id);
  order.status = s;
  await typing(); bot(s === 'Delivered' ? T().statusDelivered : T().statusHanded);
  loadAll();
  await runTracking();
}

// ---------- dabba catalogs ----------
function catalog(listId, key, cls) {
  BOXES[key].forEach(([name, desc, kg]) => {
    const row = el('div', undefined, 'box'), w = el('div');
    w.append(el('b', name), el('small', desc + ' · ' + kg + ' kg'));
    const b = el('button', '✓', 'btn ' + cls); b.style.minHeight = '40px'; b.setAttribute('aria-label', 'Choose ' + name);
    b.onclick = async () => {
      closeSheets(); $('chips').replaceChildren();
      if (!step || ['done', 'pick', 'offer', 'track'].includes(step)) { Object.keys(draft).forEach(k => delete draft[k]); resetAgents(); }
      draft.direction = key; draft.box = name; draft.item = desc; draft.kg = kg;
      me(name); await nextMissing();
    };
    row.append(w, b); $(listId).append(row);
  });
}
catalog('swList', OUT, ''); catalog('viList', IN, 'in');

// ---------- requests + trips ----------
$('tripForm').addEventListener('submit', async e => {
  e.preventDefault(); $('tripBtn').disabled = true;
  const { error } = await sb.from('trips').insert({ origin: toCity($('tFrom').value), destination: toCity($('tTo').value), arrival: $('tDate').value, spare_kg: Number($('tKg').value) });
  say($('tripMsg'), error ? error.message : '✓', error ? 'err' : '');
  $('tripBtn').disabled = false; if (!error) loadAll();
});
const STATUS = ['Request saved', 'Travelers found', 'Traveler chosen', 'Handed over', 'Delivered'];
const stepLabel = s => { const i = STATUS.indexOf(s); return i >= 0 ? T().steps[i] : s; };
async function loadAll() {
  if (!user) return;
  const [o, t, pr, open, mine] = await Promise.all([
    sb.from('orders').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(20),
    sb.from('trips').select('*').order('created_at', { ascending: false }).limit(20),
    sb.from('profiles').select('langs,agreed_rules').eq('id', user.id).maybeSingle(),
    sb.rpc('open_requests_for_me'),
    sb.from('orders').select('*').eq('carrier_id', user.id).order('need_by').limit(20)
  ]);
  // Family view: my requests, with traveler and delivery code.
  const list = $('orders'); list.replaceChildren();
  if (!(o.data || []).length) list.append(el('div', T().noReq, 'muted'));
  (o.data || []).forEach(r => {
    const row = el('div', undefined, 'job'), top = el('div', undefined, 'row');
    const w = el('div'); w.style.flex = '1';
    w.append(el('b', r.box_name), el('small', city(r.origin) + ' → ' + city(r.destination) + ' · ' + fmtDate(r.need_by) + (r.reward ? ' · ' + r.reward : '')));
    top.append(w, el('span', stepLabel(r.status), 'pill' + (STATUS.indexOf(r.status) > 2 ? '' : ' declare')));
    row.append(top);
    if (r.selected_traveler) row.append(el('small', T().carrier + ': ' + r.selected_traveler));
    if (r.payment_status) row.append(el('small', T().payStatus + ': ' + r.payment_status + (r.payment_ref ? ' · UTR ' + r.payment_ref : '')));
    if (r.delivery_code && r.status !== 'Delivered') { row.append(el('div', r.delivery_code, 'code'), el('small', T().codeShare(r.delivery_code))); }
    list.append(row);
  });
  // Traveler onboarding
  const prof = pr.data || {};
  $('onboard').hidden = !!prof.agreed_rules;
  if (prof.langs && !$('oLangs').value) $('oLangs').value = prof.langs;
  // Pickups I accepted
  const pk = $('pickups'); pk.replaceChildren();
  if (!(mine.data || []).length) pk.append(el('div', T().noPickups, 'muted'));
  (mine.data || []).forEach(r => {
    const j = el('div', undefined, 'job'), top = el('div', undefined, 'row'), w = el('div'); w.style.flex = '1';
    w.append(el('b', r.box_name), el('small', city(r.origin) + ' → ' + city(r.destination) + ' · ' + fmtDate(r.need_by) + ' · ' + r.kg + ' kg' + (r.reward ? ' · ' + r.reward : '')));
    top.append(w, el('span', stepLabel(r.status), 'pill' + (r.status === 'Delivered' ? '' : ' declare')));
    j.append(top);
    if (r.item) j.append(el('small', r.item));
    const m = el('div', undefined, 'msg'); m.hidden = true;
    if (r.status === 'Traveler chosen') {
      const b = el('button', T().pickedUp, 'btn'); b.onclick = async () => { b.disabled = true; const { error } = await sb.rpc('carrier_update', { p_order: r.id, p_status: 'Handed over' }); if (error) { say(m, error.message, 'err'); b.disabled = false; } else loadAll(); };
      j.append(b);
    } else if (r.status === 'Handed over') {
      const row = el('div', undefined, 'row'), inp = el('input'); inp.inputMode = 'numeric'; inp.maxLength = 4; inp.placeholder = '0000'; inp.setAttribute('aria-label', T().codeLabel);
      const b = el('button', T().deliveredBtn, 'btn'); b.onclick = async () => { b.disabled = true; const { error } = await sb.rpc('carrier_update', { p_order: r.id, p_status: 'Delivered', p_code: inp.value.trim() }); if (error) { say(m, error.message, 'err'); b.disabled = false; } else loadAll(); };
      row.append(inp, b); j.append(row);
    }
    j.append(m); pk.append(j);
  });
  // Open requests that fit my trips
  const op = $('openReqs'); op.replaceChildren();
  if (open.error || !(open.data || []).length) op.append(el('div', T().noOpen, 'muted'));
  (open.data || []).forEach(r => {
    const j = el('div', undefined, 'job');
    j.append(el('b', r.box_name + ' · ' + r.kg + ' kg'), el('small', city(r.origin) + ' → ' + city(r.destination) + ' · ' + T().lBy + ' ' + fmtDate(r.need_by) + ' · ' + T().family + ': ' + r.family_name));
    if (r.item) j.append(el('small', r.item));
    j.append(el('small', T().fitsTrip(fmtDate(r.arrival)), 'reason'));
    const m = el('div', undefined, 'msg'); m.hidden = true;
    const b = el('button', T().acceptJob, 'btn in'); b.disabled = !prof.agreed_rules;
    b.onclick = async () => { b.disabled = true; const { error } = await sb.rpc('accept_request', { p_order: r.order_id, p_trip: r.trip_id }); if (error) { say(m, error.message, 'err'); b.disabled = false; } else { say(m, T().acceptedJob); setTimeout(loadAll, 900); } };
    j.append(b, m); op.append(j);
  });
  const tl = $('trips'); tl.replaceChildren();
  if (!(t.data || []).length) tl.append(el('div', '—', 'muted'));
  (t.data || []).forEach(r => { const row = el('div', undefined, 'box'), w = el('div'); w.append(el('b', city(r.origin) + ' → ' + city(r.destination)), el('small', T().arrives + ' ' + fmtDate(r.arrival) + ' · ' + r.spare_kg + ' ' + T().spare)); row.append(w); tl.append(row); });
}
$('onboard').addEventListener('submit', async e => {
  e.preventDefault();
  const { error } = await sb.from('profiles').update({ langs: $('oLangs').value.trim().slice(0, 120), agreed_rules: true }).eq('id', user.id);
  if (!error) { $('onboard').hidden = true; say($('tripMsg'), T().onbDone); loadAll(); }
});

// ---------- UPI payment ----------
function showPayment() {
  const c = el('div', undefined, 'pay');
  c.append(el('b', T().payTitle), el('div', money(offer.amount, offer.currency), 'big'));
  if (offer.currency !== 'INR') { c.append(msgBox(T().payUsd, 'warn')); bot(c, 'SAATHIGO', { wide: true }); return; }
  if (!UPI.id) { c.append(msgBox(T().paySet, 'warn')); bot(c, 'SAATHIGO', { wide: true }); return; }
  const ref = 'SG' + String(order.id).replace(/-/g, '').slice(0, 10).toUpperCase();
  const uri = 'upi://pay?' + new URLSearchParams({ pa: UPI.id, pn: UPI.name, am: Number(offer.amount).toFixed(2), cu: 'INR', tn: 'SaathiGo ' + ref, tr: ref }).toString();
  const a = el('a', T().payBtn(money(offer.amount, 'INR')), 'upibtn'); a.href = uri;
  c.append(a);
  try {
    const q = el('div', undefined, 'qr');
    new QRCode(q, { text: uri, width: 160, height: 160, correctLevel: QRCode.CorrectLevel.M });
    c.append(el('small', T().payScan, 'muted'), q);
  } catch (_) { /* QR library not loaded: the UPI button still works on phones */ }
  c.append(el('small', UPI.name + ' · ' + UPI.id, 'muted'), el('small', T().payNote, 'muted'));
  const row = el('div', undefined, 'row'), inp = el('input'); inp.inputMode = 'numeric'; inp.maxLength = 22; inp.placeholder = T().payRef; inp.setAttribute('aria-label', T().payRef);
  const b = el('button', T().paidBtn, 'btn'); row.append(inp, b);
  const m = el('div', undefined, 'msg'); m.hidden = true;
  b.onclick = async () => {
    const v = inp.value.replace(/\s/g, '');
    if (!/^\d{12}$/.test(v)) { say(m, T().payRefErr, 'err'); return; }
    b.disabled = true;
    const { error } = await sb.from('orders').update({ payment_ref: v, payment_status: 'Paid, awaiting check', paid_at: new Date().toISOString() }).eq('id', order.id);
    if (error) { say(m, error.message, 'err'); b.disabled = false; } else { say(m, T().paidMsg); row.remove(); loadAll(); }
  };
  c.append(row, m);
  bot(c, 'SAATHIGO', { wide: true });
}
