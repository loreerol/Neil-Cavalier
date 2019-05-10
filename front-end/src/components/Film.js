import React, { Component } from "react";
import Img from "react-image";

let film = 0;
let filmNumber = 0;
let i = 0;
let next = "0";
let prev = "0";
let checkHandle = 0;

//To add a film add

const films = [
  {
    prev: false,
    next: true,
    title: "Eilid + Damh",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/329673777",
    info:
      "In the aftermath of an unspeakable act, two sisters must repair their relationship and find a way to move forward. As they struggle to heal, they are reconnected with the natural world, the power of the elements and, ultimately, the strength of their love for each other. This is a story of survival, of awakening the primordial force that lives within.\n A short film \nstarring Hannah Endicott-Douglas & Vivien Endicott-Douglas \ndirected by Neil Cavalier\n written by Neil Cavalier \nVivien Endicott-Douglas \ncinematography by Alex Coronado \noriginal score by Petra Glynt"
  },
  {
    prev: true,
    next: true,
    title: "Phedre - Ancient Nouveau",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/74773595",
    info:
      "Music Video \n DIRECTOR, EDITOR & CAMERA: Neil Cavalier \n DIRECTOR OF PHOTOGRAPHY: Natalie Logan \n PRODUCTION & CONCEPTION: Phèdre \n COLONIAL WENDIGO: Ms. Grobbins + Jay-scar Aragoza \n FIRST NATIONS DANCERS: Tristan Kyle Martell + Amanda Lee Murray \n Phèdre. August 2013 \n Daps Records."
  },
  {
    prev: true,
    next: true,
    title: "Last Breath",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/145235671",
    info:
      "Short film Last Breath. NSFW.\n Written & Directed by Neil Cavalier. \n Produced by Christina Carvalho & Shannon Hanmer. \n Starring Lindsay Goeldner, Victoria Lord, Lea Lawrynowicz & Delphine Roussel. \n Cinematography by Kevin Rasmussen. \n Original Score by Jesse James Laderoute. \n Music by Metz and Phedre. \n Practical Effects and Gore by Chris Nash. \n Digital Effects by Adi Ashburner. \n Sound Mix by David Stein. \n Additional Sound Mixing by Roy Vargas and Pat Piper. \n Last Breath played the 2014 After Dark Film Festival, the 2015 Another Hole In The Head Film Festival and the 2015 Housecore Horror Fest. \n 2015 Dead Winter Productions"
  },
  {
    prev: true,
    next: true,
    title: "The Pathway",
    hasVideo: false,
    image: "https://i.imgur.com/L9HSGBS.jpg",
    link: "https://imgur.com/lY93wNy",
    info:
      "The Pathway is a Feature Documentary that follows school chrildren from Tamil Nadu, India."
  },
  {
    prev: true,
    next: true,
    title: "In the Dead of Winter",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/150128960",
    info:
      "Short Web Series IN THE DEAD OF WINTER. NSFW. \n Starring Vivien Endicott-Douglas, Andrew Dzenis, Pat Piper, Eloise Adams & Roman Kalyniuk. \n Directed, Produced & Edited by Neil Cavalier. \n Screenplay by Neil Cavalier & David Peter Clark. \n Score by Fin & Jesse James Laderoute. \n Cinematography by Jacques Mindreau. \n Additional Cinematography by Neil Cavalier. \n Digital Effects by Adi Ashburner. \n 2016 Dead Winter Productions."
  },
  {
    prev: true,
    next: true,
    title: "Young Mother - Well Tempered Male",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/50663654",
    info:
      "Official Music Video for Young Mother's song The Well Tempered Male, from the album Future Classics."
  },
  {
    prev: true,
    next: true,
    title: "Ivars Son of Ivan",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/61597273",
    info:
      "Ivars, a young viking, has his newlywed wife stolen from him by a rival family, vying for power. He begins a quest to get her back. \n A film by Neil Cavalier. \n Music by Jesse James Laderoute. \n Cinematography by Jacques Mindreau, Natalie Logan and Neil Cavalier. \n Starring Graham Cavalier, Andrew Dzenis and Natalie Logan. \n 2013 Dead Medium Productions."
  },
  {
    prev: true,
    next: true,
    title: "Sharing - Sharing",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/87745418",
    info:
      "Official Music Video for Sharing by Sharing. \n Directed, Shot and Edited by Neil Cavalier. \n Filmed in NYC. \n 2014."
  },
  {
    prev: true,
    next: true,
    title: "Lee Paradise - Breaker",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/87745419",
    info:
      "Official Music Video for Breaker by Lee Paradise.\n Directed, Shot and Edited by Neil Cavalier. \n The album Water Palace Kingdom out April 2014 on Pleasence and Not Unlike. Filmed in Thessaloniki, Greece. Staring Maria & Diamond. \n 2014."
  },
  {
    prev: true,
    next: true,
    title: "Carnival Moon - Quizzical Face",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/33841203",
    info:
      "Music video for Carnival Moon's song Quizzical Face. \n carnivalmoon.bandcamp.com \n Directed by Neil Cavalier & Natalie Logan. \n Cinematography by Lisa Kennedy & Natalie Logan. \n Edited by Neil Cavalier. \n A.D. Shannon Hanmer."
  },

  {
    prev: true,
    next: true,
    title: "Ten Thousand Creatures - Thick Air",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/5191080",
    info:
      "Official Music Video \n Ten Thousand Creatures \n A Dead Medium Production \n Director: Neil Cavalier \n DOP: Adam Makarenko \n Producer: Jared Lorenz \n Visual Effects & Colour Correction: Stephen Patrick Bosco \n Editor: Neil Cavalier \n Videographers: Adam Makarenko & Jared Lorenz"
  },
  {
    prev: true,
    next: false,
    title: "Organ of Darkness",
    hasVideo: true,
    image: null,
    link: "https://player.vimeo.com/video/72465791",
    info:
      "Short Documentary for the Toronto Youth Shorts Festival. \nDirected, Shot & Edited by Neil Cavalier \nMusic by Blonde Elvis"
  }
];

