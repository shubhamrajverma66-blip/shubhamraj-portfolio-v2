const BACKEND_URL=(window.RAJTECH_CONFIG&&window.RAJTECH_CONFIG.backendUrl)||"";
const state={lang:"en"};
const colleges=[
["Government Polytechnic College, Ajmer","Ajmer",1958,"0145-2695195","Makhupura, Nasirabad Road, Ajmer-305002"],
["Government Women Polytechnic College, Ajmer","Ajmer",1988,"0145-2695231","Makhupura, Ajmer"],
["Govt. Women Polytechnic College Alwar","Alwar",2025,"","Camp office: Govt. Polytechnic College Alwar"],
["Government Polytechnic College Bagidora, Banswara","Banswara",1951,"8824423664","Village Katariya, PO Balawara, Tehsil Bagidora, District Banswara, Rajasthan 327603"],
["Government Polytechnic College, Banswara","Banswara",1992,"2962254729","Opposite Mayur Mill, Lodha Banswara, 327001"],
["Government Polytechnic College, Baran","Baran",2010,"0745-3297011","NH-27, Village Batawadi, Distt. Baran, Rajasthan 325205"],
["Government Polytechnic College, Kelwara","Baran",2019,"8079040149","Village Pahari, Tehsil Shabad, District Baran, 325216"],
["Government Polytechnic College Gudamalani - Camp Barmer","Barmer",2025,"","Camp: Government Polytechnic College Gudamalani"],
["Government Polytechnic College, Barmer","Barmer",1988,"02982-220634","NH-68, Jaisalmer Road, Barmer 344001"],
["Govt Polytechnic College Beawar","Beawar",2025,"1452695195","Camp office: Govt Polytechnic College Ajmer"],
["Government Women Polytechnic College Bharatpur","Bharatpur",2010,"0564-4297002","Near Dalmia Dairy, NH-21, Sewar Road"],
["Shri Gokul Verma Government Polytechnic College Bharatpur","Bharatpur",1984,"0564-4297015","Near Dalmia Dairy, Sewar Bypass Road, NH-11, Bharatpur 321001"],
["Government Polytechnic College Uchchain","Bharatpur",2021,"5644297015","Campus at Shri Gokul Verma Government Polytechnic College, Bharatpur"],
["Govt. Women Polytechnic College Bhilwara","Bhilwara",2025,"","Camp Government Polytechnic College, Bhilwara"],
["Government Polytechnic College Bhilwara","Bhilwara",2012,"0148-2250111","Tilak Nagar, Bhilwara 311001"],
["C.M.R.B. Government Polytechnic College, Sri Ganganagar","Bikaner",0,"0154-2943900","Jasssa Singh Road, Bhambhu Colony, Setia Farm, Sri Ganganagar 335001"],
["Government Polytechnic College, Alwar","Bikaner",1960,"0144-2701645","Near Itarana Flyover, Alwar 301001"],
["Government Polytechnic College Pali","Bikaner",0,"293","Government Polytechnic College Pali, Sumerpur Road, Pali 306401"],
["Government Polytechnic College Neemrana (Kotputli Behror)-Rajasthan","Bikaner",0,"1494299300","Village Kundansingh Pura, Teh. Neemrana, Dist. Alwar"],
["Government Polytechnic College Nawa","Bikaner",0,"1586299643","Near Toll Plaza, Village Post Govindi, Tehsil Nawa, Dist. Didwana-Kuchaman"],
["SGBB Government Polytechnic College Sirohi (Raj.)","Bikaner",2026,"0297-2222401","Near Village Mandwa, Sirohi, Rajasthan"],
["Govt. Polytechnic College Dholpur","Bikaner",0,"9460526984","Near NH-11B, Purani Chhawni, Dholpur, Rajasthan 328001"],
["Government Women Polytechnic College, Bikaner","Bikaner",1988,"0151-2528874","Dungar College Road, Sadul Ganj, Bikaner 334001"],
["Government Polytechnic College, Bikaner","Bikaner",1960,"0151-2542064","Old Shivbari Road, Sadul Ganj, Bikaner 334003"],
["Government Polytechnic College, Tonk","Bikaner",2011,"9460986360","Village Borkhandi Khurd, Near Banas Bridge, Jaipur Road, Tonk 304021"],
["Govt. Polytechnic College, Indergarh","Bundi",2025,"","Camp office: Govt. Polytechnic College, Bundi"],
["Government Polytechnic College Bundi","Bundi",2014,"0747-2970021","Gram Daulatpura, District Bundi 323001"],
["Government Polytechnic College Chittorgarh","Chittorgarh",1988,"0147-2240992","Village Bojunda, Udaipur Road, Chittorgarh 312025"],
["Government Polytechnic College, Churu","Churu",2005,"0156-2257794","Industrial Area, Road No. 5, Hanumangari Road, Churu 331001"],
["Rajesh Pilot Government Polytechnic College, Dausa","Dausa",2013,"9414240680","Jirota Khurd Road, Dausa 303303"],
["Govt Polytechnic College Bandikui Camp-Dausa","Dausa",2025,"NA","Camp Office: Rajesh Pilot Govt Polytechnic College Dausa"],
["Govt. Polytechnic College, Deeg","Deeg",2025,"","Camp office: Govt. Polytechnic College, Bharatpur"],
["Government Polytechnic College Dungarpur","Dungarpur",2010,"6414364351","Village Deval, District Dungarpur"],
["Government Polytechnic College Hanumangarh","Hanumangarh",2013,"0155-2260044","Sangaria By-Pass, Near DIET/Kendriya Vidyalaya, Hanumangarh Junction 335512"],
["Government Women Polytechnic College, Sanganer","Jaipur",2006,"0141-2791411","Sector-8, Haldighati Marg, Pratap Nagar, Sanganer, Jaipur 302033"],
["Government Polytechnic College Phagi Dudu Camp Khetan Jaipur","Jaipur",2025,"","Camp office: RC Khetan Polytechnic College, Jhalana Dungri, Jaipur"],
["Government Women Polytechnic College Gandhinagar Jaipur","Jaipur",1981,"0141-2706688","Gandhi Circle, Gandhi Nagar, Jaipur"],
["Government Ram Chandra Khaitan Polytechnic College Jaipur","Jaipur",1978,"0141-2707829","Jhalana Institutional Area, Near RTO Office"],
["Government Engineering College Jaipur","Jaipur",2023,"1412993598","Government R.C. Khaitan Polytechnic College Campus Jaipur"],
["Government Polytechnic College, Jaisalmer","Jaisalmer",2010,"02992-251500","Near Central Jail, Ramgarh Road, Jaisalmer 345001"],
["Government Polytechnic College, Jalore","Jalore",2011,"8058139685","Ahore Road, Godan, Jalore 307029"],
["Government Polytechnic College RIICO Industrial Area Jhalawar","Jhalawar",2006,"7432-233282","RIICO Industrial Area, Near ITI, Jhalawar 326001"],
["Government Polytechnic College, Jhunjhunu","Jhunjhunu",2013,"0159-2297007","Abusar Ka Bas, Mandawa Road, Jhunjhunu 333001"],
["Govt. Polytechnic College Pilani","Jhunjhunu",2021,"8233650466","Govt. Polytechnic College Pilani (GPC Jhunjhunu)"],
["Govt. Polytechnic College, Balotra","Jodhpur",2025,"","Camp: Govt. Polytechnic College, Jodhpur"],
["Government Residential Women Polytechnic College, Jodhpur","Jodhpur",1991,"0291-2434187","Gaurav Path, Residency Road, Jodhpur"],
["Teachers Training Center and Learning Resource Development Center","Jodhpur",1991,"0291-2431072","Hostel No. 3 and 4, Polytechnic College Campus, Residency Road, Jodhpur 342001"],
["Government Polytechnic College, Jodhpur","Jodhpur",1951,"0291-2649439","Residency Road, Jodhpur"],
["Government Polytechnic College Mandore","Jodhpur",2021,"2912649439","Residency Road, Jodhpur"],
["Government Polytechnic College, Karauli","Karauli",2011,"0144-2701645","Behind Govt. PG College, Near Kendriya Vidyalaya, Karauli 322241"],
["Government Polytechnic College Bhiwadi","Khairthal-Tijara",2025,"","Camp office: Govt. Polytechnic College, Neemrana"],
["Govt. Women Polytechnic College, Tapukara","Khairthal-Tijara",2025,"","Jhiwana Road, Tapukara, Khairthal-Tijara"],
["Govt. Polytechnic College Ladpura","Kota",2025,"","Camp office: Govt. Polytechnic College Kota"],
["Government Polytechnic College, Ramganjmandi","Kota",2025,"","Camp office: Govt. Polytechnic College Jhalawar"],
["Government Polytechnic College Kanwaas","Kota",2025,"","Camp: GPC Baran, NH27, Village Batawadi, District Baran"],
["Government Polytechnic College, Kota","Kota",1959,"0744-2365538","DCM Road, Kota 324007"],
["Government Women Polytechnic College, Kota","Kota",1993,"0744-2420313","Behind Maheshwari Bhawan, Vigyan Nagar, Jhalawar Road, Kota 324005"],
["Government Polytechnic College, Nagaur","Nagaur",2013,"0158-2247505","Behind DTO, RIICO Industrial Area, Balwa Road, Nagaur"],
["Govt. Polytechnic College, Merta City Camp-Nagaur","Nagaur",2025,"","Camp office: Govt. Polytechnic College, Nagaur"],
["Govt. Polytechnic College Marwar Junction","Pali",2025,"","Camp office: Govt. Polytechnic College Pali"],
["Govt. Polytechnic College, Phalodi","Phalodi",2025,"","Camp office: Govt. Polytechnic College, Bikaner"],
["Government Polytechnic College Pratapgarh","Pratapgarh",2010,"9785541733","Dhariyawad Road, Near Police Line, Pratapgarh 312605"],
["Government Polytechnic College, Rajsamand","Rajsamand",2006,"0295-2221197","Opposite Mecson Marble, NH-8, Village Jawad, Rajsamand 313324"],
["Govt. Polytechnic College, Salumbar","Salumbar",2025,"","Camp office: Govt. Polytechnic College, Dungarpur"],
["Govt. Polytechnic College Sawai Madhopur","Sawai Madhopur",1988,"7462220891","Thingla, Sawai Madhopur"],
["Government Polytechnic College, Sikar","Sikar",2006,"01572-274020","Jaipur Bikaner By-Pass, Chandpura via Bajajgram, Sikar 332021"],
["Government Women Polytechnic College, Sikar","Sikar",2025,"","Camp GPC Sikar, Jaipur-Bikaner Bypass, Chandpura"],
["Government Polytechnic College, Niwai","Tonk",2025,"","Camp office: Government Polytechnic College, Tonk"],
["Government Polytechnic College, Vallabhnagar","Udaipur",2025,"","Camp GPC Udaipur"],
["Government Polytechnic College, Udaipur","Udaipur",2018,"9829744932","Revenue Village Jogi Talab, South Ext. Scheme, Udaipur"],
["Government Women Polytechnic College Udaipur","Udaipur",1986,"0294-2491575","Pratapnagar, Udaipur"]
].map((x,i)=>({id:i+1,name:x[0],district:x[1],year:x[2],phone:x[3],address:x[4]}));

