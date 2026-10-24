// Saathi interface text in English, Hindi, Tamil and Telugu.
window.I18N = {
  en: {
    _name: 'English', _locale: 'en-IN',
    tagline: 'Your agent for carrying home across borders', signOut: 'Sign out',
    tabHome: 'Home', tabCustoms: 'Customs', tabNegotiate: 'Negotiate', tabTracking: 'Tracking', tabTraveler: 'Traveler',
    greet1: n => 'Namaste' + (n ? ' ' + n : '') + '! I am SaathiGo, your carry agent between India and your family abroad.',
    greet2: 'What would you like to send or get, and where should it go? Just tell me in your own words.',
    ex1: ['Murukku from Chennai to Dallas', 'I want to send 2 kg murukku and sweets from Chennai to my family in Dallas by 10 Nov'],
    ex2: ['Shoes from Dallas to Chennai', 'I am in Dallas and want to send running shoes and vitamins to my parents in Chennai'],
    browse: 'Browse dabbas', reading: 'SaathiGo is reading…', working: 'SaathiGo is working…',
    phFree: 'e.g. I am in Dallas, need 2 kg pickles from Chennai by 10 Nov', phCity: 'Type a city', phDate: 'Or type a date, e.g. 15 Nov', phKg: 'Or type kg, e.g. 3', phChange: 'Or tell me what to change', phAny: 'Ask SaathiGo anything, or say "new request"', phPick: 'Pick one above', phItem: 'e.g. 2 kg murukku and a silk blouse piece',
    gotIt: b => 'Got it: ' + b + '.', noted: 'Thanks, I have noted that.', from: 'from', to: 'to', by: 'by', about: 'about',
    askDir: 'Is this going from India to family overseas, or coming home to India?', dirOut: 'India to overseas · Swadeshi Dabba', dirIn: 'Overseas to India · Videshi Dabba',
    whatOut: 'Lovely. What should we send? Pick a Swadeshi Dabba or tell me in your own words.', whatIn: 'Got it. What do you need brought home? Pick a Videshi Dabba or describe the item.', seeInside: 'See what is inside each',
    fromQ: d => d ? 'Which city should it be picked up from, to reach ' + d + '?' : 'Which city is it leaving from?', toQ: 'And which city should it reach?', byQ: d => 'By when does it need to reach ' + (d || 'there') + '?',
    w2: 'In 2 weeks', w3: 'In 3 weeks', m1: 'In a month', w6: 'In 6 weeks', kgQ: 'Roughly how heavy is it?', kgChips: ['Under 2 kg', 'About 5 kg', 'About 8 kg', '10 kg or more'],
    sumTitle: 'Here is your request', lDabba: 'Dabba', lItems: 'Items', lRoute: 'Route', lBy: 'Needed by', lWeight: 'Weight', custom: 'Custom request',
    findT: 'Find travelers', startOver: 'Start over', updated: 'Updated.', changeHelp: 'No problem. Tell me what to change, for example a new date like 15 Nov or a weight like 3 kg.',
    dateErr: 'I could not read that date. Try something like 15 Nov.', kgErr: 'Please give a weight between 0.5 and 100 kg.', pickOne: 'Please pick one of the two options.', tellAgain: 'Tell me again what you need, in your own words.',
    saved: 'Saved. I am asking the Matching agent to find travelers and the Compliance agent to check the rules. This can take a few seconds.',
    found: n => 'I found ' + n + ' traveler' + (n > 1 ? 's' : '') + ' on your route. Tap one to choose.',
    none: (o, d, dt) => 'No one is flying ' + o + ' to ' + d + ' before ' + dt + ' with enough space yet. Your request is saved, and travelers who add this route will see it.',
    choose: n => 'Let us go with ' + n, great: f => 'Great choice. Next, check the customs rules for this route, then agree a reward with ' + f + '.',
    checkCustoms: 'Check customs', agree: 'Agree a reward', track: 'Track', newReq: 'New request', afterDone: 'You can pick a traveler above, or use the buttons to check customs and agree a reward. Say "new request" to start another.',
    verified: 'Verified', trips: n => n + ' trips', speaks: 'Speaks', arrives: 'Arrives', spare: 'kg spare', selected: 'Selected', earliest: 'Earliest', member: 'SaathiGo member', newTraveler: 'New traveler',
    hCustoms: 'Customs check', pCustoms: 'Guidance for your route. It is not legal advice, and electronics always need a label check.', bCustoms: 'Check rules with the compliance agent',
    hNeg: 'Agree a reward', pNeg: 'The negotiation agent proposes a fair reward and handover terms. No payment is made in this demo.', bNeg: 'Ask the negotiation agent',
    hTrack: 'Track your dabba', bTrack: 'Get a status update from the tracking agent', allReq: 'All my requests',
    hTrav: 'I am travelling', pTrav: 'Add your trip. Families on your route can find you. Only your first name, arrival date and spare space are shown.', bTrip: 'Save my trip', myTrips: 'My trips',
    current: 'Current request', noReq: 'No request yet', noReqText: 'No request yet. Start one in the Home chat.', status: 'Status', traveler: 'Traveler', asking: 'Asking the agent…', progress: 'Progress',
    steps: ['Request saved', 'Travelers found', 'Traveler chosen', 'Handed over', 'Delivered'], agentsLabel: { matching: 'Matching agent', compliance: 'Compliance agent', negotiation: 'Negotiation agent', tracking: 'Tracking agent', intake: 'Intake agent' }
  },
  hi: {
    _name: 'हिन्दी', _locale: 'hi-IN',
    tagline: 'सरहद पार घर की चीज़ें पहुँचाने वाला आपका एजेंट', signOut: 'साइन आउट',
    tabHome: 'होम', tabCustoms: 'कस्टम्स', tabNegotiate: 'मोलभाव', tabTracking: 'ट्रैकिंग', tabTraveler: 'यात्री',
    greet1: n => 'नमस्ते' + (n ? ' ' + n : '') + '! मैं साथीगो हूँ, भारत और विदेश में बसे आपके परिवार के बीच सामान पहुँचाने वाला आपका एजेंट।',
    greet2: 'आप क्या भेजना या मँगवाना चाहते हैं, और कहाँ? अपने शब्दों में बताइए।',
    ex1: ['चेन्नई से डलास मुरुक्कु', 'मुझे 10 नवंबर तक चेन्नई से डलास में अपने परिवार को 2 kg मुरुक्कु और मिठाई भेजनी है'],
    ex2: ['डलास से चेन्नई जूते', 'मैं डलास में हूँ और चेन्नई में अपने माता-पिता को रनिंग शूज़ और विटामिन भेजना चाहता हूँ'],
    browse: 'डब्बे देखें', reading: 'साथीगो पढ़ रहा है…', working: 'साथीगो काम कर रहा है…',
    phFree: 'जैसे: मैं डलास में हूँ, 10 नवंबर तक चेन्नई से 2 kg अचार चाहिए', phCity: 'शहर लिखें', phDate: 'या तारीख लिखें, जैसे 15 Nov', phKg: 'या वज़न लिखें, जैसे 3', phChange: 'या बताइए क्या बदलना है', phAny: 'साथीगो से कुछ भी पूछें, या "नया अनुरोध" लिखें', phPick: 'ऊपर से एक चुनें', phItem: 'जैसे 2 kg मुरुक्कु और एक सिल्क ब्लाउज़ पीस',
    gotIt: b => 'समझ गया: ' + b + '।', noted: 'धन्यवाद, मैंने नोट कर लिया।', from: 'से', to: 'तक', by: 'तारीख', about: 'लगभग',
    askDir: 'यह भारत से विदेश में परिवार को जा रहा है, या विदेश से भारत आ रहा है?', dirOut: 'भारत से विदेश · स्वदेशी डब्बा', dirIn: 'विदेश से भारत · विदेशी डब्बा',
    whatOut: 'बढ़िया। क्या भेजना है? कोई स्वदेशी डब्बा चुनें या अपने शब्दों में बताइए।', whatIn: 'ठीक है। घर क्या मँगवाना है? कोई विदेशी डब्बा चुनें या सामान बताइए।', seeInside: 'हर डब्बे में क्या है देखें',
    fromQ: d => d ? d + ' पहुँचाने के लिए सामान किस शहर से लिया जाए?' : 'सामान किस शहर से जाएगा?', toQ: 'और किस शहर तक पहुँचाना है?', byQ: d => (d || 'वहाँ') + ' कब तक पहुँचना चाहिए?',
    w2: '2 हफ़्ते में', w3: '3 हफ़्ते में', m1: '1 महीने में', w6: '6 हफ़्ते में', kgQ: 'लगभग कितना वज़न है?', kgChips: ['2 kg से कम', 'लगभग 5 kg', 'लगभग 8 kg', '10 kg या ज़्यादा'],
    sumTitle: 'आपका अनुरोध', lDabba: 'डब्बा', lItems: 'सामान', lRoute: 'रास्ता', lBy: 'कब तक', lWeight: 'वज़न', custom: 'अपना अनुरोध',
    findT: 'यात्री खोजें', startOver: 'फिर से शुरू करें', updated: 'बदल दिया।', changeHelp: 'कोई बात नहीं। बताइए क्या बदलना है, जैसे नई तारीख 15 Nov या वज़न 3 kg।',
    dateErr: 'तारीख समझ नहीं आई। 15 Nov जैसा लिखें।', kgErr: 'कृपया 0.5 से 100 kg के बीच वज़न बताएँ।', pickOne: 'कृपया दोनों में से एक चुनें।', tellAgain: 'अपने शब्दों में फिर से बताइए कि क्या चाहिए।',
    saved: 'सेव हो गया। मैचिंग एजेंट यात्री खोज रहा है और कम्प्लायंस एजेंट नियम जाँच रहा है। कुछ सेकंड लग सकते हैं।',
    found: n => 'आपके रास्ते पर ' + n + ' यात्री मिले। चुनने के लिए किसी पर टैप करें।',
    none: (o, d, dt) => dt + ' से पहले ' + o + ' से ' + d + ' जाने वाला कोई यात्री अभी नहीं मिला। आपका अनुरोध सेव है, इस रास्ते के नए यात्री इसे देखेंगे।',
    choose: n => n + ' के साथ चलते हैं', great: f => 'बढ़िया चुनाव। अब इस रास्ते के कस्टम्स नियम देखें, फिर ' + f + ' के साथ इनाम तय करें।',
    checkCustoms: 'कस्टम्स जाँचें', agree: 'इनाम तय करें', track: 'ट्रैक करें', newReq: 'नया अनुरोध', afterDone: 'ऊपर से यात्री चुनें, या बटन से कस्टम्स जाँचें और इनाम तय करें। नया शुरू करने के लिए "नया अनुरोध" लिखें।',
    verified: 'सत्यापित', trips: n => n + ' यात्राएँ', speaks: 'भाषाएँ', arrives: 'पहुँचेंगे', spare: 'kg जगह', selected: 'चुना गया', earliest: 'सबसे पहले', member: 'साथीगो सदस्य', newTraveler: 'नए यात्री',
    hCustoms: 'कस्टम्स जाँच', pCustoms: 'आपके रास्ते के लिए मार्गदर्शन। यह कानूनी सलाह नहीं है, और इलेक्ट्रॉनिक्स का लेबल हमेशा जाँचें।', bCustoms: 'कम्प्लायंस एजेंट से नियम जाँचें',
    hNeg: 'इनाम तय करें', pNeg: 'मोलभाव एजेंट उचित इनाम और सौंपने की शर्तें सुझाता है। इस डेमो में कोई भुगतान नहीं होता।', bNeg: 'मोलभाव एजेंट से पूछें',
    hTrack: 'अपना डब्बा ट्रैक करें', bTrack: 'ट्रैकिंग एजेंट से स्थिति जानें', allReq: 'मेरे सभी अनुरोध',
    hTrav: 'मैं यात्रा कर रहा हूँ', pTrav: 'अपनी यात्रा जोड़ें। आपके रास्ते के परिवार आपको ढूँढ सकेंगे। सिर्फ़ आपका नाम, पहुँचने की तारीख और खाली जगह दिखेगी।', bTrip: 'मेरी यात्रा सेव करें', myTrips: 'मेरी यात्राएँ',
    current: 'मौजूदा अनुरोध', noReq: 'अभी कोई अनुरोध नहीं', noReqText: 'अभी कोई अनुरोध नहीं। होम चैट में शुरू करें।', status: 'स्थिति', traveler: 'यात्री', asking: 'एजेंट से पूछ रहे हैं…', progress: 'प्रगति',
    steps: ['अनुरोध सेव', 'यात्री मिले', 'यात्री चुना', 'सौंप दिया', 'पहुँच गया'], agentsLabel: { matching: 'मैचिंग एजेंट', compliance: 'कम्प्लायंस एजेंट', negotiation: 'मोलभाव एजेंट', tracking: 'ट्रैकिंग एजेंट', intake: 'इनटेक एजेंट' }
  },
  ta: {
    _name: 'தமிழ்', _locale: 'ta-IN',
    tagline: 'எல்லை தாண்டி வீட்டுப் பொருட்களைக் கொண்டு சேர்க்கும் உங்கள் முகவர்', signOut: 'வெளியேறு',
    tabHome: 'முகப்பு', tabCustoms: 'சுங்கம்', tabNegotiate: 'பேரம்', tabTracking: 'கண்காணிப்பு', tabTraveler: 'பயணி',
    greet1: n => 'வணக்கம்' + (n ? ' ' + n : '') + '! நான் சாத்திகோ, இந்தியாவுக்கும் வெளிநாட்டில் உள்ள உங்கள் குடும்பத்துக்கும் இடையே பொருட்களைக் கொண்டு சேர்க்கும் உங்கள் முகவர்.',
    greet2: 'நீங்கள் என்ன அனுப்ப அல்லது பெற விரும்புகிறீர்கள், எங்கே? உங்கள் சொந்த வார்த்தைகளில் சொல்லுங்கள்.',
    ex1: ['சென்னையிலிருந்து டல்லாஸுக்கு முறுக்கு', 'நவம்பர் 10க்குள் சென்னையிலிருந்து டல்லாஸில் உள்ள என் குடும்பத்துக்கு 2 kg முறுக்கு மற்றும் இனிப்பு அனுப்ப வேண்டும்'],
    ex2: ['டல்லாஸிலிருந்து சென்னைக்கு ஷூ', 'நான் டல்லாஸில் இருக்கிறேன், சென்னையில் உள்ள என் பெற்றோருக்கு ரன்னிங் ஷூ மற்றும் வைட்டமின் அனுப்ப வேண்டும்'],
    browse: 'டப்பாக்களைப் பார்க்க', reading: 'சாத்திகோ படிக்கிறது…', working: 'சாத்திகோ வேலை செய்கிறது…',
    phFree: 'எ.கா. நான் டல்லாஸில் இருக்கிறேன், 10 Nov க்குள் சென்னையிலிருந்து 2 kg ஊறுகாய் வேண்டும்', phCity: 'நகரத்தை எழுதுங்கள்', phDate: 'அல்லது தேதி, எ.கா. 15 Nov', phKg: 'அல்லது எடை, எ.கா. 3', phChange: 'அல்லது என்ன மாற்ற வேண்டும் என்று சொல்லுங்கள்', phAny: 'சாத்திகோவிடம் எதையும் கேளுங்கள், அல்லது "புதிய கோரிக்கை" என்று எழுதுங்கள்', phPick: 'மேலே ஒன்றைத் தேர்ந்தெடுங்கள்', phItem: 'எ.கா. 2 kg முறுக்கு மற்றும் ஒரு பட்டு ரவிக்கைத் துணி',
    gotIt: b => 'புரிந்தது: ' + b + '.', noted: 'நன்றி, குறித்துக்கொண்டேன்.', from: 'இருந்து', to: 'வரை', by: 'தேதி', about: 'சுமார்',
    askDir: 'இது இந்தியாவிலிருந்து வெளிநாட்டுக்குப் போகிறதா, அல்லது வெளிநாட்டிலிருந்து இந்தியாவுக்கு வருகிறதா?', dirOut: 'இந்தியா → வெளிநாடு · சுதேசி டப்பா', dirIn: 'வெளிநாடு → இந்தியா · விதேசி டப்பா',
    whatOut: 'அருமை. என்ன அனுப்பலாம்? ஒரு சுதேசி டப்பாவைத் தேர்ந்தெடுங்கள் அல்லது உங்கள் வார்த்தைகளில் சொல்லுங்கள்.', whatIn: 'சரி. வீட்டுக்கு என்ன கொண்டு வர வேண்டும்? ஒரு விதேசி டப்பாவைத் தேர்ந்தெடுங்கள் அல்லது பொருளைச் சொல்லுங்கள்.', seeInside: 'ஒவ்வொன்றிலும் என்ன உள்ளது',
    fromQ: d => d ? d + ' சென்றடைய எந்த நகரத்திலிருந்து எடுக்க வேண்டும்?' : 'எந்த நகரத்திலிருந்து புறப்படுகிறது?', toQ: 'எந்த நகரத்தைச் சென்றடைய வேண்டும்?', byQ: d => (d || 'அங்கு') + ' எப்போதுக்குள் சேர வேண்டும்?',
    w2: '2 வாரத்தில்', w3: '3 வாரத்தில்', m1: 'ஒரு மாதத்தில்', w6: '6 வாரத்தில்', kgQ: 'சுமார் எவ்வளவு எடை?', kgChips: ['2 kg க்குக் குறைவு', 'சுமார் 5 kg', 'சுமார் 8 kg', '10 kg அல்லது அதிகம்'],
    sumTitle: 'உங்கள் கோரிக்கை', lDabba: 'டப்பா', lItems: 'பொருட்கள்', lRoute: 'பாதை', lBy: 'தேவைப்படும் தேதி', lWeight: 'எடை', custom: 'தனிப்பட்ட கோரிக்கை',
    findT: 'பயணிகளைத் தேடு', startOver: 'மீண்டும் தொடங்கு', updated: 'மாற்றப்பட்டது.', changeHelp: 'பரவாயில்லை. என்ன மாற்ற வேண்டும் என்று சொல்லுங்கள், எ.கா. புதிய தேதி 15 Nov அல்லது எடை 3 kg.',
    dateErr: 'அந்தத் தேதி புரியவில்லை. 15 Nov போல எழுதுங்கள்.', kgErr: '0.5 முதல் 100 kg வரை எடை சொல்லுங்கள்.', pickOne: 'இரண்டில் ஒன்றைத் தேர்ந்தெடுங்கள்.', tellAgain: 'உங்களுக்கு என்ன வேண்டும் என்று மீண்டும் சொல்லுங்கள்.',
    saved: 'சேமிக்கப்பட்டது. பொருத்த முகவர் பயணிகளைத் தேடுகிறது, இணக்க முகவர் விதிகளைச் சரிபார்க்கிறது. சில வினாடிகள் ஆகலாம்.',
    found: n => 'உங்கள் பாதையில் ' + n + ' பயணிகள் கிடைத்தனர். ஒருவரைத் தேர்ந்தெடுக்கத் தட்டுங்கள்.',
    none: (o, d, dt) => dt + ' க்கு முன் ' + o + ' இலிருந்து ' + d + ' செல்லும் பயணி இப்போது இல்லை. உங்கள் கோரிக்கை சேமிக்கப்பட்டுள்ளது; இந்தப் பாதையின் புதிய பயணிகள் அதைப் பார்ப்பார்கள்.',
    choose: n => n + ' உடன் செல்லலாம்', great: f => 'நல்ல தேர்வு. அடுத்து இந்தப் பாதைக்கான சுங்க விதிகளைப் பாருங்கள், பிறகு ' + f + ' உடன் வெகுமதியை முடிவு செய்யுங்கள்.',
    checkCustoms: 'சுங்கம் சரிபார்', agree: 'வெகுமதி முடிவு', track: 'கண்காணி', newReq: 'புதிய கோரிக்கை', afterDone: 'மேலே ஒரு பயணியைத் தேர்ந்தெடுங்கள், அல்லது பொத்தான்கள் மூலம் சுங்கம் சரிபார்த்து வெகுமதி முடிவு செய்யுங்கள். புதியதற்கு "புதிய கோரிக்கை" என்று எழுதுங்கள்.',
    verified: 'சரிபார்க்கப்பட்டவர்', trips: n => n + ' பயணங்கள்', speaks: 'மொழிகள்', arrives: 'வருகை', spare: 'kg இடம்', selected: 'தேர்வு', earliest: 'முதலில்', member: 'சாத்திகோ உறுப்பினர்', newTraveler: 'புதிய பயணி',
    hCustoms: 'சுங்கச் சரிபார்ப்பு', pCustoms: 'உங்கள் பாதைக்கான வழிகாட்டல். இது சட்ட ஆலோசனை அல்ல; மின்னணுப் பொருட்களின் லேபிளை எப்போதும் சரிபாருங்கள்.', bCustoms: 'இணக்க முகவரிடம் விதிகளைச் சரிபார்',
    hNeg: 'வெகுமதி முடிவு', pNeg: 'பேர முகவர் நியாயமான வெகுமதியையும் ஒப்படைப்பு நிபந்தனைகளையும் பரிந்துரைக்கும். இந்த டெமோவில் பணம் செலுத்தப்படாது.', bNeg: 'பேர முகவரிடம் கேள்',
    hTrack: 'உங்கள் டப்பாவைக் கண்காணியுங்கள்', bTrack: 'கண்காணிப்பு முகவரிடம் நிலையைக் கேள்', allReq: 'என் எல்லாக் கோரிக்கைகளும்',
    hTrav: 'நான் பயணம் செய்கிறேன்', pTrav: 'உங்கள் பயணத்தைச் சேர்க்கவும். உங்கள் பாதையில் உள்ள குடும்பங்கள் உங்களைக் கண்டறியலாம். உங்கள் பெயர், வருகைத் தேதி, காலி இடம் மட்டுமே காட்டப்படும்.', bTrip: 'என் பயணத்தைச் சேமி', myTrips: 'என் பயணங்கள்',
    current: 'தற்போதைய கோரிக்கை', noReq: 'கோரிக்கை இல்லை', noReqText: 'இன்னும் கோரிக்கை இல்லை. முகப்பு உரையாடலில் தொடங்குங்கள்.', status: 'நிலை', traveler: 'பயணி', asking: 'முகவரிடம் கேட்கிறது…', progress: 'முன்னேற்றம்',
    steps: ['கோரிக்கை சேமிப்பு', 'பயணிகள் கிடைத்தனர்', 'பயணி தேர்வு', 'ஒப்படைக்கப்பட்டது', 'சேர்ந்தது'], agentsLabel: { matching: 'பொருத்த முகவர்', compliance: 'இணக்க முகவர்', negotiation: 'பேர முகவர்', tracking: 'கண்காணிப்பு முகவர்', intake: 'உள்வாங்கல் முகவர்' }
  },
  te: {
    _name: 'తెలుగు', _locale: 'te-IN',
    tagline: 'సరిహద్దులు దాటి ఇంటి వస్తువులు చేర్చే మీ ఏజెంట్', signOut: 'సైన్ అవుట్',
    tabHome: 'హోమ్', tabCustoms: 'కస్టమ్స్', tabNegotiate: 'బేరం', tabTracking: 'ట్రాకింగ్', tabTraveler: 'ప్రయాణికుడు',
    greet1: n => 'నమస్తే' + (n ? ' ' + n : '') + '! నేను సాథీగో, భారత్ మరియు విదేశాల్లో ఉన్న మీ కుటుంబం మధ్య వస్తువులు చేర్చే మీ ఏజెంట్.',
    greet2: 'మీరు ఏమి పంపాలనుకుంటున్నారు లేదా తెప్పించాలనుకుంటున్నారు, ఎక్కడికి? మీ మాటల్లో చెప్పండి.',
    ex1: ['చెన్నై నుండి డల్లాస్‌కు మురుకులు', 'నవంబర్ 10 లోపు చెన్నై నుండి డల్లాస్‌లో ఉన్న నా కుటుంబానికి 2 kg మురుకులు, స్వీట్లు పంపాలి'],
    ex2: ['డల్లాస్ నుండి హైదరాబాద్‌కు షూస్', 'నేను డల్లాస్‌లో ఉన్నాను, హైదరాబాద్‌లో ఉన్న మా అమ్మానాన్నలకు రన్నింగ్ షూస్, విటమిన్లు పంపాలి'],
    browse: 'డబ్బాలు చూడండి', reading: 'సాథీగో చదువుతోంది…', working: 'సాథీగో పని చేస్తోంది…',
    phFree: 'ఉదా. నేను డల్లాస్‌లో ఉన్నాను, 10 Nov లోపు హైదరాబాద్ నుండి 2 kg పచ్చళ్ళు కావాలి', phCity: 'నగరం రాయండి', phDate: 'లేదా తేదీ, ఉదా. 15 Nov', phKg: 'లేదా బరువు, ఉదా. 3', phChange: 'లేదా ఏమి మార్చాలో చెప్పండి', phAny: 'సాథీగోను ఏదైనా అడగండి, లేదా "కొత్త అభ్యర్థన" అని రాయండి', phPick: 'పైన ఒకటి ఎంచుకోండి', phItem: 'ఉదా. 2 kg మురుకులు, ఒక పట్టు రవిక ముక్క',
    gotIt: b => 'అర్థమైంది: ' + b + '.', noted: 'ధన్యవాదాలు, నోట్ చేసుకున్నాను.', from: 'నుండి', to: 'వరకు', by: 'తేదీ', about: 'సుమారు',
    askDir: 'ఇది భారత్ నుండి విదేశాలకు వెళ్తోందా, లేదా విదేశాల నుండి భారత్‌కు వస్తోందా?', dirOut: 'భారత్ → విదేశం · స్వదేశీ డబ్బా', dirIn: 'విదేశం → భారత్ · విదేశీ డబ్బా',
    whatOut: 'బాగుంది. ఏమి పంపాలి? ఒక స్వదేశీ డబ్బా ఎంచుకోండి లేదా మీ మాటల్లో చెప్పండి.', whatIn: 'సరే. ఇంటికి ఏమి తెప్పించాలి? ఒక విదేశీ డబ్బా ఎంచుకోండి లేదా వస్తువు చెప్పండి.', seeInside: 'ప్రతి దానిలో ఏముందో చూడండి',
    fromQ: d => d ? d + ' చేరడానికి ఏ నగరం నుండి తీసుకోవాలి?' : 'ఏ నగరం నుండి బయలుదేరుతుంది?', toQ: 'ఏ నగరానికి చేరాలి?', byQ: d => (d || 'అక్కడికి') + ' ఎప్పటిలోగా చేరాలి?',
    w2: '2 వారాల్లో', w3: '3 వారాల్లో', m1: 'ఒక నెలలో', w6: '6 వారాల్లో', kgQ: 'సుమారు ఎంత బరువు?', kgChips: ['2 kg కంటే తక్కువ', 'సుమారు 5 kg', 'సుమారు 8 kg', '10 kg లేదా ఎక్కువ'],
    sumTitle: 'మీ అభ్యర్థన', lDabba: 'డబ్బా', lItems: 'వస్తువులు', lRoute: 'మార్గం', lBy: 'కావలసిన తేదీ', lWeight: 'బరువు', custom: 'ప్రత్యేక అభ్యర్థన',
    findT: 'ప్రయాణికులను వెతకండి', startOver: 'మళ్ళీ మొదలుపెట్టు', updated: 'మార్చాను.', changeHelp: 'పర్వాలేదు. ఏమి మార్చాలో చెప్పండి, ఉదా. కొత్త తేదీ 15 Nov లేదా బరువు 3 kg.',
    dateErr: 'ఆ తేదీ అర్థం కాలేదు. 15 Nov లా రాయండి.', kgErr: '0.5 నుండి 100 kg మధ్య బరువు చెప్పండి.', pickOne: 'రెండింటిలో ఒకటి ఎంచుకోండి.', tellAgain: 'మీకు ఏమి కావాలో మళ్ళీ మీ మాటల్లో చెప్పండి.',
    saved: 'సేవ్ అయింది. మ్యాచింగ్ ఏజెంట్ ప్రయాణికులను వెతుకుతోంది, కంప్లయన్స్ ఏజెంట్ నియమాలు చూస్తోంది. కొన్ని సెకన్లు పట్టవచ్చు.',
    found: n => 'మీ మార్గంలో ' + n + ' ప్రయాణికులు దొరికారు. ఎంచుకోవడానికి ఒకరిని తాకండి.',
    none: (o, d, dt) => dt + ' లోపు ' + o + ' నుండి ' + d + ' వెళ్ళే ప్రయాణికులు ఇప్పుడు లేరు. మీ అభ్యర్థన సేవ్ అయింది; ఈ మార్గంలో కొత్త ప్రయాణికులు దాన్ని చూస్తారు.',
    choose: n => n + ' తో వెళ్దాం', great: f => 'మంచి ఎంపిక. తర్వాత ఈ మార్గం కస్టమ్స్ నియమాలు చూడండి, ఆ తర్వాత ' + f + ' తో బహుమతి ఖరారు చేయండి.',
    checkCustoms: 'కస్టమ్స్ చూడండి', agree: 'బహుమతి ఖరారు', track: 'ట్రాక్', newReq: 'కొత్త అభ్యర్థన', afterDone: 'పైన ఒక ప్రయాణికుడిని ఎంచుకోండి, లేదా బటన్లతో కస్టమ్స్ చూసి బహుమతి ఖరారు చేయండి. కొత్తది కోసం "కొత్త అభ్యర్థన" అని రాయండి.',
    verified: 'ధృవీకరించబడింది', trips: n => n + ' ప్రయాణాలు', speaks: 'భాషలు', arrives: 'చేరిక', spare: 'kg ఖాళీ', selected: 'ఎంచుకున్నారు', earliest: 'ముందుగా', member: 'సాథీగో సభ్యుడు', newTraveler: 'కొత్త ప్రయాణికుడు',
    hCustoms: 'కస్టమ్స్ తనిఖీ', pCustoms: 'మీ మార్గానికి మార్గదర్శనం. ఇది న్యాయ సలహా కాదు; ఎలక్ట్రానిక్స్ లేబుల్ ఎప్పుడూ చూడండి.', bCustoms: 'కంప్లయన్స్ ఏజెంట్‌తో నియమాలు చూడండి',
    hNeg: 'బహుమతి ఖరారు', pNeg: 'బేరం ఏజెంట్ న్యాయమైన బహుమతి, అప్పగింత నిబంధనలు సూచిస్తుంది. ఈ డెమోలో చెల్లింపు జరగదు.', bNeg: 'బేరం ఏజెంట్‌ను అడగండి',
    hTrack: 'మీ డబ్బాను ట్రాక్ చేయండి', bTrack: 'ట్రాకింగ్ ఏజెంట్ నుండి స్థితి తెలుసుకోండి', allReq: 'నా అన్ని అభ్యర్థనలు',
    hTrav: 'నేను ప్రయాణిస్తున్నాను', pTrav: 'మీ ప్రయాణం జోడించండి. మీ మార్గంలోని కుటుంబాలు మిమ్మల్ని కనుగొనగలవు. మీ పేరు, చేరే తేదీ, ఖాళీ స్థలం మాత్రమే కనిపిస్తాయి.', bTrip: 'నా ప్రయాణం సేవ్ చేయండి', myTrips: 'నా ప్రయాణాలు',
    current: 'ప్రస్తుత అభ్యర్థన', noReq: 'అభ్యర్థన లేదు', noReqText: 'ఇంకా అభ్యర్థన లేదు. హోమ్ చాట్‌లో మొదలుపెట్టండి.', status: 'స్థితి', traveler: 'ప్రయాణికుడు', asking: 'ఏజెంట్‌ను అడుగుతోంది…', progress: 'పురోగతి',
    steps: ['అభ్యర్థన సేవ్', 'ప్రయాణికులు దొరికారు', 'ప్రయాణికుడు ఎంపిక', 'అప్పగించారు', 'చేరింది'], agentsLabel: { matching: 'మ్యాచింగ్ ఏజెంట్', compliance: 'కంప్లయన్స్ ఏజెంట్', negotiation: 'బేరం ఏజెంట్', tracking: 'ట్రాకింగ్ ఏజెంట్', intake: 'ఇన్‌టేక్ ఏజెంట్' }
  }
};
// City names in Indian scripts, mapped to the same cities the chat understands.
window.NATIVE_CITIES = {
  'चेन्नई': 'Chennai, India', 'मुंबई': 'Mumbai, India', 'दिल्ली': 'Delhi, India', 'बेंगलुरु': 'Bengaluru, India', 'हैदराबाद': 'Hyderabad, India', 'कोलकाता': 'Kolkata, India', 'पुणे': 'Pune, India',
  'डलास': 'Dallas, US', 'लंदन': 'London, UK', 'दुबई': 'Dubai, UAE', 'न्यूयॉर्क': 'New York, US', 'सिंगापुर': 'Singapore, Singapore', 'टोरंटो': 'Toronto, Canada', 'सैन फ्रांसिस्को': 'San Francisco, US',
  'சென்னை': 'Chennai, India', 'மும்பை': 'Mumbai, India', 'டெல்லி': 'Delhi, India', 'பெங்களூரு': 'Bengaluru, India', 'ஹைதராபாத்': 'Hyderabad, India', 'கொச்சி': 'Kochi, India',
  'டல்லாஸ்': 'Dallas, US', 'லண்டன்': 'London, UK', 'துபாய்': 'Dubai, UAE', 'நியூயார்க்': 'New York, US', 'சிங்கப்பூர்': 'Singapore, Singapore', 'டொராண்டோ': 'Toronto, Canada',
  'చెన్నై': 'Chennai, India', 'ముంబై': 'Mumbai, India', 'ఢిల్లీ': 'Delhi, India', 'బెంగళూరు': 'Bengaluru, India', 'హైదరాబాద్': 'Hyderabad, India',
  'డల్లాస్': 'Dallas, US', 'లండన్': 'London, UK', 'దుబాయ్': 'Dubai, UAE', 'న్యూయార్క్': 'New York, US', 'సింగపూర్': 'Singapore, Singapore', 'సియాటిల్': 'Seattle, US'
};

