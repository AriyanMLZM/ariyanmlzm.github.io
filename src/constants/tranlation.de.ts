const de = {
	about: {
		header: 'Hallo, ich bin Ariyan.',
		info: 'Ich bin Softwareentwickler und JavaScript Fullstack-Entwickler. Ich habe über {{year}} Jahre Erfahrung in der Webentwicklung. Ich kombiniere gerne neue Ideen mit Programmierung und programmiere meinen Weg dorthin und löse die Probleme. Ich versuche stets, neue und einzigartige Designs zu erstellen. Einige meiner Arbeiten findest du im Bereich Projekte.',
		exp: [
			{
				title: 'Master in Softwaretechnik',
				text: 'Shiraz University',
			},
			{
				title: 'Bachelor in Computer Engineering',
				text: 'Fasa University – Bester Student',
			},
			{
				title: 'Freiberuflich',
				text: 'Schiras – Webentwickler',
			},
			{
				title: 'isDynamic Company',
				text: 'Schiras – Webentwickler',
			},
			{
				title: 'Magneo Gmbh',
				text: 'Schweiz – Webentwickler',
			},
			{
				title: 'Rayan Tejarat Pars Company',
				text: 'Schiras – Webentwickler',
			},
			{
				title: 'Iran Insurance Company',
				text: 'Schiras – Computer-Operator',
			},
		],
	},
	projects: [
		{
			info: '3D-Portfolio-Website',
			text: 'Einzigartige, vollständig 3D-Website. Die Kombination aus Blender und Three.js erschafft eine erkundbare Szene mit Animationen. Die 3D-Modelle und Animationen wurden mit Blender erstellt und mit der leistungsstarken GSAP gesteuert. Als CSS-Framework kam Tailwind zum Einsatz. Alles wurde mit React Three.js umgesetzt.',
		},
		{
			info: 'Vollständige TMDB-API',
			text: 'Eine Filmdatenbank-App zum Suchen und Auflisten aller Informationen zu Filmen und Serien mithilfe der TMDB-API. Entwickelt mit Svelte.js und Tailwind CSS.',
		},
		{
			info: 'Wetter-App',
			text: 'Fortschrittliche Wetter-App mit Kartenunterstützung zur Standortwahl oder zum Zugriff auf den aktuellen Standort. Liefert die Wettervorhersage mit flüssigen Animationen.',
		},
		{
			info: 'T-Shirt-Designer',
			text: 'Ein Shirt-Designer, erstellt mit Three.js. Farbe ändern, eigene Bilder als Logo oder Volltextur hochladen, das Logo konfigurieren – all das, um dein T-Shirt zu gestalten und zu speichern.',
		},
		{
			info: 'Vollständige OMDB-API',
			text: 'Eine Filmdatenbank-App zum Auflisten und Hinzufügen von Filmen und Serien mit der OMDB-API. Vollständig SSR-App, entwickelt mit Express, EJS als Template-Engine und Tailwind CSS.',
		},
		{
			info: 'Parallax-Scrolling-Website',
			text: 'Eine Fullstack-Parallax-Website, die auf das Scrollverhalten der Nutzer reagiert. Das Frontend wurde mit React und reinem CSS entwickelt, das Backend mit Express, Sequelize als ORM und MySQL als Datenbank.',
		},
		{
			info: 'DFA-basierter Analysator',
			text: 'Ein lexikalischer Analysator, entwickelt mit Python, der in einem Compiler eingesetzt werden kann. Er nimmt Texteingaben entgegen, tokenisiert sie anhand des vorgegebenen DFA und bereitet die Tokens für die nächste Compiler-Phase auf. Zusätzlich gibt es eine grafische Oberfläche, die mit Tkinter erstellt wurde.',
		},
		{
			info: 'React OpenCV',
			text: 'Ein Bildbearbeitungswerkzeug, das die OpenCV-Toolbox nutzt, aber mit React.js und Tailwind CSS entwickelt wurde. Führt verschiedene Arten von Bildtransformationen durch.',
		},
		{
			info: 'Multi-Plattform-Menü',
			text: 'Eine Fast-Food-Menü-App, erstellt mit React Native. Ausgeliefert in drei Versionen für Android, iOS und Web – mit einer einzigen Codebasis.',
		},
		{
			info: 'Website mit reinem HTML, CSS & JS',
			text: 'Eine Website, die ausschließlich mit HTML, CSS und JavaScript entwickelt wurde. Inklusive eines Mausfolge-Effekts, der mit Vanilla JS umgesetzt wurde.',
		},
		{
			info: 'Dezimal nach 16/32/64 Bit',
			text: 'Dieses in C++ entwickelte Programm verwendet den IEEE-754-Standard, um eine eingegebene Dezimalzahl in halbe Genauigkeit (16 Bit), einfache Genauigkeit (32 Bit) und doppelte Genauigkeit (64 Bit) umzuwandeln.',
		},
		{
			info: 'Multi-Plattform-Spiel',
			text: 'Ein plattformübergreifendes Spiel, das mit React Native entwickelt wurde. Ausgeliefert in drei Versionen für Android, iOS und Web – mit einer einzigen Codebasis.',
		},
		{
			info: 'Daten-Clustering-Methode',
			text: 'Dieses Matlab-Programm nutzt den bekannten k-Means-Algorithmus, um die Eingabedaten in die bestmöglichen Cluster zu gruppieren. Die Ergebnisse werden in Diagrammen dargestellt.',
		},
		{
			info: 'Gleichungsvereinfacher',
			text: 'Dieses in C++ entwickelte Programm verwendet die Quine-McCluskey-Methode, um boolesche Gleichungen zu vereinfachen. Es unterstützt bis zu 10 Variablen.',
		},
		{
			info: 'R-, I-, S-Format',
			text: 'Dieses C++-Programm nimmt RISC-V-Code entgegen und berechnet den zugehörigen Maschinencode. Die Formate R, I und S des RISC-V werden unterstützt.',
		},
		{
			info: 'Nachgebaute Website',
			text: 'Nachbau der offiziellen Mercedes-Benz-Website, entwickelt mit reinem HTML und CSS.',
		},
		{
			info: 'Dezimal ↔ Römisch',
			text: 'Dieses C++-Programm wandelt Dezimalzahlen in römische Zahlen um und umgekehrt.',
		},
	],
	menu: {
		about: 'Über mich',
		projects: 'Projekte',
		musics: 'Musik',
		skills: 'Fähigkeiten',
		exp: 'Erfahrung',
		playing: 'Spielt',
		paused: 'Pausiert',
		title1: 'Softwareentwickler',
		title2: 'Fullstack-Entwickler',
		greet1: 'Hallo, ich bin Ariyan!',
		greet2: 'Willkommen in meinem 3D-Portfolio',
		loading: 'Einen Moment, 3D-Modell wird geladen …',
		start: 'Start',
	},
} as const

export default de
