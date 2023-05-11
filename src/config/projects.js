import tabletalk from '../assets/projects/TableTalk/tabletalk.jpg'
import tabletalkhero from '../assets/projects/TableTalk/tabletalk-hero.jpg'
import tabletalk1 from '../assets/projects/TableTalk/tabletalk1.jpg'
import tabletalk2 from '../assets/projects/TableTalk/tabletalk2.jpg'

import id from '../assets/projects/ID/id.jpg'
import idhero from '../assets/projects/ID/id-hero.jpg'
import id1 from '../assets/projects/ID/id1.jpg'
import id2 from '../assets/projects/ID/id2.jpg'

import puzzle from '../assets/projects/Puzzle/puzzle.jpg'
import puzzlehero from '../assets/projects/Puzzle/puzzle-hero.jpg'
import puzzle1 from '../assets/projects/Puzzle/puzzle1.jpg'

import portfolio from '../assets/projects/Portfolio/portfolio.jpg'
import portfoliohero from '../assets/projects/Portfolio/portfolio-hero.jpg'
import portfolio1 from '../assets/projects/Portfolio/portfolio1.jpg'

import weathermap from '../assets/projects/WeatherMap/weathermap.jpg'
import weathermaphero from '../assets/projects/WeatherMap/weathermap-hero.jpg'
import weathermap1 from '../assets/projects/WeatherMap/weathermap1.jpg'

import shysstkak from '../assets/projects/SchysstKak/shysstkak.jpg'
import shysstkakhero from '../assets/projects/SchysstKak/shysstkak-hero.jpg'
import shysstkak1 from '../assets/projects/SchysstKak/shysstkak1.jpg'
import shysstkak2 from '../assets/projects/SchysstKak/shysstkak2.jpg'

import labels from '../assets/projects/Beer/labels.jpg'
import labelshero from '../assets/projects/Beer/labels-hero.jpg'
import labels1 from '../assets/projects/Beer/labels1.jpg'

import garmaqua from '../assets/projects/GarmAqua/garmaqua.jpg'
import garmaquahero from '../assets/projects/GarmAqua/garmaqua-hero.jpg'
import garmaqua1 from '../assets/projects/GarmAqua/garmaqua1.jpg'
import garmaqua2 from '../assets/projects/GarmAqua/garmaqua2.jpg'

import solwe from '../assets/projects/Solwe/solwe.jpg'
import solwehero from '../assets/projects/Solwe/solwe-hero.jpg'
import solwe1 from '../assets/projects/Solwe/solwe1.jpg'
import solwe2 from '../assets/projects/Solwe/solwe2.jpg'

import goodtech from '../assets/projects/goodtech/goodtech.jpg'
import goodtechhero from '../assets/projects/goodtech/goodtech-hero.jpg'
import goodtech1 from '../assets/projects/goodtech/goodtech1.jpg'
import goodtech2 from '../assets/projects/goodtech/goodtech2.jpg'

import nasa from '../assets/projects/YesWeHearYou/nasa.jpg'
import nasahero from '../assets/projects/YesWeHearYou/nasa-hero.jpg'
import nasa1 from '../assets/projects/YesWeHearYou/nasa1.jpg'
import nasa2 from '../assets/projects/YesWeHearYou/nasa2.jpg'

