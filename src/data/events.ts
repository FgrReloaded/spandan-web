export type EventGuideline = {
  index: string;
  title: string;
  description: string;
};
export type Event = {
  id: string;
  poster?: string;
  title: string;
  category: string;
  quote?: string;
  description: string;
  guidelines: EventGuideline[];
  conclusionText?: string;
  coordinators?: {
    index: string;
    name: string;
    phone: string;
  }[];
  theme?: {
    gradientFrom: string;
    gradientTo: string;
    textColor: string;
  };
  icon?: string;
  secondaryIcon?: string;
  registrationLink?: string;
};
export const events: Event[] = [
  {
    "id": "photobooth-contest",
    "title": "Photobooth & Photography Contest",
    "category": "PHOTOGRAPHY EXPERIENCE",
    "poster": "/photoboothp.jpg",
    "quote": "Photography is the story we fail to put into words!!!",
    "description": "Step into the world of creativity and capture unforgettable moments with DRISHTI – The Photography Club at Spandan 2025! We bring you an exciting Photo Booth experience and an exhilarating Photography Competition that will test your skills, vision, and storytelling through the lens.",
    "guidelines": [
      {
        "index": "I",
        "title": "Photo Booth – Capture the Magic!",
        "description": "A special setup with aesthetic backgrounds, props, and professional lighting, where you can click mesmerizing pictures and create lasting memories."
      },
      {
        "index": "II",
        "title": "Photography Competition – The Ultimate Challenge!",
        "description": "A thrilling contest where photographers compete to capture the best moments of Spandan and win exciting prizes!"
      },
      {
        "index": "III",
        "title": "Date",
        "description": "5th April 2025 (Night Time)"
      },
      {
        "index": "IV",
        "title": "Venue",
        "description": "KC Ground"
      },
      {
        "index": "V",
        "title": "Highlights",
        "description": "Professional lighting & creative backdrops / Fun props for unique pictures"
      }
    ],
    "conclusionText": "Don't miss this chance to showcase your photography skills and take home memories that will last a lifetime!",
    "theme": {
      "gradientFrom": "violet-500",
      "gradientTo": "indigo-600",
      "textColor": "violet-700"
    },
    "icon": "<path fill-rule=\"evenodd\" d=\"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z\" clip-rule=\"evenodd\" />",
    "secondaryIcon": "<path d=\"M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z\" /><path fill-rule=\"evenodd\" d=\"M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z\" clip-rule=\"evenodd\" />",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdjfhJLKsdhjfksdhfKJSHF/viewform"
  },  
  {
    id: "battle-of-dance",
    title: "Battle of Dance: Nrityanjali",
    category: "DANCE COMPETITION",
    poster: "/dancep.jpg",
    quote: "'Dance is the hidden language of the soul' – Martha Graham",
    description: "Get ready to step, spin, and stun at the Battle of Dance – Spandan 2K25! This electrifying showdown is where rhythm meets passion, and dancers battle it out for the ultimate title. Whether you groove to hip-hop, glide through contemporary, or bring your own unique style, this is your stage to shine! Feel the adrenaline, own the spotlight, and make every move count! Expect high-energy performances, breathtaking routines, and fierce competition—all in one unforgettable night!",
    guidelines: [
      {
        index: "I",
        title: "Categories",
        description: "Solo, Duo, and Group performances will be judged together—no separate categories."
      },
      {
        index: "II",
        title: "Performance Duration",
        description: "Minimum 2 minutes, maximum 4 minutes per act."
      },
      {
        index: "III",
        title: "Group Size",
        description: "Minimum 4 members, maximum 8 members per team."
      },
      {
        index: "IV",
        title: "Code of Conduct",
        description: "Vulgarity and nudity are strictly prohibited. Any form of obscenity will result in immediate disqualification."
      },
      {
        index: "V",
        title: "Final Say",
        description: "The judges' decision is final—no appeals or disputes."
      },
      {
        index: "VI",
        title: "Facilities",
        description: "A green room will be provided for costume changes."
      },
      {
        index: "VII",
        title: "Recognition",
        description: "All participants will receive certificates of appreciation."
      }
    ],
    conclusionText: "The rhythm is calling—are you ready to answer? Bring your best moves, set the stage on fire, and make history at Spandan 2K25!",
    theme: {
      gradientFrom: "fuchsia-600",
      gradientTo: "purple-500",
      textColor: "fuchsia-700"
    },
    icon: `<path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />`,
    secondaryIcon: `<path d="M12 4.929l-2.122 2.121c-.317.318-.483.716-.505 1.125A2.99 2.99 0 018 10a2.99 2.99 0 01-1.373-.325c-.409-.022-.807-.188-1.125-.505L3.515 7.184A7 7 0 0012 4.929zm3.707-.707a7 7 0 00-7.97 1.677L9.879 8.04c.024.016.045.035.068.054.023-.019.044-.038.068-.054l2.122-2.121zM5 12a3 3 0 110-6 3 3 0 010 6zm7 0a3 3 0 110-6 3 3 0 010 6zm7 0a3 3 0 110-6 3 3 0 010 6z" />`,
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSe_RelascpKbf75dlMxwooqgZMN77s1bNMR2Bne-A3kLe7VUA/viewform?usp=send_form"
  },
  {
    id: "kavya-sandhya",
    title: "KAVYA SANDHYA-SPANDAN 2K25",
    category: "POETRY COMPETITION",
    poster: "/kavyap.jpg",
    quote: "Poetry Club, GLA University – Where Words Dance and Dreams Whisper!!!",
    description: "Welcome to the realm where Emotions Find Melody, Thoughts Paint Visions, and Words Weave Magic! At the Poetry Club of GLA University, we believe in the alchemy of poetry – where ink meets paper, and souls connect. Each year, we bring to life the enchanting evening of Kavya Sandhya during Spandan, the Annual Cultural Fest of GLA University. This isn't just an event; it's an experience where words breathe, and verses sing. Inter-university poets compete, battling with metaphors and emotions, vying for exciting prize money and certificates.",
    guidelines: [
      {
        index: "I",
        title: "Eligibility",
        description: "Open to all university students with a valid ID card."
      },
      {
        index: "II",
        title: "Registration",
        description: "Participants must register in advance to secure their spot."
      },
      {
        index: "III",
        title: "Poetry Type",
        description: "Only Original Poetry is allowed. Poems must be self-composed."
      },
      {
        index: "IV",
        title: "Language",
        description: "Poetry can be presented in Hindi or English."
      },
      {
        index: "V",
        title: "Time Limit",
        description: "Maximum 4 minutes per performance. Exceeding the time limit may lead to disqualification."
      },
      {
        index: "VI",
        title: "Theme and Content",
        description: "No restriction on theme/ Hate speech, vulgarity, or any offensive language will result in immediate disqualification."
      }
    ],
    conclusionText: "But the magic doesn't end there! Kavya Sandhya is graced by the presence of celebrated poets, witty comedians, and poet-comedians whose words dance between laughter and thought, leaving the audience mesmerized and inspired. If you're a poet yearning to be heard, an admirer of art, or someone who simply craves an evening of soulful entertainment, Kavya Sandhya is where you need to be. Come, be a part of the magic. Let your words echo, and your dreams take flight!",
    theme: {
      gradientFrom: "amber-600",
      gradientTo: "orange-500",
      textColor: "amber-700"
    },
    icon: `<path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />`,
    secondaryIcon: `<path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />`,
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScaXlcqDiAuJMchyrYa4XpfKK35xRC9oAUj7xd9bbMABLkr5w/viewform"
  },
  {
    id: "shutter-showdown",
    title: "SHUTTER SHOWDOWN – FREEZE THE FEST!",
    category: "PHOTOGRAPHY COMPETITION",
    poster: "/shutterp.jpg",
    quote: "Capture the Magic, Frame the Unforgettable!!!",
    description: "Dristi Club invites you to Spandan's ultimate photography battle! From raw emotions to breathtaking moments, this is your chance to turn time into timeless art. Every shot tells a story—will yours be the one that stands out?",
    guidelines: [
      {
        index: "I",
        title: "Theme",
        description: "Revealed during the event—stay sharp!"
      },
      {
        index: "II",
        title: "Editing",
        description: "Allowed, but the soul of the shot must stay untouched."
      },
      {
        index: "III",
        title: "Submission Deadline & Judging Criteria",
        description: "Announced during the event."
      },
      {
        index: "IV",
        title: "Judging Factors",
        description: "Creativity, Composition, Storytelling."
      }
    ],
    conclusionText: "Can you capture Spandan's heartbeat in a single frame? Pick up your camera & join the showdown! Spandan 2K25 is waiting—will your lens steal the spotlight?",
    coordinators: [
      {
        index: "I",
        name: "Milan Awasthi",
        phone: "+91 9452115253"
      },
      {
        index: "II",
        name: "Satvik Gupta",
        phone: "+91 95328 30295"
      },
      {
        index: "III",
        name: "Ayush Chauhan",
        phone: "+91 90451 33410"
      },
      {
        index: "IV",
        name: "Uday Gupta",
        phone: "+91 9314554397"
      }
    ],
    theme: {
      gradientFrom: "teal-500",
      gradientTo: "sky-500",
      textColor: "teal-700"
    },
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />`,
    secondaryIcon: `<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGiGmTwdAEWqln6BDZ1UdWPQc2KTOaawsMJYSwM1sxx9wmSA/viewform"
  },
  {
    id: "abhivyakti-film",
    title: "ABHIVYAKTI – SHORT FILM MAKING COMPETITION",
    category: "FILMMAKING",
    poster: "/abhivyaktip.jpg",
    quote: "Lights, Camera, Expression!!!",
    description: "Pratibha Club presents ABHIVYAKTI, where your vision takes center stage! This is your chance to craft compelling stories, ignite emotions, and showcase your film-making brilliance. Whether you're a budding director or a passionate storyteller, let your creativity unfold on the screen!",
    guidelines: [
      {
        index: "I",
        title: "Theme",
        description: "Open to all genres, but must uphold ethical storytelling."
      },
      {
        index: "II",
        title: "Duration",
        description: "1 to 3 minutes."
      },
      {
        index: "III",
        title: "Format",
        description: "MP4 or MOV, minimum resolution 1080p."
      },
      {
        index: "IV",
        title: "Must Include",
        description: "Shots of SPANDAN 2K25 and PRATIBHA CLUB GLAU."
      },
      {
        index: "V",
        title: "Language",
        description: "Any (Non-English/Hindi films must have subtitles)."
      },
      {
        index: "VI",
        title: "Originality",
        description: "No plagiarism or unauthorized footage—violators will be disqualified!"
      },
      {
        index: "VII",
        title: "Submission Deadline",
        description: "6th April, 4 PM via Google Drive."
      },
      {
        index: "VIII",
        title: "Judging Criteria",
        description: "Creativity, Storytelling, Cinematography, Editing, and Impact."
      }
    ],
    conclusionText: "Your story deserves to be seen! Are you ready to bring your vision to life?",
    coordinators: [
      {
        index: "I",
        name: "Adarsh Sikarwar",
        phone: "+91 7668632437"
      },
      {
        index: "II",
        name: "Anurag Tomar",
        phone: "+91 8273417638"
      },
      {
        index: "III",
        name: "Ansh Garg",
        phone: "+91 7248848020"
      },
      {
        index: "IV",
        name: "Ayush Chaubey",
        phone: "+91 9864906758"
      }
    ],
    theme: {
      gradientFrom: "slate-700",
      gradientTo: "stone-600",
      textColor: "slate-700"
    },
    icon: `<path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clip-rule="evenodd" />`,
    secondaryIcon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdbQ3Uz22Rd6wDbZN4mqbf3Oh7jmh-6c1mkNr6nP41Xbz28Sg/viewform"
  },
  {
    id: "masterchef-gla",
    title: "MASTERCHEF GLA",
    category: "CULINARY COMPETITION",
    poster: "/masterchefp.jpg",
    quote: "Unleash Your Culinary Genius!!!",
    description: "Do you have the skills to turn ingredients into masterpieces? MasterChef GLA is back, challenging food lovers to showcase their creativity, innovation, and passion for cooking! It's more than a competition—it's a culinary adventure where plating meets storytelling, and flavors leave a lasting impression! Step into the kitchen and unleash your culinary creativity as you compete in high-stakes cooking challenges, transforming ideas into extraordinary dishes. Impress the judges with your innovation and presentation, showcasing artistic plating and impeccable food styling. Gain valuable insights from culinary experts through interactive Q&A sessions, where you'll learn exclusive tips and tricks to refine your skills. As the competition heats up, only the most talented chef will rise to claim the prestigious title of MasterChef GLA!",
    guidelines: [
      {
        index: "I",
        title: "PRELIMINARY ROUND (Non-Fire Round)",
        description: "Date: 29th March 2025. Time: 2:30 PM. Venue: Faculty Mess. Chopping Round (10 min) – 10 Marks (Cubes, Julienne, Fine Chop, etc.). Innovative Dish Preparation (1 hour). Creativity & Innovation, Ingredient Knowledge, Presentation & Taste, Identify ingredients in 2 minutes (10 marks each: Total: 50 Marks)."
      },
      {
        index: "II",
        title: "FINAL ROUND (Fire Round)",
        description: "Date: 5th April 2025. Time: 11:00 AM. Venue: Academic Block IV. Top 8 Finalists will receive a personalized apron & ₹2000 cash prize! Challenge: Innovation in Starter & Dessert (1 hour). Innovation (5 marks), Presentation (5 marks), Taste (10 marks)."
      }
    ],
    conclusionText: "Aprons on, spatulas ready – are you the next MasterChef GLA?",
    coordinators: [
      {
        index: "I",
        name: "Tarun Agrawal",
        phone: "+91 73106 26045"
      },
      {
        index: "II",
        name: "Niharika Yadav",
        phone: ""
      },
      {
        index: "III",
        name: "Gungun Agrawal",
        phone: ""
      },
      {
        index: "IV",
        name: "Shraddha Sharma",
        phone: ""
      }
    ],
    theme: {
      gradientFrom: "yellow-500",
      gradientTo: "red-600",
      textColor: "amber-700"
    },
    icon: `<path d="M12 8.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 12.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM10.5 9.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM10.5 15a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V15zM13.5 9.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM13.5 15a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V15zM18 11.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V12a.75.75 0 01.75-.75zM18 15.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM16.5 12.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM16.5 18a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V18zM19.5 12.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM19.5 18a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V18zM6 11.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V12a.75.75 0 01.75-.75zM6 15.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.5 12.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM4.5 18a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V18zM7.5 12.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM7.5 18a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V18z" />`,
    secondaryIcon: `<path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" /><path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />`
  },
  {
    id: "rangrez-2025",
    title: "RANGREZ 2025 – ART COMPETITION",
    category: "ART SHOWCASE",
    poster: "/rangrezp.jpg",
    quote: "An artist is not just a creator; they are a dreamer who colors the world with their vision!!!",
    description: "Under the vibrant celebration of Spandan 2025, the Kaleidos Club of GLA University presents Rangrez 2025—a tribute to the power of art and imagination. The term \"Rangrez\" originates from Persian, meaning a dyer—one who weaves magic with colors. But beyond its literal sense, Rangrez is the soul of an artist, infusing life and meaning into every stroke of their creation. It symbolizes love, enlightenment, and transformation—just as Krishna was to Mirabai or a mentor is to a seeker. Inspired by Sufi philosophy and artistic passion, Rangrez 2025 invites you to create art that speaks to the soul. Let your brush dance with colors, your imagination run wild, and your art tell a story!",
    guidelines: [
      {
        index: "I",
        title: "Theme-Based Art",
        description: "Participants must create sketches or paintings that reflect the essence of Rangrez in any form."
      },
      {
        index: "II",
        title: "Medium",
        description: "All art mediums are allowed (watercolor, oil, acrylic, mixed media, etc.)."
      },
      {
        index: "III",
        title: "Participation Limit & Fee",
        description: "Limited to 50 participants (Register early!)/Outside students: ₹150 participation fee."
      },
      {
        index: "IV",
        title: "Art Supplies",
        description: "Participants must bring their own materials."
      },
      {
        index: "V",
        title: "Awards & Recognition",
        description: "Cash prizes for Winner & Runner-up."
      }
    ],
    conclusionText: "Unleash your creativity, express your soul, and let your colors shine! Be a part of Rangrez 2025 and make your art unforgettable!",
    coordinators: [
      {
        index: "I",
        name: "Mahak singh",
        phone: "+91 8475857040"
      },
      {
        index: "II",
        name: "Gajendra Sharma",
        phone: "+91 9760716956"
      },
      {
        index: "III",
        name: "Aditya",
        phone: "+91 95556 24006"
      },
      {
        index: "IV",
        name: "Maitry",
        phone: "+91 8630094140"
      }
    ],
    theme: {
      gradientFrom: "purple-500",
      gradientTo: "pink-500",
      textColor: "purple-700"
    },
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />`,
    secondaryIcon: `<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7XsrHYp3B16xR4vcG0oaqZ2EVXoAg0k-eTgfq2muVFw5Xug/viewform"
  },
  {
    id: "echo-2025",
    title: "ECHO 2K25 – Engage | Challenge | Harness | Orate",
    category: "PUBLIC SPEAKING",
     poster: "/echop.jpg",
    quote: "Where words ignite, with prevails, and knowledge conquers!!!",
    description: "Let Literario Club host you to Step into ECHO, the ultimate battle of oratory, and intellect. From legendary speeches to uncovering lies, simplifying the complex to rapid-fire showdowns—do you have what it takes to win?",
    guidelines: [
      {
        index: "I",
        title: "Iconic Speech Monologue (Solo – ELIMINATION)",
        description: "Deliver a legendary speech—Mandela, MLK, Kalam—and face a surprise judge's question! Time: 2-3 mins/ Criteria: Clarity, delivery, impact/ Elimination: Top 50% advance"
      },
      {
        index: "II",
        title: "The Misinformation Round (Group – NON-ELIMINATION)",
        description: "Each team presents one fact, one lie. Opponents have 2 minutes to expose the fake! Teams: 3-4 members/ Bonus: Winning team gains an advantage in the next round (No eliminations—just mind games!)"
      },
      {
        index: "III",
        title: "Reverse TED-Talk (Solo/Duo – ELIMINATION)",
        description: "Explain a tough concept (Blockchain? Relativity?) in the simplest way possible. Time: 2 mins/ Criteria: Clarity, creativity, engagement/ Elimination: Bottom 30-40% eliminated"
      },
      {
        index: "IV",
        title: "FINAL ROUND: Rapid Fire GK (Winner Deciding Round)",
        description: "Answer 10 rapid-fire questions on history, science, literature, current affairs. Time: 5 secs per question/ Scoring: Correct answer = 1 point, Highest scorer wins!"
      },
      {
        index: "V",
        title: "EVENT FLOW (4 Hours)",
        description: "a. Round 1: Speech Monologue – 1.5 hrs (Elimination). b. Round 2: Misinformation Round – 45 mins (Non-Elimination). c. Round 3: Reverse TED-Talk – 45 mins (Elimination). d. Final Round: Rapid Fire GK – 30 mins (Winner Deciding Round). e. Awards & Closing – 15 mins"
      }
    ],
    conclusionText: "Think fast. Speak smart. Win big. ECHO 2K25 is calling—will you rise to the challenge?",
    coordinators: [
      {
        index: "1",
        name: "Nishant Mandhyan",
        phone: "+91 96288 05086"
      },
      {
        index: "2",
        name: "Shubhigya Sharma",
        phone: "+91 7055484212"
      },
      {
        index: "3",
        name: "Samridhi Singh",
        phone: ""
      },
      {
        index: "4",
        name: "Drishti Dohle",
        phone: ""
      }
    ],
    theme: {
      gradientFrom: "blue-500",
      gradientTo: "sky-600",
      textColor: "blue-700"
    },
    icon: `<path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" /><path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />`,
    secondaryIcon: `<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdLKX3_CycE9yZGlBwLUbG6rCNVpj-ySJ95tKtWjF3VbpYvBg/viewform"
  },
  {
    id: "mehendi-nail-art",
    title: "Palm Bloom & Nail Artistry",
    category: "CREATIVE ARTS",
    poster: "/artistryp.jpg",
    quote: "Get ready to turn hands into canvases and nails into masterpieces!!!",
    description: "Unleash your creativity and artistic flair in the Mehendi & Nail Art Competition at Spandan 2K25, GLA University, Mathura! Whether you master the intricate elegance of Mehendi or craft mesmerizing nail art, this is your moment to shine and leave an unforgettable mark.",
    guidelines: [
      {
        index: "I",
        title: "Mehendi Competition",
        description: "The design must be original and freehand—no stencils allowed."
      },
      {
        index: "II",
        title: "Mehendi Competition",
        description: "Time Limit: 90 minutes."
      },
      {
        index: "III",
        title: "Mehendi Competition",
        description: "Designs can be traditional, Arabic, or contemporary."
      },
      {
        index: "IV",
        title: "Mehendi Competition",
        description: "Only one hand (palm to forearm) should be decorated."
      },
      {
        index: "V",
        title: "Mehendi Competition",
        description: "Participants must bring their own cones, tissues, and other necessary materials."
      },
      {
        index: "VI",
        title: "Mehendi Competition",
        description: "Judging Criteria: Neatness, Creativity, Symmetry, and Overall Presentation."
      },
      {
        index: "VII",
        title: "Nail Art Competition",
        description: "Participants must bring their own nail brushes, tools, and raw materials."
      },
      {
        index: "VIII",
        title: "Nail Art Competition",
        description: "Time Limit: 90 minutes."
      },
      {
        index: "IX",
        title: "Nail Art Competition",
        description: "Designs can be thematic or freestyle."
      },
      {
        index: "X",
        title: "Nail Art Competition",
        description: "No artificial nails/extensions—art must be done on natural nails."
      },
      {
        index: "XI",
        title: "Nail Art Competition",
        description: "The use of stones, stickers, and embellishments is allowed but should not overpower the design."
      },
      {
        index: "XII",
        title: "Nail Art Competition",
        description: "Judging Criteria: Creativity, Precision, Color Combination, and Overall Appeal."
      },
      {
        index: "XIII",
        title: "Note",
        description: "The university will NOT provide raw materials. Participants are required to bring their own supplies."
      }
    ],
    conclusionText: "Are you ready to let your designs bloom? Let the strokes of art speak for themselves and make a statement at Spandan 2K25!",
    coordinators: [
      {
        index: "I",
        name: "Durgesh",
        phone: "+91 9304357100"
      },
      {
        index: "II",
        name: "Sneha",
        phone: "+91 94571 29892"
      },
      {
        index: "III",
        name: "Tishya Jha",
        phone: "+91 63075 23052"
      },
      {
        index: "IV",
        name: "Akansha Singh",
        phone: "+91 93055 34645"
      }
    ],
    theme: {
      gradientFrom: "orange-500",
      gradientTo: "pink-600",
      textColor: "orange-700"
    },
    icon: `<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />`,
    secondaryIcon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScaXlcqDiAuJMchyrYa4XpfKK35xRC9oAUj7xd9bbMABLkr5w/viewform"
  },
  {
    id: "battle-of-bands",
    title: "Battle of Bands: Rhythm Riot",
    category: "MUSIC SHOWCASE",
    poster: "/bandsp.jpg",
    quote: "Strings will scream! Drums will thunder! The stage will set itself on fire!",
    description: "Are you ready to make the world feel your sound? Can your music make the crowd go wild? Do you have the power to set the stage on fire? If you believe in the magic of your sound, then Battle of Bands is your moment to dominate the stage and own the night! Get ready for an electrifying showdown where the best bands bring their A-game, competing for the ultimate rockstar title! Witness raw energy, unmatched passion, and mind-blowing performances as bands battle it out to prove who rules the stage.",
    guidelines: [
      {
        index: "I",
        title: "Reporting Time",
        description: "Bands must arrive at 4:30 PM sharp."
      },
      {
        index: "II",
        title: "Performance",
        description: "1 Round | 20 minutes total (includes 5 minutes setup time)."
      },
      {
        index: "III",
        title: "Gear Up",
        description: "Bands must bring their own instruments (A 5-piece drum kit with a double-kick bass pedal will be provided)."
      },
      {
        index: "IV",
        title: "Be on Time",
        description: "All members must be backstage 15 minutes before their performance slot—failure to do so will lead to disqualification."
      },
      {
        index: "V",
        title: "Responsibility",
        description: "Organizers are not liable for broken equipment or injuries."
      },
      {
        index: "VI",
        title: "Rewards",
        description: "All participants will receive certificates!"
      }
    ],
    conclusionText: "Are you ready to battle it out and claim the throne? Let the Battle of Bands begin!",
    coordinators: [
      {
        index: "I",
        name: "Devansh sharma",
        phone: "+91 9119337617"
      },
      {
        index: "II",
        name: "Shreyash khamtan",
        phone: "+91 90586 94654"
      },
      {
        index: "III",
        name: "Srikant Chaubey",
        phone: "+91 74179 81757"
      },
      {
        index: "IV",
        name: "Rupam ganguly",
        phone: "+91 81715 51712"
      }
    ],
    theme: {
      gradientFrom: "purple-700",
      gradientTo: "pink-700",
      textColor: "purple-600"
    },
    icon: `<path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />`,
    secondaryIcon: `<path d="M9 9.348c0 .804.603 1.352 1.328 1.328 9.542-.309 9.534-15.336 0-15.652C9.603-5 9 -4.452 9 -3.648v13zm1.212-11.12c6.649.227 6.65 9.007 0 9.237V-1.772zM7.5-2.25a.75.75 0 01.75.75v14.5a.75.75 0 01-1.5 0v-14.5a.75.75 0 01.75-.75zm12 7a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75zM12 8.25a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75zm12-4.5a.75.75 0 01.75.75v9.5a.75.75 0 01-1.5 0v-9.5a.75.75 0 01.75-.75z" />`,
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdjfhJLKsdhjfksdhfKJSHF/viewform"
  },
  {
    id: "battle-of-singing",
    title: "Battle of Singing: Swaranirmaya",
    category: "MUSIC COMPETITION",
    poster: "/singingp.jpg",
    quote: "Step into the spotlight and let your voice soar!!!",
    description: "Whether you're a seasoned performer or an emerging talent, this is your moment to own the stage, captivate the audience, and let your voice shine. From soulful ballads to electrifying anthems, this competition isn't just about winning—it's about celebrating your passion for music! So, are you ready to hit the high notes and steal the show? The mic is waiting—let the music begin!",
    guidelines: [
      {
        index: "I",
        title: "PERFORMANCE CATEGORIES",
        description: "Solo: One singer, one spotlight!"
      },
      {
        index: "II",
        title: "PERFORMANCE CATEGORIES",
        description: "Duet: A team of two—harmony at its best! (More than two participants will be considered a group.)"
      },
      {
        index: "III",
        title: "PERFORMANCE CATEGORIES",
        description: "Group: Up to 5 participants—bring the energy!"
      },
      {
        index: "IV",
        title: "GENERAL RULES",
        description: "Participants must bring their own tracks/karaoke."
      },
      {
        index: "V",
        title: "GENERAL RULES",
        description: "Time limit: 2.5 - 3 minutes per performance."
      },
      {
        index: "VI",
        title: "GENERAL RULES",
        description: "Want to play an instrument? Bring your own gear!"
      }
    ],
    conclusionText: "Get ready to sing your heart out and own the stage!",
    coordinators: [
      {
        index: "I",
        name: "Devansh sharma",
        phone: "+91 9119337617"
      },
      {
        index: "II",
        name: "Swapnil Dayal",
        phone: "+91 95601 70141"
      },
      {
        index: "III",
        name: "Srikant Chaubey",
        phone: "+91 74179 81757"
      },
      {
        index: "IV",
        name: "Anupam Paul",
        phone: "+91 70800 29766"
      }
    ],
    theme: {
      gradientFrom: "violet-600",
      gradientTo: "fuchsia-500",
      textColor: "violet-700"
    },
    icon: `<path d="M9 9.348c0 .804.603 1.352 1.328 1.328 9.542-.309 9.534-15.336 0-15.652C9.603-5 9 -4.452 9 -3.648v13zm1.212-11.12c6.649.227 6.65 9.007 0 9.237V-1.772zM7.5-2.25a.75.75 0 01.75.75v14.5a.75.75 0 01-1.5 0v-14.5a.75.75 0 01.75-.75zm12 7a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75zM12 8.25a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75zm12-4.5a.75.75 0 01.75.75v9.5a.75.75 0 01-1.5 0v-9.5a.75.75 0 01.75-.75z" />`,
    secondaryIcon: `<path d="M12 3.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zm1.25 8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm4-15a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM14.25 6a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm-12.5 0a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM5 16.75a.75.75 0 000 1.5h14a.75.75 0 000-1.5H5z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf6xQEom_kPdzsSYHw5a-B1K6dLp8f45FTZO6mGyhVFdR3Rcw/viewform"
  },
  {
    id: "sanskriti-sangam",
    title: "Sanskriti Sangam – A Celebration of Indian Craftsmanship",
    category: "CRAFT FAIR",
    poster: "/sangamp.jpg",
    quote: "Art is the heartbeat of culture, and craftsmanship is its soul!!!",
    description: "Hosted by AIKYAM – The Cultural Club, Sanskriti Sangam is an annual craft fair that brings to life the rich and diverse traditions of Indian craftsmanship. Step into a world of vibrant handlooms, intricate pottery, exquisite textiles, stunning jewelry, mesmerizing paintings, and much more, as skilled artisans from across India gather to showcase their masterpieces. This celebration of art, culture, and heritage invites you to experience the beauty and intricacies of handcrafted works while supporting local artisans and their timeless skills. Whether you are an art enthusiast, a student, or a member of the local community, Sanskriti Sangam offers something for everyone.",
    guidelines: [
      {
        index: "I",
        title: "Mandatory Stall Registration Fee",
        description: "₹200/-"
      },
      {
        index: "II",
        title: "Stall Setup",
        description: "Provided by the University"
      },
      {
        index: "III",
        title: "Stall Decoration",
        description: "Participants must bring necessary tools for stall decoration"
      },
      {
        index: "IV",
        title: "Timings",
        description: "10:30 AM to 06:00 PM"
      },
      {
        index: "V",
        title: "Prize Details",
        description: "Winner: ₹2500/-/ Runner-Up: ₹1000/-"
      },
      {
        index: "VI",
        title: "Second Runner-Up",
        description: "Certificate of Appreciation"
      },
      {
        index: "VII",
        title: "Judging",
        description: "The decision of the judges shall be final and binding"
      }
    ],
    conclusionText: "Join us for a day of creativity, culture, and community spirit, and immerse yourself in the artistry that defines India's rich heritage. Come, explore, and celebrate the artistry of India at Sanskriti Sangam 2025, proudly hosted by AIKYAM – The Cultural Club!",
    coordinators: [
      {
        index: "I",
        name: "Sushant Bhattarai",
        phone: "+91 8979130726"
      },
      {
        index: "II",
        name: "Dishant Gupta",
        phone: "+91 9643146458"
      },
      {
        index: "III",
        name: "Chayan Sachdeva",
        phone: "+91 7037618508"
      },
      {
        index: "IV",
        name: "Aastha",
        phone: "+91 6207759835"
      }
    ],
    theme: {
      gradientFrom: "green-500",
      gradientTo: "teal-600",
      textColor: "green-700"
    },
    icon: `<path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" /><path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" /><path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />`,
    secondaryIcon: `<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe54qR1ttYStq-hZLfg5fGkimXudAwjX5I0hd78tWbHA9hNfQ/viewform?usp=sharing"
  },
  {
    id: "fashion-show",
    title: "JALWA-E-COUTURE: FASHION SHOW - SPANDAN 2K25",
    category: "FASHION & STYLE",
    poster: "/fashionp.jpg",
    quote: "Fashion isn't just about trends—it's about making a statement!",
    description: "Fashion is not just about trends; it's about making a statement. Get ready to mesmerize the audience with your charisma and elegance at Spandan 2K25! GLA University, Mathura, invites you to a Fashion Show where creativity meets glamour. This is your chance to showcase your personality, embrace your uniqueness, and walk the ramp like a celebrity. Whether you love bold styles or elegant designs, this event is for everyone who believes fashion is a way of life. Get ready to dazzle and make a lasting impression!",
    guidelines: [
      {
        index: "I",
        title: "Group Participation",
        description: "Each team/group can have a maximum of six participants."
      },
      {
        index: "II",
        title: "Theme Selection",
        description: "Teams must select their own themes for the performance and get them approved by the organizers."
      },
      {
        index: "III",
        title: "Music Finalization",
        description: "Each group is responsible for selecting and finalizing the music for their walk."
      },
      {
        index: "IV",
        title: "Decency & Ethics",
        description: "Vulgarity, inappropriate exposure, or any act that may offend public sentiment is strictly prohibited. Any violation will result in immediate disqualification."
      },
      {
        index: "V",
        title: "Attire & Accessories",
        description: "Participants must ensure that their outfits and accessories align with the event's theme while adhering to cultural and ethical values."
      },
      {
        index: "VI",
        title: "Outfit & Makeup Responsibility",
        description: "Participants are responsible for their own outfits, makeup, and props. Organizers will not provide any items."
      },
      {
        index: "VII",
        title: "Props",
        description: "Any props used must be safe and non-hazardous."
      },
      {
        index: "VIII",
        title: "Backstage Discipline",
        description: "Participants must maintain discipline and cooperate with event coordinators. Misconduct or misbehavior may lead to disqualification."
      },
      {
        index: "IX",
        title: "Judging Criteria",
        description: "Groups will be judged based on creativity, confidence, theme relevance, coordination, walk, and overall impact."
      },
      {
        index: "X",
        title: "Awards & Recognition",
        description: "The winning group will receive special prizes. Prizes will also be awarded for Best Male Model and Best Female Model. Every participant will receive a certificate of appreciation."
      },
      {
        index: "XI",
        title: "Organizer's Decision",
        description: "The jury's and event organizers' decisions will be final and binding."
      }
    ],
    conclusionText: "Be bold, be stylish, and be YOU at the most awaited Fashion Show of Spandan 2K25!",
    coordinators: [
      {
        index: "I",
        name: "Kritik Pachauri",
        phone: "+91-9568133782"
      },
      {
        index: "II",
        name: "Yash Gupta",
        phone: "+91-8533017236"
      },
      {
        index: "III",
        name: "Bhavna Vashishtha",
        phone: "+91-9045464529"
      },
      {
        index: "IV",
        name: "Prakriti Singh",
        phone: "+91-6396979916"
      }
    ],
    theme: {
      gradientFrom: "rose-500",
      gradientTo: "purple-600",
      textColor: "rose-700"
    },
    icon: `<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-12c.128 0 .254.016.375.047l8 2A.999.999 0 0 1 22 7v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9.528l-6 1.5V12a1 1 0 0 1-1 1h-1v8h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2v-8H9a1 1 0 0 1-1-1v-.972l-6-1.5V13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7c0-.441.293-.83.712-.948l8-2A1.17 1.17 0 0 1 9 4h.5V2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V4z" />`,
    secondaryIcon: `<path d="M2.75 3a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zM6.5 8c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0115.75 12h-7.5A1.75 1.75 0 016.5 10.5V8zm1.75-.25a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-7.5zm-4 5.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H4.25z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeJUNpb8DRA1x2chX5HpNdQj2bfcb_vDnZd5bxHcR_S1lIK_A/viewform"
  },
  {
    id: "battle-of-wits",
    title: "BATTLE OF WITS – SPANDAN 2K25",
    category: "DEBATE COMPETITION",
    poster: "/witsp.jpg",
    quote: "Where words cut deeper than swords!!!",
    description: "Think you have the brains, boldness, and brilliance to outsmart your opponents? Welcome to Battle of Wits—the ultimate intellectual showdown at Spandan 2K25! This isn't just a debate—it's a battlefield of logic, strategy, and wit! Step up, challenge perspectives, counter with confidence, and leave the audience in awe.",
    guidelines: [
      {
        index: "I",
        title: "Team Duel",
        description: "Debates are fought in teams of two!"
      },
      {
        index: "II",
        title: "Hot Topics",
        description: "Revealed 24 hours before the event—time to plan your attack!"
      },
      {
        index: "III",
        title: "Fast-Paced Rounds",
        description: "3 minutes to present your case. 2 minutes for a fiery rebuttal."
      },
      {
        index: "IV",
        title: "Language of War",
        description: "English or Hindi—your choice!"
      },
      {
        index: "V",
        title: "Fair Play Only",
        description: "No personal attacks, offensive language, or disrespect—instant disqualification for rule-breakers!"
      },
      {
        index: "VI",
        title: "Judgment Day",
        description: "Winners judged on content, clarity, counter-arguments, style, and impact!"
      }
    ],
    conclusionText: "Presented by Saturangle Club, this event is your chance to showcase your intellect, wit, and fearless debating skills. The mic is waiting. The battlefield is set. Are you ready to make your voice echo? Let the Battle of Wits begin!!!",
    coordinators: [
      {
        index: "I",
        name: "Ujjawal Singh",
        phone: "+91-9693-019593"
      },
      {
        index: "II",
        name: "Ajeet Kumar",
        phone: "+91-93895 69486"
      },
      {
        index: "III",
        name: "Raghav Gupta",
        phone: "+91-85329 44789"
      },
      {
        index: "IV",
        name: "Granth Garg",
        phone: "+91-923163 88485"
      }
    ],
    theme: {
      gradientFrom: "blue-600",
      gradientTo: "cyan-500",
      textColor: "blue-700"
    },
    icon: `<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />`,
    secondaryIcon: `<path d="M3.75 2.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V3.25a.75.75 0 00-.75-.75H3.75zM2 3.25A2.25 2.25 0 014.25 1h15.5A2.25 2.25 0 0122 3.25v16.5A2.25 2.25 0 0119.75 22H4.25A2.25 2.25 0 012 19.75V3.25zm10.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 3a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDyylOxgKwfS-HdNeJxUsM3-1Hobchey1joh7XfcFYl1d3-w/viewform?usp=send_form"
  },
  {
    id: "colors-of-india",
    title: "Colors of India: Saptarangi Utsav",
    category: "CULTURAL SHOWCASE",
    poster: "/indiap.jpg",
    quote: "A TAPESTRY OF TRADITION, CULTURE & DIVERSITY",
    description: "India is a world in itself—woven with colors, cultures, and countless stories!!! Kicking off the much-awaited Spandan 2K25, Colors of India sets the stage for an unforgettable cultural journey. From the crimson reds of bustling markets to the golden glow of ancient temples, every hue in India tells a story of heritage, emotion, and celebration.",
    guidelines: [
      {
        index: "I",
        title: "Cultural Diversity",
        description: "India's cultural diversity is a vibrant spectacle, with each region adding its unique charm to this grand mosaic. Rajasthan and Gujarat reflect royal heritage and timeless traditions, while Punjab and Karnataka radiate energy and spirited vibrancy. Bengal and Odisha captivate with soulful expressions of art and folklore, while Kerala and Tamil Nadu embody serene grace and classical grandeur."
      },
      {
        index: "II",
        title: "Dance Forms",
        description: "Dance—the heartbeat of India's cultural spirit—showcases artistic brilliance across the nation. Witness the swirling grace of Kalbelia, Ghoomar, Langa, and Bhavai from Rajasthan, the electrifying beats of Bhangra from Punjab, the elegance of Lavani from Maharashtra and Madhya Pradesh, and the joyous rhythms of Bihu from Assam. Experience the dramatic storytelling of Kathakali and the strength of Kalaripayattu from Kerala and Tamil Nadu, alongside the vibrant Garba of Gujarat."
      },
      {
        index: "III",
        title: "Celebration",
        description: "Through music, dance, and tradition, Colors of India celebrates the beauty of diversity and the spirit of unity. It's more than a performance—it's a tribute to the heartbeat of our nation, where culture is not just preserved but passionately lived."
      }
    ],
    conclusionText: "Come, be part of this mesmerizing journey. Let's celebrate the Colors of India!!!",
    coordinators: [
      {
        index: "I",
        name: "Dr. Brijesh Goswami",
        phone: "+91 80576 64447"
      },
      {
        index: "II",
        name: "Dr. Shilpi Pathak",
        phone: "+91 87554 72114"
      },
      {
        index: "III",
        name: "Dr. Ruchika Kulshrestha",
        phone: "+91 97581 86888"
      }
    ],
    theme: {
      gradientFrom: "amber-500",
      gradientTo: "red-600",
      textColor: "amber-700"
    },
    icon: `<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />`,
    secondaryIcon: `<path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdjfhJLKsdhjfksdhfKJSHF/viewform"
  },
  {
    id: "drama-competition",
    title: "SPANDAN DRAMA COMPETITION 2K25",
    category: "PERFORMING ARTS",
    poster: "/dramap.jpeg",
    quote: "Drama is like a dream—an illusion that may not be real, but its impact is deeply felt!!!",
    description: "If you have the passion to captivate, inspire, and entertain with your dramatic skills, this stage is yours. Spandan, GLAU invites you to an electrifying Drama Competition—a celebration of storytelling, emotions, and creativity. Whether it's a gripping tragedy, a thought-provoking social satire, or a hilarious comedy, bring your best act and mesmerize the audience!",
    guidelines: [
      {
        index: "I",
        title: "Performance Duration",
        description: "Group Acts: Maximum 10 minutes / Mono Acts: Maximum 8 minutes"
      },
      {
        index: "II",
        title: "Language",
        description: "English, Hindi, or bilingual (short phrases from other languages are allowed)"
      },
      {
        index: "III",
        title: "Team Size",
        description: "Group acts can have a maximum of 6 members"
      },
      {
        index: "IV",
        title: "Content",
        description: "Performances must be original or adapted from any play or book"
      },
      {
        index: "V",
        title: "Decency & Ethics",
        description: "Inappropriate content, obscenity, or vulgarity will lead to disqualification"
      },
      {
        index: "VI",
        title: "Final Verdict",
        description: "The judges' decision is final and binding"
      },
      {
        index: "VII",
        title: "Recognition",
        description: "All participants will receive certificates of appreciation"
      }
    ],
    coordinators: [
      {
        index: "I",
        name: "Tarang Gupta",
        phone: "+91-93104 09295"
      },
      {
        index: "II",
        name: "Harsh Bhardwaj",
        phone: "+91-91383 69566"
      },
      {
        index: "III",
        name: "Ishita Agarwal",
        phone: "+91-88584 94800"
      },
      {
        index: "IV",
        name: "Ashish Kumar",
        phone: "+91-80761 94421"
      }
    ],
    theme: {
      gradientFrom: "indigo-600",
      gradientTo: "purple-600",
      textColor: "indigo-700"
    },
    icon: `<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-5 8.5l.004-.004L7 10.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm9.938-.063c.551 0 .999.448.999 1s-.448 1-1 1-1-.448-1-1 .449-1 1.001-1zm-8.37 7.295c-1.147-1.265-.415-2.233.242-2.732.665-.506 1.447-.232 1.932.27.52-.271 1.321-.647 2.258-.647.943 0 1.743.376 2.264.647.484-.502 1.267-.776 1.932-.27.657.5 1.389 1.467.242 2.732-.63.702-1.682 1.112-2.656 1.262-.803.124-1.562.127-1.781.127-.22 0-.98-.003-1.782-.127-.974-.15-2.025-.56-2.656-1.262z" />`,
    secondaryIcon: `<path d="M13.988 12.582c.292.311.718.515 1.169.515 1.473 0 1.929-1.297 1.929-2.049.76-2.581-.799-2.634-1.881-2.634-.575 0-1.017.337-1.22.653l-.012-.011c.94-3.437-2.344-4.29-3.561-3.862-.136-1.318-1.676-2.194-2.912-2.194-2.405 0-2.564 2.539-1.809 5.023-.65.502-1.102 1.046-1.325 1.669-.786 2.262 1.096 4.802 4.616 3.246.845 1.133 1.953 1.72 3.250 1.72 1.648 0 3.043-.392 4.056-1.076zm-1.856-.293c-.292-.804-.598-1.381-.598-1.381-.647.277-1.176.198-1.176-1.055 0-.946-.258-1.509-.636-1.781-.641-.463-1.674.132-1.674 1.26 0 1.314 1.088 2.03 2.016 2.763.925.734 1.802 1.194 2.068.194zm-6.57-3.779c-.3 0-.543.456-.543 1.02s.243 1.02.543 1.02.543-.456.543-1.02-.243-1.02-.543-1.02z" />`,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfitI__wyb2YbuP3tALEbVKAyuVrJNIHyGQx4C7WONfk5dVsA/viewform"
  }
];