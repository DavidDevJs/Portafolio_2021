import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-form">
          <form action="">
            <div className="contact-form__item">
              <label>FullName</label>
              <input type="text" name="fullname" />
            </div>
            <div className="contact-form__item">
              <label>Email Adress</label>
              <input type="email" name="email" />
            </div>
            <div className="contact-form__item message">
              <label>Message</label>
              <textarea name="message" rows="3"></textarea>
            </div>
            <div className="contact-form__item send">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
