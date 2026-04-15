// Data directly inlined to ensure strictly local functionality without server
const categories = [
    { id: 'all', name: 'All' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'nlp', name: 'NLP' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'AI Web Apps' }
];

const projects = [
    {
        id: 112,
        title: "PhotoLift",
        description: `Desktop application for fast photo management and processing.
        
**Optimized Workflow:** Automatic import, sorting by sessions, and quick touch-ups.
**Powerful Tools:** Integrated image editor with color adjustments, cropping, and filters.
**Intuitive Interface:** Modern and clean design for a smooth user experience.`,
        descriptionFr: `Application de bureau pour la gestion et le traitement rapide de photos.
        
**Workflow Optimisé :** Import automatique, tri par sessions et retouches rapides.
**Outils Puissants :** Éditeur d'images intégré avec ajustements de couleurs, recadrage et filtres.
**Interface Intuitive :** Design moderne et épuré pour une expérience utilisateur fluide.`,
        category: "other",
        year: "2026",
        tech: ["Tauri", "React", "Rust", "Image Processing"],
        icon: "fa-camera",
        images: [
            "./img/other/PhotoLift/pl1.png",
            "./img/other/PhotoLift/pl2.png",
            "./img/other/PhotoLift/pl3.png",
            "./img/other/PhotoLift/pl4.png",
            "./img/other/PhotoLift/pl5.png",
            "./img/other/PhotoLift/pl6.png",
            "./img/other/PhotoLift/pl7.png",
            "./img/other/PhotoLift/pl8.png"
        ]
    },
    {
        id: 111,
        title: "Obvious Tool",
        description: `Your Digital Swiss Army Knife. A unified suite of tools for developers and creatives.

**Multi-Tools:** Over 50 essential tools (Converters, Encoders, Image/Audio processing) in one app.
**Embedded AI:** AI-powered modules for paraphrasing, text correction, and translation.
**Private & Fast:** Runs locally, ad-free, with a modern and fluid interface.`,
        descriptionFr: `Votre Couteau Suisse Numérique. Une suite unifiée d'outils pour développeurs et créatifs.

**Multi-Outils :** Plus de 50 outils essentiels (Convertisseurs, Encodeurs, traitement Image/Audio) en une seule app.
**IA Embarquée :** Modules IA pour la paraphrase, la correction de texte et la traduction.
**Privé & Rapide :** Fonctionne en local, sans pub, avec une interface moderne et fluide.`,
        category: "nlp",
        year: "2025",
        tech: ["React", "Desktop App", "AI Utils", "Privacy"],
        icon: "fa-toolbox",
        images: [
            "./img/ia/ObviousTool/ot1.png",
            "./img/ia/ObviousTool/ot2.png",
            "./img/ia/ObviousTool/ot3.png",
            "./img/ia/ObviousTool/ot4.png",
            "./img/ia/ObviousTool/ot5.png",
            "./img/ia/ObviousTool/ot6.png",
            "./img/ia/ObviousTool/ot7.png",
            "./img/ia/ObviousTool/ot8.png",
            "./img/ia/ObviousTool/ot9.png",
            "./img/ia/ObviousTool/ot10.png",
            "./img/ia/ObviousTool/ot11.png"
        ]
    },
    {
        id: 110,
        title: "CVite",
        description: `Intelligent resume creation platform powered by AI.

**Smart Extraction:** Automatic analysis of existing resumes (PDF, Image) to populate your profile instantly.
**Advanced Editor:** Real-time customization of templates, colors, and layouts.
**UX Focused:** Smooth and intuitive interface designed to simplify job hunting.`,
        descriptionFr: `Plateforme intelligente de création de CV propulsée par l'IA.

**Extraction Intelligente :** Analyse automatique de CV existants (PDF, Image) pour remplir votre profil instantanément.
**Éditeur Avancé :** Personnalisation en temps réel des modèles, couleurs et mises en page.
**UX au Centre :** Interface fluide et intuitive conçue pour simplifier la recherche d'emploi.`,
        category: "nlp",
        year: "2025",
        tech: ["React", "NLP", "AI Integration", "Vite"],
        icon: "fa-file-alt",

        images: [
            "./img/ia/CVite/cv1.png",
            "./img/ia/CVite/cv2.png",
            "./img/ia/CVite/cv3.png",
            "./img/ia/CVite/cv4.png",
            "./img/ia/CVite/cv5.png",
            "./img/ia/CVite/cv6.png",
            "./img/ia/CVite/cv7.png",
            "./img/ia/CVite/cv8.png",
            "./img/ia/CVite/cv9.png",
            "./img/ia/CVite/cv10.png",
            "./img/ia/CVite/cv11.png",
            "./img/ia/CVite/cv12.png"
        ]
    },
    {
        id: 109,
        title: "Smart Bucket",
        description: `Autonomous crypto portfolio management system driven by AI.

**Autopilot:** Dynamic asset allocation and automated rebalancing across BTC, ETH, SOL, etc.
**Strategic Analysis:** 24/7 market monitoring, sentiment analysis, and low-latency execution (0.0s).
**Modern Interface:** Comprehensive dashboard for tracking performance, liquidity, and transaction history.`,
        descriptionFr: `Système autonome de gestion de portefeuille crypto piloté par l'IA.

**Pilote Automatique :** Allocation dynamique des actifs et rééquilibrage automatisé sur BTC, ETH, SOL, etc.
**Analyse Stratégique :** Surveillance du marché 24/7, analyse de sentiment et exécution à faible latence (0.0s).
**Interface Moderne :** Tableau de bord complet pour suivre les performances, la liquidité et l'historique des transactions.`,
        category: "ml",
        year: "2025",
        tech: ["Python", "Machine Learning", "React", "Trading"],
        icon: "fa-robot",

        images: [
            "./img/ia/SmartBucket/sb1.png",
            "./img/ia/SmartBucket/sb2.png",
            "./img/ia/SmartBucket/sb3.png",
            "./img/ia/SmartBucket/sb4.png"
        ]
    },
    {
        id: 108,
        title: "GhostLink",
        description: `Share Secrets Securely. Encrypt text, files, or images into a secure link. Nothing is ever stored on a server. The link is the data.

**Total Security:** Full client-side AES-256 encryption. Your data never leaves your device without being encrypted.
**Privacy:** No permanent storage. The generated link contains all information needed for decryption.
**Simplicity:** Share passwords, private keys, or sensitive files in one click.`,
        descriptionFr: `Partagez vos secrets en toute sécurité. Chiffrez du texte, des fichiers ou des images dans un lien sécurisé. Rien n'est jamais stocké sur un serveur. Le lien est la donnée.

**Sécurité Totale :** Chiffrement AES-256 entièrement côté client. Vos données ne quittent jamais votre appareil sans être chiffrées.
**Confidentialité :** Aucun stockage permanent. Le lien généré contient toutes les informations nécessaires au déchiffrement.
**Simplicité :** Partagez mots de passe, clés privées ou fichiers sensibles en un clic.`,
        category: "web",
        year: "2024",
        tech: ["React", "Cryptography", "Web App"],
        icon: "fa-user-secret",

        images: [
            "./img/web/GhostLink/ghostlink_4.png",
            "./img/web/GhostLink/ghostlink_3.png",
            "./img/web/GhostLink/ghostlink_2.png",
            "./img/web/GhostLink/ghostlink_1.png"
        ]
    },

    {
        id: 24,
        title: "Turn Base Battle Game",
        description: "This is a mobile game project for which I created 4 different scenes.\n\nFirst, I was tasked with creating the home environment that appears at the start of the game. This scene later serves as the background for the main menu. It represents the entrance to a demonic dungeon where battles take place.\n\nNext, I focused on creating three levels that are combat zones within this dungeon: a throne room, a library, and finally underground tombs.\n\nI also created a final outdoor level which remains experimental.",
        descriptionFr: "Projet de jeu mobile pour lequel j'ai créé 4 scènes différentes.\n\nD'abord, j'ai été chargé de créer l'environnement d'accueil qui apparaît au démarrage du jeu. Cette scène sert ensuite de fond pour le menu principal. Elle représente l'entrée d'un donjon démoniaque où se déroulent les combats.\n\nEnsuite, j'ai créé trois niveaux qui sont des zones de combat dans ce donjon : une salle du trône, une bibliothèque et enfin des tombes souterraines.\n\nJ'ai également créé un dernier niveau extérieur qui reste expérimental.",
        category: "games",
        year: "2021",
        tech: ["Level Design", "Mobile", "Unity"],
        icon: "fa-chess-board",
        images: [
            "./img/games/TurnBaseBattle/Menu.webp",
            "./img/games/TurnBaseBattle/DongeonA.webp",
            "./img/games/TurnBaseBattle/DongeonB.webp",
            "./img/games/TurnBaseBattle/DongeonC.webp",
            "./img/games/TurnBaseBattle/Battle.webp"
        ]
    },
    {
        id: 8,
        title: "Gravity Defy",
        description: `Gravity Defy is a mobile motorcycle parkour game. I participated in the creation of 14 levels for this client.

The gameplay is demanding: you must cross levels full of various obstacles. I worked on the level design to offer an interesting and progressive challenge in polished Low Poly environments (city, forest, mountain).`,
        descriptionFr: `Gravity Defy est un jeu mobile de parkour en moto. J'ai participé à la création de 14 niveaux pour ce client.

Le gameplay est exigeant : il faut traverser des niveaux remplis d'obstacles variés. J'ai travaillé sur le level design pour offrir un challenge intéressant et progressif dans des environnements Low Poly soignés (ville, forêt, montagne).`,
        category: "games",
        year: "2021",
        tech: ["Unity", "Level Design", "Mobile"],
        icon: "fa-motorcycle",
        images: [
            "./img/games/GravityDefy/1.webp",
            "./img/games/GravityDefy/2.webp",
            "./img/games/GravityDefy/3.webp",
            "./img/games/GravityDefy/4.webp",
            "./img/games/GravityDefy/5.webp",
            "./img/games/GravityDefy/6.webp",
            "./img/games/GravityDefy/7.webp",
            "./img/games/GravityDefy/8.webp",
            "./img/games/GravityDefy/9.webp",
            "./img/games/GravityDefy/10.webp",
            "./img/games/GravityDefy/11.webp",
            "./img/games/GravityDefy/12.webp",
            "./img/games/GravityDefy/13.webp",
            "./img/games/GravityDefy/14.webp",
            "./img/games/GravityDefy/15.webp",
            "./img/games/GravityDefy/16.webp",
            "./img/games/GravityDefy/17.webp",
            "./img/games/GravityDefy/18.webp",
            "./img/games/GravityDefy/19.webp",
            "./img/games/GravityDefy/20.webp",
            "./img/games/GravityDefy/21.webp",
            "./img/games/GravityDefy/22.webp",
            "./img/games/GravityDefy/23.webp",
            "./img/games/GravityDefy/24.webp",
            "./img/games/GravityDefy/25.webp",
            "./img/games/GravityDefy/26.webp",
            "./img/games/GravityDefy/27.webp",
            "./img/games/GravityDefy/28.webp"
        ]
    },
    {
        id: 25,
        title: "Cubic Level",
        description: `A charming level designed for a top-down mobile game.

The level is entirely composed of blocks and assets with a 'Voxel' cubic art style.
The main challenge of this map was to create an environment with fluid circulation for the player. I managed to make navigation fun while maintaining a polished aesthetic. I also created some animations for the game.`,
        descriptionFr: `Un niveau charmant conçu pour un jeu mobile en vue de dessus.

Le niveau est entièrement composé de blocs et d'assets avec un style artistique cubique 'Voxel'.
Le principal défi de cette carte était de créer un environnement avec une circulation fluide pour le joueur. J'ai réussi à rendre la navigation amusante tout en maintenant une esthétique soignée. J'ai également créé des animations pour le jeu.`,
        category: "games",
        year: "2021",
        tech: ["Voxel", "Level Design", "Mobile"],
        icon: "fa-cube",
        links: [
            { label: "Vidéo Animation", url: "https://www.youtube.com/watch?v=HIJzEN4P0TA" }
        ],
        images: [
            "./img/games/CubicLevel/LevelCapture20.webp",
            "./img/games/CubicLevel/LevelCapture21.webp",
            "./img/games/CubicLevel/LevelCapture22.webp",
            "./img/games/CubicLevel/LevelCapture23.webp",
            "./img/games/CubicLevel/LevelCapture24.webp",
            "./img/games/CubicLevel/LevelCapture25.webp",
            "./img/games/CubicLevel/LevelCapture26.webp",
            "./img/games/CubicLevel/LevelCapture27.webp",
            "./img/games/CubicLevel/LevelCapture28.webp",
            "./img/games/CubicLevel/LevelCapture29.webp",
            "./img/games/CubicLevel/LevelCapture30.webp",
            "./img/games/CubicLevel/LevelCapture31.webp",
            "./img/games/CubicLevel/LevelCapture32.webp",
            "./img/games/CubicLevel/LevelCapture33.webp",
            "./img/games/CubicLevel/LevelCapture34.webp",
            "./img/games/CubicLevel/LevelCapture35.webp",
            "./img/games/CubicLevel/LevelCapture36.webp",
            "./img/games/CubicLevel/LevelCapture37.webp",
            "./img/games/CubicLevel/LevelCapture38.webp",
            "./img/games/CubicLevel/LevelCapture39.webp",
            "./img/games/CubicLevel/LevelCapture40.webp"
        ]
    },
    {
        id: 11,
        title: "Parkour Game",
        description: `For this project, I created 5 levels for a Parkour-style game where the player must jump, climb walls, and find the exit.

The character is played in the third person, offering a better overview of the environment.
It's an urban environment designed to maximize verticality and match the Parkour universe.
Some levels are also indoors, offering new challenges and a variety of environments.`,
        descriptionFr: `Pour ce projet, j'ai créé 5 niveaux pour un jeu style Parkour où le joueur doit sauter, escalader les murs et trouver la sortie.

Le personnage se joue en troisième personne, offrant une meilleure vue d'ensemble de l'environnement.
C'est un environnement urbain conçu pour maximiser la verticalité et correspondre à l'univers du Parkour.
Certains niveaux sont également en intérieur, offrant de nouveaux défis et une variété d'environnements.`,
        category: "games",
        year: "2020",
        tech: ["Level Design", "Unity", "3D"],
        icon: "fa-running",
        images: [
            "./img/games/ParkourGame/1.webp",
            "./img/games/ParkourGame/2.webp",
            "./img/games/ParkourGame/3.webp",
            "./img/games/ParkourGame/4.webp",
            "./img/games/ParkourGame/5.webp",
            "./img/games/ParkourGame/6.webp",
            "./img/games/ParkourGame/7.webp",
            "./img/games/ParkourGame/8.webp",
            "./img/games/ParkourGame/9.webp",
            "./img/games/ParkourGame/10.webp",
            "./img/games/ParkourGame/11.webp",
            "./img/games/ParkourGame/12.webp",
            "./img/games/ParkourGame/13.webp",
            "./img/games/ParkourGame/14.webp",
            "./img/games/ParkourGame/15.webp",
            "./img/games/ParkourGame/16.webp",
            "./img/games/ParkourGame/17.webp",
            "./img/games/ParkourGame/18.webp",
            "./img/games/ParkourGame/19.webp",
            "./img/games/ParkourGame/20.webp",
            "./img/games/ParkourGame/21.webp",
            "./img/games/ParkourGame/22.webp",
            "./img/games/ParkourGame/23.webp",
            "./img/games/ParkourGame/24.webp",
            "./img/games/ParkourGame/25.webp",
            "./img/games/ParkourGame/26.webp",
            "./img/games/ParkourGame/27.webp",
            "./img/games/ParkourGame/28.webp",
            "./img/games/ParkourGame/29.webp"
        ]
    },
    {
        id: 10,
        title: "Pure Mahjong",
        description: `Pure Mahjong is a photorealistic Mahjong game that takes the user on a journey through 24 Chinese solar calendar events.

The game contains hundreds of levels for each day of the year. With over 1000 individually designed levels, Pure Mahjong offers a wide variety of gameplay. Some levels are solved in minutes, others can take hours.

Every day, 4 new levels await you, ranging from relatively easy to very difficult.`,
        descriptionFr: `Pure Mahjong est un jeu de Mahjong photo-réaliste qui emmène l'utilisateur dans un voyage à travers 24 événements du calendrier solaire chinois.

Le jeu contient des centaines de niveaux pour chaque jour de l'année. Avec plus de 1000 niveaux conçus individuellement, Pure Mahjong offre une grande variété de gameplay. Certains niveaux se résolvent en minutes, d'autres peuvent prendre des heures.

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
            "./img/games/PureMahjong/PureMahjong1.webp",
            "./img/games/PureMahjong/PureMahjong2.webp",
            "./img/games/PureMahjong/PureMahjong3.webp",
            "./img/games/PureMahjong/PureMahjong4.webp",
            "./img/games/PureMahjong/PureMahjong5.webp",
            "./img/games/PureMahjong/PureMahjong6.webp",
            "./img/games/PureMahjong/PureMahjong7.webp",
            "./img/games/PureMahjong/PureMahjong8.webp",
            "./img/games/PureMahjong/PureMahjong9.webp"
        ]
    },
    {
        id: 26,
        title: "Cartoon Level",
        description: `Prototype map for a cartoon game intended for a young audience.

The constraints were to create a small to medium-sized map in a natural environment (forest, mountain, lake, rivers). The cartoon style was chosen for its colorful visual impact.

I used the Unity engine and the Gaea terrain generator. The project was completed in one month in constant iteration with the client.`,
        descriptionFr: `Carte prototype pour un jeu cartoon destiné à un jeune public.

Les contraintes étaient de créer une carte de taille petite à moyenne dans un environnement naturel (forêt, montagne, lac, rivières). Le style cartoon a été choisi pour son impact visuel coloré.

J'ai utilisé le moteur Unity et le générateur de terrain Gaea. Le projet a été réalisé en un mois en itération constante avec le client.`,
        category: "games",
        year: "2019",
        tech: ["Gaea", "Unity", "Cartoon"],
        icon: "fa-tree",
        images: [
            "./img/games/CartoonLevel/1.webp",
            "./img/games/CartoonLevel/2.webp",
            "./img/games/CartoonLevel/3.webp",
            "./img/games/CartoonLevel/4.webp",
            "./img/games/CartoonLevel/5.webp",
            "./img/games/CartoonLevel/6.webp",
            "./img/games/CartoonLevel/7.webp",
            "./img/games/CartoonLevel/8.webp",
            "./img/games/CartoonLevel/9.webp",
            "./img/games/CartoonLevel/10.webp",
            "./img/games/CartoonLevel/11.webp"
        ]
    },
    {
        id: 16,
        title: "Hunting Game Map",
        description: `Creation of a vast map for a first-person shooter (FPS) hunting game.

The map is composed of forests, lakes, swamps, rivers, mountains, and plains. It is designed to be vast to immerse the player in a rich natural environment.
The semi-realistic graphic style was created with a dedicated asset pack and a terrain generator for the entire topography.`,
        descriptionFr: `Création d'une vaste carte pour un jeu de chasse en vue à la première personne (FPS).

La carte est composée de forêts, lacs, marécages, rivières, montagnes et plaines. Elle est conçue pour être vaste afin d'immerger le joueur dans un environnement naturel riche.
Le style graphique semi-réaliste a été créé avec un pack d'assets dédié et un générateur de terrain pour toute la topographie.`,
        category: "games",
        year: "2019",
        tech: ["Level Design", "Terrain", "Nature"],
        icon: "fa-tree",
        images: [
            "./img/games/HuntingGame/HuntGame1.webp",
            "./img/games/HuntingGame/HuntGame2.webp",
            "./img/games/HuntingGame/HuntGame3.webp",
            "./img/games/HuntingGame/HuntGame4.webp",
            "./img/games/HuntingGame/HuntGame5.webp",
            "./img/games/HuntingGame/HuntGame6.webp",
            "./img/games/HuntingGame/HuntGame7.webp",
            "./img/games/HuntingGame/HuntGame8.webp",
            "./img/games/HuntingGame/HuntGame9.webp",
            "./img/games/HuntingGame/HuntGame10.webp",
            "./img/games/HuntingGame/HuntGame11.webp",
            "./img/games/HuntingGame/HuntGame12.webp",
            "./img/games/HuntingGame/HuntGame13.webp",
            "./img/games/HuntingGame/HuntGame14.webp",
            "./img/games/HuntingGame/HuntGame15.webp",
            "./img/games/HuntingGame/HuntGame16.webp",
            "./img/games/HuntingGame/HuntGame17.webp",
            "./img/games/HuntingGame/HuntGame18.webp"
        ]
    },
    {
        id: 27,
        title: "3 Pigs Game",
        description: `Level created for a freelance mission, based on the story of the 3 little pigs.

The level is linear (right to left) and divided into 6 distinct zones: the mother's house, the straw construction zone, an enemy zone, the wood house, a bridge crossing a lake, and finally the brick house.
The goal is to travel through the forest and collect resources to build the houses and resist the wolf.`,
        descriptionFr: `Niveau créé pour une mission freelance, basé sur l'histoire des 3 petits cochons.

Le niveau est linéaire (de droite à gauche) et divisé en 6 zones distinctes : la maison de la mère, la zone de construction en paille, une zone d'ennemis, la maison en bois, un pont traversant un lac, et enfin la maison en briques.
L'objectif est de traverser la forêt et de collecter des ressources pour construire les maisons et résister au loup.`,
        category: "games",
        year: "2019",
        tech: ["Level Design", "Freelance", "Unity"],
        icon: "fa-piggy-bank",
        images: [
            "./img/games/3Pigs/3pigs1.webp",
            "./img/games/3Pigs/3pigs2.webp",
            "./img/games/3Pigs/3pigs3.webp",
            "./img/games/3Pigs/3pigs4.webp",
            "./img/games/3Pigs/3pigs5.webp",
            "./img/games/3Pigs/3pigs6.webp"
        ]
    },
    {
        id: 6,
        title: "Koda: Kiyomori's Guardian",
        description: `Koda: Kiyomori's Guardian is a dreamy 3D platform adventure game based on Japanese folklore. You play as Koda, a Tanuki guardian of the forest.

**The Story:** The forest is divided into 4 zones protected by divine entities. After a terrible event, the forest is corrupted by Yokais. Koda must use his abilities to purify the forest.

**The Project:** 3-month student project (Gamagora) created by 17 students. Presented at the Gamagora Game Show 2018.`,
        descriptionFr: `Koda : Le Gardien de Kiyomori est un jeu d'aventure/plateforme 3D onirique basé sur le folklore japonais. Vous incarnez Koda, un Tanuki gardien de la forêt.

**L'Histoire :** La forêt est divisée en 4 zones protégées par des entités divines. Après un événement terrible, la forêt est corrompue par les Yokais. Koda doit utiliser ses capacités pour purifier la forêt.

**Le Projet :** Projet étudiant de 3 mois (Gamagora) créé par 17 étudiants. Présenté au Gamagora Game Show 2018.`,
        category: "games",
        year: "2018",
        tech: ["Unity", "C#", "Level Design"],
        icon: "fa-torii-gate",
        links: [
            { label: "Télécharger (Itch.io)", url: "https://gamagora.itch.io/koda" },
            { label: "Trailer", url: "https://www.youtube.com/watch?v=RNpgW7T4oU8" }
        ],
        images: [
            "./img/games/Koda/Koda01.webp",
            "./img/games/Koda/Koda02.webp",
            "./img/games/Koda/Koda03.webp",
            "./img/games/Koda/Koda04.webp",
            "./img/games/Koda/Koda05.webp",
            "./img/games/Koda/Koda06.webp",
            "./img/games/Koda/Koda07.webp",
            "./img/games/Koda/Koda08.webp",
            "./img/games/Koda/Koda09.webp",
            "./img/games/Koda/Koda10.webp"
        ]
    },
    {
        id: 7,
        title: "Antivirus: Data City",
        description: `Data City is under attack by destructive viruses. Antivirus, the superhero, must defend the city's Core.

**Objective:** Protect the Core in the city center before corruption reaches it. Freeze infected areas and rebuild destroyed cubes.

**Details:** The game takes place in a voxel/neon 'Tron' style digital city. The city is modular, composed of distinct districts connected by bridges, offering great verticality.
I was in charge of Level Design, imagining this virtual universe and creating a systemic city where the infection spreads district by district.`,
        descriptionFr: `Data City est attaquée par des virus destructeurs. Antivirus, le super-héros, doit défendre le Cœur de la ville.

**Objectif :** Protéger le Cœur au centre de la ville avant que la corruption ne l'atteigne. Geler les zones infectées et reconstruire les cubes détruits.

**Détails :** Le jeu se déroule dans une ville numérique en voxel/néon style 'Tron'. La ville est modulaire, composée de quartiers distincts reliés par des ponts, offrant une grande verticalité.
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
            "./img/games/Antivirus/AntiVirus1.webp",
            "./img/games/Antivirus/AntiVirus2.webp",
            "./img/games/Antivirus/AntiVirus3.webp",
            "./img/games/Antivirus/AntiVirus4.webp",
            "./img/games/Antivirus/AntiVirus5.webp",
            "./img/games/Antivirus/AntiVirus6.webp",
            "./img/games/Antivirus/AntiVirus8.webp",
            "./img/games/Antivirus/AntiVirus9.webp",
            "./img/games/Antivirus/AntiVirus10.webp",
            "./img/games/Antivirus/AntiVirus11.webp",
            "./img/games/Antivirus/AntiVirus12.webp",
            "./img/games/Antivirus/AntiVirus13.webp",
            "./img/games/Antivirus/AntiVirus14.webp",
            "./img/games/Antivirus/AntiVirus15.webp",
            "./img/games/Antivirus/AntiVirus16.webp",
            "./img/games/Antivirus/AntiVirus17.webp",
            "./img/games/Antivirus/AntiVirus18.webp",
            "./img/games/Antivirus/AntiVirus19.webp",
            "./img/games/Antivirus/AntiVirus20.webp",
            "./img/games/Antivirus/AntiVirus21.webp",
            "./img/games/Antivirus/AntiVirus22.webp",
            "./img/games/Antivirus/AntiVirus23.webp",
            "./img/games/Antivirus/AntiVirus24.webp",
            "./img/games/Antivirus/city.webp"
        ]
    },
    {
        id: 20,
        title: "Underground Water Junction",
        description: `Multiplayer map for Unreal Tournament (CTF 3v3), created with UDK.

The level represents a junction of underground sewers. This confined space offers multiple hiding spots and access points, ideal for Capture The Flag.
The space consists of two water crosses. Players can walk along the walls, enter adjacent buildings for ambushes, or take risks by jumping over the water.
Verticality is present with one-story buildings, allowing for surprise attacks from above.`,
        descriptionFr: `Carte multijoueur pour Unreal Tournament (CTF 3v3), créée avec UDK.

Le niveau représente une jonction d'égouts souterrains. Cet espace confiné offre de multiples cachettes et points d'accès, idéal pour le Capture The Flag.
L'espace est composé de deux croix d'eau. Les joueurs peuvent longer les murs, entrer dans les bâtiments adjacents pour tendre des embuscades, ou prendre des risques en sautant par-dessus l'eau.
La verticalité est présente avec des bâtiments à un étage, permettant des attaques surprises d'en haut.`,
        category: "games",
        year: "2018",
        tech: ["Unreal Engine", "Level Design", "Multiplayer"],
        icon: "fa-water",
        links: [
            { label: "Télécharger Map", url: "./content/pdf/UndergroundWaterJunction.pdf" },
            { label: "Trailer", url: "https://www.youtube.com/watch?v=C6l0aLzwxuM" }
        ],
        images: [
            "./img/games/UWJ/UWJ01.webp",
            "./img/games/UWJ/UWJ02.webp",
            "./img/games/UWJ/UWJ03.webp",
            "./img/games/UWJ/UWJ04.webp",
            "./img/games/UWJ/UWJ05.webp",
            "./img/games/UWJ/UWJ06.webp",
            "./img/games/UWJ/UWJ07.webp",
            "./img/games/UWJ/UWJ08.webp",
            "./img/games/UWJ/UWJmap.webp"
        ]
    },

    {
        id: 30,
        title: "Sleeping Pit",
        description: "Medieval fantasy puzzle game. The player plays as a mage using divisible slimes to activate mechanisms and solve complex puzzles in a giant pit.",
        descriptionFr: "Jeu de puzzle médiéval-fantastique. Le joueur incarne un mage utilisant des slimes divisibles pour activer des mécanismes et résoudre des puzzles complexes dans une fosse géante.",
        category: "games",
        year: "2018",
        tech: ["Game Design", "Unity", "Puzzle"],
        icon: "fa-dungeon",
        links: [
            { label: "Game Design Doc (PDF)", url: "./content/pdf/GDO_PSP_SLEEPING_PIT.pdf" }
        ],
        images: [
            "./img/games/sleepingPit/1.webp",
            "./img/games/sleepingPit/2.webp",
            "./img/games/sleepingPit/3.webp",
            "./img/games/sleepingPit/4.webp",
            "./img/games/sleepingPit/5.webp",
            "./img/games/sleepingPit/6.webp",
            "./img/games/sleepingPit/7.webp",
            "./img/games/sleepingPit/8.webp",
            "./img/games/sleepingPit/Level01PSP.webp"
        ]
    },
    {
        id: 9,
        title: "Deficiency",
        description: "2D Serious Game about the immune system. Educational puzzle game to understand the action of viruses (HIV) and how biological defenses work.",
        descriptionFr: "Serious Game 2D sur le système immunitaire. Jeu de puzzle éducatif pour comprendre l'action des virus (VIH) et le fonctionnement des défenses biologiques.",
        category: "games",
        year: "2018",
        tech: ["JavaScript", "HTML5", "Serious Game"],
        icon: "fa-puzzle-piece",
        links: [
            { label: "Play (Web)", url: "./EmericDosSantos.github.io-master/resources/Deficience_Web_V3/index.html" },
            { label: "Game Concept (PDF)", url: "./content/pdf/DEFICIENCE.pdf" }
        ],
        images: [
            "./img/games/deficienceNew.webp",
            "./assets/images/legacy/Deficience.jpg"
        ]
    },
    {
        id: 14,
        title: "Unity Prototypes",
        description: "Collection of Level Design prototypes in Unity. Experimentation with volumes, lighting, and navigation mechanics.",
        descriptionFr: "Collection de prototypes de Level Design sous Unity. Expérimentation avec les volumes, l'éclairage et les mécaniques de navigation.",
        category: "games",
        year: "2018",
        tech: ["Unity", "Prototyping", "C#"],
        icon: "fa-cubes",
        images: [
            "./img/games/Unity/Unity1.webp",
            "./img/games/Unity/Unity2.webp",
            "./img/games/Unity/Unity3.webp",
            "./img/games/Unity/Unity4.webp"
        ]
    },
    {
        id: 17,
        title: "Tom Atom Rescue",
        description: "Futuristic 2D platformer / RPG. Play as Tom, a robot looking for his creator. Hostile world, equipment upgrades, flying vehicles.",
        descriptionFr: "Platformer/RPG 2D futuriste. Incarnez Tom, un robot à la recherche de son créateur. Monde hostile, améliorations d'équipement, véhicules volants.",
        category: "games",
        year: "2017",
        tech: ["Unity", "2D", "Platformer", "C#"],
        icon: "fa-robot",
        links: [
            { label: "Play (Web)", url: "./EmericDosSantos.github.io-master/resources/Platform_Game_Prototype_1.4/index.html" }
        ],
        images: [
            "./img/games/TomAtomRescu/platformGame1.webp",
            "./img/games/TomAtomRescu/platformGame2.webp",
            "./img/games/TomAtomRescu/platformGame3.webp",
            "./img/games/TomAtomRescu/platformGame4.webp",
            "./img/games/TomAtomRescu/platformGame5.webp",
            "./img/games/TomAtomRescu/Tom Atom printsc.webp",
            "./img/games/TomAtomRescu/badrobot printsc.webp",
            "./img/games/TomAtomRescu/perso.webp",
            "./img/games/TomAtomRescu/player printsc.webp"
        ]
    },
    {
        id: 31,
        title: "World Building",
        description: "Terrains created with Gaea and integrated into Unity. Demonstration of rapid creation of realistic and varied environments.",
        descriptionFr: "Terrains créés avec Gaea et intégrés dans Unity. Démonstration de création rapide d'environnements réalistes et variés.",
        category: "design",
        year: "2019",
        tech: ["Gaea", "Unity", "Terrain", "World Building"],
        icon: "fa-globe-europe",
        images: [
            "./img/games/WorldBuilding/terrain1.webp",
            "./img/games/WorldBuilding/terrain2.webp",
            "./img/games/WorldBuilding/terrain3.webp"
        ]
    },
    {
        id: 18,
        title: "3D Portfolio",
        description: "3D modeling gallery. Objects, environments, and renders created with various tools (Blender, 3ds Max, Photoshop).",
        descriptionFr: "Galerie de modélisation 3D. Objets, environnements et rendus créés avec divers outils (Blender, 3ds Max, Photoshop).",
        category: "design",
        year: "2017",
        tech: ["3D", "Modeling", "Texturing"],
        icon: "fa-cube",
        images: [
            "./img/3D/Grafiti.webp",
            "./img/3D/Extintor1.webp",
            "./img/3D/Extintor2.webp",
            "./img/3D/M1.webp",
            "./img/3D/M2.webp",
            "./img/3D/photoshop-final.webp",
            "./img/3D/Render01.webp",
            "./img/3D/Apple.webp",
            "./img/3D/ColgateBend.webp",
            "./img/3D/Sayan_pods_final.webp",
            "./img/3D/Torre01-1.webp",
            "./img/3D/Torre01-2.webp",
            "./img/3D/Torre02-01.webp",
            "./img/3D/Torre02-02.webp",
            "./img/3D/Torre02-1.webp",
            "./img/3D/Arcade.webp",
            "./img/3D/spinner.webp",
            "./img/3D/VrSystem.webp"
        ]
    },
    {
        id: 22,
        title: "Simple Movements",
        description: "JavaScript learning prototype. Development of a fluid movement engine and basic behavioral AI.",
        descriptionFr: "Prototype d'apprentissage JavaScript. Développement d'un moteur de mouvement fluide et d'IA comportementale basique.",
        category: "games",
        year: "2017",
        tech: ["JavaScript", "HTML5", "Prototype"],
        icon: "fa-gamepad",
        links: [
            { label: "Play", url: "./EmericDosSantos.github.io-master/resources/game/index.html" }
        ],
        images: ["./img/games/Game1.webp"]
    },
    {
        id: 23,
        title: "2D Car Prototype",
        description: "2D racing game prototype in JavaScript. Testing physics management and vehicle collisions.",
        descriptionFr: "Prototype de jeu de course 2D en JavaScript. Test de gestion de la physique et des collisions véhiculaires.",
        category: "games",
        year: "2017",
        tech: ["JavaScript", "HTML5", "Prototype"],
        icon: "fa-car-side",
        links: [
            { label: "Play", url: "./EmericDosSantos.github.io-master/resources/CarTest/index.html" }
        ],
        images: ["./img/games/Game2.webp"]
    },
    {
        id: 21,
        title: "Claycity (Minecraft)",
        description: "Massive city inspired by North America. Dense city center, skyscrapers, parks, and large-scale transport infrastructure.",
        descriptionFr: "Ville massive inspirée de l'Amérique du Nord. Centre-ville dense, gratte-ciels, parcs et infrastructure de transport à grande échelle.",
        category: "games",
        year: "2015",
        tech: ["Minecraft", "Voxel", "Level Design"],
        icon: "fa-building",
        images: [
            "./img/games/minecraft/1.webp",
            "./img/games/minecraft/2.webp",
            "./img/games/minecraft/3.webp",
            "./img/games/minecraft/4.webp",
            "./img/games/minecraft/5.webp",
            "./img/games/minecraft/6.webp",
            "./img/games/minecraft/7.webp",
            "./img/games/minecraft/8.webp",
            "./img/games/minecraft/9.webp",
            "./img/games/minecraft/10.webp",
            "./img/games/minecraft/11.webp",
            "./img/games/minecraft/12.webp",
            "./img/games/minecraft/13.webp",
            "./img/games/minecraft/14.webp",
            "./img/games/minecraft/15.webp",
            "./img/games/minecraft/16.webp",
            "./img/games/minecraft/17.webp",
            "./img/games/minecraft/18.webp",
            "./img/games/minecraft/19.webp",
            "./img/games/minecraft/20.webp",
            "./img/games/minecraft/21.webp",
            "./img/games/minecraft/22.webp",
            "./img/games/minecraft/23.webp",
            "./img/games/minecraft/24.webp",
            "./img/games/minecraft/25.webp",
            "./img/games/minecraft/26.webp",
            "./img/games/minecraft/27.webp",
            "./img/games/minecraft/28.webp",
            "./img/games/minecraft/29.webp",
            "./img/games/minecraft/30.webp",
            "./img/games/minecraft/31.webp",
            "./img/games/minecraft/32.webp",
            "./img/games/minecraft/33.webp",
            "./img/games/minecraft/34.webp",
            "./img/games/minecraft/35.webp",
            "./img/games/minecraft/36.webp",
            "./img/games/minecraft/37.webp",
            "./img/games/minecraft/38.webp"
        ]
    },

    {
        id: 28,
        title: "Trackmania Map",
        description: `Creation of tracks for Trackmania as part of a Level Design course.
        
Three distinct tracks:
- Green (Easy/Technical): Precise trajectories.
- Blue (Medium/Speed): Race from point A to B with jumps and fast curves.
- Green (Competitive): Loops, boosters, and narrow passages for Time Attack.`,
        descriptionFr: `Création de circuits pour Trackmania dans le cadre d'un cours de Level Design.
        
Trois circuits distincts :
- Vert (Facile/Technique) : Trajectoires précises.
- Bleu (Moyen/Vitesse) : Course du point A au point B avec sauts et virages rapides.
- Vert (Compétitif) : Loopings, boosters et passages étroits pour le Time Attack.`,
        category: "games",
        year: "2018",
        tech: ["Trackmania", "Racing", "Level Design"],
        icon: "fa-road",
        links: [
            { label: "Download Maps (PDF)", url: "./content/pdf/Trackmania.pdf" }
        ],
        images: [
            "./img/games/Trackmania/track1.webp",
            "./img/games/Trackmania/track2.webp",
            "./img/games/Trackmania/track3.webp",
            "./img/games/Trackmania/track4.webp",
            "./img/games/Trackmania/track5.webp",
            "./img/games/Trackmania/track8.webp",
            "./img/games/Trackmania/track9.webp",
            "./img/games/Trackmania/track11.webp",
            "./img/games/Trackmania/track12.webp",
            "./img/games/Trackmania/track13.webp",
            "./img/games/Trackmania/track14.webp",
            "./img/games/Trackmania/track16.webp",
            "./img/games/Trackmania/track17.webp",
            "./img/games/Trackmania/track19.webp",
            "./img/games/Trackmania/track20.webp",
            "./img/games/Trackmania/track21.webp",
            "./img/games/Trackmania/track22.webp",
            "./img/games/Trackmania/track23.webp",
            "./img/games/Trackmania/track24.webp"
        ]
    },
    {
        id: 29,
        title: "Perfect Angle",
        description: `Personal 2D puzzle game. The goal is to move the player in the right direction to reach the exit.
        
The difficulty is progressive with increasingly complex puzzles requiring reflection and anticipation.`,
        descriptionFr: `Jeu de puzzle 2D personnel. L'objectif est de déplacer le joueur dans la bonne direction pour atteindre la sortie.
        
La difficulté est progressive avec des puzzles de plus en plus complexes nécessitant réflexion et anticipation.`,
        category: "games",
        year: "2019",
        tech: ["JavaScript", "Puzzle", "2D"],
        icon: "fa-shapes",
        links: [
            { label: "Play (Web)", url: "./EmericDosSantos.github.io-master/resources/Perfect_Angle_Browser_Version/index.html" }
        ],
        images: [
            "./img/games/PerfectAngle/pa1.webp",
            "./img/games/PerfectAngle/pa2.webp",
            "./img/games/PerfectAngle/pa3.webp",
            "./img/games/PerfectAngle/pa4.webp",
            "./img/games/PerfectAngle/pa5.webp"
        ]
    },
    {
        id: 101,
        title: "Tron (Prototype 3)",
        description: "Local multiplayer Snake game on the theme of Tron. 2D top-down view.",
        descriptionFr: "Jeu Snake multijoueur local sur le thème de Tron. Vue 2D de dessus.",
        category: "games",
        year: "2017",
        tech: ["JavaScript", "HTML5", "Local Multiplayer"],
        icon: "fa-gamepad",
        images: [
            "./assets/images/legacy/tron1.png",
            "./assets/images/legacy/tron2.png"
        ]
    },

    {
        id: 103,
        title: "Online Store Design",
        description: "Mockups for a modern online store. Product presentation and user interface.",
        descriptionFr: "Maquettes pour une boutique en ligne moderne. Présentation de produits et interface utilisateur.",
        category: "web",
        year: "2017",
        tech: ["HTML", "CSS", "E-commerce"],
        icon: "fa-shopping-cart",
        images: [
            "./assets/images/legacy/html_css/OnlineStore-01.jpg",
            "./assets/images/legacy/html_css/OnlineStore-02.jpg",
            "./assets/images/legacy/html_css/OnlineStore-03.jpg",
            "./assets/images/legacy/html_css/OnlineStore-04.jpg"
        ]
    },
    {
        id: 104,
        title: "FabLab Caldas da Rainha",
        description: "Official website of FabLab Caldas da Rainha. Interactive platform presenting the resources, machines, and projects of the maker community.",
        descriptionFr: "Site web officiel du FabLab Caldas da Rainha. Plateforme interactive présentant les ressources, machines et projets de la communauté maker.",
        category: "web",
        year: "2017",
        tech: ["HTML", "Bootstrap", "Web Design"],
        icon: "fa-tools",

        images: [
            "./assets/images/legacy/html_css/WebPage1.png",
            "./assets/images/legacy/html_css/WebPage2.png",
            "./assets/images/legacy/html_css/WebPage3.png",
            "./assets/images/legacy/html_css/WebPage4.png"
        ]
    },
    {
        id: 105,
        title: "EMOT.IO",
        description: `Interactive cinematic experience. A visual narrative that evolves in real-time according to the viewer's emotions.

**Biofeedback:** Use of Bitalino sensors (Heart rate, Temperature) to analyze emotional state.
**Real-Time Processing:** Dynamic transformation of image and sound via Processing according to biometric data.
**Concept:** Compare real physiological data with the viewer's subjective experience.`,
        descriptionFr: `Expérience cinématographique interactive. Un récit visuel qui évolue en temps réel selon les émotions du spectateur.

**Biofeedback :** Utilisation de capteurs Bitalino (Fréquence cardiaque, Température) pour analyser l'état émotionnel.
**Traitement Temps Réel :** Transformation dynamique de l'image et du son via Processing selon les données biométriques.
**Concept :** Comparer les données physiologiques réelles avec l'expérience subjective du spectateur.`,
        category: "other",
        year: "2017",
        tech: ["Arduino", "Processing", "Biofeedback", "Bitalino"],
        icon: "fa-heartbeat",

        images: [
            "./assets/images/legacy/arduino/projeto1.jpg",
            "./assets/images/legacy/arduino/projeto2.jpg",
            "./assets/images/legacy/arduino/projeto3.jpg",
            "./assets/images/legacy/arduino/projeto4.jpg",
            "./assets/images/legacy/arduino/projeto5.jpg"
        ]
    },
    {
        id: 106,
        title: "Graphic Design Portfolio",
        description: "Graphic design work including logos, layouts, and illustrations.",
        descriptionFr: "Travaux de design graphique incluant logos, mises en page et illustrations.",
        category: "design",
        year: "2017",
        tech: ["Photoshop", "Illustrator", "InDesign"],
        icon: "fa-paint-brush",
        images: [
            "./assets/images/legacy/design_grafic/Final_Lego-page-001.jpg",
            "./assets/images/legacy/design_grafic/Final_Lego-page-002.jpg",
            "./assets/images/legacy/design_grafic/Hand_Emeric.jpg",
            "./assets/images/legacy/design_grafic/Logo.jpg"
        ]
    },
    {
        id: 107,
        title: "Satoshi Tajiri Info",
        description: "Editorial layout about the creator of Pokémon, Satoshi Tajiri.",
        descriptionFr: "Mise en page éditoriale sur le créateur de Pokémon, Satoshi Tajiri.",
        category: "design",
        year: "2017",
        tech: ["InDesign", "Layout", "Editorial"],
        icon: "fa-book-open",
        images: [
            "./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-001.jpg",
            "./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-002.jpg",
            "./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-003.jpg",
            "./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-004.jpg",
            "./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-005.jpg"
        ]
    }
];

