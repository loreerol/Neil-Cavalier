import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameClicked: false,
      emailClicked: false,
      messageClicked: false,
      showSuccessModal: false,
      showErrorModal: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleEmailClick = this.handleEmailClick.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  handleCloseModal(e) {
    e.stopPropagation();
    this.setState({ showSuccessModal: false, showErrorModal: false });
  }

  handleNameClick(e) {
    e.stopPropagation();
    this.setState({ nameClicked: true });
  }
  handleEmailClick(e) {
    e.stopPropagation();
    this.setState({ emailClicked: true });
  }
  handleMessageClick(e) {
    e.stopPropagation();
    this.setState({ messageClicked: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    })
      .then(response => {
        if (response.data.msg === "success") {
          this.setState({ showSuccessModal: true });
          this.resetForm();
        } else if (response.data.msg === "fail") {
          this.setState({ showErrorModal: true });
        }
      })
      .catch(error => {
        this.setState({ showErrorModal: true });
      });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-contact-form">
          <div className="contact-header" />

          <div className="contact">
            <div id="contact-info">
              <p>
                Neil Cavalier is a Toronto based Filmmaker, Musician and Artist.
                Please feel free to contact him if you'd like to hire or
                collaborate with him.
              </p>
              <div>
                <ul id="contact-list">
                  <li>
                    <p>
                      <a href="mailto:createvsdestroy@gmail.com">Email</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://vimeo.com/neilcavalier">
                        <span>Vimeo</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://www.imdb.com/name/nm2027664/">
                        <span>IMDB</span>
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
              </div>
            </div>
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group name-group">
                <div className="form-control-wrapper">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onClick={this.handleNameClick}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={this.state.nameClicked ? "form-clicked" : "form"}
                  >
                    Name
                  </label>
                </div>
              </div>

              <div className="form-group email-group">
                <div className="form-control-wrapper">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onClick={this.handleEmailClick}
                  />
                  <label
                    htmlFor="email"
                    className={
                      this.state.emailClicked ? "form-clicked" : "form"
                    }
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="form-group message-group">
                <div className="form-control-wrapper">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    onClick={this.handleMessageClick}
                    required
                  />
                  <label
                    htmlFor="message"
                    className={
                      this.state.messageClicked ? "form-clicked" : "form"
                    }
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="form-control send-message">
                <button type="submit" className=" submit-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="modal">
          <div
            className={this.state.showErrorModal ? "show-error" : "hide-modal"}
          >
            <h1>Oops!</h1>
            <p>Your message has failed to send</p>
            <p>Please email Neil directly at</p>
            <p>
              <a href="mailto:createvsdestroy@gmail.com">
                CreateVsDestroy@Gmail.com
              </a>
            </p>
            <button onClick={this.handleCloseModal}>
              <p>╳</p>
            </button>
          </div>
        </div>
        <div className="modal">
          <div
            className={
              this.state.showSuccessModal ? "show-success" : "hide-modal"
            }
          >
            <h1>Success!</h1>
            <p>Your message has been sent.</p>
            <button onClick={this.handleCloseModal}>
              <p>╳</p>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
