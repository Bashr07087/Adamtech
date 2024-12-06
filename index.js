function searchWord() {
    const wordInput = document.getElementById("word").value.toLowerCase();
    const dictionary = {
        "فور": "is the most spoken language by majority fur tribe in darfur.",
        "leg": "Taar",
        "star":"Úrí",
        "back": "Raal",
        "head":"Ta̱bʉ",
        "ear":"Dɨ́ló",
        "community" :"Órré", 
        "society" :" Daara",
        "fur people":"Poora",
        "people":"kwǎ",
        "hand":"dóŋá",
        "children":"dogólá",
        "school":"soom",
        "job":"táárí",
        "education":"gʉʉd",
        "day":"sog ",
        "time":"Tin",
        "good":"dom",
        "to build":"kʉtʉ́mó",
        "land":"sʉʉrʉ",
        "delicious":"simó",
        "knee":" kʉrʉ",
        "chest":"ógó",
        "dick":"da̱sʉ́",
        "shoulders":"kataba ",
        "belly":"dɨ́ǒ ",
        "ass":"dibé",
        "hair":"nyɨlǎw",
        "balls ":"kórgí",
        "face":"A̱rɨ́",
        "nose ":"Dórmí",
        "cheek":"tangil",
        "mouth":"ʉ́tó",
        "lip":"bondé",
        "chin":"áásó",
        "eyes":"kúúi",
        "elbow":"kíí",
        "hand palm":"taawá",
        "fingures":"tóríŋá",
        "thigh":"dɨwil",
        "arm":"durú",
        "eyelashes":"ɨ́rɨma",
        "occipital bone":"Tún ",
        "buthocks":"kíbaŋ kwá",
        "beard":"pʉ́ró",
        "waist":"nyemaŋ",
        "to eat":"áláŋ âm",
        "go":"joo",
        "to go":"áláŋ joo",
        "come":"jêl",
        "to come":"áláŋ jêl",
        "Iam going":"anni",
        "you are going":"banni",
        "we are going":"kanni ",
        "she /he is going":" janni",
        "eating":"am̂",
        "we are eating":"kâm",
        "you are eating":"bâm",
        "to walk":"áláŋ ɨ́rŋɨ",
        "walk":" jɨ́rŋɨ",
        "eat":"jam̂",
        "مجتمع":"Órré",
        "laugh":"haha",
        "ʉmeláŋ sog":"wednesday",
        "saadáŋ sog":"thursday",
        "Toldomáŋ sog":"friaday",
        "mooŋáŋ sog":"saturday",
        "Jamaŋáŋ sog":"sunday",
        "Da̱mɨŋáŋ sog":"monday",
        "pojoráŋ sog":"tuseday",
        "Kóllíŋ'íŋ soga":"days of the week",
        "joo":"go",
        "اذهب":"joo",
        "فور":"poora",
        "one":"Díg",  
        "two":"Ǎ̱w",
        "three":"Ɨ́ss",
        "four":"Óŋal", 
        "five":"Óss",
        "six":"Ósaŋdíg",
        "seven":"Ósaŋǎ̱w",
        "eight":"Osaŋɨ́ss",
        "Osaŋóŋal":"nine",
        "Wa̱yé":"teen",
        "Wa̱yé na díg":"eleven", 
        "Wa̱yé na ǎ̱w":"twelve",
        "wednesday":"ʉmeláŋ sog",
        "thursday":"saadáŋ sog",
        "friday":"Toldomáŋ sog",
        "saturday":"mooŋáŋ sog",
        "sunday": "Jamaŋáŋ sog",
        "monday":"Da̱mɨŋáŋ sog",
        "tuseday":"pojoráŋ sog",
        "days of the week":"Kóllíŋ'íŋ soga",
        "thirteen":"Wa̱yé na Ɨ́ss",
        "fourteen":"Wa̱yé na Óŋal",
        "fiveteen":"Wa̱yé na Óss",
        "sixteen":"Wa̱yé na Ósaŋdíg",
        "seventeen":"Wa̱yé na Ósaŋǎ̱w",
        "eighteen":"Wa̱yé na Osaŋɨ́ss",
        "nineteen":"Wa̱yé na Osaŋóŋal",
        "twenty":"Wa̱yé na Wa̱yé",
        "story":"Aldí",
        "uncle":"Mamá",
        "flower":"Door",
        "father":"Báa",
        "dog":"Ása",
        "cousin":"káala’ŋ kwë",
        "to see":"áláŋ agɨl",
        "aunty":"káala",
        "our":" dɨɨŋ",
        "mine":"dúíŋ",
        "bush":"judá",
        "child":"kwë",
        "kid":"kwë",
        "grand child":"Atine",
        "grand father":"wʉ́o",
        "and":"Na",
        "cat":"Biís",
        "what happened to you":"Kaa gís eŋa",
        "hen":"Dóga",
        "chicken":"Dóga",
        "coward":"Kaalu",
        "cock":"zoŋga",
        "grand mother":"Abo",
        "something":"arɨ dígi",
        "what is it":"kaa-ii",
        "joker":"moge",
        "mayer":"sagal",
        "how is it":"ay-lóŋ",
        "for what":"kaáŋ",
        "hot":"tokké",
        "mother in law":"Nyamíre",
        "sibling":"Dítan",
        "younger brother":"Dítan",
        "elder sister":"Dadá",
        "sister":"Dadá",
        "cold":"lúlla",
        "lion":"Jáárá",
        "take":"jabúŋ",
        "to take":"áláŋ jabúŋ",
        "paternal aunty":"Ányá",
        "spider":"Nyamʉ́ro",
        "if":"abá",
        "to leave":"áláŋjʉ́ndɨ",
        "inside":"dɨó",
        "skin":"darma",
        "able":"taga",
        "to be able":"áláŋ taga",
        "bones":"koro",
        "drumpe":"Tómbol",
        "also":"dog",
        "watchman":"Wʉ́oŋ",
        "cowboy":"Wʉ́oŋ",
        "rainy season":"wële",
        "woman":"Yáa",
        "human":"Duó",
        "man":"Duó",
        "buy":"Julu",
        "to buy":"áláŋ Julu",
        "steal":"Jʉllʉ",
        "to steal":"áláŋ Jʉllʉ",
        "hide":"Jʉl",
        "to hide":"áláŋ Jʉl",
        "sister in law":"Kórá",
        "brother in law":"kóná",
        "brother in law":"járro",
        "cousin":"Ányáŋ kwě",
        "nephew or niece": "dalaŋ ,kwě",
        "nephew":"dalaŋ kwě",
        "niece":"dalaŋ kwě",
        "sister in laws":"kóráŋa",
        "brother in laws":"kónáŋa",
        "neices and nephews":"kalaŋa",
        "children":"dogóla,dóólá",
        "some money":"sóŋgoŋa diâ",
        "money":"sóŋgoŋa",
        "to look":" a̱gɨ́l",
        "some":"diâ",
        "pot":"Alá",
        "To cut":"Andi 1st person",
        "to call":"Ja̱rɨ́'ŋ",
        "Chitchat ":"A̱rʉ",
        "Saw":"A̱gɨla",
        "see":"jagɨl",
        "to cut":"Bandi",
        "to fasten":"Bɨrgó",
        "manmade":"Dɨrbo",
        "wall":"Ergel",
        "goat":"Diw",
        "war":"Deer",
        "village":"Elle",
        "town":"Elle",
        "chatting":"A̱rʉ",
        "busket":"Ga̱mbʉt",
        "ray":"hěrra",
        "that":"Híllâ",
        "empty":"Hóo",
        "free":"Hóo",
        "loaded":"Itaba",
        "gone":"Itaba",
        "tied":"Indiro",
        "tied":"ɨrso one person",
        "collected":"ɨso",
        "university":"ɨso",
        "meaning":"jamin",
        "leave":"jundí",
        "accumulate":"jarim",
        "to free":"jundí",
        "things":"lótá",
        "smith":"mɨɨr",
        "lion":"mʉʉrʉ́",
        "place":"lóó",
        "stuff":"lótá",
        "donkey":"leel",
        "beans":"leema",
        "careful":"maale",
        "night":"luul",
        "law":"murul",
        "airport":"matar",
        "yard":"matar",
        "space":"matar",
        "straight":"Zarlak",
        "writting":"Rim",
        "poetry":"ramse",
        "poet":"ramse",
        "fish":"púún",
        "opened":"palaŋ",
        "writor":"Rimdʉŋo",
        "author":"Rimdʉŋo",
        "expensive":"Tárrá",
        "house":"Toŋ",
        "home":"Toŋ",
        "rubbish":"Taŋgal",
        "crazy":"ulul",
        "mad":"ulul",
        "fire":"utú",
        "electricity":"ulma",
        "colour":"ûlu",
        "color":"ûlu",
        "honey":"nassu",
        "meat":" Nɨno",
        "food":"nɑ̱míe",
        "boundary":"niná",
        "example":"niná",
        "sand":"ŋáány",
        "high":"ŋorrá",
        "abuse":"ŋanyiŋ",
        "january":"Ta̱a̱nɨ́lɨ́ŋ",
        "february":"Nooyoŋ",
        "march":"Sǔbuŋa’ŋ", 
        "april":"Koósoŋa’ŋ",
        "may":"Doorŋáŋ",
        "june":"Potáŋ",
        "july":"kuyweél",
        "august":"koróŋ",
        "september":"ʉróŋ",
        "october":"Ederáŋ",
        "november":"Taáŋ",
        "december":"Taadorol",
        "months of the year":"Ayé’ŋkôlda",
        "trap":"zargana",
        "straight":"zarlak",
        "yes":"Yaaŋ",
        "queen":"yáakuri",
        "seeds":"zurráŋa",
        "cock":"zoŋga",
        "diarrhea":" yɨɨ",
        "running stomach":" yɨɨ",
        "naked":"pogo",
        "trash":"Tangal",
        "trash keeper":"Tangal",
        "screaming":"ʉrʉ́",
        "sheep":"ʉrɨ",
        "speech":"ʉʉ",
        "Shoutting":"ʉrʉ́",
        "yelling":"ʉrʉ́",
        "tale":"ʉʉ",
        "topic":"ʉʉ",
        "quickly":"waar",
        "fast":"waar",
        "gruard":"wʉoŋ", 
        "watchman":"wʉoŋ",
        "flour":"wʉ̌o",
        "grandfather":"wʉ́o",
        "god":"wʉ́o",
        "allah":"wʉ́o",
        "security":"wʉoŋ",
        "woman":"yáa",
        "mother":"Iyáa",
        "put":"Jaa",
        "other":"keer",
        "another":"keer",
        "camel":"kamal",
        "cut":"Jandi",
        "chop":"Jandi",
        "shoes":"kāwlá",
        "fear":"ka̱lɨ",
        "doubt":"jarró",
        "heart":"kilmá",
        "take out":"jaráŋ",
        "pull":"jaráŋ",
        "pull out":"jaráŋ",
        "خوف":"ka̱lɨ",
        "شك":"jarró",
        "قلب":"kilmá",
        "طلع":"jaráŋ",
        "pen":"Setret",
        "chair":"kʉtɨ",
        "room":"pa̱i",
        "door":"Órre/wérré",
        "window":"Tiír",
        "kitchen":"Aláŋa'ŋ Toŋ",
        "bathroom":"Ba̱gʉ jálíŋóŋ",    
        "phone":"Ja̱ldá̱w",
        "phone number":"dɨ́long boot",
        "tv":"Tʉske",
        "fridge":"Orány'iŋ torombo",
        "pillow":"Ta̱bʉ'ŋ géélíŋ /Bard",
        "bed":"Pɨtɨ́",
        "bedsheet":"mulpa",
        "soap":"sabʉn ,this is disputed",
        "knife":"sɨɨn",
        "plate":"moon",
        "lights":"erre ,sun light or electric",
        "light":"kullé (opposite of heavy",
        "heavy":"Dɨ́rró",
        "wall":"ergel",
        "satan":"erbet",
        "devil":"erbet",
        "arguement":"Galda",
        "free":"hóo",
        "neglected":"Hamíl",
        "ray":"herra",
        "stubborn":"Galgâl",
        "Ga̱w":"Ga̱w", 
        "easy":"Hǎ̱ɨn", 
        "steam":"Ha̱mʉ",
        "morning":"Subu",
        "right":"See",
        "picture":"Siba",
        "evening":"Arra",
        "ownerless":"hamîl",
        "heat":"Ha̱mʉ",
        "empty":"hóo",
        "bone oil":"subú",
        "celebration":"Sûbu",
        "function":"Sûbu",
        "together":"Arrá",
        "gentlemen":"Abbó",
        "lady":"Ammó",
        "fatherdom":"Âbba",
        "thing":"A̱rɨ",
        "something":"A̱rɨ",
        "two":"a̱w", 
        "advance":"a̱rmʉn",
        "tracking":"A̱ndɨŋ",
        "language":"belé",
        "tomato":"bandôra ,birinyjâl",
        "playing":"buda",
        "milk":"bora",
        "protection":"Darrága",
        "salute":"Dóŋá",
        "near":"Dakki",
        "closer":"Dakki",
        "that":"ila",
        "this":"in",
        "college":"ɨsó",
        "orpan":"îwra",
        "like this":"innâŋ",
        "moving":"ɨloŋ",
        "walking":"ɨloŋ",
        "came":"éla",
        "after tommorrow":"elel jaató",
        "ladder":"ɨlol",
        "passage":"oro",
        "road":"oro",
        "scorpion":"Nya̱mʉ́ro",
        "spider":" Nyééŋ",
        "gone":"nyanŋá",
        "went":"nyanŋá",
        "bathroom":"orrá",
        "door":"órré",
        "chest":"ógo",
        "plane":"dʉʉl",
        "device":"Tettesé",
        "camera":"Sibateer",
        "fan":"wɨ́rwɨ́r",
        "machine":"Sáágá",
        "car":"tɨrɨmbîl", 
        "computer":"Jɨɨl",
        "lighting":"jerreŋ",
        "television":"Tʉske",
        "teacher":"Gʉʉd palé",
        "agent":"kawíl",
        "princess":"méeram",
        "prince":"Báásí",
        "advisor":"Dɨmaŋgáwe",
        "minister":" bagal",
        "officer":"Tɨso",
        "leader":"Tɨ́bó",
        "hero":" ká̱ga̱l",
        "king":" ābakuri",
        "second":"sed",
        "minute":"selem",
        "hour":"tin",
        "present":"naa",
        "future":"elel",
        "moon":"Dúal",
        "month":"Dúal",
        "week":"kóllíŋ",
        "year":"Ayé",
        "past":"tóóíg",
        "application":"Jeeŋ",
        "tourism":"Têsta",
        "touring":"Têsta",
        "industry":"mɨɨrɨŋ",
        "health":"Tɨyyɨŋ",
        "engineer":"ʉsta",
        "engineering":"ʉstɨŋ",
        "intelligence":"A̱ndɨŋ",
        "economy":"Jomóro",
        "policy":"tiríjinne",
        "trade":"ma̱nda̱nyɨŋ",
        "bashr":"The fur lsnguage developer and data scientist Alumni of Rathinam college (india )",
        "group":"Daara",
        "library":"Rimba",
        "media":"Sambar",
        "heritage":"Tirge",
        "histroy":"Sime",
        "certificate":"Gǎar",
        "court":"Dʉrʉ́m",
        "culture":"Bʉllɨŋ",
        "organization":"páŋgátes",
        "center":"páŋgátʉró",
        "notebook":"Rimso",
        "book":"Dombore",
        "pencil":"seret",
        "pen":"seret",
        "student":"Majir",
        "school":"Soom",
        "law":"Murul",
        "teacher":" Gʉʉdpāālí",
        "professor":"Tɨsol",
        "pupil":"Dǐl",
        "blackboard":"Rimíŋsá̱rɨ́",
        "whiteboard":"Rimíŋsá̱rɨ́",
        "violence":"Durú",
        "excution":"jááso",
        "thefting":"ka̱mɨŋ",
        "theft":"ka̱mɨŋ",
        "robbing":"ka̱mɨŋ",
        "stealing":"ka̱mɨŋ",
        "steal":"ka̱mɨŋ",
        "bribe":" lɨ̂nkɨ",
        "betrayal":"ka̱rɨbooté",
        "enemy":"Gáarim",
        "balance":"Delladéllá",
        "scale":"Delladéllá",
        "rights":"ûluga",
        "criminal":"ka̱tʉrʉ̂g",
        "battle":"komôny",
        "movement":"Júnyúŋo",
        "release":"Jopó",
        "soliders":"Dǎlima",
        "protection":"Darrága",
        "fixed":"Daŋga",
        "constant":"Daŋga",
        "agitation":"kúmá",
        "zeal":"kúmá",
        "courage":"kúmá",
        "police":"ka̱lda̱ga",
        "support":" Jányíŋi",
        "spy":"Júto",
        "jokes":"buda",
        "also":"dog",
        "songs":"kona",
        "names":"kona",
        "name":"kona",
        "let":"Ǎw",
        "ours":"dáíŋ",
        "singer":"Sawâg",
        "black":"Dɨkkô",
        "red":"Pukkâ",
        "green":"Kɨrrô",
        "gray":"dɨɨdɨɨ",
        "yellow":"soóníŋkoro",
        "white":"pattâ",
        "orange":"banzêríŋ",
        "brown":"Daagulíŋ",
        "rosy":"door'íŋ",
        "maroon":"Aŋgará",
        "light blue":"Jaawilíŋ palaŋ",
        "dark light":"Jaawilíŋ da̱kkɨ́re",
        "brother":"Bára",
        "sister":" nɨw",
        "mother" : "Íya ",
        "brother ":"Bára",
        "Grandmother" :"Abo",
        "Grandfather" :"wʉ́o",
        "Grandpa's father " : "kʉʉkʉ́",
        "Son" : "kwědee ",
        "Daughter ": "kwěnɨw",
        "Uncle" : "maamá ", 
        "Aunt" :  "káala ",
        "Uncle ": "Ába'ŋ bára ",
        "aunt ":"Ányá",
        "Father in law" : "Magal",
        "mother in law ":" Maré",
        "nephew" : "Dalaŋ",
        "Cousin" : "Maamá / ányá'ŋ kwě ",
        "husband's sister":"Kóná",
        "Wife's sister" :" kórá ",
        "aunt ":"Ányá",
        "connection" : "Jʉ̌lʉp",
        "connect" :" Laddi",
        "beat" : "jotóíŋo",
        "hit": "Dag",
        "hurt":"Awra",
        "spell":"ja̱bbʉa",
        "Read ": "A̱rdɨŋ",
        "trust":"kilmá'ŋja̱bbɨa",
        "easy" : "kullê",
        "Hard ": "tárrâ",
        "marriage" : "juu / jangar",
        "write" : "rim",
        "listen" : "keljâm",
        "put ":"jaa",
        "accept" : "jɨɨn",
        "Delete ": "jááso",
        "pick":"jabu",
        "run ":"ja̱rrɨ",
        "drink" : "jaba",
        "sit" : "jôŋ",     
        "happiness" : "kilmá'ŋsɨmmɨŋ",
        "sad ": "mʉʉn",
        "sadness" :"mʉʉnɨŋ",
        "trouble" : "ra̱sɨ́e",
        "problem" :" kóór",
        "listen" : "keljâm",
        "frighten" :" ka̱lɨs já̱bɨ́",
        "easy ": "kullê",
        "hard" : "tárrâ",
        "marriage" : "juu / jangar",
        "engagement" : "kanyjáala / jǎ̱ɨ",
        "scarry" :" ka̱lɨ́ŋ-i",
        "مثلا ":" Kí mitíl",
        "بالفعل" :"innálaŋ",
        "احسن":"dom-ii",
        "يعني":"ee",
        "ذاتو":"bá",
        "تاريخ":"sime",
        "هسي":"naa",
        "اها":"híí",
        "الله":"Kʉopʉo",
        "كتاب":"dombore",
        "إذا كان":"atiŋ níŋ",
        "حالياً":"naa",
        "لحدي":"namaŋ",
        "زمان":"tóóríg",
        "حتى":"namaŋ",
        "سوق":"wěle",
        "صلاة":"jʉ̌m",
        "دين":"tá̱rɨ́",
        "دنيا":"da̱ldɨ",
        "حل":"jʉló",
        "نهاي":"pékkét",
        "تنازل":"tááyeŋ",
        "لكن":"marraŋ",
        "سليم":"teyyâ",
        "قضية":"da̱lɨ́me",
        "هل":"in lá lóŋ ",
        "ممكن":"in lá lóŋ",
        "بنسبة لي":"dúíŋ'íŋ",
        "قدم ":"ta̱bʉ'ŋ jáá",
        "لأن":"Ɨdɨ̂ɨ́ŋ",
        "على فكرة":"júúrú-le",
        "تحدي":"tǎrig",
        "لا لا":"lóolo",
        "خلاص":"haddu-ii",
        "قروش ":"leppéŋa",
        "مدرسة":"soom",
        "اي حاجة":"a̱rɨ bi a̱rɨ",
        "حاول":"jɨ́ɨ́gɨ́ŋí",
        "هسي حاليا":"naa tébbiŋ",
        "زمان":"tóóríg", 
        "مشكلة":"ʉʉ",
        "ابداً":"lóolo",
        "عامل فيها":"bá in la̱w",
        "لابد":"báníŋ",
        "راحة":"maaŋ/mʉrrɨŋ",
        "عكس":"soor",
        "رأي":"júúrú",
        "حاصل":"ɨndel",
        "ذات نفسو":"dééŋ suur",
        "معناتو":"áare-ii",
        "قلم":"seret",
        "إذن":"jɨɨn",
        "عمار":"jʉtʉ́mó",
        "سبب":"Ʉʉ",
        "رفق":"ka̱rɨ jʉ́lo",
        "على الطول":"wǎ̱rɨg",
        "خاطر":"dɨ́ɨ́ŋɨ́ŋ",
        "يوم":"sog",
        "اسبوع":"kóllíŋ",
        "شهر":"dǔwal",
        "سنة":"aayé",
        "بلد":"ba̱tʉ",
        "مال":"kaaŋíŋkwǎ",
        "بنطلون":"sôrte",
        "توب":"kalkâba",
        "كل":"nyét",
        "حاول":"jɨ́ɨ́gɨ́ŋí",
        "يا خي":"dúíŋ bára",
        "دور":"della",
        "سلام":"dóŋá'ŋ janí",
        "حفلة":"jawal",
        "عربية":"tɨrɨmbɨ́",
        "تلفون":"ja̱ldǎ̱w",
        "عصير":"líkkáŋa",
        "مطبخ":"tugul",
        "فنان":"sawwág",
        "اغنية":"kona",
        "تربيزة":"sidáb",
        "عجلة":"telele",
        "سكين":"dakkijǎ̱-ii",
        "صحة":"bedet",
        "مستوصف":"épéró",
        "طبيب":"Eper",
        "مستشفى":"épéró",
        "طب":"Eperiŋ",
        "مصباح":"weenyá",
        "لمبة":"weenyá",
        "نور":"weenyá",
        "كهرباء":"ulma",
        "كرسي":"kʉtɨ",
        "حيطة":"ergel",
        "باب":"tʉ́sʉ́",
        "مفتاح":"jǎ̱wlɨ",
        "طبلة":"gonyê",
        "ولع النار":"jʉos",
        "كبريت":"saaperet",
        "بسكويت":"sárâne",
        "زيناد":"saaperet",
        "حلاوة":"kʉrʉmkʉ́rʉm",
        "سكر":"líkkâ",
        "لم":"Dogol",
        "مكوة":"jʉrrʉ́ŋ/jʉy",
        "صابون":"salallâba",
        "جدول":"Sidǎb",
        "بالراحة":"kí maale",
        "برضو/أيضاً":"Dog",
        "بدأ":"Tuuŋas",
        "متين":"naán",
        "سنة الفاتت":"orŋǎny",
        "منافسة":"tǎrrig",
        "مناسبة":"sǔbu",
        "ساعة":"tin/dɨo",
        "أي":"bi",
        "رصيد":"sôŋgoŋa",
        "كتابة":"rim",
        "مدرسة":"soom",
        "جيران":"koska",
        "ظلم":"tʉ́ʉt",
        "شاي":"dʉrrɨ",
        "لافتة/يافتة":"sá̱á̱rɨ́",
        "كباية":"tíwís",
        "كويس":"taraas-ii",
        "جامع":"eram",
        "حلاقة":"já̱á̱lɨ",
        "جميل":"Tullê-ii",
        "كراس":"rimíŋsaŋgal",
        "رطوبة":"Ɨɨlo",
        "ندى":"uuyu",
        "مثل":"niná",
        "زي":"niná",
        "أسأل":"Jɨ́ɨ́ŋo",
        "سلم":"Ɨlol",
        "مستوى":"Ɨlol",
        "لوحة":"Sá̱á̱rɨ́",
        "وجع":"Wa̱y",
        "مرض":"Wa̱y",
        "سبورة":"Rimíŋsá̱á̱rɨ́",
        "تسجيل":"jɨɨgé",
        "توثيق":"jɨɨgé",
        "كهرباء":"Ulma",
        "نور":"weenyá",
        "سلك/حبل":"boot",
        "بوري/منبه":"dolpá",
        "حيوان":"karáb",
        "حشرة":"kalámsʉnnɨ́",
        "كعب":"Jɨttɨ",
        "عكس":"korroŋ",
        "عديل":"Wǎ̱rɨg",
        };

    const resultDiv = document.getElementById("result");
    if (dictionary[wordInput]) {
        resultDiv.innerHTML = `<strong>${wordInput}:</strong> ${dictionary[wordInput]}`;
    } else {
        resultDiv.innerHTML = `<strong>${wordInput}:</strong> Definition not found.`;
    }
}