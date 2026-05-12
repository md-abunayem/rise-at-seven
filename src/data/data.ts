
export type NavItem = {
  label: string;
  href: string;
};

export type HeroBackgroundImage = {
  url: string;
};

export type HeroBrands = {
    url: string;

}

export type AgencyItem = {
  url: string;
}

export type ServiceItem = {
  title: string;
  image: string;
};

export type WorkItem = {
  title: string;
  category: string;
  year: string;
  metric: string;
};

export type StoryBlock = {
  eyebrow: string;
  title: string;
  body: string;
};

export type NewsItem = {
  profile: string;
  url: string;
  author: string;
  time: string;
  title: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NavCardInfo = {
  label: string;
  url: string,
  label1: string;
  label2?: string;
  label3?: string;
  label4?: string;
}

export type featureWork = {
  texts: string[];
  images: string[];
  buttonText: string[];
  hoverText?: string[];  
  hoverBg?: string[];    
}

export type card = {
  bg: string;
  textColor: string;
  subColor: string;
  title: string;
  body: string;
  image: string;
}

export const navItems: NavItem[] = [
  { label: "Services +", href: "#services" },
  { label: "Industries +", href: "#industries" },
  { label: "International +", href: "#international" },
  { label: "About +", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Careers", href: "#careers" },
  { label: "Blog & Resources +", href: "#news" },
  { label: "Webinar", href: "#webinar" },
];


export const HeroBackgroundImage: HeroBackgroundImage = {
    url: "https://images.pexels.com/photos/17220088/pexels-photo-17220088.jpeg"
}

export const HeroBrands: HeroBrands[] = [
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=590d094eb1537f802651cf997f550bbb"},
    {
        url: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=e302afbd58f1be1cd9a3b75a2d8969fe"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQejvC61EYwPZdAelKgG1Oto4WMn4mXA2ylQ&s"
    },
    {
        url: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=8ab3593005a19fec2b91467ddd4869ea"
    }

]


export const services: ServiceItem[] = [
  {
    title: "Digital PR",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Search & Growth Strategy",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Data & Insights",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Organic Social & Content",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Content Experience",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Onsite SEO",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const featuredWork: WorkItem[] = [
  {
    title: "SIXT",
    category: "Car rental",
    year: "2023–2025",
    metric: "An extra 3m clicks regionally through SEO",
  },
  {
    title: "Dojo - B2B",
    category: "Card Machines",
    year: "2021–2025",
    metric: "A B2B success story for Dojo card machines",
  },
  {
    title: "Magnet Trade - B2B",
    category: "Trade",
    year: "2023–2024",
    metric: "A full service SEO success story",
  },
  {
    title: "Leading E Sim brand globally",
    category: "Esims",
    year: "2023–2025",
    metric: "Increasing brand and non-brand visibility",
  },
  {
    title: "JD Sports",
    category: "Trainers",
    year: "2025",
    metric: "65% up YoY in clicks",
  },
  {
    title: "Parkdean Resorts",
    category: "Easter Breaks",
    year: "2019–2025",
    metric: "Dominating Google and AI search",
  },
];

export const storyBlocks: StoryBlock[] = [
  {
    eyebrow: "Legacy in the Making",
    title: "Pioneers",
    body:
      "We create the industry narrative that others follow. Creative SEO, multi-channel search, Digital PR, and Social Search all sit inside the same growth system.",
  },
  {
    eyebrow: "Award Winning",
    title: "79 awards and counting",
    body:
      "Build the social-proof section with a strong visual block, badges, or a simple counter layout.",
  },
  {
    eyebrow: "Speed",
    title: "Ideas to result within 60 minutes",
    body:
      "This section should feel sharp, editorial, and fast, with strong typography and a bold contrast block.",
  },
];

export const newsItems: NewsItem[] = [
  {
    profile: "https://images.pexels.com/photos/17218597/pexels-photo-17218597.png",
    url: "https://images.pexels.com/photos/5921978/pexels-photo-5921978.jpeg",
    author: "Ray Saddiq",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
  },
  {
    profile: "https://images.pexels.com/photos/17218597/pexels-photo-17218597.png",
    url: "https://images.pexels.com/photos/35038788/pexels-photo-35038788.jpeg",
    author: "Ray Saddiq",
    time: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
  },
  {
    profile: "https://images.pexels.com/photos/20454420/pexels-photo-20454420.jpeg",
    url: "https://images.pexels.com/photos/18999366/pexels-photo-18999366.jpeg",
    author: "Carrie Rose",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
];




export const footerLinks = {
  col1: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Culture", href: "#culture" },
    { label: "Meet The Risers", href: "#team" },
  ],
  col2: [
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog & Resources", href: "#blog" },
    { label: "Webinars", href: "#webinars" },
    { label: "Careers", href: "#careers" },
  ],
  col3: [
    { label: "Sheffield", href: "#sheffield" },
    { label: "Manchester", href: "#manchester" },
    { label: "London", href: "#london" },
    { label: "New York", href: "#new-york" },
    { label: "Contact", href: "#contact" },
  ],
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
];

export const NavCardInfos: NavCardInfo[] = [
  {
    label: "Industries +",
    url: "https://images.pexels.com/photos/7993903/pexels-photo-7993903.jpeg",
    label1: "B2B Marketing",
  },
  {
    label: "International +",
    url: "https://images.pexels.com/photos/7005059/pexels-photo-7005059.jpeg",
    label1: "US Digital PR",
    label2: "Spain Digital PR",
    label3: "Germany Digital PR",
    label4: "Netherlands Digital PR",
  },
  {
    label: "About +",
    url: "https://images.pexels.com/photos/6766242/pexels-photo-6766242.jpeg",
    label1:"About us",
    label2: "Meet with Risers",
    label3: "Culture",
    label4: "Testimonials",
  },
  {
    label: "Blog & Resources +",
    url: "https://images.pexels.com/photos/7654408/pexels-photo-7654408.jpeg",
    label1:"Blog",
    label2: "Category Leadership",
    label3: "Multichannel Search Report",
  }
]


export const featureWorkData: featureWork = {
  texts: [
    "SIXT",
    "Dojo - B2B",
    "Magnet",
    "Trade - B2B",
    "Leading E Sim",
    "Brand globally",
    "JD Sports",
    "Parkdean Resorts",
    "Pooky",
    "Parkdean Resorts",
    "Revolution Beauty",
    "Loydes Pharmacy",
    "Pretty Little Thing",
  ],
  images: [
    "https://images.pexels.com/photos/31977049/pexels-photo-31977049.jpeg",
    "https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg",
    "https://images.pexels.com/photos/8266765/pexels-photo-8266765.jpeg",
    "https://images.pexels.com/photos/6927372/pexels-photo-6927372.jpeg",
    "https://images.pexels.com/photos/28841683/pexels-photo-28841683.jpeg",
    "https://images.pexels.com/photos/18681768/pexels-photo-18681768.jpeg",
    "https://images.pexels.com/photos/32480089/pexels-photo-32480089.jpeg",
    "https://images.pexels.com/photos/12485500/pexels-photo-12485500.jpeg",
    "https://images.pexels.com/photos/4612149/pexels-photo-4612149.jpeg",
    "https://images.pexels.com/photos/35259839/pexels-photo-35259839.jpeg",
    "https://images.pexels.com/photos/10438441/pexels-photo-10438441.jpeg",
  ],
  buttonText: [
    "Car Rental",
    "Card Machines",
    "Trade",
    "Esims",
    "Trainers",
    "Easter Breaks",
    "Rechargeable Lights",
    "UK Holidays",
    "Beauty Dups",
    "STI Tests",
    "Outfits",
  ],
  hoverText: [
    "An extra 3 clicks regional reach through SEO",
    "Seamless B2B payment flows that convert",
    "Magnetic content that attracts the right buyers",
    "Global trade made simple and borderless",
    "Leading eSIM coverage across 190+ countries",
    "Build a brand the whole world recognises",
    "Fresh drops that keep sneakerheads coming back",
    "Easter breaks the whole family will remember",
    "Rechargeable lights that set the perfect mood",
    "UK holidays worth every single mile",
    "Beauty dupes that outperform the originals",
  ],
  hoverBg: [
    "#C8602A",
    "#2A4FC8",
    "#C8A52A",
    "#2AA87A",
    "#8B2AC8",
    "#C82A6B",
    "#2A8BC8",
    "#4CAF50",
    "#C8602A",
    "#2AC8B5",
    "#C82A2A",
  ],
};


export const cards: card[] = [
  {
    bg: "bg-black",
    textColor: "text-white",
    subColor: "text-white/70",
    title: "Pioneers",
    body: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.\n\nWe're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    bg: "bg-[#bff7e8]",
    textColor: "text-slate-900",
    subColor: "text-slate-700",
    title: "Award Winning",
    body: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    bg: "bg-white",
    textColor: "text-slate-900",
    subColor: "text-slate-500",
    title: "Speed",
    body: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
];