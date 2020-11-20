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
    img: trvl,
    title: 'Collaborative Travel Planner',
    description: ["Mobile first applications that enhances the travel planning experience.",  `Plan Trips,
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
    tech: trvlts
  },{
    img: TRIVI,
    title: 'Trivia Trainer',
    description: ['A mobile-first trivia training application designed for winners!', "Play Two Rounds of Trivi, See Score"],
    name: "TRIVI",
    contentPosition: "middle",
    color: "#73ca9b",
    pngs: [triviLanding, triviQuestion, triviScore],
    tech: trivits
  },{
    img: jdCom,
    title: 'Online Portfolio',
    description: ['A fun introduction to my work as a designer and engineer.', 'Send instant email, Recent Projects View'],
    name: "JessaDaggs.com",
    contentPosition: "right",
    color: "#ffc4bc",
    pngs: [jdCom, jdHome],
    tech: jdts
  }
];