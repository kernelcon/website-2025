import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// Import Components
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SecondaryNav from "./components/NavBar/SecondaryNav";

// Import Pages
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Bio from './pages/Agenda/Bio';
import Conference from "./pages/Conference/Conference";
import Dates from "./pages/Dates/Dates";
import OpenCalls from "./pages/OpenCalls/OpenCalls";
import CFP from "./pages/CFP/CFP";
import Home from "./pages/Home/Home";
import Sponsors from "./pages/Sponsors/Sponsors";
import Venue from "./pages/Venue/Venue";
import Register from "./pages/Register/Register";
import Safety from "./pages/Safety/Safety";
import Training from "./pages/Training/Training";
import Agenda from "./pages/Agenda/Agenda";
import RoboRace from "./pages/RoboRace/RoboRace";
import audio1 from './static/audio/tmnt.mp3';
import audio2 from './static/audio/punks-not-dead.mp3';
import audio3 from './static/audio/jingly.mp3';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  var current = 0;
  var keyHandler = function (event) {
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
      current = 0;
      return;
    }
    current++;
    if (pattern.length === current) {
      current = 0;
      var rand = getRandomInt(3);
      var audioArray = [audio1, audio2, audio3];
      let player = new Audio(audioArray[rand]);
      player.play();
      alert('Egg #2: Well done, someone is a fan of old video games.')
    }
  };
  document.addEventListener('keydown', keyHandler, false);

	return (
		<Router>
			<NavBar />
			<SecondaryNav />
			<div className="page-box">
				{/* <div className="container"> */}
					<Route exact path="/" component={Home} />
					<Route path="/about/:tabId?" component={About} />
					<Route exact path="/admin" component={Admin} />
          			<Route exact path="/bio" component={Bio} />
					<Route exact path="/conference" component={Conference} />
					<Route exact path="/robo-race" component={RoboRace} />
					<Route exact path="/dates" component={Dates} />
					<Route exact path="/open-calls" component={OpenCalls} />
					<Route exact path="/cfp" component={CFP} />
					<Route exact path="/sponsors" component={Sponsors} />
					<Route path="/venue/:tabId?"  component={Venue} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/safety" component={Safety} />
					<Route exact path="/training" component={Training} />
          			<Route path="/agenda/:tabId?" component={Agenda} />
					<Route exact path='/dei' component={() => {
		    			window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSezT5NG0_tkV3Wxd9D4t-58cU49Zd5t2Cun75ZkSx7GvD-KSg/viewform';
						return null;
		  			}}/>
					<Route exact path='/survey' component={() => {
		    			window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfU0wBk6uNAv7pgtTTnuX2B0Sde0OW0PnP_f8ekR-r42SiKHg/viewform';
						return null;
		  			}}/>
				{/* </div> */}
			</div>
			<Footer />
		</Router>
	);
}

export default App;
