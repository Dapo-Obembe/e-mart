import React from "react";
import "./css/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-info">
        <div className="contact-location">
          <i class="fa-solid fa-location-dot"></i>
          <h2>Our Location</h2>
          <p>EKiti State, Nigeria</p>
        </div>
        <div className="contact-email">
          <i class="fa-solid fa-envelope"></i>
          <h2>Our Email</h2>
          <p>contact@emart.com.ng</p>
        </div>
        <div className="contact-phone">
          <i class="fa-solid fa-phone"></i>
          <h2>Our Phone</h2>
          <p>+234 903 094 5543</p>
        </div>
      </div>
      <div className="contact-form_container">
        <p>Let's Talk</p>
        <h2>Send Us A Message</h2>
        <div className="contact-form-map">
          <div className="contact-form">
            <form action="post" method="post">
              <div className="contact-form_names">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="contact-form_email">
                <input
                  type="email"
                  name="email address"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="contact-form_textarea">
                <textarea
                  name="message"
                  value="Type your message here"
                  required
                />
              </div>
              <input className="form-submit" type="submit" value="Submit" />
            </form>
          </div>
          <div className="contact-map">
            <img
              src="/images/EkitiMap.png"
              alt="Ekiti state Map"
              height="550"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
