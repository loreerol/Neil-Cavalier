import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import Films from "./Films";
import Contact from "./Contact";
import About from "./About";
import "../styles/App.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn === true) {
      this.setState({ isToggleOn: false });
    } else {
      this.setState({ isToggleOn: true });
    }
  }

  render() {
    return (
      <Router>
        <div id="header-wrapper">
          <header className="">
            <div id="menu-top">
              <span className="logo">
                <a href="#">Neil Cavalier</a> <p>filmmaker</p>
              </span>
              <span className="navmenubtn">
                <button type="button" role="button" onClick={this.handleClick}>
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
                    <NavLink className="navlink" to="/">
                      films
                    </NavLink>
                  </p>
                </li>
                <li>
                  <p>
                    <NavLink className="navlink" to="/about">
                      about
                    </NavLink>
                  </p>
                </li>
                <li>
                  <p>
                    <NavLink className="navlink" to="/contact">
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
        <Films />
      </Router>
    );
  }
}
export default Header;
