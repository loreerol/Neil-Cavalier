import React, { Component } from "react";
import Img from 'react-image';

import eilidStill from "../_assets/images/eilid.png";
import phedreStill from "../_assets/images/phedre.jpg";
import lastbreathStill from "../_assets/images/lastbreath.jpg";
import thepathwayStill from "../_assets/images/ThePathway.jpg";
import breakerStill from "../_assets/images/breaker.jpg";
import carnivalmoonStill from "../_assets/images/carnivalmoon.jpg";
import inthedeadofwinterStill from "../_assets/images/inthedeadofwinter.jpg";
import ivarsStill from "../_assets/images/ivars.jpg";
import organofdarknessStill from "../_assets/images/organofdarkness.jpg";
import sharingStill from "../_assets/images/sharing.jpg";
import thickairStill from "../_assets/images/thickair.jpg";
import youngmotherStill from "../_assets/images/youngmother.jpg";

import eilidGif from "../_assets/gifs/eilid.gif";
import phedreGif from "../_assets/gifs/Phedre.gif";
import lastbreathGif from "../_assets/gifs/LastBreath.gif";
import thepathwayGif from "../_assets/gifs/Thepathway.gif";
import breakerGif from "../_assets/gifs/breaker.gif";
import carnivalmoonGif from "../_assets/gifs/CarnivalMoon.gif";
import inthedeadofwinterGif from "../_assets/gifs/intheDeadofWinter.gif";
import ivarsGif from "../_assets/gifs/Ivars.gif";
import organofdarknessGif from "../_assets/gifs/OrganofDarkness.gif";
import sharingGif from "../_assets/gifs/Sharing.gif";
import thickairGif from "../_assets/gifs/thickair.gif";
import youngmotherGif from "../_assets/gifs/YoungMother.gif";

// handleClick = param => e => {
//   e.stopPropagation();
//   if (this.state.showGallery === true) {
//       this.setState({ showGallery: false });
//     } else {
//       this.setState({ showGallery: true });
//     }
//   this.setState({
//     currentState: films[param]
//   });
// }
// this.state = { showGallery: true, currentState: films[0] };

class Home extends Component {


  render() {
    return (
      <React.Fragment>
        <div id="gallery">
        <div className="gallery-item">
          <a href="/film/0">
            <Img src={eilidStill} alt="Eilid + Damh"  loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
            <div className="overlay">
              <Img className="still" src={eilidGif} />
            </div>
          </a>
          <a href="/film/0">
          <span>
            <p>Eilid + Damh</p>
            <span className="subtitle">
              <p>Music video</p>{" "}
            </span>
          </span>
          </a>
        </div>
          <div className="gallery-item">
            <a href="/film/1">
              <Img src={phedreStill} alt="Phedre"  loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={phedreGif} />
              </div>
            </a>
            <a href="/film/1">
            <span>
              <p>Phedre - Ancient Nouveau</p>
              <span className="subtitle">
                <p>Music video</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/2">
            <Img src={lastbreathStill} alt="Last Breath" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={lastbreathGif} />
              </div>

            </a>
            <a href="/film/2">
            <span>
              <p>Last Breath</p>
              <span className="subtitle">
                {" "}
                <p>Fiction</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/3">
            <Img src={thepathwayStill} alt="The Pathway" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={thepathwayGif} />
              </div>
            </a>
            <a href="/film/3">
            <span>
              <p>The Pathway</p>
              <span className="subtitle">
                <p>Documentry</p>
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/4">
            <Img src={inthedeadofwinterStill} alt="In the Dead of Winter" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={inthedeadofwinterGif} />
              </div>

            </a>
            <a href="/film/4">
            <span>
              <p>In the Dead of Winter</p>
              <span className="subtitle">
                {" "}
                <p>Web Series</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/5">
            <Img src={youngmotherStill} alt="Young Mother" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={youngmotherGif} />
              </div>
            </a>
            <a href="/film/5">
            <span>
              <p>Young Mother - The Well Tempered Male</p>
              <span className="subtitle">
                {" "}
                <p>Music video</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/6">
            <Img src={ivarsStill} alt="Ivars" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={ivarsGif} />
              </div>

            </a>
              <a href="/film/6">
            <span>
              <p>Ivars</p>
              <span className="subtitle">
                {" "}
                <p>Fiction</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/7">
            <Img src={sharingStill} alt="Organ of Darkness" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={sharingGif}/>
              </div>

            </a>
            <a href="/film/7">
            <span>
              <p>Sharing - Sharing</p>
              <span className="subtitle">
                {" "}
                <p>Music Video</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/8">
            <Img src={breakerStill} alt="Breaker" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={breakerGif} />
              </div>

            </a>
            <a href="/film/8">
            <span>
              <p>Lee Paradise - Breaker</p>
              <span className="subtitle">
                {" "}
                <p>Music video</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/9">
            <Img src={carnivalmoonStill} alt="Carnival Moon" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">

                <Img className="still" src={carnivalmoonGif} />
              </div>

            </a>
            <a href="/film/9">
            <span>
              <p>Carnival Moon - Quizzical Face</p>
              <span className="subtitle">
                {" "}
                <p>Music video</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/10">
              <Img src={thickairStill} alt="Thick Air" loader={<div className="placeholder"><p>Loading Image...</p></div>} />
              <div className="overlay">
                <Img src={thickairGif} />
              </div>

            </a>
            <a href="/film/10">
            <span>
              <p>Tenthousand Creatures - Thick Air</p>
              <span className="subtitle">
                {" "}
                <p>Music video</p>{" "}
              </span>
            </span>
            </a>
          </div>
          <div className="gallery-item">
            <a href="/film/11">
            <Img src={organofdarknessStill} alt="Organ of Darkness" loader={<div className="placeholder"><p>Loading Image...</p></div>}/>
              <div className="overlay">
                <Img className="still" src={organofdarknessGif} />
              </div>

            </a>
            <a href="/film/11">
            <span>
              <p>Organ of Darkness</p>
              <span className="subtitle">
                {" "}
                <p>Documentry</p>{" "}
              </span>
            </span>
            </a>
          </div>
        </div>
        {/*
        <div id="other-work-wrapper">
          <div id="other-work">
            <div className="Work other-work-label">
              <p>Other Work</p>
            </div>
            <div className="client other-work-label">
              <p>Client</p>
            </div>
            <div className="director other-work-label">
              <p>Director</p>
            </div>
            <div className="Work">
              <p>
                <a href="#">Place holder</a>
              </p>
            </div>
            <div className="client">
              <p>
                <a href="#">Place holder</a>
              </p>
            </div>
            <div className="director">
              <p>
                <a href="#">Place holder</a>
              </p>
            </div>
            <div className="Work">
              <p>
                <a href="#">Place holder</a>
              </p>
            </div>
            <div className="client">
              <p>
                <a href="#">Place holder</a>
              </p>
            </div>
            <div className="director">
              <p>
                <a href="#">Place holder</a>
              </p>
            </div>
          </div>

        </div>
        */}
      </React.Fragment>
    );
  }
}
export default Home;
