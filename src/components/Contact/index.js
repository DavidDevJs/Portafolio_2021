import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div class="content">
        <h1 class="logo">
          Contact <span>Me</span>
        </h1>

        <div class="contact-wrapper animated bounceInUp">
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
      </div>
    </section>
  );
};

export { Contact };