// Main Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Internationalization
    if (typeof I18N !== 'undefined' && typeof TRANSLATIONS !== 'undefined') {
        I18N.init(TRANSLATIONS);
    }

    // Secure Email Injection
    const user = 'contact';
    const domain = 'emericfds.com';
    const emailLink = document.getElementById('secure-email');
    const emailBtn = document.getElementById('email-btn');

    if (emailLink) {
        const address = `${user}@${domain}`;
        emailLink.textContent = (typeof I18N !== 'undefined') ? I18N.t('footer.email.label') : "Contact Me";
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
    let filteredProjects = [];
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
    function updateProjectView(scope = document) {
        if (filteredProjects.length === 0) {
            // Handle empty state
            const titleEl = scope.getElementById ? scope.getElementById('project-title') : scope.querySelector('#project-title');
            if (titleEl) titleEl.textContent = (typeof I18N !== 'undefined') ? I18N.t('projects.empty.title') : 'No projects at the moment';

            // Clear other elements
            const infoPanel = scope.getElementById ? scope.getElementById('dynamic-project-content') : scope.querySelector('#dynamic-project-content');
            const emptyMsg = (typeof I18N !== 'undefined') ? I18N.t('projects.empty.desc') : 'Please select another category.';
            if (infoPanel) infoPanel.innerHTML = `<p class="current-project-desc">${emptyMsg}</p>`;

            const techPanel = scope.getElementById ? scope.getElementById('static-project-tech') : scope.querySelector('#static-project-tech');
            if (techPanel) techPanel.innerHTML = '';

            const imagePanel = scope.getElementById ? scope.getElementById('dynamic-image-display') : scope.querySelector('#dynamic-image-display');
            if (imagePanel) imagePanel.innerHTML = '';

            const counterEl = scope.getElementById ? scope.getElementById('project-nav-counter') : scope.querySelector('#project-nav-counter');
            if (counterEl) counterEl.textContent = '0 / 0';

            const statusEl = scope.getElementById ? scope.getElementById('project-status') : scope.querySelector('#project-status');
            if (statusEl) statusEl.textContent = '';

            return;
        }

        const project = filteredProjects[currentProjectIndex];

        // Helper for scoped selection
        const getEl = (id) => scope.getElementById ? scope.getElementById(id) : scope.querySelector(`#${id}`);

        // 1. Update Static Header
        const titleEl = getEl('project-title');
        const iconEl = getEl('project-icon');
        const statusEl = getEl('project-status');

        if (titleEl) titleEl.textContent = project.title;
        if (iconEl) iconEl.className = `fas ${project.icon || 'fa-code'}`;
        if (statusEl) statusEl.textContent = project.year;

        // 2. Update Scrollable Content
        const infoPanel = getEl('dynamic-project-content'); // Used to be projectInfoPanel global var, but safer to query
        // Note: global projectInfoPanel might be cached. Best to query.
        if (infoPanel) {
            // Basic Markdown Parser
            const currentLang = (typeof I18N !== 'undefined') ? I18N.getLocale() : 'en';
            const rawDesc = (currentLang === 'fr' && project.descriptionFr) ? project.descriptionFr : project.description;
            let formattedDesc = rawDesc
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- (.*?)(?=\n|$)/g, '<li>$1</li>')
                .replace(/\n\n/g, '<br><br>')
                .replace(/\n/g, '<br>');

            if (formattedDesc.includes('<li>')) {
                formattedDesc = formattedDesc.replace(/(<li>.*?<\/li>)+/g, '<ul style="padding-left: 20px; list-style-type: disc;">$&</ul>');
            }

            infoPanel.innerHTML = `
                <div class="current-project-desc" style="white-space: normal;">${formattedDesc}</div>
                
                ${project.links && project.links.length > 0 ? `
                    <div class="project-links" style="margin-top: 1.5rem; display: flex; gap: 0.8rem; flex-wrap: wrap;">
                        ${project.links.map(link => `
                            <a href="${link.url}" target="_blank" style="text-decoration: none; color: white; background: var(--accent); padding: 8px 16px; border-radius: 6px; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; transition: opacity 0.2s;">
                                <i class="fas fa-external-link-alt"></i> ${link.label}
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
            `;
        }


        // 3. Update Fixed Tech Stack Footer
        const techPanel = getEl('static-project-tech');
        if (techPanel) {
            techPanel.innerHTML = `
                <div class="project-tech-stack">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">${(typeof I18N !== 'undefined') ? I18N.t('projects.tech.title') : 'Technologies:'}</h4>
                    <div class="tech-tags" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.tech.map(t => `<span style="background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 12px; font-size: 0.85rem; color: var(--text-muted); border: 1px solid var(--glass-border);">${t}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        // Update Counter
        const counterEl = getEl('project-nav-counter');
        if (counterEl) counterEl.textContent = `${currentProjectIndex + 1} / ${filteredProjects.length}`;

        // Update Project Button Visibility
        const btnPrevParams = getEl('btn-prev-proj');
        const btnNextParams = getEl('btn-next-proj');

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
        updateImageDisplay(false, 1, scope);

        // --- Scroll Shadow Logic ---
        // We need to wait for layout to settle (or at least content injection)
        setTimeout(() => {
            updateScrollShadow(scope);
        }, 0);
    }

    // Scroll Shadow Update Function
    function updateScrollShadow(scope = document) {
        const content = scope.getElementById ? scope.getElementById('dynamic-project-content') : scope.querySelector('#dynamic-project-content');
        const shadow = scope.getElementById ? scope.getElementById('scroll-shadow') : scope.querySelector('#scroll-shadow'); // Using ID now

        if (!content || !shadow) return;

        // Determine if scrolling is possible
        const isScrollable = content.scrollHeight > content.clientHeight;

        // Determine if we are at the bottom
        // Tolerance of 5px
        const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 5;

        // Verify if we need to show shadow
        // Show if scrollable AND NOT at bottom
        if (isScrollable && !isAtBottom) {
            shadow.style.opacity = '1';
        } else {
            shadow.style.opacity = '0';
        }
    }

    // Initialize Scroll Listener once
    const contentPanel = document.getElementById('dynamic-project-content');
    if (contentPanel) {
        contentPanel.addEventListener('scroll', () => {
            updateScrollShadow();
        });
    }

    // Global Window Resize Listener for shadow update
    window.addEventListener('resize', () => {
        updateScrollShadow();
    });

    // Update Image View with Animation Support
    function updateImageDisplay(animate = true, direction = 1, scope = document) {
        // Safety checks
        if (!filteredProjects || filteredProjects.length === 0) return;
        const project = filteredProjects[currentProjectIndex];
        if (!project) return;
        const images = project.images || [];

        // Image Button Visibility Logic (Safe Check)
        const btnPrevImg = document.getElementById('btn-prev-img');
        const btnNextImg = document.getElementById('btn-next-img');

        if (btnPrevImg) {
            btnPrevImg.style.visibility = (images.length > 1) ? 'visible' : 'hidden'; // Always visible if > 1 image (circular)
            btnPrevImg.disabled = (images.length <= 1);
        }
        if (btnNextImg) {
            btnNextImg.style.visibility = (images.length > 1) ? 'visible' : 'hidden'; // Always visible if > 1 image (circular)
            btnNextImg.disabled = (images.length <= 1);
        }

        const panel = scope.getElementById ? scope.getElementById('dynamic-image-display') : scope.querySelector('#dynamic-image-display');
        if (!panel) return;

        // Container for image to handle overflow/centering
        // We reuse the existing one or create it if empty
        let imgContainer = panel.querySelector('.img-container-inner');
        if (!imgContainer) {
            panel.innerHTML = ''; // Clear panel
            imgContainer = document.createElement('div');
            imgContainer.className = 'img-container-inner';
            imgContainer.style.width = '100%';
            imgContainer.style.height = '100%';
            imgContainer.style.position = 'relative'; // Crucial for absolute positioning of slides
            imgContainer.style.display = 'flex';
            imgContainer.style.alignItems = 'center';
            imgContainer.style.justifyContent = 'center';
            imgContainer.style.overflow = 'hidden';
            panel.appendChild(imgContainer);
        }

        if (images.length > 0) {
            // Bounds Check
            if (currentImageIndex >= images.length) currentImageIndex = 0;
            if (currentImageIndex < 0) currentImageIndex = images.length - 1;

            const newImg = document.createElement('img');
            newImg.src = images[currentImageIndex];
            newImg.alt = `${project.title} image`;
            newImg.decoding = 'async';

            // Common Styles
            newImg.style.maxWidth = '100%';
            newImg.style.maxHeight = '100%';
            newImg.style.objectFit = 'contain';
            newImg.style.borderRadius = '8px';
            newImg.style.display = 'block';
            newImg.style.position = 'absolute'; // Absolute for overlapping animations
            newImg.style.top = '50%';
            newImg.style.left = '50%';
            newImg.style.transform = 'translate(-50%, -50%)'; // Center it

            // Error Handling
            newImg.onerror = function () {
                this.onerror = null;
                this.src = 'https://placehold.co/800x600/333/fff?text=Image+Not+Found';
            };

            // Initial Draw (No animation or Project Switch)
            if (!animate) {
                imgContainer.innerHTML = ''; // Clear old
                imgContainer.appendChild(newImg);
                updateCounter(imgContainer, currentImageIndex, images.length);
                return;
            }

            // --- Animation Logic ---
            const oldImg = imgContainer.querySelector('img:not(.img-slide-out-left):not(.img-slide-out-right)');

            if (oldImg) {
                // Prepare OLD image for exit
                const exitClass = direction === 1 ? 'img-slide-out-left' : 'img-slide-out-right';
                // Reset standard display to ensure it processes the transform correctly if needed
                oldImg.style.display = 'block';
                oldImg.classList.add(exitClass);

                // Prepare NEW image for enter
                const enterClass = direction === 1 ? 'img-slide-in-right' : 'img-slide-in-left';
                newImg.classList.add(enterClass);

                // Append NEW image using absolute positioning
                imgContainer.appendChild(newImg);

                // Update Counter immediately
                updateCounter(imgContainer, currentImageIndex, images.length);

                // Cleanup after animation
                setTimeout(() => {
                    if (oldImg.parentNode === imgContainer) {
                        imgContainer.removeChild(oldImg);
                    }
                    newImg.classList.remove(enterClass);
                }, 500); // 500ms match CSS
            } else {
                // Fallback if no old image found
                imgContainer.innerHTML = '';
                imgContainer.appendChild(newImg);
                updateCounter(imgContainer, currentImageIndex, images.length);

            }
        } else {
            const noImgText = (typeof I18N !== 'undefined') ? I18N.t('projects.no.images') : 'No images';
            panel.innerHTML = `<div style="color: var(--text-muted);">${noImgText}</div>`;
        }
    }

    function updateCounter(container, index, total) {
        if (total <= 1) return;

        let indicator = container.querySelector('.img-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'img-indicator';
            indicator.style.position = 'absolute';
            indicator.style.bottom = '10px';
            indicator.style.left = '50%';
            indicator.style.transform = 'translateX(-50%)';
            indicator.style.background = 'rgba(0,0,0,0.6)';
            indicator.style.color = 'white';
            indicator.style.padding = '4px 10px';
            indicator.style.borderRadius = '12px';
            indicator.style.fontSize = '0.8rem';
            indicator.style.zIndex = '5';
            container.appendChild(indicator);
        }
        indicator.textContent = `${index + 1} / ${total}`;
    }

    // Global Navigation functions
    // --- Auto Scroll Logic ---
    let autoScrollTimer = null;

    function startAutoScroll() {
        if (autoScrollTimer) clearInterval(autoScrollTimer);
        autoScrollTimer = setInterval(handleAutoScroll, 3000); // 3 seconds per image
    }

    function stopAutoScroll() {
        if (autoScrollTimer) {
            clearInterval(autoScrollTimer);
            autoScrollTimer = null;
        }
    }

    function resetAutoScroll() {
        stopAutoScroll();
        startAutoScroll();
    }

    function handleAutoScroll() {
        // Safety Check
        if (!filteredProjects || filteredProjects.length === 0) return;

        const project = filteredProjects[currentProjectIndex];
        const images = project.images || [];

        // 1. Advance Image
        // Check if we are at the last image
        if (currentImageIndex < images.length - 1) {
            // Next Image
            window.changeImage(1);
        } else {
            // 2. End of Images -> Next Project
            if (currentProjectIndex < filteredProjects.length - 1) {
                window.changeProject(1);
            } else {
                // 3. End of Projects -> Next Category
                switchCategory();
            }
        }
    }

    function switchCategory() {
        const btns = Array.from(document.querySelectorAll('.filter-btn[data-filter]'));
        const activeBtn = document.querySelector('.filter-btn.active');
        if (!activeBtn) return;

        let index = btns.indexOf(activeBtn);

        // Next Category (Looping)
        const nextIndex = (index + 1) % btns.length;

        // Trigger Click (handles update and reset)
        btns[nextIndex].click();
    }

    // Global Navigation functions
    window.changeProject = function (direction) {
        resetAutoScroll(); // User interaction resets timer

        if (filteredProjects.length === 0) return;

        const wrapper = document.getElementById('project-carousel-view');
        if (!wrapper) return;
        const parent = wrapper.parentElement;

        // Ensure parent context for absolute positioning
        if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }
        parent.style.overflow = 'hidden';

        // 1. Create Clone (Old Content)
        const clone = wrapper.cloneNode(true);
        clone.classList.add('clone-overlay');
        // Remove IDs to prevent duplicates
        clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

        // Position Clone Absolutely over the Parent (Respecting Padding)
        clone.style.position = 'absolute';
        clone.style.top = `${wrapper.offsetTop}px`;
        clone.style.left = `${wrapper.offsetLeft}px`;
        clone.style.width = `${wrapper.offsetWidth}px`;
        clone.style.height = `${wrapper.offsetHeight}px`;
        clone.style.zIndex = '10';
        clone.style.pointerEvents = 'none'; // Click-through

        parent.appendChild(clone);

        // 2. Animate Clone OUT
        const exitClass = direction === 1 ? 'proj-slide-out-left' : 'proj-slide-out-right';
        clone.classList.add(exitClass);

        // 3. Update Real Wrapper (New Content) Immediately
        const count = filteredProjects.length;
        currentProjectIndex = (currentProjectIndex + direction + count) % count;

        updateProjectView(); // Global scope update for Title/Counter

        // 4. Animate Real Wrapper IN
        const enterClass = direction === 1 ? 'proj-slide-in-right' : 'proj-slide-in-left';

        // Clean previous classes
        wrapper.classList.remove('proj-slide-out-left', 'proj-slide-out-right', 'proj-slide-in-left', 'proj-slide-in-right');

        // Force Reflow
        void wrapper.offsetWidth;

        wrapper.classList.add(enterClass);

        // 5. Cleanup
        setTimeout(() => {
            if (clone.parentNode === parent) parent.removeChild(clone);
            wrapper.classList.remove(enterClass);
        }, 300);
    };

    window.changeImage = function (direction) {
        // Note: handleAutoScroll calls this too, so it resets its own timer, which is fine.
        resetAutoScroll();

        if (filteredProjects.length === 0) return;
        const project = filteredProjects[currentProjectIndex];
        if (!project.images || project.images.length === 0) return;

        const count = project.images.length;
        // Circular Check
        const newIndex = (currentImageIndex + direction + count) % count;

        /*
        // Animation is now handled entirely inside updateImageDisplay relative to the Container
        */

        currentImageIndex = newIndex;
        updateImageDisplay(true, direction);
    };

    // Filter Logic
    function filterProjects(filterId) {
        // currentFilter = filterId; // We can track this if needed

        // Filter logic handling 'ia' group
        if (filterId === 'all') {
            filteredProjects = projects;
        } else if (filterId === 'ai') {
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
            resetAutoScroll();

            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Initial Render
    filterProjects('ai');
    startAutoScroll();
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
