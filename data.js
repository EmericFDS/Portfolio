export const categories = [
    { id: 'all', name: 'All' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'nlp', name: 'NLP' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'AI Web Apps' }
];

export const projects = [
    {
        id: 1,
        title: "Anomaly Detection System",
        description: "A computer vision model to detect manufacturing defects on a production line in real-time.",
        category: "cv",
        year: "2025",
        tech: ["Python", "TensorFlow", "OpenCV", "YOLOv8"],
        icon: "fa-eye"
    },
    {
        id: 2,
        title: "LLM Legal Assistant",
        description: "Specialized conversational agent trained on French law, using RAG for precise citations.",
        category: "nlp",
        year: "2024",
        tech: ["LangChain", "OpenAI API", "Pinecone", "React"],
        icon: "fa-scale-balanced"
    },
    {
        id: 3,
        title: "Customer Churn Prediction",
        description: "Predictive analysis of customer behavior for a SaaS platform, increasing retention by 15%.",
        category: "ml",
        year: "2024",
        tech: ["Scikit-learn", "Pandas", "XGBoost", "FastAPI"],
        icon: "fa-chart-line"
    },
    {
        id: 4,
        title: "Game Asset Generator",
        description: "Web application allowing indie game creators to generate consistent 2D assets via Stable Diffusion.",
        category: "web",
        year: "2023",
        tech: ["Next.js", "Stable Diffusion", "Node.js", "AWS"],
        icon: "fa-gamepad"
    },
    {
        id: 5,
        title: "Facial Recognition",
        description: "Secure access control system based on 3D facial analysis with liveness detection.",
        category: "cv",
        year: "2023",
        tech: ["PyTorch", "FaceNet", "Docker"],
        icon: "fa-id-card"
    },
    {
        id: 6,
        title: "Koda: Kiyomori's Guardian",
        description: "Dreamy 3D adventure game based on Japanese folklore. Play as a Tanuki purifying a corrupted forest.",
        category: "games",
        year: "2018",
        tech: ["Unity", "C#", "Level Design"],
        icon: "fa-torii-gate"
    },
    {
        id: 7,
        title: "Antivirus: Data City",
        description: "Level Design of a 'Tron-like' city in voxels. Strategic defense of the core against computer viruses.",
        category: "games",
        year: "2018",
        tech: ["Unity", "Voxel", "Level Design"],
        icon: "fa-city"
    },
    {
        id: 8,
        title: "Gravity Defy",
        description: "Low-poly motorcycle parkour mobile game. Designed 14 levels with various obstacles and environments.",
        category: "games",
        year: "2021",
        tech: ["Unity", "Level Design", "Mobile"],
        icon: "fa-motorcycle"
    },
    {
        id: 9,
        title: "Deficiency",
        description: "2D Serious Game about the immune system. Educational puzzle game to understand viruses.",
        category: "games",
        year: "2018",
        tech: ["JavaScript", "HTML5", "Serious Game"],
        icon: "fa-puzzle-piece"
    },
    {
        id: 10,
        title: "Pure Mahjong",
        description: "Photorealistic Mahjong game with over 1000 calendar levels. Available on Nintendo Switch.",
        category: "games",
        year: "2020",
        tech: ["Level Design", "Nintendo Switch", "Unity"],
        icon: "fa-puzzle-piece"
    },
    {
        id: 11,
        title: "Parkour Game",
        description: "3rd person urban parkour game. Designed 5 levels with verticality and multiple paths.",
        category: "games",
        year: "2020",
        tech: ["Level Design", "Unity", "3D"],
        icon: "fa-running"
    },
    {
        id: 12,
        title: "Sleeping Pit",
        description: "Medieval fantasy puzzle game. Slime splitting mechanics to solve puzzles in a giant pit.",
        category: "games",
        year: "2018",
        tech: ["Game Design", "Unity", "Puzzle"],
        icon: "fa-dungeon"
    },
    {
        id: 13,
        title: "Trackmania Map",
        description: "Series of technical tracks for Trackmania (Race, RPG, Trial). Difficulty and flow management.",
        category: "games",
        year: "2018",
        tech: ["Level Design", "Trackmania", "Racing"],
        icon: "fa-car"
    },
    {
        id: 14,
        title: "Unity Prototypes",
        description: "Collection of Level Design prototypes exploring various mechanics and atmospheres in Unity.",
        category: "games",
        year: "2019",
        tech: ["Unity", "Prototyping", "C#"],
        icon: "fa-cubes"
    },
    {
        id: 15,
        title: "World Building (Gaea)",
        description: "Creation of realistic terrains and complex environments generated via Gaea and integrated into Unity.",
        category: "games",
        year: "2019",
        tech: ["Gaea", "World Building", "Unity"],
        icon: "fa-mountain"
    },
    {
        id: 16,
        title: "Hunting Game Map",
        description: "Vast semi-realistic map for a hunting game: forests, lakes, swamps. Focus on natural immersion.",
        category: "games",
        year: "2019",
        tech: ["Level Design", "Terrain", "Nature"],
        icon: "fa-tree"
    }
];