export const PROJECTS = [
  {
    tag: 'code',
    headline: 'TableTalk',
    path: '/tabletalk',
    image: tabletalk,
    description: 'Learn more about each other.',
    hero: tabletalkhero,
    information:
      'During a project course (Prototype development for mobile applications) an application was created from scratch. TableTalk is an application that will encourage a group to get to know each other better. It is a quiz game where mobiles are connected through a room code. Once all players have joined the game room, questions will be read out by a random player and then randomly assigned to another player. The basic idea of the application is that the mobiles should lie on the table and form a game board.',
    tools: 'React Native | Expo | Node.js | Express | Figma',
    duration: 'August 2022 - October 2022',
    role: 'UX/UI design | Frontend development',
    firstBlock: {
      headline: 'Prototype',
      image: tabletalk1,
      text: 'The project began individually with all group members creating their own LoFi prototypes based on a common project idea. Everyone in the group did different user tests and then we discussed in the group together which functions should be kept. The next step in the process was to create a MidFi prototype together where we first created flowcharts and mood boards to convey the feeling we wanted to create through the application. Before the development of the application, a component library was created in Figma to be able to easily develop these.',
    },
    secondBlock: {
      headline: 'Development',
      image: tabletalk2,
      text: 'After the MidFi prototype was ready, development of the application could start. The development in the frontend took place through React Native, Expo and XCode Simulator, the backend part was developed in Node.js and Express and used socket.io to be able to create the different game rooms. The result was a working application where players can connect and join different rooms. A requirement that we had as a priority was that the game should be synchronized between the different phones and with the help of sockets we fulfilled the requirement.',
    },
  },
  {
    tag: 'code',
    headline: 'Interaction and Design',
    path: '/interaction-design',
    image: id,
    description: 'New website for my program. ',
    hero: idhero,
    information:
      'During my time as a quality assistant on the program Interaction and Design, I took the opportunity to design and redesign the programs website. To streamline development, daysiUI was used to quickly build components for the website.',
    tools: 'Figma | React.js | Tailwind | daysiUI',
    duration: 'July 2022 - September 2022',
    role: 'Design | Development',
    firstBlock: {
      headline: 'Design',
      image: id1,
      text: 'At the end of the summer, I decided to redesign my programs website. It all started with simple sketches in Figma where it was a challenge to produce a website that reflects the program and is sustainable for several years to come. There was not much graphic material available either, there was some that could be reused from the old website.',
    },
    secondBlock: {
      headline: 'Development',
      image: id2,
      text: 'When the prototype in Figma was ready, development could begin. Since the service as amanuens is only at 10%, the page needed to be easily built up. With the help of Taildwind together with daysiUI, it was very fast to create components in React.',
    },
  },
  {
    tag: 'code',
    headline: 'Drag and drop puzzle',
    path: '/puzzle',
    image: puzzle,
    description: 'Simple JavaScript drag and drop puzzle.',
    hero: puzzlehero,
    information:
      'During my free time, I challenged myself to create a drag and drop puzzle game using JavaScript. The objective of the game is to arrange a set of jumbled tiles to form a complete image. The game has a simple user interface that allows the player to drag and drop the tiles into the correct position.',
    tools: 'JavaScript',
    duration: '8 hours',
    role: 'Development',
    firstBlock: {
      headline: 'Development',
      image: puzzle1,
      text: 'The game randomly shuffles the tiles on the game board every time it is played. It also keeps track of the number of moves and time taken to complete the puzzle. Once the player successfully arranges the tiles in the correct order, a congratulatory message is displayed, along with the number of moves and time taken. Players can restart the game by clicking the "restart" button. The code then defines several functions, including a function to randomize the board and set it up by adding the cards to the rack and board containers. The code also includes a function to check if the puzzle is solved, a function to display the time taken, and event listener functions for each move of the pieces.',
    },
  },
  {
    tag: 'code',
    headline: 'This portfolio',
    path: '/portfolio',
    image: portfolio,
    description: 'Redesign of this portfolio.',
    hero: portfoliohero,
    information:
      'Over time, I have made many changes to my portfolio, tweaking the design and adding new projects as my skills have grown. However, when I look back on my earlier work, I realize that I want to start over from scratch and prioritize code quality. I believe that the underlying code structure is the most important aspect of any code project, as it affects the sites performance, maintainability, and scalability.',
    tools: 'React | styled-components | Figma',
    duration: 'Continuously',
    role: 'Design | Development',
    firstBlock: {
      headline: 'Streamlined Workflow',
      image: portfolio1,
      text: 'I wanted to give the portfolio a fresh, modern look. Therefore, I focused on creating a clean, minimalist design that puts the spotlight on my work. I also made sure to optimize the site for different screen sizes and devices, to ensure a consistent experience across all platforms. In addition to improving the code quality, I wanted to make the portfolio more efficient when it comes to updating projects. I implemented a streamlined workflow that allows me to quickly and easily add new projects or make changes to existing ones.',
    },
  },
  {
    tag: 'code',
    headline: 'WeatherMap',
    path: '/weathermap',
    image: weathermap,
    description: 'Combine two API is fun!',
    hero: weathermaphero,
    information:
      'In this project I worked together with a classmate. We developed a website that can show weather history for different places in the world during a selected month.',
    tools: 'React | MapBox | NASA API',
    duration: 'Mars 2022 - June 2022',
    role: 'Development',
    firstBlock: {
      headline: 'Development',
      image: weathermap1,
      text: 'In order to display weather data, NASAs API was used which could retrieve the average temperature for a selected year and month. To be able to manage location selection, MapBox was used, which is a map API. Based on the selected location, these coordinates were sent as input parameters to NASAs API. Through this data, the user could set a map pin and select a date to get the average temperature.',
    },
  },
  {
    tag: 'design',
    headline: 'Cook together',
    path: '/cook-togheter',
    image: shysstkak,
    description: 'A collabration with the company Schysst käk during a course.',
    information:
      'A project together with Schysst käk was carried out in connection with the course Product development in media technology using the "Design-Build-Test" method. The aim of the project was to increase knowledge about the concept of home makebab as a meal solution in everyday life. The goal of the project was to create a modern recipe application that is simple and fun.',
    tools: 'Figma',
    duration: 'January 2022 - June 2022',
    hero: shysstkakhero,
    role: 'Design',
    firstBlock: {
      headline: 'Process',
      image: shysstkak1,
      text: 'During the course of the project, the Double Diamond model was used and different concepts were initially developed. Finally, we came up with three different concepts called "Kids Fun", "Which Kebab Are You" and "Cook Together". After user tests, surveys and in consultation with Schysst käk, a concept was selected to work on.',
    },
    secondBlock: {
      headline: 'Result',
      image: shysstkak2,
      text: 'The concept we worked on became "Cook together". The application enables families and friends to cook Schysst käks recipes together. The concept works like a game where users choose a recipe, create a kebab team and then have tasks assigned to them. If users want to play on different devices, it is possible to connect through a QR code or a game code.',
    },
  },
  {
    tag: 'design',
    headline: 'Beer labels',
    path: '/beer-labels',
    image: labels,
    description:
      'Fun side project to design beer labels for both bottle and can.',
    hero: labelshero,
    information:
      'In my spare time when there is time to spare, I design beer labels for Munksunds Craftbeer as a fun side project. Although it is mostly a fun thing, it has been as challenging and educational as other jobs. The biggest challenge is that it is a limited and small space where a lot of information has to fit. The labels I have made fit both cans and bottles.',
    tools: 'Adobe Illustrator',
    duration: 'Spare time',
    role: 'Design',
    firstBlock: {
      headline: 'Design',
      image: labels1,
      text: 'I have experimented with various designs, occasionally playing around without committing to printing labels. While I do not make labels as frequently nowadays, I sometimes create designs when inspired. As previously stated, designing labels can be challenging due to the limited space available, and the best approach may be to keep it clean and simple.',
    },
  },
  {
    tag: 'design',
    headline: 'GarmAqua',
    path: '/garmaqua',
    image: garmaqua,
    description: 'My first real website and project.',
    hero: garmaquahero,
    information:
      'My first real project where my task was to develop a new website for the company GarmAqua. The company also wanted a new graphic profile, logo and flyer. The project was extensive and a big challenge as I had never published a website or developed in React before. However, I learned a lot along the way and it was really fun.',
    tools: 'Figma | React | Netlify | Adobe Illustrator',
    duration: 'May 2019 - August 2019',
    role: 'Design | Development',
    firstBlock: {
      headline: 'Logotype and Flyer',
      image: garmaqua1,
      text: 'To get the feel of the company that supplies an invention to hospitals and large facilities, I started by creating a logo and graphic profile. This meant that it was easier to create a prototype for the website.',
    },
    secondBlock: {
      headline: 'Development',
      image: garmaqua2,
      text: 'After the graphics and the prototype were completed, development could begin. Since React was completely new to me, development took longer than expected. I am personally very happy with the end result because I learned a lot along the way. However, in retrospect, I see that the result is not perfect in my opinion. But for being my first independent project, the result is okay.',
    },
  },
  {
    tag: 'award',
    headline: 'NASA Hackathon Global nominee',
    path: '/solwe',
    image: solwe,
    description:
      'Participated in NASA hackathon to prototype solar cell user solution.',
    hero: solwehero,
    information:
      'Me and my friends, also classmates participated in the NASA Space Apps Challenge which is a global hackathon that lasts for 48 hours where a challenge has to be solved.',
    tools: 'Figma | Swift',
    duration: '48 hours',
    role: 'Design | Documentation',
    firstBlock: {
      headline: 'Process',
      image: solwe1,
      text: 'We chose the challenge "You are my sunshine" which had the goal of creating a user-friendly application for solar cell users. By developing a basis for a solution, everything from personas, user scenarios, flowcharts, LoFi prototypes and much more were created. After that, a HiFi prototype were created and one of the team members started to create a prototype in Swift to be able to use NASAs API. While the prototypes were being developed, I began the presentation of the work.',
    },
    secondBlock: {
      headline: 'Result',
      image: solwe2,
      text: 'Through data from NASA and the created prototypes, the solution was named "Solwe" where the user can easily get an overview of their production and consumption from their solar cells. The solution helps solar cell users to more easily understand and compare their data from the solar cells. The result that was presented won the regional competition in Sweden, but the solution did not make it further into the global competition.',
    },
  },
  {
    tag: 'award',
    headline: 'Winner of Good Tech Hack',
    path: '/goodtechhack',
    image: goodtech,
    description:
      'Participated in Good Tech Hack to solve social inclusion in school.',
    hero: goodtechhero,
    information:
      'Me and my friends, also classmates participated in Good Tech Hack which is a hackathon that lasts for 24 hours where a challenge has to be solved. Students, the public sector and companies could participate in the competition.',
    tools: 'HTML | CSS | Adobe Premiere | Adobe Illustrator',
    duration: '24 hours',
    role: 'Pitch movie | Research',
    firstBlock: {
      headline: 'Challange',
      image: goodtech1,
      text: 'This years theme at Good Tech Hack was sustainable cities and communities, which is the UNs global sustainability goal number 11. We chose the question: Social inclusion - How can we contribute to increasing social inclusion for pupils and students so they can cope better at school? The limited time meant that we did not have time to carry out a full design process, but we brainstormed and quickly sketched out a platform based on our idea Coetus.',
    },
    secondBlock: {
      headline: 'Result',
      image: goodtech2,
      text: 'The result was a platform that facilitates group work in a school environment for both teachers and students. This platform makes it possible to be motivated by others and thus increase social inclusion in the school environment. We had time to develop the platform in HTML and CSS to be able to demonstrate, but it had no functions and was only a prototype.',
    },
  },
  {
    tag: 'award',
    headline: 'NASA Hackathon Global award',
    path: '/nasa-hackathon',
    image: nasa,
    description:
      'Participated in NASA hackathon for prototyping a user solution for communication with Mars.',
    hero: nasahero,
    information:
      'Me and three people from Finland and Sweden participated in NASAs Hackathon Space Apps Challenge held in Vaasa. The hackathon lasts for 48 hours and was remote because of the pandemic.',
    tools: 'Adobe XD | HTML | CSS',
    duration: '48 hours',
    role: 'Research | Documentation | Design',
    firstBlock: {
      headline: 'Challenge and process',
      image: nasa1,
      text: 'We chose the challenge "Can you hear me now?" who had the goal of creating a user-friendly application that demonstrates the difficulties of communication to Mars. We started with brainstorming to be able to show in a simple way how difficult it really is to send a message to Mars. When we had an idea, we started sketching prototypes of what the solution could look like. Then we worked in parallel with programming the website and the design, and that some calculations needed to be done.',
    },
    secondBlock: {
      headline: 'Result',
      image: nasa2,
      text: 'Using data from NASA, we created a web page "Yes we hear you" where the user can send messages and files to Mars, then the data is calculated and the user sees how long it would take for the message to arrive. We won the regional competition in Finland and went on to the global competition where we received the "Honorable mention" award.',
    },
  },
]