// Agent pipeline, menu and feedback text (added with the single-chat layout).
(function () {
  const X = {
    en: {
      agentShort: { concierge: 'Concierge', intake: 'Intake', curator: 'Curator', compliance: 'Customs', matching: 'Matching', negotiation: 'Reward', tracking: 'Tracking' },
      agentsFull: { concierge: 'Concierge agent', intake: 'Intake agent', curator: 'Dabba Curator agent', compliance: 'Compliance agent', matching: 'Matching agent', negotiation: 'Negotiation agent', tracking: 'Tracking agent' },
      menu: 'Menu', back: 'Back', myRequests: 'My requests', imTravelling: 'I am travelling', swadeshi: 'Swadeshi Dabba', videshi: 'Videshi Dabba',
      saved2: 'Saved. Your agents are on it.', suggested: 'Suggested dabba', packList: 'Pack list',
      verdict: { ok: 'Looks fine', declare: 'Declare at customs', restricted: 'Some items restricted', check: 'Check before packing', allowed: 'Allowed' },
      rulesFrom: 'From the SaathiGo rules table. Guidance only, not legal advice.', avoid: 'Avoid', bestMatches: 'Best matches for you', matchWord: 'match',
      reward: 'Suggested reward', fair: r => 'Fair range ' + r, accept: 'Accept', lower: 'Ask for less', accepted: (r, n) => 'Done. ' + r + ' agreed with ' + n + '. Saved to your request.',
      lowered: 'Okay, I will offer the lower end of the fair range.', handedOver: 'Mark handed over', delivered: 'Mark delivered', helpful: 'Helpful?', thanks: 'Thanks, noted.',
      noAgent: 'AgenticOrg did not answer, so this uses SaathiGo data only.', adjusted: 'Adjusted to the fair range.', dropped: n => n + ' name(s) not in the database were removed.',
      statusHanded: 'Marked as handed over.', statusDelivered: 'Delivered. Thank you for using SaathiGo!', pickTraveler: 'Tap a traveler to choose. The Negotiation agent will then suggest a reward.'
    },
    hi: {
      agentShort: { concierge: 'स्वागत', intake: 'इनटेक', curator: 'क्यूरेटर', compliance: 'कस्टम्स', matching: 'मैचिंग', negotiation: 'इनाम', tracking: 'ट्रैकिंग' },
      agentsFull: { concierge: 'कंसीयर्ज एजेंट', intake: 'इनटेक एजेंट', curator: 'डब्बा क्यूरेटर एजेंट', compliance: 'कम्प्लायंस एजेंट', matching: 'मैचिंग एजेंट', negotiation: 'मोलभाव एजेंट', tracking: 'ट्रैकिंग एजेंट' },
      menu: 'मेनू', back: 'वापस', myRequests: 'मेरे अनुरोध', imTravelling: 'मैं यात्रा कर रहा हूँ', swadeshi: 'स्वदेशी डब्बा', videshi: 'विदेशी डब्बा',
      saved2: 'सेव हो गया। आपके एजेंट काम पर हैं।', suggested: 'सुझाया गया डब्बा', packList: 'पैकिंग सूची',
      verdict: { ok: 'ठीक है', declare: 'कस्टम्स पर घोषित करें', restricted: 'कुछ चीज़ें प्रतिबंधित', check: 'पैक करने से पहले जाँचें', allowed: 'अनुमति है' },
      rulesFrom: 'साथीगो नियम तालिका से। केवल मार्गदर्शन, कानूनी सलाह नहीं।', avoid: 'न भेजें', bestMatches: 'आपके लिए सबसे अच्छे यात्री', matchWord: 'मैच',
      reward: 'सुझाया गया इनाम', fair: r => 'उचित सीमा ' + r, accept: 'स्वीकार करें', lower: 'कम करवाएँ', accepted: (r, n) => 'हो गया। ' + n + ' के साथ ' + r + ' तय हुआ। अनुरोध में सेव कर दिया।',
      lowered: 'ठीक है, मैं उचित सीमा का निचला इनाम पेश करूँगा।', handedOver: 'सौंप दिया', delivered: 'पहुँच गया', helpful: 'मददगार?', thanks: 'धन्यवाद, नोट कर लिया।',
      noAgent: 'AgenticOrg ने जवाब नहीं दिया, इसलिए यह केवल साथीगो डेटा पर आधारित है।', adjusted: 'उचित सीमा में बदला गया।', dropped: n => 'डेटाबेस में न होने वाले ' + n + ' नाम हटाए गए।',
      statusHanded: 'सौंपा गया के रूप में दर्ज।', statusDelivered: 'पहुँच गया। साथीगो इस्तेमाल करने के लिए धन्यवाद!', pickTraveler: 'किसी यात्री पर टैप करें। फिर मोलभाव एजेंट इनाम सुझाएगा।'
    },
    ta: {
      agentShort: { concierge: 'வரவேற்பு', intake: 'உள்வாங்கல்', curator: 'தொகுப்பு', compliance: 'சுங்கம்', matching: 'பொருத்தம்', negotiation: 'வெகுமதி', tracking: 'கண்காணிப்பு' },
      agentsFull: { concierge: 'வரவேற்பு முகவர்', intake: 'உள்வாங்கல் முகவர்', curator: 'டப்பா தொகுப்பு முகவர்', compliance: 'இணக்க முகவர்', matching: 'பொருத்த முகவர்', negotiation: 'பேர முகவர்', tracking: 'கண்காணிப்பு முகவர்' },
      menu: 'பட்டியல்', back: 'பின்', myRequests: 'என் கோரிக்கைகள்', imTravelling: 'நான் பயணம் செய்கிறேன்', swadeshi: 'சுதேசி டப்பா', videshi: 'விதேசி டப்பா',
      saved2: 'சேமிக்கப்பட்டது. உங்கள் முகவர்கள் வேலை செய்கின்றனர்.', suggested: 'பரிந்துரைக்கப்பட்ட டப்பா', packList: 'பேக்கிங் பட்டியல்',
      verdict: { ok: 'சரியாக உள்ளது', declare: 'சுங்கத்தில் அறிவிக்கவும்', restricted: 'சில பொருட்கள் தடை', check: 'பேக் செய்யும் முன் சரிபாருங்கள்', allowed: 'அனுமதி உண்டு' },
      rulesFrom: 'சாத்திகோ விதி அட்டவணையிலிருந்து. வழிகாட்டல் மட்டும், சட்ட ஆலோசனை அல்ல.', avoid: 'தவிர்க்கவும்', bestMatches: 'உங்களுக்கான சிறந்த பயணிகள்', matchWord: 'பொருத்தம்',
      reward: 'பரிந்துரைக்கப்பட்ட வெகுமதி', fair: r => 'நியாய வரம்பு ' + r, accept: 'ஏற்கிறேன்', lower: 'குறைக்கக் கேள்', accepted: (r, n) => 'முடிந்தது. ' + n + ' உடன் ' + r + ' ஒப்புக்கொள்ளப்பட்டது. கோரிக்கையில் சேமித்தேன்.',
      lowered: 'சரி, நியாய வரம்பின் குறைந்த தொகையை வழங்குகிறேன்.', handedOver: 'ஒப்படைக்கப்பட்டது', delivered: 'சேர்ந்தது', helpful: 'உதவியாக இருந்ததா?', thanks: 'நன்றி, குறித்துக்கொண்டேன்.',
      noAgent: 'AgenticOrg பதில் அளிக்கவில்லை; இது சாத்திகோ தரவை மட்டும் பயன்படுத்துகிறது.', adjusted: 'நியாய வரம்புக்கு மாற்றப்பட்டது.', dropped: n => 'தரவுத்தளத்தில் இல்லாத ' + n + ' பெயர்கள் நீக்கப்பட்டன.',
      statusHanded: 'ஒப்படைக்கப்பட்டதாகக் குறிக்கப்பட்டது.', statusDelivered: 'சேர்ந்தது. சாத்திகோவைப் பயன்படுத்தியதற்கு நன்றி!', pickTraveler: 'ஒரு பயணியைத் தட்டுங்கள். பின்னர் பேர முகவர் வெகுமதியைப் பரிந்துரைக்கும்.'
    },
    te: {
      agentShort: { concierge: 'స్వాగతం', intake: 'ఇన్‌టేక్', curator: 'క్యూరేటర్', compliance: 'కస్టమ్స్', matching: 'మ్యాచింగ్', negotiation: 'బహుమతి', tracking: 'ట్రాకింగ్' },
      agentsFull: { concierge: 'కన్సియర్జ్ ఏజెంట్', intake: 'ఇన్‌టేక్ ఏజెంట్', curator: 'డబ్బా క్యూరేటర్ ఏజెంట్', compliance: 'కంప్లయన్స్ ఏజెంట్', matching: 'మ్యాచింగ్ ఏజెంట్', negotiation: 'బేరం ఏజెంట్', tracking: 'ట్రాకింగ్ ఏజెంట్' },
      menu: 'మెనూ', back: 'వెనక్కి', myRequests: 'నా అభ్యర్థనలు', imTravelling: 'నేను ప్రయాణిస్తున్నాను', swadeshi: 'స్వదేశీ డబ్బా', videshi: 'విదేశీ డబ్బా',
      saved2: 'సేవ్ అయింది. మీ ఏజెంట్లు పని చేస్తున్నారు.', suggested: 'సూచించిన డబ్బా', packList: 'ప్యాకింగ్ జాబితా',
      verdict: { ok: 'బాగుంది', declare: 'కస్టమ్స్ వద్ద ప్రకటించండి', restricted: 'కొన్ని వస్తువులు నిషిద్ధం', check: 'ప్యాక్ చేసే ముందు చూడండి', allowed: 'అనుమతి ఉంది' },
      rulesFrom: 'సాథీగో నియమాల పట్టిక నుండి. మార్గదర్శనం మాత్రమే, న్యాయ సలహా కాదు.', avoid: 'పంపవద్దు', bestMatches: 'మీకు ఉత్తమ ప్రయాణికులు', matchWord: 'మ్యాచ్',
      reward: 'సూచించిన బహుమతి', fair: r => 'న్యాయమైన పరిధి ' + r, accept: 'అంగీకరించు', lower: 'తగ్గించమని అడుగు', accepted: (r, n) => 'అయింది. ' + n + ' తో ' + r + ' ఖరారు. అభ్యర్థనలో సేవ్ చేశాను.',
      lowered: 'సరే, న్యాయమైన పరిధిలో తక్కువ మొత్తం ఆఫర్ చేస్తాను.', handedOver: 'అప్పగించారు', delivered: 'చేరింది', helpful: 'ఉపయోగపడిందా?', thanks: 'ధన్యవాదాలు, నోట్ చేశాను.',
      noAgent: 'AgenticOrg స్పందించలేదు; ఇది సాథీగో డేటా మాత్రమే వాడుతోంది.', adjusted: 'న్యాయమైన పరిధికి మార్చాను.', dropped: n => 'డేటాబేస్‌లో లేని ' + n + ' పేర్లు తొలగించాను.',
      statusHanded: 'అప్పగించినట్లు నమోదు చేశాను.', statusDelivered: 'చేరింది. సాథీగో వాడినందుకు ధన్యవాదాలు!', pickTraveler: 'ఒక ప్రయాణికుడిని తాకండి. తర్వాత బేరం ఏజెంట్ బహుమతి సూచిస్తుంది.'
    }
  };
  Object.keys(X).forEach(k => Object.assign(window.I18N[k], X[k]));
})();

