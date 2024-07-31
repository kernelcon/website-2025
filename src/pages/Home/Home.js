import React, { Component } from "react";
import FullKernelconLogoDark from "../../static/images/logos/kernelcon_white.png"
import BackGround from '../../components/BackGround/BackGround';

import Lecture from "../../static/images/icons/lecture.svg"
import Research from "../../static/images/icons/research.svg"
import Experiment from "../../static/images/icons/experiment.svg"
import BrainOutline from "../../static/images/icons/brain-outline.svg"
import Certificate from "../../static/images/icons/certificate-2.svg"

import "./Home.scss";

export default class Home extends Component {
	static displayName = "Home";

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

  getRandomPic(lengthOfArray, indexToExclude, secondLastKernelIndex) {
    // This function just grabs a random index that wasn't one of the last two.
    // Obviously, due to math, you need to send in at least an array of length 3.
    let rand = null;

    while (rand === null || rand === indexToExclude || rand === secondLastKernelIndex) {
      rand = Math.round(Math.random() * (lengthOfArray - 1));
    }
    return rand;
  }


	constructor(props) {
		super(props);
		this.state = {
			mode: "",
			isOpen: false,
		};
	}

	render() {
		return (
      <div id='main_hero' className='hero'>
        <BackGround />
        <div className="container">
          <div className="home-page">
            <div className="centered-top">
              <img src={FullKernelconLogoDark} className="light-mode-logo light-mode-kernel-logo"  alt="kernelcon-logo"/>
              <img src={FullKernelconLogoDark} className="dark-mode-logo dark-mode-kernel-logo"  alt="kernelcon-logo"/>
            </div>
            <div className="centered-top theme-name">
              <span className="theme-name-r">R</span>ace Condition
            </div>

            <div className="col left">
              <div className="sizzle">
                <div className="sizzle-header">
                  <div className="sizzle-text-title">
                    Welcome to Kernelcon
                  </div>
                </div>
                <div className="sizzle-text-section">
                  <div className="sizzle-text">
                    Rev up and put the pedal to the metal at one of the midwest's premier information security conferences.
                  </div>
                  <div className="sizzle-bullets">
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Lecture} alt="speaker-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Excellent Speakers
                        </div>
                        <div className='sizzle-bullet-desc'>
                          We are bringing in some of information security's top talents from the midwest and across the nation. Come learn from and network with our speakers!
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Certificate} alt="training-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Professional Training
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Some of the industry's leading trainers descend on Omaha, Nebraska to lead two days of intensive coursework for attendees. Interested in doing the training? Contact us through our open calls.
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Research} alt="hands-on-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Hands-On Villages
                        </div>
                        <div className='sizzle-bullet-desc'>
                        We have huge plans for our village area - including classics like Hardware Hacking and Radio Hacking. Got an idea for a fun village? Check out our open calls.
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={BrainOutline} alt="competitions-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Challenging Competitions
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Our Capture-the-Flag event is always a big hit and this year promises not to disappoint. Join us in a quest to win an eternal kernel aka lifetime entry to Kernelcon!
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Experiment} alt="activities-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Fun Activities
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Join us at our raging party / social event Kernel Panic party.  Details to come but this event is always an attendee favorite!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>


            <div className="col right">

              <span className='centered-top'>
                <div className='order-button'>
                  <a
                    className="cybr-btn btn-bottom"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#">
                    Reg Coming Soon
                    <span aria-hidden className="cybr-btn__glitch">
                    Reg Coming Soon
                    </span>
                  </a>
                </div>
              </span>

            </div>
          </div>
        </div>
      </div>
		);
	}
}
