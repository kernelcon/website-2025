import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CallOuts.scss';


class CallOuts extends Component {
  static displayName = 'CallOuts';
  static propTypes = {
    title: PropTypes.string.isRequired,
    config: PropTypes.array.isRequired
  }
  
  getImage(imageName) {
    const imgUrl = require(`../../static/images/logos/${imageName}`);

    return imgUrl;
  }

  createMarkup(html) {
    return {__html: html};
  }
  

  render() {
    console.log(this.props.config.order);
    // const callOutsOrdered = this.props.config.sort((a,b) => a.title.localeCompare(b.title));
    const callOutsOrdered = this.props.config.sort((a, b) => (a.order || b.order) ? (a.order - b.order) : a.title.localeCompare(b.title));
    const callOuts = callOutsOrdered.map((ele, idx) => {
      const image = this.getImage(ele.logo.image_name);
      let darkModeImage = false;
      if ( ele.logo.dark_mode_support ) {
        darkModeImage = this.getImage(ele.logo.dark_mode_image_name);
      }
      const detailBox = ele.details && ele.details.map((el, idx) => {
        return (
          <div className='callout-details' key={idx}>
            <div className='callout-detail-name'>{el.detail_name}</div>
            <div className='callout-detail-desc'>{el.detail_desc}</div>
          </div>
        );
      });

      return (
        <div className='callout-area'
          key={ele.id}>
          <div className='callout-title'>{ele.title}</div>
          <div className='callout-section'>
            <div className='callout-name-logo'>
              {ele.author && <div className='callout-author'>{`From ${ele.author}`}</div>}
              <div className='callout-logo'>
                <img className={`callout-img ${ele.logo.image_class}`} src={image} alt={ele.title} />
                {darkModeImage && <img className={`callout-img ${ele.logo.dark_mode_image_class}`} src={darkModeImage} alt={ele.title} />}
              </div>
            </div>
            <div className='callout-description'>
              {ele.socials &&
                <span className='speaker-titles'>
                  {ele.socials.instagram && <span><a href={`https://www.instagram.com/${ele.socials.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a></span>}
                  {ele.socials.twitter && <span><a href={`https://www.x.com/${ele.socials.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a></span>}
                  {ele.socials.music && <span><a href={ele.socials.music} target="_blank" rel="noopener noreferrer">Music</a></span>}
                  {ele.socials.website && <span><a href={ele.socials.website} target="_blank" rel="noopener noreferrer">Website</a></span>}
                  {ele.socials.patreon && <span><a href={ele.socials.patreon} target="_blank" rel="noopener noreferrer">Patreon</a></span>}
                  {ele.socials.tiktok && <span><a href={ele.socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></span>}
                  {ele.socials.youtube && <span><a href={ele.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></span>}
                  {ele.socials.facebook && <span><a href={ele.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></span>}
                </span>
              }
              {ele.music && 
                <iframe className='band-camp'
                  title={ele.music.desc}
                  src={ele.music.iframe} seamless>
                  <a href={ele.music.href} style={{backgroundImage: `${ele.img}`}}>
                    {ele.music.desc}
                  </a>
                </iframe>
              }
              <span dangerouslySetInnerHTML={this.createMarkup(ele.description)}></span>
              {detailBox}
              {ele.final_details && <span className='final_details' dangerouslySetInnerHTML={this.createMarkup(ele.final_details)}></span>}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className=''>
        <h3 className='title'>{this.props.title}</h3>
        {callOuts}
      </div>
    );
  }
}

export default CallOuts;


// <div className='competition-area'>
// <div className='competition-section'>
//   <div className='competition-name-logo'>
//     <div className='competition-name'>Hardware Hacking</div>
//     <div className='competition-logo'>
//       {/* <img src={hhv} width="150" alt='hhv' className='spons-white-img'/> */}
//     </div>
//   </div>
//   <div className='competition-description'>
//     Hardware hackers and novices alike, come learn the secrets of the Kernelcon badge and more at the Hardware Hacking Village. Never soldered? Now’s your chance to play with molten metal! Our experts will help teach you how to add the blinky-blink. More experienced? Chat with the people who created the badge, trade SAOs or bring your own electronics project to show off. We will have small project kits and tools available for everyone to practice their soldering skills. Make something you can call your own, and don’t miss the brightest village at the con - the Hardware Hacking Village.
//   </div>
// </div>
// </div>

// <div className='competition-area'>
// <div className='competition-section'>
//   <div className='competition-name-logo'>
//     <div className='competition-name'>Mental Health and Wellness</div>
//     <div className='competition-logo'>
//       {/* <img src={mhv} className='dark-pic' width="150" alt='mhv'/>
//       <img src={mhvlight} className='light-pic' width="150" alt='mhv'/> */}
//     </div>
//   </div>
//   <div className='competition-description'>
//     Instead of a traditional “Chillout village”, Kernelcon has partnered with Mental Health Hackers. The Mental Health and Wellness Village offers a common place to allow like-minded individuals to share and grow as a community, to better our mental health and the health of those around us. Check out the village for fidget tables, crafts, adult coloring books, free chair massages and more! Visit <a href='https://www.mentalhealthhackers.org/' className='text-highlight' target="_blank" rel="noopener noreferrer">https://www.mentalhealthhackers.org/</a> for more information.
//   </div>
// </div>
// </div>

// <div className='competition-area'>
// <div className='competition-section'>
//   <div className='competition-name-logo'>
//     <div className='competition-name'>Operational Technology</div>
//     <div className='competition-logo'>
//       {/* <img src={otvblack} className='otv-black' width="150" alt='otv'/>
//       <img src={otvlight} className='otv-light' width="150" alt='otv'/> */}
//     </div>
//   </div>
//   <div className='competition-description'>
//     Almost every enterprise has an IT network - but have you ever seen an OT network? Visit our operational technology (OT) village complete with testbed exercises on OT components. Two full-size building control system testbeds will be on display with demonstrations given throughout the day. Curious about the traffic? OT PCAP exercises are available for the network investigator in you. 
//   </div>
// </div>
// </div>

// <div className='competition-area'>
// <div className='competition-section'>
//   <div className='competition-name-logo'>
//     <div className='competition-name'>TOOOL Lockpicking</div>
//     <div className='competition-logo'>
//       {/* <img src={toool} width="150" alt='toool'/> */}
//     </div>
//   </div>
//   <div className='competition-description'>
//     Tired of staring at a monitor trying to hack your way through a computer...come try your hand [literally] at hacking hardware! The Open Organisation Of Lockpickers [TOOOL] is set up and ready to give you a new kind of challenge. Gaining access has a different meaning here. TOOOL uses their knowledge to guide you through different types of locks, their vulnerabilities, and how to exploit them. Scrape pin tumblers instead of data!
//   </div>
// </div>
// </div>