// Traveler onboarding, pickups and delivery codes.
(function () {
  const X = {
    en: { onbTitle: 'Become a SaathiGo traveler', onbText: 'Carry dabbas on trips you already take and earn a small reward. Families only see your first name, trip date and spare space.',
      langsLabel: 'Languages you speak', rule1: 'I only carry sealed items that I have checked myself.', rule2: 'I can refuse any item, and I follow customs rules and declare food.', rule3: 'I share pickup and delivery photos and use the delivery code.',
      startCarrying: 'Start carrying', onbDone: 'Welcome aboard! Add a trip to see requests on your route.', myPickups: 'My pickups', noPickups: 'No pickups yet. Accept a request below.',
      openReq: 'Requests on your routes', noOpen: 'No open requests on your routes yet. Add a trip, or check back soon.', addTrip: 'Add a trip', acceptJob: 'Accept pickup',
      acceptedJob: 'Accepted. The family can now see you as their traveler.', pickedUp: 'Picked up from family', deliveredBtn: 'Mark delivered', codeLabel: 'Delivery code from receiver',
      codeShare: c => 'Delivery code ' + c + '. Share it only with the person receiving the dabba.', carrier: 'Traveler', family: 'Family', imTraveler: 'I am a traveler', fitsTrip: d => 'Fits your trip arriving ' + d },
    hi: { onbTitle: 'साथीगो यात्री बनें', onbText: 'अपनी यात्रा में डब्बे ले जाएँ और छोटा इनाम पाएँ। परिवार सिर्फ़ आपका पहला नाम, यात्रा की तारीख और खाली जगह देखते हैं।',
      langsLabel: 'आप कौन-सी भाषाएँ बोलते हैं', rule1: 'मैं सिर्फ़ सील किया हुआ सामान ले जाऊँगा जिसे मैंने खुद जाँचा है।', rule2: 'मैं कोई भी सामान मना कर सकता हूँ, कस्टम्स नियम मानूँगा और खाने की चीज़ें घोषित करूँगा।', rule3: 'मैं पिकअप और डिलीवरी की फ़ोटो साझा करूँगा और डिलीवरी कोड इस्तेमाल करूँगा।',
      startCarrying: 'शुरू करें', onbDone: 'स्वागत है! अपने रास्ते के अनुरोध देखने के लिए यात्रा जोड़ें।', myPickups: 'मेरे पिकअप', noPickups: 'अभी कोई पिकअप नहीं। नीचे कोई अनुरोध स्वीकार करें।',
      openReq: 'आपके रास्तों पर अनुरोध', noOpen: 'आपके रास्तों पर अभी कोई अनुरोध नहीं। यात्रा जोड़ें या बाद में देखें।', addTrip: 'यात्रा जोड़ें', acceptJob: 'पिकअप स्वीकार करें',
      acceptedJob: 'स्वीकार हो गया। परिवार अब आपको अपने यात्री के रूप में देख सकता है।', pickedUp: 'परिवार से ले लिया', deliveredBtn: 'पहुँचा दिया', codeLabel: 'प्राप्तकर्ता से डिलीवरी कोड',
      codeShare: c => 'डिलीवरी कोड ' + c + '। इसे सिर्फ़ डब्बा लेने वाले व्यक्ति के साथ साझा करें।', carrier: 'यात्री', family: 'परिवार', imTraveler: 'मैं यात्री हूँ', fitsTrip: d => d + ' को पहुँचने वाली आपकी यात्रा में फ़िट' },
    ta: { onbTitle: 'சாத்திகோ பயணியாகுங்கள்', onbText: 'நீங்கள் ஏற்கனவே செல்லும் பயணங்களில் டப்பாக்களைக் கொண்டு சென்று சிறிய வெகுமதி பெறுங்கள். குடும்பங்கள் உங்கள் முதல் பெயர், பயணத் தேதி, காலி இடம் மட்டுமே பார்ப்பார்கள்.',
      langsLabel: 'நீங்கள் பேசும் மொழிகள்', rule1: 'நானே சரிபார்த்த சீல் செய்யப்பட்ட பொருட்களை மட்டுமே கொண்டு செல்வேன்.', rule2: 'எந்தப் பொருளையும் மறுக்கலாம்; சுங்க விதிகளைப் பின்பற்றி உணவை அறிவிப்பேன்.', rule3: 'பிக்கப், டெலிவரி புகைப்படங்களைப் பகிர்ந்து டெலிவரி குறியீட்டைப் பயன்படுத்துவேன்.',
      startCarrying: 'தொடங்கு', onbDone: 'வரவேற்கிறோம்! உங்கள் பாதையின் கோரிக்கைகளைப் பார்க்க ஒரு பயணத்தைச் சேர்க்கவும்.', myPickups: 'என் பிக்கப்கள்', noPickups: 'இன்னும் பிக்கப் இல்லை. கீழே ஒரு கோரிக்கையை ஏற்கவும்.',
      openReq: 'உங்கள் பாதைகளில் கோரிக்கைகள்', noOpen: 'உங்கள் பாதைகளில் இப்போது கோரிக்கை இல்லை. பயணத்தைச் சேர்க்கவும் அல்லது பின்னர் பாருங்கள்.', addTrip: 'பயணம் சேர்', acceptJob: 'பிக்கப்பை ஏற்கவும்',
      acceptedJob: 'ஏற்கப்பட்டது. குடும்பம் இப்போது உங்களைத் தங்கள் பயணியாகப் பார்க்கலாம்.', pickedUp: 'குடும்பத்திடமிருந்து பெற்றேன்', deliveredBtn: 'சேர்த்தேன்', codeLabel: 'பெறுநரிடமிருந்து டெலிவரி குறியீடு',
      codeShare: c => 'டெலிவரி குறியீடு ' + c + '. டப்பாவைப் பெறுபவருடன் மட்டும் பகிருங்கள்.', carrier: 'பயணி', family: 'குடும்பம்', imTraveler: 'நான் பயணி', fitsTrip: d => d + ' அன்று வரும் உங்கள் பயணத்துக்குப் பொருந்தும்' },
    te: { onbTitle: 'సాథీగో ప్రయాణికుడిగా చేరండి', onbText: 'మీరు ఎలాగూ చేసే ప్రయాణాల్లో డబ్బాలు తీసుకెళ్ళి చిన్న బహుమతి పొందండి. కుటుంబాలు మీ మొదటి పేరు, ప్రయాణ తేదీ, ఖాళీ స్థలం మాత్రమే చూస్తాయి.',
      langsLabel: 'మీరు మాట్లాడే భాషలు', rule1: 'నేనే తనిఖీ చేసిన సీల్ చేసిన వస్తువులను మాత్రమే తీసుకెళ్తాను.', rule2: 'ఏ వస్తువునైనా నిరాకరించగలను; కస్టమ్స్ నియమాలు పాటించి ఆహారం ప్రకటిస్తాను.', rule3: 'పికప్, డెలివరీ ఫోటోలు పంచుకుని డెలివరీ కోడ్ వాడతాను.',
      startCarrying: 'మొదలుపెట్టు', onbDone: 'స్వాగతం! మీ మార్గంలోని అభ్యర్థనలు చూడటానికి ఒక ప్రయాణం జోడించండి.', myPickups: 'నా పికప్‌లు', noPickups: 'ఇంకా పికప్‌లు లేవు. కింద ఒక అభ్యర్థన అంగీకరించండి.',
      openReq: 'మీ మార్గాల్లో అభ్యర్థనలు', noOpen: 'మీ మార్గాల్లో ఇప్పుడు అభ్యర్థనలు లేవు. ప్రయాణం జోడించండి లేదా తర్వాత చూడండి.', addTrip: 'ప్రయాణం జోడించు', acceptJob: 'పికప్ అంగీకరించు',
      acceptedJob: 'అంగీకరించారు. కుటుంబం ఇప్పుడు మిమ్మల్ని తమ ప్రయాణికుడిగా చూడగలదు.', pickedUp: 'కుటుంబం నుండి తీసుకున్నాను', deliveredBtn: 'అందజేశాను', codeLabel: 'స్వీకర్త నుండి డెలివరీ కోడ్',
      codeShare: c => 'డెలివరీ కోడ్ ' + c + '. డబ్బా తీసుకునే వ్యక్తితో మాత్రమే పంచుకోండి.', carrier: 'ప్రయాణికుడు', family: 'కుటుంబం', imTraveler: 'నేను ప్రయాణికుడిని', fitsTrip: d => d + ' న చేరే మీ ప్రయాణానికి సరిపోతుంది' }
  };
  Object.keys(X).forEach(k => Object.assign(window.I18N[k], X[k]));
})();

