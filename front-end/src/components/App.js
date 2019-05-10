import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Film from "./Film";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false, activeSection: "films" };
    this.handleClick = this.handleClick.bind(this);
    this.handleFilmsClick = this.handleFilmsClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn === true) {
      this.setState({ isToggleOn: false });
    } else {
      this.setState({ isToggleOn: true });
    }
  }
  handleFilmsClick() {
    this.setState({
      activeSection: "films"
    });
  }
  handleAboutClick() {
    this.setState({
      activeSection: "about"
    });
  }
  handleContactClick() {
    this.setState({
      activeSection: "contact"
    });
  }

  render() {
    return (
      <Router>
        <div id="header-wrapper">
          <header className="">
            <div id="menu-top">
              <span className="logo">
                <a href="/">Neil Cavalier</a> <p>filmmaker</p>
              </span>
              <span className="navmenubtn">
                <button type="button" onClick={this.handleClick}>
                  MENU
                  <span
                    className={this.state.isToggleOn ? "arrow" : "active arrow"}
                  >
                    <span />
                    <span />
                  </span>
                </button>
              </span>
            </div>

            <nav className={this.state.isToggleOn ? "visable" : "hidden"}>
              <ul id="menu">
                <li>
                  <p>
                    <NavLink
                      onClick={this.handleFilmsClick}
                      className={
                        this.state.activeSection === "films"
                          ? "navActive navlink"
                          : "navlink"
                      }
                      to="/"
                    >
                      films
                    </NavLink>
                  </p>
                </li>
                <li>
                  <p>
                    <NavLink
                      onClick={this.handleAboutClick}
                      className={
                        this.state.activeSection === "about"
                          ? "navActive navlink"
                          : "navlink"
                      }
                      to="/about"
                    >
                      about
                    </NavLink>
                  </p>
                </li>
                <li>
                  <p>
                    <NavLink
                      onClick={this.handleContactClick}
                      className={
                        this.state.activeSection === "contact"
                          ? "navActive navlink"
                          : "navlink"
                      }
                      to="/contact"
                    >
                      contact
                    </NavLink>
                  </p>
                </li>
              </ul>
              <ul id="social-links">
                <li>
                  <p>
                    <a href="https://vimeo.com/neilcavalier">
                      <span>Vimeo</span>&nbsp;/&nbsp;
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.imdb.com/name/nm2027664/">
                      <span>IMDB</span>&nbsp;/&nbsp;
                    </a>
                  </p>
                </li>
                <li className="transition">
                  <p>
                    <a href="https://www.instagram.com/createvsdestroy/">
                      <span>Instagram</span>
                    </a>
                  </p>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/film/:handle" component={Film} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}
export default App;
