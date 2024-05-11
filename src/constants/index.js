import {
  bc,
  bh,
  bm,
  bp,
  br,
  brn,
  bt,
  proj1,
  proj10,
  proj11,
  proj12,
  proj2,
  proj3,
  proj4,
  proj5,
  proj6,
  proj7,
  proj8,
  proj9,
  afterdark,
  endless,
  intro,
  love,
  mareux,
  trench
} from '../assets/imgs'

export const about = {
  header: "Hi, I'm Ariyan.",
  info: `I'm a Computer Engineer and a Javascript Fullstack Developer. I have over 3 years of experience developing web. I enjoy combining new ideas
    with programming and code my way to it and solve the problems. I
    always try to create and use new and unique designs. You can see some
    of my works in Projects section.`,
  github: 'https://github.com/AriyanMLZM',
  gmail: 'ryanmolazem@gmail.com',
  phone: '+989175894212',
  exp: [
    {
      title: 'Bachelor of Computer Engineering',
      text: 'Fasa University - Top Student',
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
}

export const projects = [
  {
    title: "Ariyan's Burger",
    info: '3d Portfolio Website',
    techs: 'threejs react tailwind gsap blender',
    text: 'Unique fully 3d website, The combination of Blender power and Threejs to create a scene to explore with animations. The 3d models and the animations were made with Blender and controlled by powerful Gsap. The css framework Tailwind was used as style. Then everything was put to work with React Threejs.',
    github: 'https://github.com/AriyanMLZM/threejs-react-3d-portfolio',
    img1: bt,
    img2: proj1,
  },
  {
    title: 'Nike Shop',
    info: 'Parallax Scrolling Website',
    techs: 'react css express sql',
    text: 'A Fullstack Parallax website that works with the scrolling of user. The frontend is developed with React and pure Css and the backend is developed with Express and Sequelize as ORM and mySQL as Database.',
    github: 'https://github.com/AriyanMLZM/react-nikeshop',
    img1: br,
    img2: proj2,
  },
  {
    title: 'Lexical Analyzer',
    info: 'DFA Based Analyzer',
    techs: 'python tkinter',
    text: 'A lexical analyzer developed with Python that can be used in a compiler. This will take the text input and tokenize it based on the given DFA and make the tokens ready for the next stage of compiler. It also has a GUI that was developed with Tkinter.',
    github: 'https://github.com/AriyanMLZM/py-lexical-analyzer',
    img1: bp,
    img2: proj3,
  },
  {
    title: 'Fastfood',
    info: 'Multi Platform Menu',
    techs: 'react native css',
    text: 'A fastfood menu App that was created with react native. Deployed with three versions for Android, IOS, and Web with one code base.',
    github: 'https://github.com/AriyanMLZM/react-native-fastfood',
    img1: brn,
    img2: proj4,
  },
  {
    title: 'Arena Shop',
    info: 'Pure Html Css Js Website',
    techs: 'html css js',
    text: 'A website that was developed with pure Html, Css and Js. With a trailing mouse effect that was developed with vanilla Js.',
    github: 'https://github.com/AriyanMLZM/html-css-js-arenashop',
    img1: bh,
    img2: proj5,
  },
  {
    title: 'IEEE754 Converter',
    info: 'Decimal to 16-32-64 Bits',
    techs: 'c++',
    text: 'This program that was developed with C++ uses the IEEE754 standard to convert the input decimal number to half-percision(16bits), single-percision(32bits) and double-percision(64bits).',
    github: 'https://github.com/AriyanMLZM/cpp-ieee754-converter',
    img1: bc,
    img2: proj6,
  },
  {
    title: 'Tic Tac Toe',
    info: 'Multi Platform Game',
    techs: 'react native css',
    text: 'A multi platform game that was created with react native. Deployed with three versions for Android, IOS and Web with one code base.',
    github: 'https://github.com/AriyanMLZM/react-native-tictactoe',
    img1: brn,
    img2: proj7,
  },
  {
    title: 'K-means',
    info: 'Data Clustering Method',
    techs: 'matlab',
    text: 'This Matlab program uses the most famous k-means algorithm to put the input data into the best possible clusters. The result will be shown in figures of charts.',
    github: 'https://github.com/AriyanMLZM/matlab-kmeans-algorithm',
    img1: bm,
    img2: proj8,
  },
  {
    title: 'QM Method',
    info: 'Equation Simplifier',
    techs: 'c++',
    text: 'This program developed with c++ uses Quine-McCluskey method to simplify the input boolean equations. It supports up to 10 variables.',
    github: 'https://github.com/AriyanMLZM/cpp-qm-method',
    img1: bc,
    img2: proj9,
  },
  {
    title: 'Risc-V Machine Code',
    info: 'R, I, S Format',
    techs: 'c++',
    text: 'This C++ program takes the Risc-V code as input and calculates the machine code of it as output. The R, I and S format of Risc-V is supported.',
    github: 'https://github.com/AriyanMLZM/cpp-riscv-converter',
    img1: bc,
    img2: proj10,
  },
  {
    title: 'Benz',
    info: 'Clone Website',
    techs: 'html css',
    text: 'The clone of Benz official website that was developed with pure Html and Css.',
    github: 'https://github.com/AriyanMLZM/html-css-benz-clone',
    img1: bh,
    img2: proj11,
  },
  {
    title: 'Roman Converter',
    info: 'Decimal <> Roman',
    techs: 'c++',
    text: 'This C++ program converts the decimal number to roman number and vice versa.',
    github: 'https://github.com/AriyanMLZM/cpp-roman-converter',
    img1: bc,
    img2: proj12,
  },
]

export const musics = [
  {
    title: 'Intro',
    singer: 'Welcome',
    img: intro
  },
  {
    title: 'After Dark',
    singer: 'Mr. Kitty',
    img: afterdark
  },
  {
    title: 'Bandito',
    singer: 'Twenty One Pilots',
    img: trench
  },
  {
    title: 'The Perfect Girl',
    singer: 'Mareux',
    img: mareux
  },
  {
    title: "Can't Help Falling In Love",
    singer: 'Twenty One Pilots',
    img: love
  },
  {
    title: 'Endless Song',
    singer: 'Aaron',
    img: endless
  },
]

export const screens = {
  s1: ['light_pic1', 'light_pic2', 'light_pic3', 'light_pic13'],
  s2: ['light_pic4', 'light_pic5', 'light_pic6', 'light_pic13'],
  s3: ['light_pic7', 'light_pic8', 'light_pic9', 'light_pic13'],
  s4: ['light_pic10', 'light_pic11', 'light_pic12', 'light_pic13'],
}