// Brand: Swadeshi Dabba and Videshi Dabba.
(function () {
  const X = {
    en: { tagline: 'Swadeshi Dabba · Videshi Dabba', swTag: 'India → Abroad', viTag: 'Abroad → India', swLine: 'Homemade food, sweets, pickles and festival boxes for family overseas.', viLine: 'Electronics, vitamins, shoes and gifts brought home to India.', explore: 'Explore' },
    hi: { tagline: 'स्वदेशी डब्बा · विदेशी डब्बा', swTag: 'भारत → विदेश', viTag: 'विदेश → भारत', swLine: 'विदेश में परिवार के लिए घर का खाना, मिठाई, अचार और त्योहार के डब्बे।', viLine: 'इलेक्ट्रॉनिक्स, विटामिन, जूते और उपहार भारत में घर तक।', explore: 'देखें' },
    ta: { tagline: 'சுதேசி டப்பா · விதேசி டப்பா', swTag: 'இந்தியா → வெளிநாடு', viTag: 'வெளிநாடு → இந்தியா', swLine: 'வெளிநாட்டில் உள்ள குடும்பத்துக்கு வீட்டுச் சமையல், இனிப்பு, ஊறுகாய், பண்டிகை டப்பாக்கள்.', viLine: 'மின்னணுப் பொருட்கள், வைட்டமின், ஷூ, பரிசுகள் இந்தியாவில் வீட்டுக்கே.', explore: 'பார்க்க' },
    te: { tagline: 'స్వదేశీ డబ్బా · విదేశీ డబ్బా', swTag: 'భారత్ → విదేశం', viTag: 'విదేశం → భారత్', swLine: 'విదేశాల్లోని కుటుంబానికి ఇంటి వంటలు, స్వీట్లు, పచ్చళ్ళు, పండుగ డబ్బాలు.', viLine: 'ఎలక్ట్రానిక్స్, విటమిన్లు, షూస్, బహుమతులు భారత్‌లో ఇంటికే.', explore: 'చూడండి' }
  };
  Object.keys(X).forEach(k => Object.assign(window.I18N[k], X[k]));
})();

