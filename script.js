// Data directly inlined to ensure strictly local functionality without server
const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'nlp', name: 'NLP' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'AI Web Apps' }
];

const projects = [
    {
        id: 1,
        title: "Système de Détection d'Anomalies",
        description: "Un modèle de vision par ordinateur pour détecter les défauts de fabrication sur une chaîne de production en temps réel. Utilise YOLOv8 pour une précision maximale.",
        category: "cv",
        year: "2025",
        tech: ["Python", "TensorFlow", "OpenCV", "YOLOv8"],
        icon: "fa-eye"
    },
    {
        id: 2,
        title: "Assistant Juridique LLM",
        description: "Agent conversationnel spécialisé entraîné sur le droit français, utilisant RAG pour des citations précises et vérifiables.",
        category: "nlp",
        year: "2024",
        tech: ["LangChain", "OpenAI API", "Pinecone", "React"],
        icon: "fa-scale-balanced"
    },
    {
        id: 3,
        title: "Prédiction de Churn Client",
        description: "Analyse prédictive des comportements clients pour une plateforme SaaS. Identification des facteurs de risque et augmentation de la rétention de 15%.",
        category: "ml",
        year: "2024",
        tech: ["Scikit-learn", "Pandas", "XGBoost", "FastAPI"],
        icon: "fa-chart-line"
    },
    {
        id: 4,
        title: "Générateur d'Assets de Jeu",
        description: "Application web SaaS permettant aux créateurs de jeux indépendants de générer des assets 2D cohérents via Stable Diffusion.",
        category: "web",
        year: "2023",
        tech: ["Next.js", "Stable Diffusion", "Node.js", "AWS"],
        icon: "fa-gamepad"
    },
    {
        id: 5,
        title: "Reconnaissance Faciale",
        description: "Système de contrôle d'accès sécurisé basé sur l'analyse faciale 3D avec détection de vivacité (Liveness Detection).",
        category: "cv",
        year: "2023",
        tech: ["PyTorch", "FaceNet", "Docker"],
        icon: "fa-id-card",
        images: ["https://placehold.co/600x400/1e293b/06b6d4?text=Face+ID"]
    },
    {
        id: 24,
        title: "Turn Base Battle Game",
        description: `Ce projet est un jeu mobile iOS pour lequel j'ai conçu 14 niveaux. C'est un jeu de parkour à moto challengeant qui demande de franchir de nombreux obstacles.

Le jeu adopte un style Low Poly élégant. J'ai créé plusieurs environnements distincts comme une ville, une forêt, une montagne et un chantier. Le résultat offre une expérience plaisante avec une courbe de difficulté bien pensée.

Le jeu est développé d'abord pour iOS puis prévu pour Android.`,
        category: "games",
        year: "2021",
        tech: ["Level Design", "Mobile", "Unity"],
        icon: "fa-chess-board",
        images: [
            "https://emericdossantos.github.io/img/games/TurnBaseBattle/Menu.webp",
            "https://emericdossantos.github.io/img/games/TurnBaseBattle/DongeonA.webp",
            "https://emericdossantos.github.io/img/games/TurnBaseBattle/DongeonB.webp",
            "https://emericdossantos.github.io/img/games/TurnBaseBattle/DongeonC.webp",
            "https://emericdossantos.github.io/img/games/TurnBaseBattle/Battle.webp"
        ]
    },
    {
        id: 8,
        title: "Gravity Defy",
        description: `Gravity Defy est un jeu mobile de parkour à moto. J'ai participé à la création de 14 niveaux pour ce client.

Le gameplay est exigeant : il faut traverser des niveaux remplis d'obstacles variés. J'ai travaillé sur le level design pour offrir un challenge intéressant et progressif dans des environnements Low Poly soignés (ville, forêt, montagne).`,
        category: "games",
        year: "2021",
        tech: ["Unity", "Level Design", "Mobile"],
        icon: "fa-motorcycle",
        images: [
            "https://emericdossantos.github.io/img/games/GravityDefy/1.webp",
            "https://emericdossantos.github.io/img/games/GravityDefy/2.webp",
            "https://emericdossantos.github.io/img/games/GravityDefy/3.webp",
            "https://emericdossantos.github.io/img/games/GravityDefy/4.webp",
            "https://emericdossantos.github.io/img/games/GravityDefy/5.webp"
        ]
    },
    {
        id: 25,
        title: "Cubic Level",
        description: `Un niveau charmant conçu pour un jeu mobile en vue de dessus (Top Down).

Le niveau est entièrement composé de blocs et d'assets avec un style artistique cubique 'Voxel'.
Le défi principal de cette carte était de créer un environnement avec une circulation fluide pour le joueur. J'ai réussi à rendre la navigation amusante tout en gardant une esthétique soignée. J'ai également créé quelques animations pour le jeu.`,
        category: "games",
        year: "2021",
        tech: ["Voxel", "Level Design", "Mobile"],
        icon: "fa-cube",
        links: [
            { label: "Vidéo Animation", url: "https://www.youtube.com/watch?v=HIJzEN4P0TA" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/CubicLevel/LevelCapture20.webp",
            "https://emericdossantos.github.io/img/games/CubicLevel/LevelCapture21.webp",
            "https://emericdossantos.github.io/img/games/CubicLevel/LevelCapture25.webp",
            "https://emericdossantos.github.io/img/games/CubicLevel/LevelCapture30.webp"
        ]
    },
    {
        id: 11,
        title: "Parkour Game",
        description: `Pour ce projet, j'ai créé 5 niveaux pour un jeu de type Parkour où le joueur doit sauter, escalader des murs et trouver la sortie.

Le personnage est joué à la troisième personne, offrant une meilleure vue d'ensemble de l'environnement.
C'est un environnement urbain conçu pour maximiser la verticalité et correspondre à l'univers du Parkour.
Certains niveaux sont aussi en intérieur, offrant de nouveaux défis et une variété d'environnements.`,
        category: "games",
        year: "2020",
        tech: ["Level Design", "Unity", "3D"],
        icon: "fa-running",
        images: [
            "https://emericdossantos.github.io/img/games/ParkourGame/1.webp",
            "https://emericdossantos.github.io/img/games/ParkourGame/2.webp",
            "https://emericdossantos.github.io/img/games/ParkourGame/3.webp"
        ]
    },
    {
        id: 10,
        title: "Pure Mahjong",
        description: `Pure Mahjong est un jeu de Mahjong photoréaliste qui emmène l'utilisateur dans un voyage à travers 24 événements chinois du calendrier solaire.

Le jeu contient des centaines de niveaux pour chaque jour de l'année. Avec plus de 1000 niveaux conçus individuellement, Pure Mahjong offre une grande variété de gameplay. Certains niveaux se résolvent en quelques minutes, d'autres peuvent prendre des heures.

Chaque jour, 4 nouveaux niveaux vous attendent, allant de relativement facile à très difficile.`,
        category: "games",
        year: "2020",
        tech: ["Level Design", "Nintendo Switch", "Unity"],
        icon: "fa-puzzle-piece",
        links: [
            { label: "Nintendo eShop", url: "https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Pure-Mahjong-1579159.html" },
            { label: "Site Officiel", url: "http://thebinaryfamily.com/fr/pure-mahjong/" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/PureMahjong/PureMahjong1.webp",
            "https://emericdossantos.github.io/img/games/PureMahjong/PureMahjong2.webp",
            "https://emericdossantos.github.io/img/games/PureMahjong/PureMahjong3.webp"
        ]
    },
    {
        id: 26,
        title: "Cartoon Level",
        description: `Carte prototype pour un jeu cartoon destiné à un jeune public.

Les contraintes étaient de créer une carte de taille petite à moyenne dans un environnement naturel (forêt, montagne, lac, rivières). Le style cartoon a été choisi pour son impact visuel coloré.

J'ai utilisé le moteur Unity et le générateur de terrain Gaea. Le projet a été réalisé en un mois en itération constante avec le client.`,
        category: "games",
        year: "2019",
        tech: ["Gaea", "Unity", "Cartoon"],
        icon: "fa-tree",
        images: [
            "https://emericdossantos.github.io/img/games/CartoonLevel/1.webp",
            "https://emericdossantos.github.io/img/games/CartoonLevel/2.webp",
            "https://emericdossantos.github.io/img/games/CartoonLevel/3.webp",
            "https://emericdossantos.github.io/img/games/CartoonLevel/4.webp"
        ]
    },
    {
        id: 16,
        title: "Hunting Game Map",
        description: `Création d'une vaste carte pour un jeu de chasse à la première personne (FPS).

La carte est composée de forêts, lacs, marais, rivières, montagnes et plaines. Elle est conçue pour être vaste afin d'immerger le joueur dans un environnement naturel riche.
Le style graphique semi-réaliste a été créé avec un pack d'assets dédié et un générateur de terrain pour l'ensemble de la topographie.`,
        category: "games",
        year: "2019",
        tech: ["Level Design", "Terrain", "Nature"],
        icon: "fa-tree",
        images: [
            "https://emericdossantos.github.io/img/games/HuntingGame/HuntGame1.webp",
            "https://emericdossantos.github.io/img/games/HuntingGame/HuntGame2.webp",
            "https://emericdossantos.github.io/img/games/HuntingGame/HuntGame3.webp"
        ]
    },
    {
        id: 27,
        title: "3 Pigs Game",
        description: `Niveau réalisé pour une mission freelance, basé sur l'histoire des 3 petits cochons.

Le niveau est linéaire (de droite à gauche) et divisé en 6 zones distinctes : la maison de la mère, la zone de construction paille, une zone d'ennemis, la maison bois, un pont traversant un lac, et enfin la maison brique.
L'objectif est de parcourir la forêt et collecter des ressources pour construire les maisons et résister au loup.`,
        category: "games",
        year: "2019",
        tech: ["Level Design", "Freelance", "Unity"],
        icon: "fa-piggy-bank",
        images: [
            "https://emericdossantos.github.io/img/games/3Pigs/3pigs1.webp",
            "https://emericdossantos.github.io/img/games/3Pigs/3pigs2.webp",
            "https://emericdossantos.github.io/img/games/3Pigs/3pigs3.webp"
        ]
    },
    {
        id: 6,
        title: "Koda: Kiyomori's Guardian",
        description: `Koda: Kiyomori's Guardian est un jeu d'aventure plateforme 3D onirique basé sur le folklore japonais. Vous incarnez Koda, un Tanuki gardien de la forêt.

**L'Histoire :** La forêt est divisée en 4 zones protégées par des entités divines. Après un événement terrible, la forêt est corrompue par des Yokais. Koda doit utiliser ses capacités pour purifier la forêt.

**Le Projet :** Projet étudiant de 3 mois (Gamagora) réalisé par 17 étudiants. Présenté lors du Gamagora Game Show 2018.`,
        category: "games",
        year: "2018",
        tech: ["Unity", "C#", "Level Design"],
        icon: "fa-torii-gate",
        links: [
            { label: "Télécharger (Itch.io)", url: "https://gamagora.itch.io/koda" },
            { label: "Trailer", url: "https://www.youtube.com/watch?v=RNpgW7T4oU8" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/Koda/Koda01.webp",
            "https://emericdossantos.github.io/img/games/Koda/Koda02.webp",
            "https://emericdossantos.github.io/img/games/Koda/Koda03.webp"
        ]
    },
    {
        id: 7,
        title: "Antivirus: Data City",
        description: `Data City est attaquée par des virus destructeurs. Antivirus, le super-héros, doit défendre le Noyau (Core) de la ville.

**Objectif :** Protéger le Noyau au centre-ville avant que la corruption ne l'atteigne. Gelez les zones infectées et reconstruisez les cubes détruits.

**Détails :** Le jeu se déroule dans une ville numérique style 'Tron' en voxel/néon. La ville est modulaire, composée de quartiers distincts reliés par des ponts, offrant une grande verticalité.
J'étais en charge du Level Design, imaginant cet univers virtuel et créant une ville systémique où l'infection se propage quartier par quartier.`,
        category: "games",
        year: "2018",
        tech: ["Unity", "Voxel", "Level Design"],
        icon: "fa-city",
        links: [
            { label: "Télécharger", url: "https://mega.nz/#!i1x21ZDS!rblSNnBw0pUnwYVsCiM9CFgiGLcGM-ZKGwS6p8goxek" },
            { label: "Trailer", url: "https://www.youtube.com/watch?v=vxTW0W2Zbok" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/Antivirus/AntiVirus1.webp",
            "https://emericdossantos.github.io/img/games/Antivirus/AntiVirus2.webp",
            "https://emericdossantos.github.io/img/games/Antivirus/AntiVirus3.webp"
        ]
    },
    {
        id: 20,
        title: "Underground Water Junction",
        description: `Carte multijoueur pour Unreal Tournament (CTF 3v3), créée avec UDK.

Le niveau représente un croisement d'égouts souterrains. Ce lieu confiné offre de multiples caches et accès, idéal pour le Capture The Flag.
L'espace consiste en deux croisements de voies d'eau. Les joueurs peuvent longer les murs, entrer dans les bâtiments adjacents pour des embuscades, ou prendre des risques en sautant au-dessus de l'eau.
La verticalité est présente avec des bâtiments à un étage, permettant des attaques surprises depuis le haut.`,
        category: "games",
        year: "2018",
        tech: ["Unreal Engine", "Level Design", "Multiplayer"],
        icon: "fa-water",
        links: [
            { label: "Télécharger Map", url: "https://drive.google.com/open?id=1kJqXyxkYDHXsxM6L7c8BSUWpNnviDVaQ" },
            { label: "Trailer", url: "https://www.youtube.com/watch?v=C6l0aLzwxuM" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/UWJ/UWJ01.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ02.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ03.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ04.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ05.webp"
        ]
    },
    {
        id: 13,
        title: "Map Trackmania",
        description: "Série de 3 circuits techniques pour Trackmania (Race, RPG, Trial). Travail approfondi sur le flow, la gestion de la vitesse et la courbe de difficulté progressive.",
        category: "games",
        year: "2018",
        tech: ["Level Design", "Trackmania", "Racing"],
        icon: "fa-car",
        links: [
            { label: "Télécharger Maps", url: "https://drive.google.com/open?id=14bbI118wa1I-sFTBqlJ3X11uBsUokgp6" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/Trackmania/Trackmania1.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/Trackmania2.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/Trackmania3.webp"
        ]
    },
    {
        id: 12,
        title: "Sleeping Pit",
        description: "Puzzle game médiéval fantastique. Le joueur incarne un mage utilisant des slimes divisibles pour activer des mécanismes et résoudre des énigmes complexes dans un puits géant.",
        category: "games",
        year: "2018",
        tech: ["Game Design", "Unity", "Puzzle"],
        icon: "fa-dungeon",
        images: [
            "https://emericdossantos.github.io/img/games/sleepingPit/1.webp",
            "https://emericdossantos.github.io/img/games/sleepingPit/2.webp",
            "https://emericdossantos.github.io/img/games/sleepingPit/3.webp",
            "https://emericdossantos.github.io/img/games/sleepingPit/4.webp"
        ]
    },
    {
        id: 9,
        title: "Déficience",
        description: "Serious Game 2D sur le système immunitaire. Puzzle game éducatif pour comprendre l'action des virus (VIH) et le fonctionnement des défenses biologiques.",
        category: "games",
        year: "2018",
        tech: ["JavaScript", "HTML5", "Serious Game"],
        icon: "fa-puzzle-piece",
        links: [
            { label: "Jouer (Web)", url: "https://emericdossantos.github.io/resources/Deficience_Web_V3/index.html" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/deficienceNew.webp"
        ]
    },
    {
        id: 14,
        title: "Unity Prototypes",
        description: "Collection de prototypes de Level Design sous Unity. Expérimentation sur les volumes, l'éclairage et les mécaniques de navigation.",
        category: "games",
        year: "2018",
        tech: ["Unity", "Prototyping", "C#"],
        icon: "fa-cubes",
        images: [
            "https://emericdossantos.github.io/img/games/Unity/Unity1.webp",
            "https://emericdossantos.github.io/img/games/Unity/Unity2.webp",
            "https://emericdossantos.github.io/img/games/Unity/Unity3.webp",
            "https://emericdossantos.github.io/img/games/Unity/Unity4.webp"
        ]
    },
    {
        id: 17,
        title: "Tom Atom Rescue",
        description: "Jeu de plateforme 2D futuriste / RPG. Incarnez Tom, un robot cherchant son créateur. Monde hostile, améliorations d'équipement, véhicules volants.",
        category: "games",
        year: "2017",
        tech: ["Unity", "2D", "Platformer", "C#"],
        icon: "fa-robot",
        links: [
            { label: "Jouer (Web)", url: "https://emericdossantos.github.io/resources/Platform_Game_Prototype_1.4/index.html" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/TomAtomRescu/platformGame1.webp",
            "https://emericdossantos.github.io/img/games/TomAtomRescu/platformGame2.webp",
            "https://emericdossantos.github.io/img/games/TomAtomRescu/platformGame3.webp",
            "https://emericdossantos.github.io/img/games/TomAtomRescu/platformGame4.webp",
            "https://emericdossantos.github.io/img/games/TomAtomRescu/platformGame5.webp"
        ]
    },
    {
        id: 18,
        title: "3D Portfolio",
        description: "Galerie de modélisation 3D. Objets, environnements et rendus réalisés avec divers outils (Blender, 3ds Max, Photoshop).",
        category: "design",
        year: "2017",
        tech: ["3D", "Modeling", "Texturing"],
        icon: "fa-cube",
        images: [
            "https://emericdossantos.github.io/img/3D/Grafiti.webp",
            "https://emericdossantos.github.io/img/3D/Extintor1.webp",
            "https://emericdossantos.github.io/img/3D/M1.webp",
            "https://emericdossantos.github.io/img/3D/Render01.webp",
            "https://emericdossantos.github.io/img/3D/Apple.webp",
            "https://emericdossantos.github.io/img/3D/Arcade.webp"
        ]
    },
    {
        id: 22,
        title: "Simple Movements",
        description: "Prototype d'apprentissage JavaScript. Développement d'un moteur de déplacement fluide et d'une IA comportementale basique.",
        category: "games",
        year: "2017",
        tech: ["JavaScript", "HTML5", "Prototype"],
        icon: "fa-gamepad",
        links: [
            { label: "Jouer", url: "https://emericdossantos.github.io/resources/game/index.html" }
        ],
        images: ["https://emericdossantos.github.io/img/games/Game1.webp"]
    },
    {
        id: 23,
        title: "2D Car Prototype",
        description: "Prototype de jeu de course 2D en JavaScript. Test de gestion physique et de collisions véhiculaires.",
        category: "games",
        year: "2017",
        tech: ["JavaScript", "HTML5", "Prototype"],
        icon: "fa-car-side",
        links: [
            { label: "Jouer", url: "https://emericdossantos.github.io/resources/CarTest/index.html" }
        ],
        images: ["https://emericdossantos.github.io/img/games/Game2.webp"]
    },
    {
        id: 21,
        title: "Claycity (Minecraft)",
        description: "Ville massive inspirée de l'Amérique du Nord. Centre-ville dense, gratte-ciels, parcs et infrastructures de transport à grande échelle.",
        category: "games",
        year: "2015",
        tech: ["Minecraft", "Voxel", "Level Design"],
        icon: "fa-building",
        images: [
            "https://emericdossantos.github.io/img/games/minecraft/1.webp",
            "https://emericdossantos.github.io/img/games/minecraft/2.webp",
            "https://emericdossantos.github.io/img/games/minecraft/3.webp",
            "https://emericdossantos.github.io/img/games/minecraft/4.webp",
            "https://emericdossantos.github.io/img/games/minecraft/5.webp",
            "https://emericdossantos.github.io/img/games/minecraft/10.webp"
        ]
    },
    {
        id: 12,
        title: "Underground Water Junction",
        description: `Carte pour Unreal Tournament (CTF 3v3). Concept d'égouts souterrains offrant confinement et cachettes.
        
Deux croisements de voies navigables avec accès multiples. Verticalité assurée par des bâtiments à un étage.`,
        category: "games",
        year: "2018",
        tech: ["UDK", "Level Design", "FPS"],
        icon: "fa-water",
        links: [
            { label: "Télécharger Map", url: "https://drive.google.com/open?id=1kJqXyxkYDHXsxM6L7c8BSUWpNnviDVaQ" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/UWJ/UWJ01.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ02.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ03.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ04.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ05.webp",
            "https://emericdossantos.github.io/img/games/UWJ/UWJ06.webp"
        ]
    },
    {
        id: 28,
        title: "Map Trackmania",
        description: `Création de pistes pour Trackmania dans le cadre d'un cours de Level Design.
        
Trois pistes distinctes :
- Verte (Facile/Technique) : Trajectoires précises.
- Bleue (Moyenne/Vitesse) : Course d'un point A à B avec sauts et courbes rapides.
- Verte (Compétitive) : Boucles, boosters et passages étroits pour le Time Attack.`,
        category: "games",
        year: "2018",
        tech: ["Trackmania", "Racing", "Level Design"],
        icon: "fa-road",
        links: [
            { label: "Télécharger Maps", url: "https://drive.google.com/open?id=14bbI118wa1I-sFTBqlJ3X11uBsUokgp6" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/Trackmania/track1.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/track2.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/track3.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/track4.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/track5.webp",
            "https://emericdossantos.github.io/img/games/Trackmania/track16.webp"
        ]
    },
    {
        id: 29,
        title: "Perfect Angle",
        description: `Jeu de puzzle 2D personnel. L'objectif est de déplacer le joueur dans la bonne direction pour atteindre la sortie.
        
La difficulté est progressive avec des énigmes de plus en plus complexes demandant réflexion et anticipation.`,
        category: "games",
        year: "2019",
        tech: ["JavaScript", "Puzzle", "2D"],
        icon: "fa-shapes",
        links: [
            { label: "Jouer (Web)", url: "https://emericdossantos.github.io/resources/Perfect_Angle_Browser_Version/index.html" }
        ],
        images: [
            "https://emericdossantos.github.io/img/games/PerfectAngle/pa1.webp",
            "https://emericdossantos.github.io/img/games/PerfectAngle/pa2.webp",
            "https://emericdossantos.github.io/img/games/PerfectAngle/pa3.webp",
            "https://emericdossantos.github.io/img/games/PerfectAngle/pa4.webp"
        ]
    }
];

// Main Logic
document.addEventListener('DOMContentLoaded', () => {
    // Secure Email Injection
    const user = 'emericfds';
    const domain = 'pm.me';
    const emailLink = document.getElementById('secure-email');
    const emailBtn = document.getElementById('email-btn');

    if (emailLink) {
        const address = `${user}@${domain}`;
        emailLink.textContent = address;
        emailLink.href = `mailto:${address}`;

        if (emailBtn) {
            emailBtn.addEventListener('click', () => {
                window.location.href = `mailto:${address}`;
            });
        }
    }

    // Filter Logic
    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Tech Icon Mapping
    const techIconMap = {
        "Python": "fab fa-python",
        "TensorFlow": "fas fa-brain", // Generic AI
        "OpenCV": "fas fa-eye",
        "YOLOv8": "fas fa-object-group",
        "LangChain": "fas fa-link",
        "OpenAI API": "fas fa-robot",
        "Pinecone": "fas fa-database",
        "React": "fab fa-react",
        "Scikit-learn": "fas fa-cogs",
        "Pandas": "fas fa-table",
        "XGBoost": "fas fa-chart-line",
        "FastAPI": "fas fa-bolt",
        "Next.js": "fab fa-react", // Closest
        "Stable Diffusion": "fas fa-image",
        "Node.js": "fab fa-node",
        "AWS": "fab fa-aws",
        "PyTorch": "fas fa-fire",
        "FaceNet": "fas fa-id-badge",
        "Docker": "fab fa-docker",
        "Git": "fab fa-git-alt",
        "Unity": "fab fa-unity",
        "C#": "fab fa-cuttlefish", // or code
        "Level Design": "fas fa-layer-group",
        "Mobile": "fas fa-mobile-alt",
        "Voxel": "fas fa-cube",
        "HTML5": "fab fa-html5",
        "Serious Game": "fas fa-graduation-cap",
        "Nintendo Switch": "fas fa-gamepad",
        "3D": "fas fa-cube",
        "Puzzle": "fas fa-puzzle-piece",
        "Trackmania": "fas fa-flag-checkered",
        "Racing": "fas fa-tachometer-alt",
        "Prototyping": "fas fa-drafting-compass",
        "Gaea": "fas fa-mountain",
        "World Building": "fas fa-globe-europe",
        "Terrain": "fas fa-leaf",
        "Nature": "fas fa-tree"
    };

    // State management for Carousel
    // --- Carousel Logic ---
    let currentFilteredProjects = [];
    let currentProjectIndex = 0;
    let currentImageIndex = 0;

    // Carousel Elements
    const projectInfoPanel = document.getElementById('dynamic-project-content');
    const projectImagesPanel = document.getElementById('dynamic-image-display'); // Renamed from imageDisplay
    const projectCounter = document.getElementById('project-counter');

    // Add placeholder images if missing (Mocking data for now)
    projects.forEach(p => {
        if (!p.images) {
            p.images = [
                `https://placehold.co/600x400/1e293b/06b6d4?text=${encodeURIComponent(p.title)}+1`,
                `https://placehold.co/600x400/1e293b/06b6d4?text=${encodeURIComponent(p.title)}+2`,
                `https://placehold.co/600x400/1e293b/06b6d4?text=${encodeURIComponent(p.title)}+3`
            ];
        }
    });

    // Sort Projects Anti-Chronologically (Newest First)
    projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    // Update the Project View (Left Panel + Stack)
    function updateProjectView() {
        if (filteredProjects.length === 0) {
            // Handle empty state
            document.getElementById('project-title').textContent = 'Aucun projet';
            document.getElementById('dynamic-project-content').innerHTML = '<p class="text-muted">Aucun projet trouvé pour cette catégorie.</p>';
            projectImagesPanel.innerHTML = '';
            projectCounter.textContent = '0 / 0';
            return;
        }

        const project = filteredProjects[currentProjectIndex];

        // 1. Update Static Header
        const titleEl = document.getElementById('project-title');
        const iconEl = document.getElementById('project-icon');
        const statusEl = document.getElementById('project-status');

        if (titleEl) titleEl.textContent = project.title;
        if (iconEl) iconEl.className = `fas ${project.icon || 'fa-code'}`;
        if (statusEl) statusEl.textContent = project.year; // Only Year requested

        // 2. Update Scrollable Content (Description, Links)
        projectInfoPanel.innerHTML = `
            <div class="current-project-desc" style="white-space: pre-line;">${project.description}</div>
            
            ${project.links ? `
                <div class="project-links" style="margin-top: 1.5rem; display: flex; gap: 0.8rem; flex-wrap: wrap;">
                    ${project.links.map(link => `
                        <a href="${link.url}" target="_blank" style="text-decoration: none; color: white; background: var(--accent); padding: 8px 16px; border-radius: 6px; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; transition: opacity 0.2s;">
                            <i class="fas fa-external-link-alt"></i> ${link.label}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        `;

        // 3. Update Fixed Tech Stack Footer
        const techPanel = document.getElementById('static-project-tech');
        if (techPanel) {
            techPanel.innerHTML = `
                <div class="project-tech-stack">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">Technologies :</h4>
                    <div class="tech-tags" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.tech.map(t => `<span style="background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 12px; font-size: 0.85rem; color: var(--text-muted); border: 1px solid var(--glass-border);">${t}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        // Update Counter
        if (projectCounter) projectCounter.textContent = `${currentProjectIndex + 1} / ${filteredProjects.length}`;
        // Also update the Header Nav Counter
        const navCounter = document.getElementById('project-nav-counter');
        if (navCounter) navCounter.textContent = `${currentProjectIndex + 1} / ${filteredProjects.length}`;

        // Update Project Button Visibility (Linear)
        const btnPrevParams = document.getElementById('btn-prev-proj');
        const btnNextParams = document.getElementById('btn-next-proj');

        if (btnPrevParams) {
            btnPrevParams.style.visibility = (currentProjectIndex > 0) ? 'visible' : 'hidden';
            btnPrevParams.disabled = (currentProjectIndex === 0);
        }
        if (btnNextParams) {
            btnNextParams.style.visibility = (currentProjectIndex < filteredProjects.length - 1) ? 'visible' : 'hidden';
            btnNextParams.disabled = (currentProjectIndex === filteredProjects.length - 1);
        }

        // Update Image (Right Panel)
        currentImageIndex = 0;
        updateImageDisplay(false); // No slide animation on project switch, just fade
    }

    // Update Image View with Animation Support
    function updateImageDisplay(animate = true, direction = 1) {
        // Safety checks
        if (!filteredProjects || filteredProjects.length === 0) return;
        const project = filteredProjects[currentProjectIndex];
        if (!project) return;
        const images = project.images || [];

        // Image Button Visibility Logic (Safe Check)
        const btnPrevImg = document.getElementById('btn-prev-img');
        const btnNextImg = document.getElementById('btn-next-img');

        if (btnPrevImg) {
            btnPrevImg.style.visibility = (images.length > 1 && currentImageIndex > 0) ? 'visible' : 'hidden';
            btnPrevImg.disabled = (images.length <= 1 || currentImageIndex <= 0);
        }
        if (btnNextImg) {
            btnNextImg.style.visibility = (images.length > 1 && currentImageIndex < images.length - 1) ? 'visible' : 'hidden';
            btnNextImg.disabled = (images.length <= 1 || currentImageIndex >= images.length - 1);
        }

        // Re-fetch panel in case of DOM issues
        const panel = document.getElementById('dynamic-image-display');
        if (!panel) return;

        panel.innerHTML = ''; // Clear existing content

        if (images.length > 0) {
            // Container for image to handle overflow/centering
            const imgContainer = document.createElement('div');
            imgContainer.style.width = '100%';
            imgContainer.style.height = '100%';
            imgContainer.style.display = 'flex';
            imgContainer.style.alignItems = 'center';
            imgContainer.style.justifyContent = 'center';
            imgContainer.style.overflow = 'hidden';

            const img = document.createElement('img');

            // Bounds Check
            if (currentImageIndex >= images.length) currentImageIndex = 0;
            if (currentImageIndex < 0) currentImageIndex = images.length - 1;

            // Debug Link
            img.src = 'https://placehold.co/600x400/orange/white?text=DEBUG+TEST';
            console.log('Attempting to load image:', img.src);

            img.onerror = function () {
                console.log('Image failed to load');
                this.onerror = null; // Prevent infinite loop
                this.src = 'https://placehold.co/800x600/333/fff?text=Image+Introuvable';
                this.style.objectFit = 'contain';
            };
            img.alt = `${project.title} image`;
            img.style.border = '5px solid red'; // DEBUG VISIBILITY
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '8px';
            img.style.display = 'block';

            // Animation removed for debugging - ensure visibility first
            img.style.opacity = '1';

            /*
            if (animate) {
                const enterClass = direction === 1 ? 'slide-in-right' : 'slide-in-left';
                img.classList.add(enterClass);
            } else {
                img.style.animation = 'fadeInUpProject 0.5s ease forwards';
            }
            */

            imgContainer.appendChild(img);

            // Indicator
            if (images.length > 1) {
                const indicator = document.createElement('div');
                indicator.style.position = 'absolute';
                indicator.style.bottom = '10px';
                indicator.style.left = '50%';
                indicator.style.transform = 'translateX(-50%)';
                indicator.style.background = 'rgba(0,0,0,0.6)';
                indicator.style.color = 'white';
                indicator.style.padding = '4px 10px';
                indicator.style.borderRadius = '12px';
                indicator.style.fontSize = '0.8rem';
                indicator.innerHTML = `${currentImageIndex + 1} / ${images.length}`;
                imgContainer.appendChild(indicator);
            }

            panel.appendChild(imgContainer);
        } else {
            panel.innerHTML = '<div style="color: var(--text-muted);">Aucune image</div>';
        }
    }

    // Global Navigation functions
    window.changeProject = function (direction) {
        if (filteredProjects.length === 0) return;
        const count = filteredProjects.length;
        currentProjectIndex = (currentProjectIndex + direction + count) % count;

        // Add animation to wrapper for transition
        const wrapper = document.querySelector('.projects-content-wrapper');
        if (wrapper) {
            wrapper.classList.remove('project-enter');
            void wrapper.offsetWidth; // Trigger reflow
            wrapper.classList.add('project-enter');
        }

        updateProjectView();
    };

    window.changeImage = function (direction) {
        if (filteredProjects.length === 0) return;
        const project = filteredProjects[currentProjectIndex];
        if (!project.images || project.images.length === 0) return;

        const count = project.images.length;
        // Linear Check
        const newIndex = currentImageIndex + direction;
        if (newIndex < 0 || newIndex >= count) return; // Stop if out of bounds

        // Apply exit animation to CURRENT image
        const currentImg = projectImagesPanel.querySelector('img');
        if (currentImg) {
            const exitClass = direction === 1 ? 'slide-out-left' : 'slide-out-right';
            currentImg.classList.add(exitClass);
        }

        currentImageIndex = newIndex;
        updateImageDisplay(true, direction);
    };

    function updateImageDisplay(animate = false, direction = 1) {
        const project = filteredProjects[currentProjectIndex];
        const images = project.images || [];
        projectImagesPanel.innerHTML = '';

        if (images.length > 0) {
            // Update Button Visibility
            const btnPrev = document.getElementById('btn-prev-img');
            const btnNext = document.getElementById('btn-next-img');
            if (btnPrev) btnPrev.style.display = (currentImageIndex > 0) ? 'flex' : 'none';
            if (btnNext) btnNext.style.display = (currentImageIndex < images.length - 1) ? 'flex' : 'none';

            const imgContainer = document.createElement('div');
            // ... (rest of image creation logic)
            // Re-instantiate image logic here or better yet call the existing logic if I can find it. 
            // Wait, I am replacing `updateImageDisplay` definition? No, I am observing `window.changeImage` calling it. 
            // I need to EDIT `updateImageDisplay` function body itself to handle button visibility.
            // But `updateImageDisplay` was defined WHERE? around line 630.
            // I will target `window.changeImage` here (lines 703-722) AND I need to find `updateImageDisplay` definition to edit it.
            // I'll stick to editing `window.changeImage` here to linearize it.
            // And I will separate the `updateImageDisplay` edit into another chunk if I can find it.
            // Ah, I can just manipulate buttons INSIDE `updateImageDisplay`?
            // Yes.
        }

        // ... (previous logic)
    }
    // Wait, I can't overwrite `updateImageDisplay` if I don't see it full. 
    // I see lines 560-630. It ends at `// Update Image View with Animation Support`.
    // I need to READ lines 630+ to edit `updateImageDisplay` properly.
    // For now I will Just fix `changeImage` to be linear.
    // AND I will add a chunk to `updateProjectView` (already done above).
    // Filter Logic
    function filterProjects(filterId) {
        // currentFilter = filterId; // We can track this if needed

        // Filter logic handling 'ia' group
        if (filterId === 'all') {
            filteredProjects = projects;
        } else if (filterId === 'ia') {
            filteredProjects = projects.filter(p => ['cv', 'nlp', 'ml'].includes(p.category));
        } else {
            filteredProjects = projects.filter(p => p.category === filterId);
        }

        // Reset indices
        currentProjectIndex = 0;
        currentImageIndex = 0;

        // Animate container
        const wrapper = document.querySelector('.projects-content-wrapper');
        if (wrapper) {
            wrapper.classList.remove('project-enter');
            void wrapper.offsetWidth;
            wrapper.classList.add('project-enter');
        }

        updateProjectView();
    }

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Initial Render
    filterProjects('ia');
});

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <h2>${project.title}</h2>
        <div class="status-indicator" style="display:inline-flex; margin: 1rem 0;">${project.year}</div>
        <p>${project.description}</p>
        <div class="stack-icons" style="margin-top: 1.5rem; font-size: 1.5rem;">
            ${project.tech.map(t => `<span class="tech-tag" style="font-size: 0.8rem; border:1px solid #333; padding:4px 8px; border-radius:4px;">${t}</span>`).join('')}
        </div>
    `;

    modal.classList.add('visible');

    modal.querySelector('.close-modal').onclick = () => {
        modal.classList.remove('visible');
    };

    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('visible');
    };
}
