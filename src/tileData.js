import trvl from './Brand/trvl.png';
import TRIVI from './Brand/TRIVI.png';
import jdCom from './Brand/jdCom.png';
import jdts from './Brand/Demos/jdts.png';
import jdHome from './Brand/Demos/jdHome.png';
import triviLanding from './Brand/Demos/triviLanding.png';
import triviQuestion from './Brand/Demos/triviQuestion.png';
import triviScore from './Brand/Demos/triviScore.png';
import trivits from './Brand/Demos/trivits.png';
import trvlHome from './Brand/Demos/trvlHome.png';
import trvlLanding from './Brand/Demos/trvlLanding.png';
import trvlNav from './Brand/Demos/trvlNav.png';
import trvlPat from './Brand/Demos/trvlPat.png';
import trvlTrips from './Brand/Demos/trvlTrips.png';
import trvlts from './Brand/Demos/trvlts.png';

export const tileData = [
  {
    img: jdCom,
    title: 'Online Portfolio',
    description: ['An online portfolio to showcase how I work as a designer and engineer.', 'Send instant email, Recent Projects View'],
    name: "www.JessaDaggs.com",
    contentPosition: "right",
    color: "#ffc4bc",
    pngs: [jdCom, jdHome],
    tech: jdts,
    case: {
     problemSummary: `So much to to show, so little time. As a new developer I found that attracting recruiters and showcasing the technological skills
      I have built came with some challenges. 1. How to demonstrate all the fun things I've learned? 2. How to find my match made in employer heaven?`,
      audience: `This application will be used mainly by recruiters, hiring managers, and fellow designers/developers. The intent is that they use this application to
      access whether or not they find my style and expertise interesting and a potential asset to their team.`,
      userTesting: `Feedback from users helped me to determine that the application should include case studies to reflect my design process. 
      I also learned from users that ability to access the cas studies from the home page would help them to get the information they needed more efficiently. The application nows 
      reflects these updates to enhance the users over experience.`,
      outcome: [`Increase my visibility.`, `Show my expertise on the technologies and practices I've used.`,
      `Establish an online presence.`, `Increase my personal brand.`, `Stand out from the very large pool of candidates.`, `Work directly with users to get more effective engagement.`,
      `I've created a background of work that will allow me to get my first position in the industry.`]
    },
    roles: ['Front-end Engineer','UI/UX Designer', 'Back-end Engineer'],
  },
  {
    img: trvl,
    title: 'Collaborative Travel Planner',
    description: ["A mobile app that enhances group travel planning experience.",  `Plan Trips,
      Get Budget-Friendly
      Flight & Hotel Prices,
      Book Lodging,
      Get Gas Prices,
      Keep Trip Itinerary,
      Get Weather Updates,
      Split payments with other TRVLers,
      Group Chat`],
    name: "TRVL",
    contentPosition: "left",
    color: "#3c3c74",
    pngs: [trvlLanding, trvlHome, trvlNav, trvlPat, trvlTrips],
    tech: trvlts,
    roles: ['Front-end Engineer','UI/UX Designer', 'Back-end Engineer'],
    case: null
  },{
    img: TRIVI,
    title: 'Trivia Trainer',
    description: ['A trivia training app designed for winners!', "Play Two Rounds of Trivi, See Score"],
    name: "TRIVI",
    contentPosition: "middle",
    color: "#73ca9b",
    pngs: [triviLanding, triviQuestion, triviScore],
    tech: trivits,
    roles: ['Front-end Engineer','UI-Designer'],
    case: null
  }
];
// I wanted way to introduced myself beyond the standard resume or cv and express my personality and work ethic.