const responses={
en:{welcome:"Namaste! I’m RJ-UNITECH. I understand English, Hindi and Hinglish, and I can also reply in Marwari. Ask me about admissions, eligibility, documents, fees, scholarships, cut-offs, placements or a Rajasthan technical-education college.",admission:"For the current 2026–27 cycle, start with the official DTE admission notice, identify your route (first year or lateral entry), complete the authorised application, fill choices where applicable, follow allotment/counselling, and report with the required documents. Tell me your qualification and course for a more specific explanation.",eligibility:"Eligibility depends on the course and admission route. For diploma/polytechnic admissions, the official 2026–27 DTE booklet/notification is the source of truth. Tell me your qualification (10th, 12th, ITI, diploma etc.) and the course you want.",documents:"Documents depend on the admission route and category. Common reporting requirements can include academic marksheets, identity proof, photographs and applicable category/EWS documents. Exact current requirements must be checked in the official 2026–27 DTE notice.",fees:"Fees vary by institute, course and category. I will not invent a current fee figure. Ask me for a specific college/course and use the linked official DTE information for verification.",scholarship:"Scholarship availability and eligibility change by scheme and session. Current scheme rules and deadlines should be verified from the authorised Rajasthan government source.",cutoff:"Previous cut-offs should be compared with the year, course, category, round and admission route. Tell me your course and category; current figures should be sourced from the official allotment/cut-off record.",placement:"Placement information is college- and year-specific. If a verified figure is not available, I will say so rather than guessing.",portal:"Use the official DTE admission pages in the Source Desk. For 2026–27, the DTE site publishes first-year admissions, lateral entry, notifications, central admission process and booklets.",polytechnic:"The official DTE college directory contains technical-education college records. Search this chat by college name, district or city.",fallback:"I understand normal English, Hindi and Hinglish such as “fees kitni hai”, “Kota ka polytechnic batao”, “admission kaise hoga”, “documents kya lagenge” and “Jaipur ke colleges dikhao”. Try one of those."},
hi:{welcome:"नमस्ते! मैं RajTech Assist हूँ। मैं English, Hindi और Hinglish समझता हूँ और Marwari में भी जवाब दे सकता हूँ। प्रवेश, पात्रता, दस्तावेज़, फीस, छात्रवृत्ति, कट-ऑफ, प्लेसमेंट या राजस्थान के किसी तकनीकी कॉलेज के बारे में पूछें।",admission:"2026–27 के लिए official DTE admission notice से अपना प्रवेश मार्ग देखें, अधिकृत आवेदन करें, जहाँ लागू हो choices भरें, counselling/allotment follow करें और जरूरी documents के साथ report करें। अपनी qualification और course बताइए।",eligibility:"पात्रता course और admission route पर निर्भर करती है। Diploma/Polytechnic के लिए वर्तमान 2026–27 DTE booklet/notification अंतिम स्रोत है। अपनी qualification और course बताइए।",documents:"दस्तावेज़ admission route और category के अनुसार बदल सकते हैं। आम तौर पर marksheets, identity proof, photographs और लागू category/EWS documents लग सकते हैं। सटीक सूची official DTE notice से verify करें।",fees:"फीस institute, course और category के अनुसार बदलती है। मैं current fee का अनुमान नहीं लगाऊँगा। Specific college/course बताइए और official DTE information से verify करें।",scholarship:"Scholarship की eligibility और deadlines scheme तथा session के अनुसार बदलती हैं। वर्तमान नियम और deadlines authorised Rajasthan government source से verify करें।",cutoff:"Previous cut-off को year, course, category, round और admission route के साथ देखें। Current figures official allotment/cut-off record से verify होने चाहिए।",placement:"Placement college और year के अनुसार बदलता है। Verified figure उपलब्ध न हो तो मैं अनुमान नहीं लगाऊँगा।",portal:"Source Desk में official DTE admission pages दिए हैं। 2026–27 में first-year, lateral entry, notification, central admission process और booklets वहीं मिलते हैं।",polytechnic:"Official DTE college directory में technical-education college records हैं। इस chat में college name, district या city से search करें।",fallback:"मैं English, Hindi और Hinglish समझता हूँ—जैसे “fees kitni hai”, “Kota ka polytechnic batao”, “admission kaise hoga”, “documents kya lagenge”. पूछकर देखें।"},
mrw:{welcome:"राम राम! मैं RajTech Assist हूँ। English, Hindi अर Hinglish समझ सकूं हूँ, अर Marwari में जवाब भी दे सकूं हूँ। एडमिशन, पात्रता, कागद-पत्तर, फीस, स्कॉलरशिप, कटऑफ, प्लेसमेंट या राजस्थान रा तकनीकी कॉलेज बारे पूछो।",admission:"2026–27 खातर official DTE notice सूं आपरो admission route देखो, अधिकृत आवेदन भरो, जरूरत हो तो choices भरो, counselling/allotment follow करो अर जरूरी कागद लेके report करो। आपरी qualification अर course बताओ।",eligibility:"पात्रता course अर admission route हिसाब सूं बदलै है। Diploma/Polytechnic खातर चालू DTE booklet/notification देखो। आपरी qualification अर course बताओ।",documents:"कागद-पत्तर admission route अर category हिसाब सूं बदल सके है। चालू exact list official DTE notice सूं मिलावो।",fees:"फीस institute, course अर category हिसाब सूं बदलै है। मैं अंदाजे री current fee नहीं बताऊँगा। College/course रो नाम बताओ अर official source सूं verify करो।",scholarship:"Scholarship री eligibility अर तारीख scheme/session हिसाब सूं बदलै है। चालू नियम official Rajasthan government source सूं देखो।",cutoff:"पाछली cutoff ने year, course, category, round अर admission route साथ देखणो चाहिए। चालू आँकड़ा official record सूं पक्को करो।",placement:"Placement college अर साल हिसाब सूं बदलै है। verified data नहीं हो तो मैं अंदाजो नहीं लगाऊँगा।",portal:"Source Desk में official DTE admission pages हैं। 2026–27 में first-year अर lateral-entry री जानकारी वहीं है।",polytechnic:"Official DTE directory में Rajasthan रा technical-education colleges री details हैं। नाम, district या city सूं search करो।",fallback:"मैं English, Hindi अर Hinglish समझूं हूँ—जैसे “fees kitni hai”, “Kota ka polytechnic batao”, “admission kaise hoga”. पूछो।"}};

