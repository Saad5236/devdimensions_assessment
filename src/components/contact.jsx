import "../assets/css/contact.css"

export default function contact() {
  return (
    <>
      {/* <div className="contact-us-wrapper"> */}
        <div className="contact-us-wrapper row">
          <div className="col-md-6 contact-us-form">
            <h3>Contact Us</h3>
            <form
              id="contact-form"
              className="contact"
              action="php/contact.php"
              method="post"
            >
              <input
                className="contact-input white-input"
                required=""
                name="contact_names"
                placeholder="Full Name*"
                type="text"
              />
              <input
                className="contact-input white-input"
                required=""
                name="contact_email"
                placeholder="Email Adress*"
                type="email"
              />
              <input
                className="contact-input white-input"
                required=""
                name="contact_phone"
                placeholder="Phone Number*"
                type="text"
              />
              <textarea
                className="contact-commnent white-input"
                rows={2}
                cols={20}
                name="contact_message"
                placeholder="Your Message..."
                defaultValue={""}
              />
              <input
                value="Send Message"
                id="submit-button"
                className="contact-submit"
                type="submit"
              />
            </form>
            {/*end contact form */}
          </div>

          <div className="col-md-6">
            <h3>How to find us</h3>
            <iframe
              className="contact-maps wow slideInRight"
              data-wow-delay="0.25s"
              style={{
                visibility: "visible",
                animationDelay: "0.25s",
                animationName: "slideInRight",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335"
              width={600}
              height={370}
              allowFullScreen=""
            />
          </div>
        </div>
      {/* </div> */}
    </>
  )
}
