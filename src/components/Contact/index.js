import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {};

  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            action="mailto:davidgonzalez0519@gmail.com"
            method="POST"
          >
            <div className="contact-form__item">
              <label>FullName</label>
              <input type="text" name="fullname" required />
            </div>
            <div className="contact-form__item">
              <label>Email Adress</label>
              <input type="email" name="email" required />
            </div>
            <div className="contact-form__item message">
              <label>Message</label>
              <textarea name="message" rows="3"></textarea>
            </div>
            <div className="contact-form__item send">
              <button>Send</button>
            </div>
          </form>
          <div className="social-networks">
            <a href="https://www.linkedin.com/in/manuel-david-arias-gonz%C3%A1lez-40b9bb1b8/">
              <BsLinkedin className="socialIcon" />
              Linkedin
            </a>
            <a href="https://github.com/Davidgonz-maker">
              <BsGithub className="socialIcon" />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
