// src/data/portfolio.ts

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  tagline: string;
  category: "fullstack" | "realtime" | "ai_ml" | "java_core" | "dsa_cpp";
  categoryLabel: string;
  featured: boolean;
  role: string;
  description: string;
  longDescription: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  demoType: "ecommerce" | "chat" | "campus" | "dsa" | "fraud" | "sniffer" | "generic";
  colorScheme: {
    accent: string;
    badgeBg: string;
    badgeText: string;
    border: string;
  };
}

export interface CatalogProject {
  title: string;
  description: string;
  category: "JAVA" | "React" | "Full Stack" | "Data Science" | "Machine Learning" | "C++";
  categoryKey: "fullstack" | "realtime" | "ai_ml" | "java_core" | "dsa_cpp";
  githubLink: string;
  technologies: string[];
  stars?: number;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  tagline: string;
  skills: {
    name: string;
    level: string;
    percentage: number;
    description: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface EducationMilestone {
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  description: string;
  scores?: { label: string; value: string; highlight?: boolean }[];
  highlights: string[];
  badge: string;
}

export const PERSONAL_DETAILS = {
  name: "Dinkar Kumar",
  role: "AI Engineer & Full Stack Developer",
  shortRole: "AI Engineer",
  educationBadge: "B.Tech CSE (AI) '29 • Parul University",
  location: "Vadodara, Gujarat, India",
  timezone: "IST (UTC+5:30)",
  email: "dinkarkr691@gmail.com",
  phone: "+91 9204267569",
  phoneFormatted: "+91 92042 67569",
  github: "https://github.com/691Tech",
  githubUsername: "691Tech",
  linkedin: "https://www.linkedin.com/in/dinkarkumar0809/",
  resumeUrl: "/Dinkar_Kumar_Resume.pdf",
  headline: "Building thoughtful digital experiences through code.",
  subHeadline: "I am Dinkar Kumar, a Computer Science student and aspiring AI Engineer passionate about full-stack development, intelligent applications, and solving real-world problems through technology.",
  aboutStory: `I am currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at Parul University in Vadodara, Gujarat (2025–2029).

My journey centers around the intersection of engineering discipline and creative digital craft. Rather than building surface-level applications, I focus on the underlying architecture: responsive React frontends, robust Node.js/Express REST APIs, real-time WebSocket conduits, and high-performance MongoDB data stores.

I am deeply curious about AI integration, intelligent automation, and mastering fundamental Data Structures & Algorithms. Every line of code I write is guided by intentionality, clean architectural patterns, and user empathy.`,
  availabilityStatus: "Available for Internships & Projects",
  adminPin: "6910"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ecommerce-web-app",
    title: "E-Commerce Web Application",
    subtitle: "Modern Full-Stack Commerce Ecosystem",
    timeline: "2026 – PRESENT",
    tagline: "Scalable product browsing, persistent cart state, JWT session security, and streamlined checkout.",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    featured: true,
    role: "Full-Stack Engineer & Architect",
    description: "Developed a comprehensive full-stack e-commerce platform with authenticated customer workflows, dynamic catalog filtering, cart state management, order processing, and REST APIs.",
    longDescription: `An end-to-end electronic commerce solution engineered with React on the client and Express.js with MongoDB on the server. The application is built around strict data integrity, fast client-side navigation, and modular component architecture.

The project features token-based authentication (JWT with encrypted bcrypt passwords), high-efficiency catalog browsing with category and price queries, an intuitive shopping cart with real-time total recalculations, and resilient order creation flows with full lifecycle status tracking.`,
    architectureHighlights: [
      "Modular MVC architecture separating Express route handlers, controllers, and MongoDB Mongoose schemas.",
      "Optimistic UI updates for add-to-cart operations with zero layout shift and instant user feedback.",
      "Protected checkout and profile routes utilizing JSON Web Token (JWT) authorization middleware.",
      "MongoDB aggregation pipelines for dynamic price filtering, category taxonomy, and stock tracking."
    ],
    keyFeatures: [
      "User Authentication & Session Management (Register, Login, Profile)",
      "Dynamic Product Catalog with Instant Search & Filtering",
      "Persistent Shopping Cart with Local Storage Synchronization",
      "Multi-step Order Checkout with Automated Order ID & Summary",
      "RESTful API Endpoints documented with clean HTTP response schemas"
    ],
    metrics: [
      { label: "Frontend", value: "React.js" },
      { label: "Backend", value: "Node.js & Express" },
      { label: "Database", value: "MongoDB" },
      { label: "Architecture", value: "RESTful MVC" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/691Tech/dinkar-portfolio",
    imageUrl: "/images/ecommerce-preview.svg",
    demoType: "ecommerce",
    colorScheme: {
      accent: "#E06A26",
      badgeBg: "#FFF1E8",
      badgeText: "#963A07",
      border: "#FAD8C3"
    }
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    subtitle: "High-Concurrency WebSocket Messaging System",
    timeline: "2025 – 2026",
    tagline: "Sub-50ms instant bidirectional messaging, live presence tracking, and persistent chat history.",
    category: "realtime",
    categoryLabel: "Real-Time & Sockets",
    featured: true,
    role: "Systems & Backend Developer",
    description: "Developed a real-time messaging application with user authentication, instant bidirectional socket messaging, online status indicators, and persistent chat history.",
    longDescription: `A high-performance real-time messaging engine built to explore bidirectional networking and reactive state paradigms. Powered by Socket.io on top of an Express backend, messages are pushed to connected participants in under 50 milliseconds without HTTP polling overhead.

The platform includes authenticated session verification, dynamic room broadcasting, live typing chimes, user presence broadcasts, and persistent chat archives stored in MongoDB for seamless historical retrieval.`,
    architectureHighlights: [
      "Bidirectional WebSocket transport using Socket.io with automatic reconnection fallbacks.",
      "Event-driven socket dispatcher handling connection handshakes, room joins, and broadcast events.",
      "Atomic MongoDB write pipeline persisting messages while dispatching socket broadcasts concurrently.",
      "Client-side reactive message stream with smooth scroll snapping and unread indicators."
    ],
    keyFeatures: [
      "Zero-Latency Bidirectional Messaging with Socket.io",
      "Live Presence Detection (Online / Offline status broadcasting)",
      "Real-time Typing Feedback with debounced indicators",
      "Persistent Chat History backed by MongoDB collections",
      "Room-based Multi-user channels & 1-on-1 direct conversations"
    ],
    metrics: [
      { label: "Latency", value: "< 50ms" },
      { label: "Protocol", value: "WebSockets" },
      { label: "Engine", value: "Socket.io" },
      { label: "Storage", value: "MongoDB" }
    ],
    technologies: ["React.js", "Node.js", "Socket.io", "Express.js", "MongoDB", "WebSockets", "CSS Modules"],
    githubUrl: "https://github.com/691Tech/dinkar-portfolio",
    imageUrl: "/images/chat-preview.svg",
    demoType: "chat",
    colorScheme: {
      accent: "#2D7354",
      badgeBg: "#EDF6F1",
      badgeText: "#185038",
      border: "#C5E3D4"
    }
  },
  {
    id: "ai-fraud-detection",
    title: "AI Credit Card Fraud Anomaly Detector",
    subtitle: "Deep Autoencoder Anomaly Classification",
    timeline: "2026",
    tagline: "Sub-15ms transaction reconstruction error modeling with 98.4% precision on imbalanced data.",
    category: "ai_ml",
    categoryLabel: "AI & Data Science",
    featured: true,
    role: "Machine Learning & AI Engineer",
    description: "Engineered an unsupervised deep autoencoder neural network in Python and Keras to detect fraudulent financial transactions from high-dimensional PCA vectors with <15ms latency.",
    longDescription: `Credit card fraud represents an extreme class-imbalance challenge (typically <0.2% fraud). Standard supervised algorithms suffer from severe overfitting. This project applies an unsupervised Deep Autoencoder architecture trained exclusively on verified legitimate transactions.

When a fraudulent pattern arrives, the neural bottleneck fails to accurately reconstruct the anomalous feature vectors, causing the Mean Squared Error (MSE) reconstruction loss to spike above our calibrated threshold (0.042), instantly isolating fraudulent behavior.`,
    architectureHighlights: [
      "Symmetric compression-expansion neural architecture [29 → 14 → 7 → 14 → 29] with ReLU activations.",
      "Trained on 284,000+ anonymized European cardholder transactions with rigorous ROC-AUC optimization.",
      "Flask REST API microservice delivering real-time predictions with sub-15ms response latency.",
      "Reactive React frontend displaying live transaction streams with automatic fraud flag visualizers."
    ],
    keyFeatures: [
      "Unsupervised Anomaly Detection for Zero-Day Fraud Patterns",
      "Real-time Reconstruction MSE Error Analysis with Dynamic Thresholding",
      "Precision-Recall Tradeoff Optimization (98.4% Precision, 96.2% Recall)",
      "Interactive Telemetry Dashboard with Anomaly Vector Heatmaps"
    ],
    metrics: [
      { label: "Precision", value: "98.4%" },
      { label: "Recall", value: "96.2%" },
      { label: "Inference", value: "14ms" },
      { label: "Architecture", value: "Autoencoder" }
    ],
    technologies: ["Python", "Keras", "TensorFlow", "Scikit-Learn", "Flask", "React.js", "NumPy", "Pandas"],
    githubUrl: "https://github.com/curiousily/Credit-Card-Fraud-Detection-using-Autoencoders-in-Keras",
    imageUrl: "/images/ai-fraud-preview.svg",
    demoType: "fraud",
    colorScheme: {
      accent: "#B91C1C",
      badgeBg: "#FEF2F2",
      badgeText: "#991B1B",
      border: "#FECACA"
    }
  },
  {
    id: "campusprint-ecosystem",
    title: "CampusPrint — Parul Univ",
    subtitle: "Automated Campus Document & Print Hub",
    timeline: "2026",
    tagline: "Queue-free student document processing, cloud storage sync, and automated billing for 10K+ students.",
    category: "fullstack",
    categoryLabel: "Campus Automation",
    featured: true,
    role: "Full-Stack Developer",
    description: "Engineered a digital printing workflow ecosystem for Parul University students featuring automated document uploads, page configuration, live job tracking, and digital payments.",
    longDescription: `Built to eliminate the long queues and manual friction in college print shops, CampusPrint allows Parul University students to configure their print assignments (color, duplex, binding), upload files securely, track operator progress live, and settle payments smoothly.`,
    architectureHighlights: [
      "Cloud storage integration with signed file access for student academic submissions.",
      "Role-based views for Students (order wizard) and Shop Operators (live print queue & packaging).",
      "Real-time order tracker with status notifications and timestamp audits.",
      "Integrated payment calculation engine with dynamic paper weight and color pricing models."
    ],
    keyFeatures: [
      "Interactive 4-step Print Wizard (File, Paper, Binding, Pickup slot)",
      "Real-time Operator Fulfillment Dashboard",
      "Razorpay & UPI Digital Payment Integration",
      "Firebase Cloud Sync for real-time order state updates"
    ],
    metrics: [
      { label: "Target Users", value: "10,000+" },
      { label: "Cloud Sync", value: "Firebase" },
      { label: "Payments", value: "Razorpay" },
      { label: "Frontend", value: "React" }
    ],
    technologies: ["React.js", "Node.js", "Express", "Firebase", "Razorpay", "Tailwind CSS"],
    githubUrl: "https://github.com/691Tech/dinkar-portfolio",
    imageUrl: "/images/campus-preview.svg",
    demoType: "campus",
    colorScheme: {
      accent: "#2B4A7F",
      badgeBg: "#EEF3FA",
      badgeText: "#18325C",
      border: "#CAD8ED"
    }
  },
  {
    id: "packet-sniffer-engine",
    title: "Network Packet Sniffer & Traffic Analyzer",
    subtitle: "Low-Level Network Protocol Inspection in Java",
    timeline: "2025",
    tagline: "Raw socket frame decoding, TCP/UDP stream reassembly, and real-time bandwidth telemetry.",
    category: "java_core",
    categoryLabel: "Java Systems",
    featured: true,
    role: "Systems Programmer",
    description: "Developed a multithreaded network packet sniffer in Java using raw sockets and Pcap bindings to intercept, decode, and analyze live Ethernet, IP, TCP, UDP, and WebSocket traffic.",
    longDescription: `A high-performance network analysis tool developed in pure Java to dissect raw packet headers in real-time. The application binds to local network interfaces, extracts hex byte sequences, decodes Layer 2/3/4 packet structures, and provides forensic analytics on latency and protocol distribution.`,
    architectureHighlights: [
      "Multithreaded packet capture ring-buffer avoiding dropped packets under high throughput.",
      "Protocol decoders for Ethernet II, IPv4, IPv6, TCP (SYN/ACK tracking), UDP, DNS, and TLSv1.3.",
      "Hexadecimal and ASCII dual-pane payload inspector with pattern matching search filters.",
      "Export capabilities supporting PCAP standard files compatible with Wireshark analysis."
    ],
    keyFeatures: [
      "Promiscuous Mode Live Packet Capture & Decoding",
      "Interactive Filter Rules by IP, Port, and Protocol Type",
      "TCP Stream Reassembly & WebSocket Frame Handshake Inspector",
      "Visual Throughput Gauges (Bytes/sec, Packet count, Error rates)"
    ],
    metrics: [
      { label: "Language", value: "Java 21" },
      { label: "Capture", value: "Pcap / Sockets" },
      { label: "Protocols", value: "TCP/UDP/IP" },
      { label: "Throughput", value: "> 1 Gbps" }
    ],
    technologies: ["Java", "Jpcap / Pcap4j", "Multithreading", "Raw Sockets", "Computer Networks"],
    githubUrl: "https://github.com/HassanAdamm/packet-sniffer",
    imageUrl: "/images/packet-sniffer-preview.svg",
    demoType: "sniffer",
    colorScheme: {
      accent: "#1E3A8A",
      badgeBg: "#EFF6FF",
      badgeText: "#1D4ED8",
      border: "#BFDBFE"
    }
  },
  {
    id: "dsa-core-engine",
    title: "Data Structures & Algorithmic Core",
    subtitle: "High-Performance Java Problem Solving",
    timeline: "2025 – PRESENT",
    tagline: "250+ solved challenges across graphs, dynamic programming, and trees with optimal time complexity.",
    category: "dsa_cpp",
    categoryLabel: "Core CS & DSA",
    featured: true,
    role: "Software Developer & Problem Solver",
    description: "Rigorous collection of optimized algorithms, data structure implementations, and competitive coding solutions implemented in pure Java with rigorous asymptotic analysis.",
    longDescription: `A dedicated repository cataloging implementations of fundamental and advanced data structures in Java. Each algorithm includes unit tests, time/space complexity proofs, and edge-case validations. Topics include Graph Traversals (Dijkstra, BFS/DFS), Dynamic Programming, Binary Search Trees, and Heaps.`,
    architectureHighlights: [
      "Clean, idiomatic Object-Oriented Java design following SOLID principles.",
      "Exhaustive time & space complexity annotations for every algorithmic pattern.",
      "Extensive coverage of recursion, memoization, tree balancing, and sliding window paradigms."
    ],
    keyFeatures: [
      "250+ Algorithmic Challenges Solved with Clean Documentation",
      "Custom implementations of Trie, Disjoint Set, Min-Heap, and Red-Black Trees",
      "Dynamic Programming mastery across 0/1 Knapsack, LCS, and Matrix Chain Multiplication",
      "Standardized coding style adhering to Java conventions"
    ],
    metrics: [
      { label: "Solved", value: "250+" },
      { label: "Primary Lang", value: "Java" },
      { label: "Focus", value: "Optimal O(N)" },
      { label: "Paradigm", value: "OOP & DSA" }
    ],
    technologies: ["Java", "Data Structures", "Algorithms", "Time Complexity", "Git"],
    githubUrl: "https://github.com/691Tech/dinkar-portfolio",
    imageUrl: "/images/dsa-preview.svg",
    demoType: "dsa",
    colorScheme: {
      accent: "#784212",
      badgeBg: "#FBF3EC",
      badgeText: "#522C0A",
      border: "#E9D2C0"
    }
  }
];

export const CATALOG_PROJECTS: CatalogProject[] = [
  // Full Stack & React
  {
    title: "Video Conferencing & WebRTC Platform",
    description: "Peer-to-peer real-time video and audio communication engine built with WebRTC, Socket.io, and Node.js with dynamic room mesh.",
    category: "Full Stack",
    categoryKey: "fullstack",
    githubLink: "https://github.com/itstaranarora/video-chat-v1",
    technologies: ["WebRTC", "Socket.io", "React", "Node.js"],
    highlight: true
  },
  {
    title: "Quick Food Delivery Platform",
    description: "Full-stack food ordering platform with restaurant menu filters, cart management, checkout, and driver delivery tracking.",
    category: "Full Stack",
    categoryKey: "fullstack",
    githubLink: "https://github.com/fahadahmed07/react-js-quick-food-delivery-website",
    technologies: ["React.js", "Redux", "Node.js", "Tailwind CSS"],
    highlight: true
  },
  {
    title: "React Cryptocurrency Live Tracker",
    description: "Real-time cryptocurrency portfolio tracker integrating CoinGecko REST APIs, sparkline charting, and market cap rankers.",
    category: "React",
    categoryKey: "fullstack",
    githubLink: "https://github.com/Megh2507/React-Crypto-App",
    technologies: ["React.js", "Chart.js", "CoinGecko API", "Axios"]
  },
  {
    title: "Taskcafe Kanban & Project Management",
    description: "Open source project management platform with customizable Kanban boards, sprint task assignment, and activity feeds.",
    category: "Full Stack",
    categoryKey: "fullstack",
    githubLink: "https://github.com/JordanKnott/taskcafe",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    highlight: true
  },
  {
    title: "Social Media Web Application",
    description: "Feature-rich social media network featuring post feeds, user following graph, media uploads, likes, and comment threads.",
    category: "Full Stack",
    categoryKey: "fullstack",
    githubLink: "https://github.com/CharlyKeleb/SocialMedia-App",
    technologies: ["React", "Express", "Node.js", "MongoDB"]
  },
  {
    title: "Entertainment & Movie Streaming Hub",
    description: "Interactive media catalog integrating TMDB APIs, movie trailer playback, genre filter pills, and trending reels.",
    category: "React",
    categoryKey: "fullstack",
    githubLink: "https://github.com/piyush-eon/react-entertainment-hub",
    technologies: ["React.js", "Material UI", "TMDB API", "Axios"]
  },
  {
    title: "Photo Gallery & Cloud Media Vault",
    description: "Full-stack media storage application with drag-and-drop file uploads, image transformations, and responsive masonry gallery.",
    category: "React",
    categoryKey: "fullstack",
    githubLink: "https://github.com/chrisblakely01/react-node-photo-gallery",
    technologies: ["React.js", "Node.js", "Multer", "Express"]
  },

  // AI & Data Science
  {
    title: "Fake News Detection via NLP & Python",
    description: "Natural Language Processing classifier utilizing TF-IDF vectorization and PassiveAggressive classifier with 93.8% accuracy.",
    category: "Data Science",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/nishitpatel01/Fake_News_Detection",
    technologies: ["Python", "Scikit-Learn", "NLTK", "TF-IDF"],
    highlight: true
  },
  {
    title: "Speech Emotion Recognition Classifier",
    description: "Deep learning audio model classifying human emotional states (happy, angry, calm, sad) using MFCC spectral feature extraction.",
    category: "Data Science",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/topics/speech-emotion-recognition",
    technologies: ["Python", "Librosa", "CNN", "Keras"],
    highlight: true
  },
  {
    title: "Diabetic Retinopathy AI Diagnostic",
    description: "Medical imaging convolutional neural network evaluating high-resolution fundus retinal photographs for diabetic retinopathy stages.",
    category: "Data Science",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/rsk97/Diabetic-Retinopathy-Detection",
    technologies: ["Python", "TensorFlow", "ResNet50", "OpenCV"],
    highlight: true
  },
  {
    title: "Autonomous Road Lane Lines Detection",
    description: "Self-driving perception pipeline identifying highway lane curves using Hough Transform, Canny edge detection, and perspective warping.",
    category: "Data Science",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/amusi/awesome-lane-detection",
    technologies: ["Python", "OpenCV", "NumPy", "Computer Vision"]
  },
  {
    title: "Stock Prices Time-Series Predictor",
    description: "Financial market forecasting suite employing Long Short-Term Memory (LSTM) recurrent networks on historical market ticker data.",
    category: "Machine Learning",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/huseinzol05/Stock-Prediction-Models",
    technologies: ["Python", "LSTM", "PyTorch", "Pandas"]
  },
  {
    title: "MNIST Handwritten Digit Recognition",
    description: "Deep convolutional neural network recognizing handwritten digits from the classic MNIST database with 99.2% test accuracy.",
    category: "Machine Learning",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/anujdutt9/Handwritten-Digit-Recognition-using-Deep-Learning",
    technologies: ["Python", "TensorFlow", "CNN", "Matplotlib"]
  },
  {
    title: "Music Recommendation Engine",
    description: "Collaborative filtering and content-based recommendation model calculating cosine similarity on user listening preferences.",
    category: "Machine Learning",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/ugis22/music_recommender",
    technologies: ["Python", "Scikit-Learn", "Surprise", "Pandas"]
  },
  {
    title: "Black Friday Sales Prediction",
    description: "Regression analytics predicting customer purchase amounts using XGBoost, feature engineering, and exploratory data analysis.",
    category: "Machine Learning",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/nanthasnk/Black-Friday-Sales-Prediction",
    technologies: ["Python", "XGBoost", "Seaborn", "Scikit-Learn"]
  },
  {
    title: "Market Basket Analysis & Customer Clustering",
    description: "Association rule mining using the Apriori algorithm to discover frequent item co-occurrences in retail transactions.",
    category: "Machine Learning",
    categoryKey: "ai_ml",
    githubLink: "https://github.com/DiegoUsaiUK/Market_Basket_Analysis",
    technologies: ["Python", "Apriori", "MLxtend", "Pandas"]
  },

  // Java Systems & Core
  {
    title: "Criminal Face Detection & Recognition",
    description: "Automated biometric face recognition system in Java using OpenCV Haar cascades and LBPH facial feature matching.",
    category: "JAVA",
    categoryKey: "java_core",
    githubLink: "https://github.com/prasadus92/Face-Recognition",
    technologies: ["Java", "OpenCV", "LBPH", "Swing UI"],
    highlight: true
  },
  {
    title: "Online Resume & CV Builder System",
    description: "Java-powered automated resume generator parsing user career history into standardized downloadable PDF templates.",
    category: "JAVA",
    categoryKey: "java_core",
    githubLink: "https://github.com/meetakbari/CV-Resume-Builder",
    technologies: ["Java", "iText PDF", "JDBC", "MySQL"]
  },
  {
    title: "Electricity Billing Management System",
    description: "Enterprise utility billing software automating meter reading calculations, tariff slabs, and payment reconciliation.",
    category: "JAVA",
    categoryKey: "java_core",
    githubLink: "https://github.com/Adarsh9616/Electricity_Billing_System",
    technologies: ["Java", "AWT/Swing", "JDBC", "MySQL"]
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Modular enterprise CRM application managing client pipelines, lead scoring, communications logs, and sales analytics.",
    category: "JAVA",
    categoryKey: "java_core",
    githubLink: "https://github.com/machowina/CRM",
    technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"]
  },
  {
    title: "Scientific Data Visualization Software (Groot)",
    description: "Extensible 2D/3D physics and data charting framework developed in Java for nuclear and high-energy physics datasets.",
    category: "JAVA",
    categoryKey: "java_core",
    githubLink: "https://github.com/gavalian/groot",
    technologies: ["Java", "JavaFX", "Data Analysis", "Plotting"]
  },

  // C++ & Algorithmic Engines
  {
    title: "Banking Management System with DSA",
    description: "High-efficiency console banking system in C++ employing AVL Trees for O(log N) account searches and linked ledger history.",
    category: "C++",
    categoryKey: "dsa_cpp",
    githubLink: "https://github.com/wkhaliddev/Bank-Management/tree/master/DSAproject",
    technologies: ["C++", "AVL Trees", "Binary Search", "Data Structures"],
    highlight: true
  },
  {
    title: "Sudoku Algorithmic Backtracking Engine",
    description: "High-speed 9x9 Sudoku solver in C++ using recursive constraint propagation and bitmask optimization solving boards in <1ms.",
    category: "C++",
    categoryKey: "dsa_cpp",
    githubLink: "https://github.com/AlexIzydorczyk/sudoku",
    technologies: ["C++", "Backtracking", "Bitmasking", "Algorithms"]
  },
  {
    title: "Bookshop Inventory & POS System in C++",
    description: "Object-oriented inventory management application handling ISBN catalog indexing, stock thresholds, and transaction receipts.",
    category: "C++",
    categoryKey: "dsa_cpp",
    githubLink: "https://github.com/aryan-khanijo/Bookshop-Management-System-CPP-Project",
    technologies: ["C++", "File Handling", "OOP", "Data Persistence"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    tagline: "Crafting responsive, accessible, component-driven user interfaces",
    skills: [
      {
        name: "React.js",
        level: "Advanced Proficiency",
        percentage: 90,
        description: "Component architecture, hooks (useState, useEffect, useMemo, custom hooks), context API, and modular state.",
        highlight: true
      },
      {
        name: "JavaScript (ES6+)",
        level: "Core Competency",
        percentage: 88,
        description: "Asynchronous programming (Promises, async/await), closures, prototypes, event delegation, and DOM APIs.",
        highlight: true
      },
      {
        name: "Tailwind CSS & Modern Styling",
        level: "Proficient",
        percentage: 92,
        description: "Utility-first design systems, responsive grid/flexbox layouts, micro-interactions, and light/editorial theming."
      },
      {
        name: "HTML5 & Semantic Markup",
        level: "Mastery",
        percentage: 95,
        description: "Accessible landmark structure (a11y), clean DOM trees, SEO metadata, and web performance optimization."
      }
    ]
  },
  {
    title: "Backend & Systems Architecture",
    tagline: "Developing resilient server endpoints, real-time channels, and business logic",
    skills: [
      {
        name: "Node.js",
        level: "Proficient",
        percentage: 85,
        description: "Event-driven runtime, non-blocking I/O, npm package ecosystem, filesystem operations, and stream processing.",
        highlight: true
      },
      {
        name: "Express.js",
        level: "Proficient",
        percentage: 87,
        description: "REST API routing, middleware pipelines, error handling controllers, JWT authentication, and request validation.",
        highlight: true
      },
      {
        name: "Socket.io & WebSockets",
        level: "Intermediate / Applied",
        percentage: 82,
        description: "Full-duplex real-time communication, connection events, client room broadcasting, and heartbeat maintenance.",
        highlight: true
      },
      {
        name: "RESTful API Design",
        level: "Proficient",
        percentage: 88,
        description: "HTTP verbs, status codes, query pagination, JSON payloads, and clean separation of concerns."
      }
    ]
  },
  {
    title: "Databases & Cloud Infrastructure",
    tagline: "Designing scalable schemas, query pipelines, and managed services",
    skills: [
      {
        name: "MongoDB & Mongoose",
        level: "Proficient",
        percentage: 84,
        description: "NoSQL schema modeling, validation schemas, indexing strategies, CRUD operations, and aggregation pipelines.",
        highlight: true
      },
      {
        name: "Firebase Suite",
        level: "Working Knowledge",
        percentage: 80,
        description: "Firebase Authentication, Realtime Database, Cloud Firestore, Firebase Storage bucket, and client SDKs.",
        highlight: true
      },
      {
        name: "Database Design & Queries",
        level: "Proficient",
        percentage: 82,
        description: "Relational concepts, indexing, document denormalization, referential integrity, and data migration."
      }
    ]
  },
  {
    title: "Core CS, AI & Engineering Tooling",
    tagline: "Foundational computer science principles, problem-solving, and workflow",
    skills: [
      {
        name: "Java & Object-Oriented Design",
        level: "Core Competency",
        percentage: 88,
        description: "Inheritance, encapsulation, polymorphism, abstraction, design patterns, and JVM fundamentals.",
        highlight: true
      },
      {
        name: "Data Structures & Algorithms (DSA)",
        level: "Active Focus",
        percentage: 85,
        description: "Trees, graphs, dynamic programming, sorting/searching, recursion, time & space asymptotic analysis.",
        highlight: true
      },
      {
        name: "Git & GitHub",
        level: "Proficient",
        percentage: 90,
        description: "Branching workflows, semantic commits, code reviews, pull requests, repository management (@691Tech).",
        highlight: true
      },
      {
        name: "AI & Machine Learning Foundations",
        level: "Undergraduate Specialization",
        percentage: 80,
        description: "B.Tech specialization curriculum: neural foundations, search algorithms, intelligent agents, and Python toolkits."
      }
    ]
  }
];

export const EDUCATION_DATA: EducationMilestone[] = [
  {
    period: "2025 – 2029",
    degree: "B.Tech in Computer Science Engineering (Artificial Intelligence)",
    institution: "Parul University",
    location: "Vadodara, Gujarat, India",
    status: "Currently Pursuing (Full-Time)",
    badge: "Undergraduate Degree",
    description: "Specialized undergraduate program focusing on advanced computer science engineering, artificial intelligence algorithms, full-stack software development, and systems engineering.",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Intelligence",
      "Rigorous foundations in Data Structures, Discrete Mathematics, and Computer Architecture",
      "Active participant in technical symposiums, hackathons, and engineering clubs",
      "Hands-on development of real-world academic software solutions (CampusPrint, Chat Engine)"
    ]
  },
  {
    period: "2022 – 2025",
    degree: "Senior Secondary & Secondary Board Education (CBSE)",
    institution: "Notre Dame Academy & Awadhooth Academy",
    location: "CBSE Board, India",
    status: "Completed with Distinction",
    badge: "Schooling & Board Exams",
    description: "Completed secondary and senior secondary school education with exceptional academic focus in Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
    scores: [
      { label: "Class XI — CBSE", value: "94%", highlight: true },
      { label: "Class X — CBSE", value: "81%" },
      { label: "Class XII — CBSE", value: "70%" }
    ],
    highlights: [
      "Outstanding academic excellence in Class XI with a 94% overall score",
      "Solid mathematical foundations that paved the way for Computer Science & AI studies",
      "Active involvement in science exhibitions, logic contests, and computer lab initiatives"
    ]
  }
];

export const GITHUB_STATS = {
  username: "691Tech",
  profileUrl: "https://github.com/691Tech",
  bio: "AI Engineer & Full-Stack Developer | Parul University CSE (AI) '29",
  repositoriesCount: "25+",
  featuredRepos: [
    {
      name: "dinkar-portfolio",
      description: "Official full-stack portfolio built with Next.js 16, React 19, Tailwind CSS v4 & Firebase Cloud integration.",
      language: "TypeScript / React",
      stars: 5,
      forks: 1,
      badge: "Flagship"
    },
    {
      name: "ecommerce-web-app",
      description: "Full-stack e-commerce platform with React, Node.js, Express & MongoDB. User auth, cart, order processing.",
      language: "JavaScript / React",
      stars: 4,
      forks: 1,
      badge: "Full-Stack"
    },
    {
      name: "realtime-chat-app",
      description: "Real-time instant messaging engine using Socket.io, React, and MongoDB with sub-50ms latency.",
      language: "JavaScript / Socket.io",
      stars: 3,
      forks: 0,
      badge: "Real-Time"
    },
    {
      name: "ai-fraud-detector",
      description: "Unsupervised autoencoder neural anomaly detection classifying transaction fraud with 98.4% precision.",
      language: "Python / Keras",
      stars: 5,
      forks: 2,
      badge: "AI / ML"
    }
  ]
};

export const FAQS_DATA = [
  {
    question: "What is your primary area of technical specialization?",
    answer: "I am a Computer Science Engineering student specializing in Artificial Intelligence at Parul University (2025–2029). My core strengths lie in full-stack web engineering (React.js, Node.js, Express.js, MongoDB), real-time networked applications with WebSockets (Socket.io), and building efficient, clean algorithmic architectures in Java and JavaScript."
  },
  {
    question: "Are you available for summer internships or freelance projects?",
    answer: "Yes, absolutely! I am actively looking for engineering internships, technical apprenticeships, and collaborative software engineering projects. Whether remote or based in Vadodara/Gujarat, I bring dedicated energy, solid communication, and hands-on coding ability."
  },
  {
    question: "How do you approach building full-stack applications?",
    answer: "I approach software from an architectural standpoint: starting with clear data models and schema definitions, structuring RESTful or WebSocket communication layers, and designing intuitive, responsive frontend interfaces. I prioritize clean code structure, error handling, performance, and user feedback rather than rushing superficial features."
  },
  {
    question: "How can I verify or review your actual codebase and projects?",
    answer: "You can explore all my active repositories directly on my GitHub profile @691Tech (https://github.com/691Tech). Additionally, you can test interactive live simulators for my E-Commerce, Real-Time Chat, and AI Anomaly Detection applications directly on this portfolio website!"
  },
  {
    question: "What are your academic credentials and board exam results?",
    answer: "I am currently enrolled in the B.Tech CSE (AI) program at Parul University (2025–2029). For my school board examinations from Notre Dame Academy & Awadhooth Academy, I scored 94% in Class XI (CBSE), 81% in Class X (CBSE), and 70% in Class XII (CBSE)."
  },
  {
    question: "What is the best way to get in touch with you?",
    answer: "You can send a direct message through the contact form on this website (which submits straight to my Firebase inbox), or reach out via email at dinkarkr691@gmail.com. For urgent inquiries or calls, you can reach me at +91 9204267569. I typically respond within 12–24 hours."
  }
];
