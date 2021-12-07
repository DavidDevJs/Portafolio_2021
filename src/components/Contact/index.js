import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {};

  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
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
        </div>
      </div>
    </section>
  );
};

export { Contact };
