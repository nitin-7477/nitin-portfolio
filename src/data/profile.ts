const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Nitin Gautam",
  handle: "nitin-gautam",
  title: "React Native Developer",
  openToWork: true,
  photoUrl: asset("nitin-profile.png"),
  tagline:
    "Building scalable React Native apps for Android & iOS — 3.5+ years shipping production apps.",
  intro: `Based in Gwalior, India. I ship mobile apps used by 1M+ users — from healthcare platforms to ecommerce and real-time apps. Open to full-time roles and freelance projects.`,
  location: "Gwalior, Madhya Pradesh",
  country: "India",
  experienceIncludes: [
    "React Native",
    "Expo",
    "Reanimated 4",
    "Firebase",
    "Healthcare Apps",
    "Ecommerce",
    "Payments",
    "CI/CD",
  ],
  email: "gautam.nitinji@gmail.com",
  phone: "+91-7477235745",
  linkedin: "https://www.linkedin.com/in/nitin-gautam-286b12291/",
  github: "https://github.com/nitin-7477",
  resumeUrl: asset("Nitin_Gautam_Resume.pdf"),
  yearsOfExperience: "3.5+",

  about: `React Native Developer with 3.5+ years of experience building scalable, high-performance cross-platform mobile applications for Android and iOS. Skilled in React Native CLI, Expo, and Expo migration, with strong expertise in integrating third-party SDKs, Firebase services, analytics tools, and payment gateways. Experienced in full-stack development using Node.js and Express.js with MongoDB.`,

  bento: {
    headline: "Let's build it together.",
    featured: {
      image: "nitin-profile.png",
      title: "Mobile development",
      text: "goes beyond shipping features — it's about embedding performance, polish, and reliability into every screen to craft apps people actually love using.",
    },
    stack: {
      label: "Core stack I ship with",
      items: ["React Native", "Expo", "TypeScript", "Firebase", "Reanimated 4"],
    },
    metrics: [
      { value: "10+", label: "Apps published on stores" },
      { value: "1M+", label: "Users reached in production" },
    ],
    mentality: {
      title: "Mentality",
      text: "Continuously evolving post-launch — guided by analytics, crash reports, and user feedback to keep every release focused and sharp.",
      pills: ["Build", "Ship", "Scale"],
    },
  },

  stats: [
    { label: "Years of Experience", value: "3.5+" },
    { label: "Apps Published", value: "10+" },
    { label: "Users Reached", value: "1M+" },
    { label: "Platforms Shipped", value: "2" },
  ],

  journey: {
    title: "My React Native Journey",
    paragraphs: [
      `I started my mobile development career at Numeric Infosystem in Gwalior, where I built my first cross-platform apps and learned the fundamentals of React Native — from REST API integration to performance optimization on real devices.`,
      `At Qurilo Solution in Delhi, I deepened my skills working directly with clients, integrating third-party libraries, and shipping polished UI/UX across Android and iOS. I learned how to translate business requirements into reliable mobile features.`,
      `Today at Primotech, I work on a large-scale medical application with over 1 million downloads. I led the Expo SDK migration, set up CI/CD pipelines for automated builds and OTA updates, and integrated Firebase Crashlytics, Analytics, and Mixpanel — turning a production app into a measurable, maintainable platform.`,
      `Along the way I've shipped ecommerce apps, esports platforms, HRMS systems, real-time betting apps, and bike servicing solutions — each teaching me something new about payments, push notifications, real-time data, and what it takes to publish on both stores.`,
    ],
  },

  specializations: [
    {
      title: "Expo & Native Modules",
      description:
        "Expo SDK migrations, OTA updates, force app updates, and bridging native Android/iOS capabilities when the app demands it.",
      icon: "📦",
    },
    {
      title: "Payments & Wallets",
      description:
        "Razorpay, Cashfree, and secure transaction flows — deposits, withdrawals, OTP verification, and wallet systems.",
      icon: "💳",
    },
    {
      title: "Firebase Ecosystem",
      description:
        "Firestore, Crashlytics, Analytics, push notifications, Realtime DB, and location-based features like punch-in/out.",
      icon: "🔥",
    },
    {
      title: "Real-Time & Performance",
      description:
        "Socket.io live updates, Reanimated 4 animations, memory optimization, and reducing load times on production apps.",
      icon: "⚡",
    },
    {
      title: "Analytics & Monitoring",
      description:
        "Mixpanel event tracking, Firebase Analytics, Google Ads integration, and crash reporting for data-driven decisions.",
      icon: "📊",
    },
    {
      title: "CI/CD & DevOps",
      description:
        "Bitbucket Pipelines, automated builds, App Store & Play Store deployments, and streamlined release workflows.",
      icon: "🚀",
    },
  ],

  favoriteTools: [
    "React Native",
    "Expo",
    "TypeScript",
    "Redux Toolkit",
    "React Navigation",
    "Reanimated 4",
    "Firebase",
    "Node.js",
    "MongoDB",
    "Socket.io",
    "GraphQL",
    "Mixpanel",
    "Lottie",
    "Figma",
    "Git",
    "Android Studio",
    "Xcode",
    "Postman",
  ],

  learning: [
    {
      name: "Reanimated 4",
      icon: "✨",
      tag: "Animations",
      description:
        "Mastering the latest Reanimated APIs — shared values, layout animations, and gesture-driven UI that runs at 60fps on the UI thread.",
    },
    {
      name: "Expo Router",
      icon: "🧭",
      tag: "Navigation",
      description:
        "Exploring file-based routing and universal apps with the latest Expo navigation patterns.",
    },
    {
      name: "React Native New Architecture",
      icon: "🏗️",
      tag: "Performance",
      description:
        "Diving into Fabric, TurboModules, and JSI for better native performance at scale.",
    },
    {
      name: "Kotlin & Swift Bridging",
      icon: "🔗",
      tag: "Native",
      description:
        "Strengthening native module development for deeper Android and iOS integrations.",
    },
    {
      name: "EAS Workflows",
      icon: "⚙️",
      tag: "DevOps",
      description:
        "Advanced CI/CD with EAS Build, Submit, and Update for fully automated release pipelines.",
    },
  ],

  hobbies: [
    {
      name: "Mobile UI Trends",
      icon: "🎨",
      tag: "Design",
      description:
        "I enjoy studying modern app interfaces — animations, gestures, and micro-interactions that make apps feel native and delightful.",
    },
    {
      name: "Open Source",
      icon: "🌐",
      tag: "Community",
      description:
        "Contributing to and exploring React Native libraries on GitHub. I believe in learning by reading and improving real codebases.",
    },
    {
      name: "Tech Communities",
      icon: "💬",
      tag: "Networking",
      description:
        "Following RN ecosystem updates, release notes, and developer discussions to stay current with the mobile stack.",
    },
    {
      name: "Problem Solving",
      icon: "🧩",
      tag: "Debugging",
      description:
        "Debugging tricky production issues — from memory leaks to payment edge cases — is oddly satisfying to me.",
    },
  ],

  skills: [
    {
      category: "Mobile",
      items: [
        "React Native CLI",
        "Expo",
        "Redux Toolkit",
        "React Navigation",
        "Reanimated 4",
        "Lottie",
      ],
    },
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "HTML/CSS", "Java", "Kotlin"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "GraphQL"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "Firebase Firestore", "Realtime DB"],
    },
    {
      category: "Tools & Services",
      items: [
        "Firebase",
        "Mixpanel",
        "Git",
        "CI/CD",
        "Figma",
        "Android Studio",
        "Xcode",
      ],
    },
  ],

  experience: [
    {
      company: "Primotech Pvt Ltd.",
      role: "Software Engineer",
      period: "June 2025 – Present",
      highlights: [
        "Working on a large-scale medical application with 1M+ downloads across Android and iOS.",
        "Led Expo SDK migration and built CI/CD pipelines for automated builds and OTA updates.",
        "Set up Firebase Crashlytics, Analytics, and Mixpanel for real-time monitoring.",
        "Collaborated with cross-functional teams to deliver scalable healthcare solutions.",
      ],
    },
    {
      company: "Qurilo Solution Pvt Ltd.",
      role: "React Native Developer",
      location: "Nawada, Delhi",
      period: "March 2024 – May 2025",
      highlights: [
        "Enhanced app functionality using third-party libraries for Android and iOS.",
        "Implemented error handling and optimized code for smoother performance.",
        "Designed user-friendly interfaces and managed API integrations.",
        "Collaborated with clients to gather feedback and deliver aligned features.",
      ],
    },
    {
      company: "Numeric Infosystem Pvt Ltd.",
      role: "React Native Developer",
      location: "Gwalior, Madhya Pradesh",
      period: "October 2022 – February 2024",
      highlights: [
        "Built and maintained cross-platform apps with focus on performance.",
        "Integrated RESTful APIs with backend teams for reliable data flow.",
        "Worked on web applications to broaden full-stack understanding.",
        "Improved app performance, reducing load times and memory usage.",
      ],
    },
  ],

  featuredProjects: [
    {
      name: "Medical Community App",
      category: "Healthcare · 1M+ Downloads",
      tech: ["React Native", "Expo", "Firebase", "Mixpanel"],
      story: `The flagship project I'm currently working on at Primotech — a large-scale medical platform used by doctors and healthcare professionals across India. I led the Expo SDK migration to unlock advanced native integrations and built CI/CD pipelines for automated builds and over-the-air updates.`,
      highlights: [
        "Medical case sharing, communities, groups, and specialty feeds",
        "Quizzes, draft-based posting, and trending content",
        "Push notifications, force updates, and Google Ads integration",
        "Firebase Crashlytics & Mixpanel for real-time monitoring",
      ],
      links: { playStore: "#", appStore: "#", label: "View on App Store" },
    },
    {
      name: "Fritha & GwaliorBasket",
      category: "Ecommerce · Full Stack",
      tech: ["React Native", "Next.js", "GraphQL", "Razorpay"],
      story: `Built two complete ecommerce experiences from scratch — product browsing, cart, checkout, and order management on mobile, paired with a Next.js admin panel for inventory and order control. GraphQL kept data fetching efficient across both apps.`,
      highlights: [
        "Dual ecommerce apps with shared Redux Toolkit architecture",
        "Admin panel for products, orders, and inventory management",
        "Razorpay payment integration for seamless checkout",
        "GraphQL API layer for optimized data loading",
      ],
      links: { playStore: "#", appStore: "#", label: "View on Play Store" },
    },
    {
      name: "BetNinja",
      category: "Real-Time · Gaming",
      tech: ["React Native", "Socket.io", "Razorpay"],
      story: `A real-time betting platform where timing is everything. Multiple game durations, a wallet system for deposits and withdrawals, and live updates powered by Socket.io — all wrapped in a React Native app that had to feel instant on every interaction.`,
      highlights: [
        "Real-time gameplay with Socket.io live updates",
        "Wallet system with Razorpay deposits & withdrawals",
        "Multiple game duration modes",
        "Low-latency UI optimized for live interactions",
      ],
      links: { playStore: "#", appStore: "#", label: "View on Play Store" },
    },
    {
      name: "Bike Servicing App",
      category: "On-Demand Services",
      tech: ["React Native", "Node.js", "Razorpay"],
      story: `An on-demand bike servicing platform — users book repairs, battery replacements, and inspections while mechanics get real-time assignments through an admin panel. OTP-based service verification and Razorpay payments keep every transaction secure.`,
      highlights: [
        "Booking flow for repairs, battery, inspections & insurance",
        "OTP-based service start and completion verification",
        "Real-time mechanic tracking for users and admins",
        "Published on both Play Store and App Store",
      ],
      links: { playStore: "#", appStore: "#", label: "View on Play Store" },
    },
  ],

  projects: [
    {
      name: "Medical Community App",
      tech: ["React Native", "Firebase", "Mixpanel", "Expo"],
      description:
        "Large-scale medical app with 1M+ downloads. Features case sharing, communities, quizzes, push notifications, OTA updates, and ad integrations.",
      links: { playStore: "#", appStore: "#" },
    },
    {
      name: "HRMS App",
      tech: ["React Native", "TypeScript", "Firebase"],
      description:
        "HR management system with attendance, leave management, selfie punch-in/out, and location tracking.",
      links: { playStore: "#", appStore: "#" },
    },
    {
      name: "GKEsports",
      tech: ["React Native", "Cashfree"],
      description:
        "Esports platform for joining tournaments and winning real money with integrated payment gateway.",
      links: { playStore: "#", appStore: "#" },
    },
    {
      name: "Fritha & GwaliorBasket",
      tech: ["React Native", "Next.js", "Redux", "GraphQL", "Razorpay"],
      description:
        "Two ecommerce apps with cart, checkout, and order management. Admin panel built in Next.js with GraphQL.",
      links: { playStore: "#", appStore: "#" },
    },
    {
      name: "BetNinja",
      tech: ["React Native", "Socket.io", "Razorpay"],
      description:
        "Real-time betting app with multiple game durations, wallet system, and live updates via Socket.io.",
      links: { playStore: "#", appStore: "#" },
    },
    {
      name: "Bike Servicing App",
      tech: ["React Native", "Node.js", "Razorpay"],
      description:
        "Bike servicing platform for repairs, battery replacement, and insurance with OTP verification and mechanic tracking.",
      links: { playStore: "#", appStore: "#" },
    },
  ],

  education: [
    {
      school: "Jiwaji University, Madhya Pradesh",
      degree: "Bachelor of Science in Computer Science",
      period: "Mar 2020 – Mar 2023",
    },
    {
      school: "Madhya Pradesh Board of Secondary Education",
      degree: "12th Grade",
      period: "Mar 2018 – Mar 2019",
    },
  ],
};