// UPI payment (GPay, PhonePe, Paytm, any UPI app).
(function () {
  const X = {
    en: { payTitle: 'Pay the reward', payBtn: a => 'Pay ' + a + ' with GPay / UPI', payScan: 'On a laptop? Scan this with any UPI app.', payRef: 'UPI reference (UTR), 12 digits', paidBtn: 'I have paid',
      paidMsg: 'Thank you! Payment noted. SaathiGo will confirm it and release the reward to your traveler after delivery.', payNote: 'Payment goes to SaathiGo and is held until the dabba is delivered.', payUsd: 'UPI accepts rupees only. For dollar rewards, pay the traveler directly at handover.', payRefErr: 'Enter the 12-digit UPI reference from your payment app.', paySet: 'Payments are not set up yet.', payStatus: 'Payment' },
    hi: { payTitle: 'इनाम का भुगतान करें', payBtn: a => 'GPay / UPI से ' + a + ' भुगतान करें', payScan: 'लैपटॉप पर हैं? किसी भी UPI ऐप से यह स्कैन करें।', payRef: 'UPI रेफ़रेंस (UTR), 12 अंक', paidBtn: 'मैंने भुगतान कर दिया',
      paidMsg: 'धन्यवाद! भुगतान दर्ज हो गया। साथीगो इसकी पुष्टि करेगा और डिलीवरी के बाद यात्री को इनाम देगा।', payNote: 'भुगतान साथीगो को जाता है और डब्बा पहुँचने तक रखा जाता है।', payUsd: 'UPI सिर्फ़ रुपये लेता है। डॉलर इनाम के लिए सौंपते समय यात्री को सीधे भुगतान करें।', payRefErr: 'अपने भुगतान ऐप से 12 अंकों का UPI रेफ़रेंस डालें।', paySet: 'भुगतान अभी सेट नहीं है।', payStatus: 'भुगतान' },
    ta: { payTitle: 'வெகுமதியைச் செலுத்துங்கள்', payBtn: a => 'GPay / UPI மூலம் ' + a + ' செலுத்து', payScan: 'லேப்டாப்பில் இருக்கிறீர்களா? எந்த UPI செயலியிலும் இதை ஸ்கேன் செய்யுங்கள்.', payRef: 'UPI குறிப்பு எண் (UTR), 12 இலக்கம்', paidBtn: 'செலுத்திவிட்டேன்',
      paidMsg: 'நன்றி! கட்டணம் பதிவானது. சாத்திகோ அதை உறுதிசெய்து டெலிவரிக்குப் பின் பயணிக்கு வெகுமதியை வழங்கும்.', payNote: 'கட்டணம் சாத்திகோவுக்குச் சென்று டப்பா சேரும் வரை வைக்கப்படும்.', payUsd: 'UPI ரூபாய் மட்டுமே ஏற்கும். டாலர் வெகுமதிக்கு ஒப்படைக்கும்போது பயணிக்கு நேரடியாகச் செலுத்துங்கள்.', payRefErr: 'உங்கள் கட்டணச் செயலியிலிருந்து 12 இலக்க UPI குறிப்பு எண்ணை உள்ளிடுங்கள்.', paySet: 'கட்டணம் இன்னும் அமைக்கப்படவில்லை.', payStatus: 'கட்டணம்' },
    te: { payTitle: 'బహుమతి చెల్లించండి', payBtn: a => 'GPay / UPI తో ' + a + ' చెల్లించండి', payScan: 'ల్యాప్‌టాప్‌లో ఉన్నారా? ఏ UPI యాప్‌తోనైనా దీన్ని స్కాన్ చేయండి.', payRef: 'UPI రిఫరెన్స్ (UTR), 12 అంకెలు', paidBtn: 'నేను చెల్లించాను',
      paidMsg: 'ధన్యవాదాలు! చెల్లింపు నమోదైంది. సాథీగో దాన్ని నిర్ధారించి, డెలివరీ తర్వాత ప్రయాణికుడికి బహుమతి ఇస్తుంది.', payNote: 'చెల్లింపు సాథీగోకు వెళ్ళి, డబ్బా చేరే వరకు ఉంచబడుతుంది.', payUsd: 'UPI రూపాయలు మాత్రమే స్వీకరిస్తుంది. డాలర్ బహుమతికి అప్పగింత సమయంలో ప్రయాణికుడికి నేరుగా చెల్లించండి.', payRefErr: 'మీ చెల్లింపు యాప్ నుండి 12 అంకెల UPI రిఫరెన్స్ నమోదు చేయండి.', paySet: 'చెల్లింపులు ఇంకా సెట్ కాలేదు.', payStatus: 'చెల్లింపు' }
  };
  Object.keys(X).forEach(k => Object.assign(window.I18N[k], X[k]));
})();
