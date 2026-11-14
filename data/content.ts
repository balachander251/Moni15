// =============================================================
// ALL TEXT, DATES, PHOTOS, AND MUSIC ARE CONFIGURED FROM THIS FILE ONLY.
// Change the values below to personalize the website.
// See README.md for the full guide.
// =============================================================

export type Photo = {
  /** Path to a photo file inside /public, e.g. "/photos/1.jpg". Leave "" if there's no photo yet. */
  src: string;
  alt: string;
  caption: string;
};

export type TimelineEvent = {
  date: string;
  description: string;
};

export const content = {
  // --- Identity ---
  partnerName: "MONIKA",
  senderName: "Balachander",
  age: "20",
  birthdayDate: "November 15",
  relationshipStartDate: "November 07, 2024",
  /**
   * The anniversary date in ISO format "YYYY-MM-DD", used to compute the
   * live "days together" counter automatically and in real time.
   * Leave "" if you don't want to show this counter.
   */
  relationshipStartDateISO: "2024-11-07" as string,

  /**
   * Optional countdown to when you'll next see each other in person, shown
   * next to the days-together counter. Since you only know the month (not
   * the exact day), this counts down to the 1st of that month rather than
   * pretending to know a precise date. Leave nextMeetupDateISO as "" to
   * hide this countdown entirely.
   */
  nextMeetupDateISO: "2027-11-15" as string,
  nextMeetupLocation: "Madagadipet",
  nextMeetupWhenLabel: "Next Birthday🥹",

  /**
   * Optional PIN code (any number of digits). When set, visitors must enter
   * this code on a lock screen before the site unlocks — a nice way to make
   * sure only the right person opens it. Leave "" to skip the PIN screen
   * entirely.
   */
  accessPin: "151106" as string,
  /** Optional hint shown on the lock screen to help them guess the PIN. Leave "" to hide it. */
  pinHint: "Hint: the date of angel born 💛",

  // --- Love letter (each item becomes one short paragraph) ---
  loveLetterParagraphs: [
    "Happy Birthday,Moni...Unakku enna sollanum, eppadi sollanum nu enakku theriyala. Ana en manasula un mela irukkura love a unakku sollanum nu romba nal aasapaduren."
    "Un smile enakku romba pudikkum.unnoda kovam ennaku romba romba pudikum.Ana idhellathayum vida, nee nee ya irukkuradhu dhaan enakku romba pidikkum. Unna vera yaar koodayum compare panna enakku thonadhu. Yenna, en manasukku special ah irukkuradhu nee mattum dhaan.❤️‍🩹"
    "Future eppadi irukkum nu namakku theriyadhu. Ana namma rendu perum orutharukku oruthar honest ah, caring ah, understanding oda irundhu, Future la namba love ok aagi azhaga maintain pannanum nu naan aasapaduren."
    "I Love You maa...🥹🫶",
  ] as string[],

  // --- Wishes & prayers ---
  wishesIntro: "A few things I keep hoping for you, Moni:",
  wishes: [
    "Nee eppovume healthy ah happy ah irukkanum. Un face la irukkura smile eppovume ippadiye irukkanum.",
    "Nee aasapadra ella vishayamum onu onna nadakkanum. Un dreams ellame seekirama nijamaaganum.",
    "Unna unmaiya nesikkura people eppovume un kooda irukkanum. Nee eppovume love um care um kidaichu happy ah irukkanum.",
    "Nee ivlo naala silent ah kashtapattu effort pottu senja ella vishayamum. indha 20s la onu onna nalla nadakka aarambikkanum. Nee aasapadra life a nee vaazhanum, un success a paathu nee perumai padanum.",
    "Un life la evlo problems vandhaalum, nee thaniya illa. Naan eppovume unakku support ah irukkanum-nu aasapaduren. Un happiness dhaan enakku romba mukkiyam. Unakku azhagaana life um, neraya happiness-um, nee deserve panra ella nalla vishayangalum kidaikkanum. Love you so much maa! ❤️🫂.",
  ] as string[],

  // --- Photos ---
  heroPhoto: {
    src: "/photos/3.png",
  } as Photo,
  closingPhoto: {
    src: "/photos/11.jpg.jpeg",
    alt: "Kutty angel",
    caption: "🥹",
  } as Photo,
  galleryPhotos: [
    {
      src: "/photos/2.png",
      alt: "",
      caption: "🫶",
    },
    {
      src: "/photos/1.jpg.jpeg",
      alt: "",
      caption: "💝",
    },


  ] as Photo[],

  // --- Relationship timeline ---
  timeline: [
    { date: "November 07, 2024", description: "The start of our story" },
    {
      date: "Somewhere in between",
      description:
        "Countless small moments that made me fall for you more than the last",
    },
    {
      date: "Every day since",
      description:
        "Learning what it means to actually love someone, one ordinary day at a time",
    },
    {
      date: "Today",
      description: "Still so many stories left for us to write together",
    },
  ] as TimelineEvent[],

  // --- Reasons why (each item becomes one flip card) ---
  reasonsWhy: [
    "Un smile pakkura apa enakku evlo mosamaana naal ah irundhaalum, andha naal kuda azhaga maathidum..🥹❤️",
    "Un kannu oru oru vaati paarkkumbodhum, enakku pudhusa oru santhosham kidaikkura maadhiri irukku..👀💗",
    "Un kuda pesitu irukkumbodhu, love na enna nu unmaiyaave feel panna Romba happy ah, peaceful ah, special ah feel panren..❤️‍🩹♾️",
    "En future ah pathi yosikkumbodhellaam, adhulayum nee en kuda irukkanum nu dhaan en manasu aasapadudhu..💍",
    "Nee happy ah irukkura dha paakuradhu dhaan enakku indha ulagathulaye romba pidicha vishayam..♾️",
    "Enakku perfect ah irukkura ponnu edhuvum thevai illa. Nee eppadi irukkiyo appadiye enakku nee podhum. Unna maathaama unnudaiya ella vishayathayum accept panni unna appadiye love pannanum nu dhaan aasapadura..🥹❤️",
  ] as string[],

  // --- About the distance (each item becomes one short paragraph) ---
  distanceParagraphs: [
    "Being far from you isn't easy, Moni. Some days it's just a text that takes a little longer to send. Other days it's really feeling every kilometer that's between us.",
    "But distance hasn't shrunk how much I care, it's actually made me notice it more. Every call, every good morning text, every little update about your day means more than you probably know.",
    "This part is temporary though. This October in Malang isn't just a date on a countdown, it's us finally getting to be in the same place again.",
  ] as string[],

  // --- When we meet (bucket list for the reunion) ---
  reunionBucketList: [
    "Meet pannura apa naa unna torture pannathuku first kal la vilunthu sry kekanum.",
    "Aparam Rendu perum nerukku ner kannu pathu pesanum.",
    "Konja thooram thaniya namba rendu perum nadakanum.",
    "Photo eduthu insta la story podanum,namba rendu perum sera mattom nu sonnavanga ellarum pakanum🥺.",
    "Last ahh poitu varanu sollama oru nalla feeling oda poganum.",
  ] as string[],

  // --- Surprise interactions ---
  hugMessage:
    "Sending you a warm hug, Moni. Even from far away, it still feels close.",
  secretButtonLabel: "One more thing",
  secretMessage: "I love you, Moni🥹, today and every day.",
  /** Tapping the generator button below shows a random line from this list. */
  sweetLines: [
    "You're my favorite notification.",
    "Distance is just a math problem, my feelings for you aren't.",
    "If missing you was a sport, I'd have a trophy by now.",
    "I'd cross time zones just to hear you laugh.",
    "You're the best part of my day, every single day.",
    "Still not tired of you. Never will be.",
  ] as string[],

  // --- Background music ---
  // Put an audio file in public/music/ and fill in the path here, e.g. "/music/song.mp3"
  // A direct URL to an audio file also works — but it must point straight at
  // the audio file itself, not a YouTube/Spotify/Apple Music page. A page
  // link (like music.youtube.com/watch?v=...) will not play; the <audio>
  // tag can only stream an actual .mp3/.ogg/.wav file.
  songUrl: "/music/about-you.mp3" as string,
  songTitle: "MONI❤️",
};

export type Content = typeof content;
