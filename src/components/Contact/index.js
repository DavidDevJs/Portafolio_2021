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
              <p>
                <label>FullName</label>
                <input type="text" name="fullname" />
              </p>
              <p>
                <label>Email Adress</label>
                <input type="email" name="email" />
              </p>
              <p class="block">
                <label>Message</label>
                <textarea name="message" rows="3"></textarea>
              </p>
              <p class="block">
                <button>Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