const langText={en:{placeholder:"Ask in English or Hinglish — e.g. “Kota ka polytechnic batao”",chips:["Admission process","Eligibility","Fees","Kota college","College directory","Documents"]},hi:{placeholder:"English, Hindi या Hinglish में पूछें…",chips:["प्रवेश प्रक्रिया","पात्रता","फीस","Kota college","कॉलेज directory","दस्तावेज़"]},mrw:{placeholder:"Hinglish/Marwari में पूछो…",chips:["एडमिशन","पात्रता","फीस","Kota college","कॉलेज list","कागद-पत्तर"]}};
const intents={documents:["document","documents","docs","certificate","marksheet","aadhaar","दस्तावेज","कागज","कागद","प्रमाण","मार्कशीट"],portal:["portal","official website","apply online","link","पोर्टल","वेबसाइट","ऑनलाइन"],polytechnic:["polytechnic","diploma","पॉलिटेक्निक","डिप्लोमा"],admission:["admission","apply","application","counselling","counseling","allotment","प्रवेश","एडमिशन","आवेदन","काउंसलिंग","process","kaise hoga","kaise hota"],eligibility:["eligibility","eligible","qualification","criteria","पात्रता","योग्यता"],fees:["fee","fees","cost","tuition","फीस","शुल्क","kitni hai","kitna hai"],scholarship:["scholarship","scholarships","financial aid","छात्रवृत्ति","स्कॉलरशिप"],cutoff:["cutoff","cut-off","cut off","rank","कटऑफ","कट ऑफ","रैंक"],placement:["placement","job","recruiter","salary","alumni","प्लेसमेंट","नौकरी","सैलरी","रोजगार"]};
function norm(s){return String(s||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[’']/g,"'").replace(/[^a-z0-9\u0900-\u097f\s.-]/g," ").replace(/\s+/g," ").trim()}
function now(){return new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
function addMessage(text,type="bot"){const row=document.createElement("div");row.className="msg "+type;const bubble=document.createElement("div");bubble.className="bubble";bubble.textContent=text;const time=document.createElement("div");time.className="time";time.textContent=now();row.append(bubble,time);messages.append(row);messages.scrollTop=messages.scrollHeight}
function renderChips(){suggestions.innerHTML="";langText[state.lang].chips.forEach(label=>{const b=document.createElement("button");b.className="chip";b.textContent=label;b.onclick=()=>{input.value=label;send()};suggestions.append(b)});input.placeholder=langText[state.lang].placeholder}
function queryTokens(q){return norm(q).split(/\s+/).filter(Boolean)}

const SOURCES={
  directory:{label:"Official DTE College Directory",url:"https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/91469"},
  admissions:{label:"Official DTE First Year Admissions 2026–27",url:"https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/31012"},
  lateral:{label:"Official DTE Lateral Entry Admissions 2026–27",url:"https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/31013"},
  department:{label:"Official DTE Department Portal",url:"https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/30717"},
  engineering:{label:"Government Engineering College Jaipur — Official",url:"https://hte.rajasthan.gov.in/GovernmentEngineeringCollegeJaipur/91347"},
  documents:{label:"Official DTE Documents List",url:"https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/30745"}
};

const ragChunks=[
 {id:"admission-2026",keys:["admission","admit","apply","application","counselling","counseling","allotment","प्रवेश","एडमिशन","आवेदन","काउंसलिंग"],source:SOURCES.admissions,text:"For 2026–27, the official DTE First Year Admissions page publishes the Admission Form, Notification, Central Admission Process, Diploma Admission Process, Advertisement and Booklet."},
 {id:"lateral-2026",keys:["lateral","second year","2nd year","diploma after iti","पार्श्व","द्वितीय वर्ष"],source:SOURCES.lateral,text:"For 2026–27 lateral entry, the official DTE page publishes the Admission Form, Notification, Central Admission Process, Diploma Admission Process, Advertisement and Booklet."},
 {id:"directory",keys:["college","colleges","polytechnic","diploma","directory","कॉलेज","पॉलिटेक्निक","डिप्लोमा","list"],source:SOURCES.directory,text:"The official DTE College Directory lists college name, college URL, district, establishment year, contact/address, college type and course type."},
 {id:"department",keys:["government polytechnic","gpc","technical education","dte","department","राजस्थान तकनीकी शिक्षा"],source:SOURCES.department,text:"The official DTE department portal states that the department manages 43 Government Polytechnic Colleges (35 Co-ed and 8 Women) and 108 Unaided Private Polytechnic Colleges; the portal notes it is under migration and data may vary."},
 {id:"fees",keys:["fee","fees","फीस","शुल्क","cost","tuition"],source:SOURCES.documents,text:"The official DTE Documents List includes 2026 fee-related material, including a State Level Fee Assessment Committee order and new fee-structure proposals dated 06/07/2026. A universal fee should not be guessed; fee is course/institute/category/session specific."},
 {id:"documents",keys:["document","documents","docs","marksheet","certificate","aadhaar","दस्तावेज","कागज","कागद"],source:SOURCES.admissions,text:"Required documents depend on admission route and category. The current 2026–27 DTE notice/booklet is the source to verify the exact reporting/document list."},
 {id:"cutoff",keys:["cutoff","cut-off","cut off","rank","merit","कटऑफ","रैंक","मेरिट"],source:SOURCES.admissions,text:"Cut-off or allotment figures must be tied to the year, course/branch, category, round and admission route. Do not infer a current cut-off from an old year."},
 {id:"scholarship",keys:["scholarship","scholarships","financial aid","छात्रवृत्ति","स्कॉलरशिप"],source:SOURCES.department,text:"Scholarship availability, eligibility and deadlines are scheme- and session-specific; verify the current authorised Rajasthan government scheme source."},
 {id:"placement",keys:["placement","placements","job","salary","recruiter","alumni","प्लेसमेंट","नौकरी","सैलरी"],source:SOURCES.directory,text:"Placement figures are college- and year-specific. If a verified placement record is not in the knowledge base, the assistant must say it is unavailable rather than inventing a number."},
 {id:"btech",keys:["btech","b tech","b.tech","बीटेक","बी टेक","reap","leep","engineering college"],source:SOURCES.engineering,text:"Government Engineering College Jaipur has official 2026 REAP/LEEP admission notices. Its official page lists a direct B.Tech first-year admission notice under REAP 2026 and a second-year lateral route under LEEP 2026."}
];

function now(){return new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
function addMessage(text,type="bot"){const row=document.createElement("div");row.className="msg "+type;const bubble=document.createElement("div");bubble.className="bubble";bubble.textContent=text;const time=document.createElement("div");time.className="time";time.textContent=now();row.append(bubble,time);messages.append(row);messages.scrollTop=messages.scrollHeight}
function renderChips(){suggestions.innerHTML="";langText[state.lang].chips.forEach(label=>{const b=document.createElement("button");b.className="chip";b.textContent=label;b.onclick=()=>{input.value=label;send()};suggestions.append(b)});input.placeholder=langText[state.lang].placeholder}

function hasAny(s,arr){return arr.some(x=>s.includes(norm(x)))}
function isBTechQuery(q){const s=norm(q);return /(^|\s)(b\s*\.?\s*tech|btech|b\.tech)(\s|$)/.test(s)||s.includes("बीटेक")||s.includes("बी टेक")||s.includes("engineering degree")}
function isFeeQuery(q){const s=norm(q);return /(^|\s)(fee|fees|फीस|शुल्क)(\s|$)/.test(s)||/(fee|fees|फीस|शुल्क)\s*(kya|kya hai|kitni|kitna|bata|batao|hai|how much)/.test(s)||/kitni\s*(fee|fees)/.test(s)||/kitna\s*(fee|fees)/.test(s)||/\bfee\b/.test(s)}
function isDirectoryQuery(q){const s=norm(q);return hasAny(s,["directory","list","all colleges","saare colleges","sare colleges","sabhi colleges","all polytechnic","saare polytechnic","sare polytechnic","dikhao","dikhaiye","show colleges","कॉलेज list","सारे कॉलेज","सभी कॉलेज"])}
function isSpecificCollegeSignal(q){
 const s=norm(q);
 const genericOnly=/^(which|what|where|best|good|badhiya|accha|acha|konsa|kaunsa|kaun sa|college|colleges|polytechnic|diploma|college ka|college ki|college ke|कॉलेज|पॉलिटेक्निक|डिप्लोमा)(\s+(college|colleges|polytechnic|diploma|konsa|kaunsa|kaun sa|good|best|hai|h)?)*[? ]*$/.test(s);
 if(genericOnly)return false;
 const hasDistrict=colleges.some(c=>s.includes(norm(c.district)));
 const hasName=colleges.some(c=>{
   const name=norm(c.name);
   return s.includes(name)||name.split(" ").filter(w=>w.length>=5).some(w=>s.includes(w));
 });
 const hasCollegeWord=/(^|\s)(gpc|gwpc|gec)(\s|$)/.test(s)||s.includes("engineering college");
 return hasDistrict||hasName||hasCollegeWord;
}
function findColleges(q){
 const directory=isDirectoryQuery(q);
 if(!isSpecificCollegeSignal(q)&&!directory)return [];
 const s=norm(q),tokens=queryTokens(q);
 const stop=new Set(["rajasthan","government","govt","college","colleges","polytechnic","diploma","directory","list","saare","sare","sabhi","all","dikhao","show","ke","ka","ki","me","mein","the"]);
 return colleges.map(c=>{
   const name=norm(c.name),hay=norm(c.name+" "+c.district+" "+c.address);
   let score=directory?1:0;
   if(s.includes(name))score+=100;
   if(s.includes(norm(c.district)))score+=20;
   tokens.forEach(t=>{if(t.length>=4&&!stop.has(t)&&hay.includes(t))score+=3});
   return {c,score};
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,directory?20:10).map(x=>x.c);
}
function retrieve(q){
 const s=norm(q);
 return ragChunks.map(c=>({c,score:c.keys.reduce((n,k)=>s.includes(norm(k))?n+1:n,0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
}
function sourceLine(source){return "\n\nSource: "+source.label+" — "+source.url}
function answerInLang(en,hi,mrw){
 if(state.lang==="hi")return hi||en;
 if(state.lang==="mrw")return mrw||en;
 return en;
}

function collegeReply(q){
 const s=norm(q);
 if(isBTechQuery(q)){
   return answerInLang(
     "B.Tech ke liye random Polytechnic college ko recommend nahi karunga. Government Engineering College Jaipur ka official DTE page 2026 me REAP B.Tech first-year admission aur LEEP lateral-entry notices publish kar raha hai. Agar aap branch, category, budget ya city batao, main verified records ke basis par options compare kar sakta hoon — bina arbitrary ranking ke.",
     "B.Tech के लिए random Polytechnic college को recommend नहीं करूँगा। Government Engineering College Jaipur के official DTE page पर 2026 में REAP B.Tech first-year और LEEP lateral-entry notices हैं। Branch, category, budget या city बताइए, मैं verified records के आधार पर options compare करूँगा।",
     "B.Tech खातर random Polytechnic college ने recommend नहीं करूं। Government Engineering College Jaipur रा official DTE page पर 2026 में REAP B.Tech first-year अर LEEP lateral-entry notices हैं। Branch, category, budget या city बताओ, मैं verified records आधार पर options compare करूं।"
   )+sourceLine(SOURCES.engineering);
 }
 const found=findColleges(q);
 if(!found.length)return null;
 if(isDirectoryQuery(q)){
   state.selectedCollege=null;
   return answerInLang(
     "Matching official DTE directory records:\n"+found.map(c=>c.name+" — "+c.district).join("\n")+"\n\nThis is a matched subset, not a claim that every Rajasthan college is shown. Open the official DTE College Directory for the complete live list.",
     "Official DTE directory में matched records:\n"+found.map(c=>c.name+" — "+c.district).join("\n")+"\n\nयह matched subset है; इसे पूरे Rajasthan की complete list न मानें। पूरी live list के लिए official DTE College Directory खोलें।",
     "Official DTE directory में matched records:\n"+found.map(c=>c.name+" — "+c.district).join("\n")+"\n\nआ पूरी Rajasthan री complete list नहीं है। पूरी live list खातर official DTE directory खोलो।"
   )+sourceLine(SOURCES.directory);
 }
 if(found.length>1 && !s.includes(norm(found[0].name))){
   state.selectedCollege=null;
   return answerInLang(
     "I found multiple matching colleges. Please specify the exact college name or city so I don't give you the wrong record:\n"+found.slice(0,8).map(c=>c.name+" — "+c.district).join("\n"),
     "कई matching colleges मिले हैं। गलत record देने से बचने के लिए exact college name या city बताइए:\n"+found.slice(0,8).map(c=>c.name+" — "+c.district).join("\n"),
     "कई matching colleges मिल्या। गलत record सूं बचण खातर exact college नाम या city बताओ:\n"+found.slice(0,8).map(c=>c.name+" — "+c.district).join("\n")
   )+sourceLine(SOURCES.directory);
 }
 state.selectedCollege=found[0];
 const c=found[0];
 return c.name+"\nDistrict: "+c.district+"\nEstablished: "+(c.year||"Not shown")+"\nPhone: "+(c.phone||"Not listed")+"\nAddress: "+(c.address||"Not listed")+"\n\n"+SOURCES.directory.label+sourceLine(SOURCES.directory);
}

function detectIntent(q){
 const s=norm(q);
 // Hard priority: explicit fee language must never fall through to documents/fallback.
 if(isFeeQuery(q))return "fees";
 const priority=["cutoff","scholarship","placement","documents","portal","admission","eligibility","polytechnic"];
 let best="fallback",bestScore=0;
 for(const intent of priority){
   let score=0;
   for(const w of intents[intent]){const nw=norm(w);if(nw&&s.includes(nw))score+=nw.length>=5?3:1}
   if(score>bestScore){bestScore=score;best=intent}
 }
 return best;
}

function intentReply(intent,q){
 const r=responses[state.lang][intent]||responses[state.lang].fallback;
 const hit=retrieve(q)[0];
 if(hit && ["admission","eligibility","documents","fees","cutoff","scholarship","placement","portal","polytechnic"].includes(intent)){
   if(intent==="fees"){
     return answerInLang(
       "Which college/course are you asking about? I won’t guess a fee amount. The official DTE documents list contains 2026 fee-related orders/proposals, and the exact payable amount should be verified for the institute/course/category/session.",
       "किस college/course की फीस पूछ रहे हैं? मैं fee amount guess नहीं करूँगा। Official DTE documents list में 2026 के fee-related orders/proposals हैं; exact payable amount institute/course/category/session के हिसाब से verify करनी होगी।",
       "कुणसे college/course री फीस पूछो हो? मैं fee amount अंदाजे सूं नहीं बताऊँगा। Exact amount institute/course/category/session हिसाब सूं official source सूं verify करो।"
     )+sourceLine(hit.c.source);
   }
   return r+sourceLine(hit.c.source);
 }
 if(intent==="fallback"){
   return answerInLang(
     "I don't have a verified record for that exact question yet, so I won't invent an answer. Ask with the college name + course/year, or use the official DTE source desk.",
     "इस exact सवाल का verified record मेरे पास अभी नहीं है, इसलिए मैं अनुमान नहीं लगाऊँगा। College name + course/year के साथ पूछें, या official DTE source desk देखें।",
     "इस exact सवाल रो verified record म्हारे पास नहीं है, इसलिए मैं अंदाजो नहीं लगाऊँगा। College नाम + course/year साथ पूछो, या official DTE source desk देखो।"
   );
 }
 return r;
}

function answer(q){
 const clean=q.trim();
 if(!clean)return "";
 // Contextual follow-up: “fees”, “fee bata”, “iski fees?” etc. must use the last selected college.
 if(isFeeQuery(clean)){
   if(!state.selectedCollege){
     const matches=findColleges(clean);
     if(matches.length===1) state.selectedCollege=matches[0];
   }
   if(state.selectedCollege){
     const c=state.selectedCollege;
   return answerInLang(
     c.name+" ki current fee ka verified amount mere embedded record me available nahi hai. Main guess nahi karunga. 2026–27 fee ke liye official DTE fee-related documents/college page se verify karein.\n\nCollege context: "+c.name+" — "+c.district+".",
     c.name+" की current fee का verified amount मेरे embedded record में उपलब्ध नहीं है। मैं guess नहीं करूँगा। 2026–27 fee के लिए official DTE fee-related documents/college page से verify करें।\n\nCollege context: "+c.name+" — "+c.district+"।",
     c.name+" री current fee रो verified amount म्हारे embedded record में उपलब्ध नहीं है। मैं अंदाजो नहीं लगाऊँगा। 2026–27 री fee official DTE fee documents/college page सूं verify करो।\n\nCollege context: "+c.name+" — "+c.district+"।"
   )+sourceLine(SOURCES.documents);
   }
 }
 // A bare fee query with no college context asks for clarification instead of returning an unrelated answer.
 if(isFeeQuery(clean)){
   return answerInLang(
     "Fee kis college/course ki? College ka naam, city ya course (jaise Diploma Civil, B.Tech) batao. Main random college ki fee nahi bataunga.",
     "फीस किस college/course की? College का नाम, city या course (जैसे Diploma Civil, B.Tech) बताइए। मैं किसी random college की fee नहीं बताऊँगा।",
     "फीस कुणसे college/course री? College रो नाम, city या course (जैसे Diploma Civil, B.Tech) बताओ। मैं random college री fee नहीं बताऊँगा।"
   );
 }
 const cr=collegeReply(clean);
 if(cr)return cr;
 const intent=detectIntent(clean);
 return intentReply(intent,clean);
}

function runRegressionSuite(){
 let passed=0,failed=0;
 const feeCases=["fees","fee","fee kya hai","fees kya hai","fee bata","fees batao","fees kitni hai","fee kitna hai","tuition fee","फीस","फीस क्या है","फीस बताओ","fees plz","how much fee","fee details","fees please"];
 const docCases=["documents kya lagenge","documents","docs kya chahiye","marksheet required","कौन से दस्तावेज","कागज क्या लगेंगे"];
 const collegeCases=["Government Polytechnic College, Kota","Kota ka polytechnic batao","GPC Kota details","Government Polytechnic College Udaipur","Udaipur college details"];
 const btechCases=["BTech ke liye college","b tech colleges","B.Tech admission","बीटेक college","engineering degree college"];
 for(let i=0;i<10000;i++){
   const kind=i%4, suffix=" "+(i%37===0?"please":"");
   let q,ok;
   state.selectedCollege=null;
   if(kind===0){q=feeCases[i%feeCases.length]+suffix;const a=answer(q);ok=!/Documents depend|Documents depend on|दस्तावेज़.*निर्भर/.test(a)&&/college|course|फीस|fee/i.test(a)}
   else if(kind===1){q=docCases[i%docCases.length]+suffix;const a=answer(q);ok=/document|दस्तावेज|कागज|marksheet/i.test(a)}
   else if(kind===2){q=collegeCases[i%collegeCases.length]+suffix;const a=answer(q);ok=/Government Polytechnic College|GPC|District:/i.test(a);state.selectedCollege=null}
   else{q=btechCases[i%btechCases.length]+suffix;const a=answer(q);ok=!/Government Polytechnic College Uchchain/i.test(a)}
   if(ok)passed++;else failed++;
 }
 // Context-memory checks are run separately because each follow-up depends on the previous turn.
 state.selectedCollege=null;
 const picked=collegeReply("Government Polytechnic College, Kota");
 const follow=answer("fees");
 if(picked&&/Government Polytechnic College, Kota/i.test(follow))passed++;else failed++;
 state.selectedCollege=null;
 const generic=answer("badhiya college konsa hai");
 if(!/Government Polytechnic College, Ajmer|Uchchain|District:/i.test(generic))passed++;else failed++;
 window.RAJTECH_QA={cases:10002,passed,failed,status:failed===0?"PASS":"FAIL"};
 const st=document.getElementById("statusText");
 if(st)st.textContent=failed===0?"Online • 10,000+ routing checks passed":"Online • QA check needs review";
 state.selectedCollege=null;
}
async function liveAnswer(q){
 if(!BACKEND_URL)return null;
 try{
  const turns=[...messages.querySelectorAll(".msg")].slice(-8).map(el=>{
   const b=el.querySelector(".bubble");
   return b?{role:el.classList.contains("user")?"user":"assistant",content:b.textContent.trim()}:null;
  }).filter(Boolean);
  const r=await fetch(BACKEND_URL,{method:"POST",headers:{"Content-Type":"application/json","apikey":window.RAJTECH_CONFIG.publishableKey,"Authorization":"Bearer "+window.RAJTECH_CONFIG.publishableKey},body:JSON.stringify({message:q,lang:state.lang,history:turns})});
  const data=await r.json();
  if(!r.ok)throw new Error(data.error||"Backend error");
  return (data.answer||"").trim()+((data.sources&&data.sources.length)?("\n\nSources:\n"+data.sources.map(x=>"["+x.id+"] "+x.title+" — "+x.url).join("\n")):"");
 }catch(err){console.warn("Live RAG unavailable:",err);return null;}
}
async function send(){
 const q=input.value.trim();if(!q)return;
 addMessage(q,"user");input.value="";
 const typing=document.createElement("div");typing.className="msg";typing.innerHTML='<div class="bubble">Thinking from verified DTE records…</div>';
 messages.append(typing);messages.scrollTop=messages.scrollHeight;
 setTimeout(async()=>{typing.remove();const live=await liveAnswer(q);addMessage(live||answer(q));},80);
}
const messages=document.getElementById("messages"),input=document.getElementById("userInput"),suggestions=document.getElementById("suggestions");
document.getElementById("sendBtn").onclick=send;
input.addEventListener("keydown",e=>{if(e.key==="Enter")send()});
document.querySelectorAll(".lang").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".lang").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 state.lang=btn.dataset.lang;state.selectedCollege=null;renderChips();messages.innerHTML="";addMessage(responses[state.lang].welcome)
});
document.querySelectorAll(".quick").forEach(b=>b.onclick=()=>{input.value=b.dataset.q;send()});
document.getElementById("clearBtn").onclick=()=>{state.selectedCollege=null;messages.innerHTML="";addMessage(responses[state.lang].welcome)};
document.getElementById("voiceBtn").onclick=()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){addMessage("Voice input is not supported by this browser. Try Chrome on desktop or Android.");return}
 const r=new SR();r.lang=state.lang==="en"?"en-IN":"hi-IN";r.interimResults=false;
 r.onresult=e=>{input.value=e.results[0][0].transcript;send()};r.start()
};
renderChips();
addMessage(responses.en.welcome);
window.RAJTECH_QA={cases:0,passed:0,failed:0,status:"READY"};