class Film extends Component {
  constructor(props) {
    super(props);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.state = { currentState: films[0] };
  }
  componentDidMount(e) {
    const { handle } = this.props.match.params;
    checkHandle = parseInt(handle, 10);
    if (checkHandle >= 0 && checkHandle <= 12) {
      film = handle;
      filmNumber = parseInt(film, 10);
      prev = filmNumber - 1;
      next = filmNumber + 1;
      this.setState({
        currentState: films[film],
        nextFilm: `/film/${next}`,
        prevFilm: `/film/${prev}`
      });
    } else {
      console.log("no page");
    }
  }

  handleClickRight(e) {
    e.stopPropagation();
    i++;
    let next = i.toString();
    this.setState({
      nextState: `/film/${next}`
    });
    console.log(this.state.nextState);
  }
  handleClickLeft(e) {
    e.stopPropagation();
    i--;
    let prev = i.toString();
    this.setState({
      nextState: `/film/${prev}`
    });
    console.log(this.state.prevState);
  }

  render() {
    return (
      <div id="video-page">
        <div id="video-nav">
          <div>
            <a href="/">Back to Films</a>
          </div>
          <div id="prev-next">
            <button
              id="left-button"
              className={
                this.state.currentState.prev ? "shownextprev" : "hidenextprev"
              }
              onClick={this.handleClickLeft}
            >
              <a href={this.state.prevFilm}>prev</a>
            </button>
            <span
              className={
                this.state.currentState.prev && this.state.currentState.next
                  ? "shownextprev slash"
                  : "hidenextprev slash"
              }
            >
              /
            </span>

            <button
              id="right-button"
              className={
                this.state.currentState.next ? "shownextprev" : "hidenextprev"
              }
              onClick={this.handleClickRight}
            >
              <a href={this.state.nextFilm}>next</a>
            </button>
          </div>
        </div>
        <div id="film-discription">
          <div id="video-wrapper">
            <div
              className={
                this.state.currentState.hasVideo ? "hasVideo" : "noVideo"
              }
            >
              {" "}
              <Img
                alt="still"
                loader={<div className="placeholder" />}
                src={this.state.currentState.image}
              />
              <p>Video not available online</p>
            </div>

            <iframe
              className={
                this.state.currentState.hasVideo ? "hasVideo" : "noVideo"
              }
              title="vimeo"
              src={this.state.currentState.link}
              id="responsive-iframe"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen={true}
            />
          </div>

          <div>
            <div>
              <p id="video-title">{this.state.currentState.title}</p>
            </div>
            <div id="video-info">
              {this.state.currentState.info.split("\n").map((it, i) => (
                <p key={"x" + i}>{it}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Film;
