import React, { Component } from "react";

import neilImage from "../_assets/images/about.jpg";
class About extends Component {
  render() {
    return (
      <div className="about">
        <img src={neilImage} alt="profile" />
        <div id="about-info">
          <p>
            For over a decade, Neil Cavalier has worked as a professional
            Director, Producer, Writer, Editor, Cinematographer, Composer and
            occasional Actor on a number of Feature Films, Documentaries, TV
            series, Web series, Short Films, Commercials and Music Videos.
          </p>
          <p>
            Since graduating from the York University Film & Video Production
            BFA program in 2006, Neil has worked steadily in film and
            television.
          </p>{" "}
          <p>
            Highlights include co-directing the 2016 feature documentary The
            Pathway, shot in Tamil Nadu, India, which premiered on the CBC
            Documentary Channel. Neil also edited the 2015 feature documentary
            Painted Land: In Search of the Group of Seven which premiered at the
            Vancouver International Film Festival, went to air on TVO, and was
            nominated for 2 Director’s Guild of Canada Awards (Picture Editing &
            Alan King Award For Excellence in Documentary).{" "}
          </p>
          <p>
            Neil's latest short fiction film, Last Breath has played a number of
            film festivals including the After Dark Film Festival. Recently,
            Neil worked as a Producer and Editor on the Documentary Series
            HamJam, airing this year on BellFibe.{" "}
          </p>
          <p>
            Neil currently has two short narrative films and one short
            documentary in post-production, all of which he has writen, directed
            and produced.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
