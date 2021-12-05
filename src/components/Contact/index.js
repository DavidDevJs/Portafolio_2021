import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 class="contact__title">Contact</h1>
      <div class="contact-wrapper">
        <div class="contact-form">
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
