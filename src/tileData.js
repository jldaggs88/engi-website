import trvl from './Brand/trvl.png';
import TRIVI from './Brand/TRIVI.png';
import jdCom from './Brand/jdCom.png';
import jdComUC from './Brand/jdComUC.png';
import jdts from './Brand/Demos/jdts.png';
import jdHome from './Brand/Demos/jdHome.png';
import triviLanding from './Brand/Demos/triviLanding.png';
import triviQuestion from './Brand/Demos/triviQuestion.png';
import triviScore from './Brand/Demos/triviScore.png';
import trivits from './Brand/Demos/trivits.png';
import trvlIcon from './Brand/Demos/trvlIcon.png';

import trvlts from './Brand/Demos/trvlts.png';

export const tileData = [
  { img: jdCom,
    title: 'Online Portfolio',
    description: [`JessaDaggs.com was created to showcase how I work as a designer and engineer.`],
    name: "www.JessaDaggs.com",
    contentPosition: "right",
    color: "#ffc4bc",
    imgs: [jdComUC, jdHome],
    tech: jdts,
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
    img: trvl,
    title: 'Collaborative Travel Planner',
    description: ["Advanced travel planning mobile application.",  `Plan Trips,
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
    imgs: [trvlIcon, "https://jessa103607.invisionapp.com/console/share/MV1UBWZWQF/496303576"],
    tech: trvlts,
    github: 'https://github.com/jldaggs88/thesis-travel-app',
    roles: ['Front-end Engineer','UI/UX Designer', 'Back-end Engineer'],
    case: {
      caseTitle: [`TRVL Case Study`, `Enhancing the group travel planning experience`],
      problemSummary: `Coordinating and managing the details of a trip that includes multiple travelers can be quite a challenge. During our research, we discovered that each traveler often has a different budget and ideas about the destination and activities to enjoy once there. Another pain point was splitting the expenses between each traveler. We incorporated
      features that include automating the destination selection based on the group's collective preferences and real-time communication between travelers.`,
      problems: [`Travelers often feel that making decisions based on everyone's preferences can be political.`, `Choosing a destination that meets everyone's budget requires a lot of research.`],
      solutions: [`We created a feature that automates choosing a destination based on each travelers preferences.`,
        `We eliminated the need for travelers to share private information such as how much they have to spend.`],
      audience: `This application will be used by travelers who want to focus more of their energy on enjoying the trip and less on managing it.`,
      outcome: [``],
      team: ['Operation Deploy - 5 members'],
      duration: (new Date(2020, 10, 1).getMonth()) - new Date(2020, 8, 1).getMonth(),
      discovery: `Services like Expedia don't meet travelers requirement of automating the destination or managing the itinerary once they land. By creating empathic users stories we can help users to manage cost and alleviate the angst of managing a trip.`,
      takeAways: [`1. The strategy is key.`, `A good strategy includes determining a mission, accessing what we are technically inclined to achieve in the given time frame and establishing target users and how they will interact with the service.`,
        `2. Nothing is hard, just new.`, `When learning something new difficulty means that this a new problem and to solve it I must stretch outside of what I know to be true in order to succeed.`,
        `3. Smaller projects require more collaboration.`, `On smaller projects, developers will work in the same files at the same time. Peer programming is a great solution. It gives each developer insight to the why/how the code is written. It provides the
        opportunity to unpack the complexity and merge each developers vision without merge conflicts`],
      uI: `This app contains many features. One of my main focuses was to provide users with all the bells and whistles without overwhelming the interface. Organized and clean was our design approach to create increase accessibility and build trust with TRVL users.`
    },
  },{
    img: TRIVI,
    title: 'Trivia Trainer',
    description: ['A trivia training app designed for winners!', "Play Two Rounds of Trivi, See Score"],
    name: "TRIVI",
    contentPosition: "middle",
    color: "#73ca9b",
    imgs: [triviLanding, triviQuestion, triviScore],
    tech: trivits,
    github: 'https://github.com/jldaggs88/trivi',
    roles: ['Front-end Engineer','UI-Designer'],
    case: null
  }
];
