export const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'nlp', name: 'NLP' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'AI Web Apps' }
];

export const projects = [
    {
        id: 1,
        title: "Système de Détection d'Anomalies",
        description: "Un modèle de vision par ordinateur pour détecter les défauts de fabrication sur une chaîne de production en temps réel.",
        category: "cv",
        year: "2025",
        tech: ["Python", "TensorFlow", "OpenCV", "YOLOv8"],
        icon: "fa-eye"
    },
    {
        id: 2,
        title: "Assistant Juridique LLM",
        description: "Agent conversationnel spécialisé entraîné sur le droit français, utilisant RAG pour des citations précises.",
        category: "nlp",
        year: "2024",
        tech: ["LangChain", "OpenAI API", "Pinecone", "React"],
        icon: "fa-scale-balanced"
    },
    {
        id: 3,
        title: "Prédiction de Churn Client",
        description: "Analyse prédictive des comportements clients pour une plateforme SaaS, augmentant la rétention de 15%.",
        category: "ml",
        year: "2024",
        tech: ["Scikit-learn", "Pandas", "XGBoost", "FastAPI"],
        icon: "fa-chart-line"
    },
    {
        id: 4,
        title: "Générateur d'Assets de Jeu",
        description: "Application web permettant aux créateurs de jeux indépendants de générer des assets 2D cohérents via Stable Diffusion.",
        category: "web",
        year: "2023",
        tech: ["Next.js", "Stable Diffusion", "Node.js", "AWS"],
        icon: "fa-gamepad"
    },
    {
        id: 5,
        title: "Reconnaissance Faciale",
        description: "Système de contrôle d'accès sécurisé basé sur l'analyse faciale 3D avec détection de vivacité.",
        category: "cv",
        year: "2023",
        tech: ["PyTorch", "FaceNet", "Docker"],
        icon: "fa-id-card"
    },
    {
        id: 6,
        title: "Koda: Kiyomori's Guardian",
        description: "Jeu d'aventure 3D onirique basé sur le folklore japonais. Incarnez un Tanuki purifiant une forêt corrompue.",
        category: "games",
        year: "2018",
        tech: ["Unity", "C#", "Level Design"],
        icon: "fa-torii-gate"
    },
    {
        id: 7,
        title: "Antivirus: Data City",
        description: "Level Design d'une ville 'Tron-like' en voxels. Défense stratégique du noyau contre des virus informatiques.",
        category: "games",
        year: "2018",
        tech: ["Unity", "Voxel", "Level Design"],
        icon: "fa-city"
    },
    {
        id: 8,
        title: "Gravity Defy",
        description: "Jeu mobile de parkour à moto low-poly. Conception de 14 niveaux avec obstacles et environnements variés.",
        category: "games",
        year: "2021",
        tech: ["Unity", "Level Design", "Mobile"],
        icon: "fa-motorcycle"
    },
    {
        id: 9,
        title: "Déficience",
        description: "Serious Game 2D sur le système immunitaire. Puzzle game éducatif pour comprendre les virus.",
        category: "games",
        year: "2018",
        tech: ["JavaScript", "HTML5", "Serious Game"],
        icon: "fa-puzzle-piece"
    },
    {
        id: 10,
        title: "Pure Mahjong",
        description: "Jeu de Mahjong photoréaliste avec plus de 1000 niveaux calendaires. Disponible sur Nintendo Switch.",
        category: "games",
        year: "2020",
        tech: ["Level Design", "Nintendo Switch", "Unity"],
        icon: "fa-puzzle-piece"
    },
    {
        id: 11,
        title: "Parkour Game",
        description: "Jeu de parkour urbain à la 3ème personne. Conception de 5 niveaux avec verticalité et chemins multiples.",
        category: "games",
        year: "2020",
        tech: ["Level Design", "Unity", "3D"],
        icon: "fa-running"
    },
    {
        id: 12,
        title: "Sleeping Pit",
        description: "Puzzle game médiéval fantastique. Mécanique de division de slimes pour résoudre des énigmes dans un puits géant.",
        category: "games",
        year: "2018",
        tech: ["Game Design", "Unity", "Puzzle"],
        icon: "fa-dungeon"
    },
    {
        id: 13,
        title: "Map Trackmania",
        description: "Série de circuits techniques pour Trackmania (Race, RPG, Trial). Gestion de la difficulté et du flow.",
        category: "games",
        year: "2018",
        tech: ["Level Design", "Trackmania", "Racing"],
        icon: "fa-car"
    },
    {
        id: 14,
        title: "Unity Prototypes",
        description: "Collection de prototypes de Level Design explorant diverses mécaniques et ambiances sous Unity.",
        category: "games",
        year: "2019",
        tech: ["Unity", "Prototyping", "C#"],
        icon: "fa-cubes"
    },
    {
        id: 15,
        title: "World Building (Gaea)",
        description: "Création de terrains réalistes et environnements complexes générés via Gaea et intégrés dans Unity.",
        category: "games",
        year: "2019",
        tech: ["Gaea", "World Building", "Unity"],
        icon: "fa-mountain"
    },
    {
        id: 16,
        title: "Hunting Game Map",
        description: "Carte semi-réaliste vaste pour un jeu de chasse : forêts, lacs, marais. Focus sur l'immersion naturelle.",
        category: "games",
        year: "2019",
        tech: ["Level Design", "Terrain", "Nature"],
        icon: "fa-tree"
    }
];
