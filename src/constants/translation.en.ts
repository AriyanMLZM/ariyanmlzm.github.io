const en = {
	about: {
		header: "Hi, I'm Ariyan.",
		info: "I'm a Software Engineer and Javascript Fullstack Developer. I have over {{year}} years of experience developing web. I enjoy combining new ideas with programming and code my way to it and solve the problems. I always try to create new and unique designs. You can see some of my works in the Projects section.",
		exp: [
			{
				title: 'Master of Software Engineering',
				text: 'Shiraz University',
			},
			{
				title: 'Bachelor of Computer Engineering',
				text: 'Fasa University - Top Student',
			},
			{
				title: 'Freelance',
				text: 'Shiraz - Web Developer',
			},
			{
				title: 'isDynamic Company',
				text: 'Shiraz - Web Developer',
			},
			{
				title: 'Magneo Gmbh',
				text: 'Switzerland - Web Developer',
			},
			{
				title: 'Rayan Tejarat Pars Company',
				text: 'Shiraz - Web Developer',
			},
			{
				title: 'Iran Insurance Company',
				text: 'Shiraz - Computer Operator',
			},
		],
	},
	projects: [
		{
			info: '3d Portfolio Website',
			text: 'Unique fully 3d website, The combination of Blender power and Three.js to create a scene to explore with animations. The 3d models and the animations were made with Blender and controlled by powerful Gsap. The css framework Tailwind was used as style. Then everything was put to work with React Threejs.',
		},
		{
			info: 'Full Tmdb Api',
			text: 'A Movie database app to search and list all the info of movies and tv-shows using tmdb api. It is developed with Svelte.js and Tailwindcss.',
		},
		{
			info: 'Weather App',
			text: 'Advanced weather app with map support to choose location or access current location and get the forecast weather with smooth animations.',
		},
		{
			info: 'T-shirt Designer',
			text: 'A shirt designer that was created with Three.js. Change the color, Upload your own images to use as logo or full texture, Configure the logo; All that to design your t-shirt and save it.',
		},
		{
			info: 'Full Omdb Api',
			text: 'A Movie database app to list and add movies and tv-shows using omdb api. Fully SSR app developed with express and Ejs as view engine and Tailwindcss styling.',
		},
		{
			info: 'Parallax Scrolling Website',
			text: 'A Fullstack Parallax website that works with the scrolling of user. The frontend is developed with React and pure Css and the backend is developed with Express and Sequelize as ORM and mySQL as Database.',
		},
		{
			info: 'DFA Based Analyzer',
			text: 'A lexical analyzer developed with Python that can be used in a compiler. This will take the text input and tokenize it based on the given DFA and make the tokens ready for the next stage of compiler. It also has a GUI that was developed with Tkinter.',
		},
		{
			info: 'React Opencv',
			text: 'An image processor using opencv toolbox but developed with React.js and Tailwindcss. Performing different types of image transforms.',
		},
		{
			info: 'Multi Platform Menu',
			text: 'A fastfood menu App that was created with react native. Deployed with three versions for Android, IOS, and Web with one code base.',
		},
		{
			info: 'Pure Html Css Js Website',
			text: 'A website that was developed with pure Html, Css and Js. With a trailing mouse effect that was developed with vanilla Js.',
		},
		{
			info: 'Decimal to 16-32-64 Bits',
			text: 'This program that was developed with C++ uses the IEEE754 standard to convert the input decimal number to half-percision(16bits), single-percision(32bits) and double-percision(64bits).',
		},
		{
			info: 'Multi Platform Game',
			text: 'A multi platform game that was created with react native. Deployed with three versions for Android, IOS and Web with one code base.',
		},
		{
			info: 'Data Clustering Method',
			text: 'This Matlab program uses the most famous k-means algorithm to put the input data into the best possible clusters. The result will be shown in figures of charts.',
		},
		{
			info: 'Equation Simplifier',
			text: 'This program developed with c++ uses Quine-McCluskey method to simplify the input boolean equations. It supports up to 10 variables.',
		},
		{
			info: 'R, I, S Format',
			text: 'This C++ program takes the Risc-V code as input and calculates the machine code of it as output. The R, I and S format of Risc-V is supported.',
		},
		{
			info: 'Clone Website',
			text: 'The clone of Benz official website that was developed with pure Html and Css.',
		},
		{
			info: 'Decimal <> Roman',
			text: 'This C++ program converts the decimal number to roman number and vice versa.',
		},
	],
	menu: {
		name: 'Ariyan Molazem',
		about: 'About',
		projects: 'Projects',
		musics: 'Musics',
		skills: 'Skills',
		exp: 'Experience',
		playing: 'Playing',
		paused: 'Paused',
		title1: 'Software Engineer',
		title2: 'Fullstack Developer',
		greet1: "Hi, I'm Ariyan!",
		greet2: 'Welcome to my 3D portfolio',
		loading: 'Hang on, loading 3D model...',
		start: 'Start',
	},
} as const

export default en

export type Translation = typeof en
