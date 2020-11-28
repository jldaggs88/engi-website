import trvl from './Brand/trvl.png';
import TRIVI from './Brand/TRIVI.png';
import jdCom from './Brand/jdCom.png';
import jdComUC from './Brand/jdComUC.png';
import trvlIcon from './Brand/Demos/trvlIcon.png';
import trvllandf from './Brand/Demos/trvllandf.png';

export const tileData = [
  {
    img: trvl,
    title: 'Collaborative Travel Planner',
    description: ["Advanced travel planning mobile application."],
    name: "TRVL",
    contentPosition: "left",
    color: "#3c3c74",
    imgs: [trvlIcon],
    uxfolio: "https://uxfol.io/project/0414f7a6/Tell-The-Story-of-Your-Design",
    github: 'https://github.com/jldaggs88/thesis-travel-app',
    roles: ['Front-end Engineer','UI/UX Designer', 'Back-end Engineer'],
  },
  { 
    img: jdCom,
    title: 'Online Portfolio',
    description: [`JessaDaggs.com was created to showcase how I work as a designer and engineer.`],
    name: "www.JessaDaggs.com",
    contentPosition: "right",
    color: "#ffc4bc",
    imgs: [jdComUC],
    uxfolio: null,
    github: 'https://github.com/jldaggs88/engi-website',
    case: {
      caseTitle: [`www.JessaDaggs.com Case Study`, `Creating a captivating online presence`],
      problemSummary: `So much to show, so little time. As a new developer, I found that attracting recruiters and showcasing technological skills
        I have built came with some challenges. JessaDaggs.com is mainly for recruiters that want a living example of my skill set in the most efficient way. While using the application users can connect with me by email and access blogs and code that I have written using the provided quick links. 
        It is also frequently used by mom to brag to her friends.`,
      problems: [`How do I demonstrate all the fun things I've learned?`, `How to find my match made in employer heaven?`],
      solutions: [`I chose to feature the projects that encompass different aspects of my skills to show my range. I created button links for each project's code and case study.`,
        `By ensuring my personal brand is communicated through imagery and tone I will attract like-minded organizations. `],
      audience: `This application will be used mainly by recruiters, hiring managers, and fellow designers/developers. The intent is that they use this application to
        access whether or not they find my style and expertise interesting and a potential asset to their team.`,
      userTesting: `Feedback from users helped me to determine that the application should include case studies to reflect my design process. 
        I also learned from users that the ability to access information directly for the home view would be more efficient. The application now
        reflects these updates to enhance the users over experience.`,
      outcome: [`Increase my visibility.`, `Show my expertise on the technologies and practices I've used.`,
        `Establish an online presence.`, `Increase my personal brand.`, `Stand out from the very large pool of candidates.`, `Work directly with users to get more effective engagement.`,
        `I've created a background of work that will allow me to get my first position in the industry.`],
      team: "Jessa Daggs (Solo)",
      duration: (new Date().getMonth() + 1) - new Date(2020, 10, 1).getMonth(),
      discovery: `I created a project scope by analyzing my competition, creating users stories, and determined the message I wanted to convey.`,
      takeAways: [`1. Design is about discovering the possibilities, not having all the answers.`, `Not having the answer is an opportunity to be creative and get outside of your comfort zone.`,
        `2. Learning something new is a lot of fun!`, `Celebrate your wins no matter how seemingly small! Treat yourself to a mental water break from the marathon.`,
        `3. Stay curious.`, `Ask questions that help you to be more engaged. Open communication always leads to more effective collaboration. If you feel you are over-communicating you probably could use a little more. God is in the details. `],
      uI: `Simple and colorful was my theme for the application. I felt the bright colors would convey my playful spirit and the simplicity of the design would convey my organizational skills and confidence.`
    },
    roles: ['Front-end Engineer','UI/UX Designer', 'Back-end Engineer'],
  },
  {
    img: TRIVI,
    title: 'Trivia Trainer',
    description: ['A trivia training app designed for winners!', "Play Two Rounds of Trivi, See Score"],
    name: "TRIVI",
    contentPosition: "middle",
    color: "#73ca9b",
    uxfolio: null,
    github: 'https://github.com/jldaggs88/trivi',
    roles: ['Front-end Engineer','UI-Designer'],
    case: null
  }
];
