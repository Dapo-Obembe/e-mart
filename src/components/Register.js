import React from "react";
import "./css/register.css";

function Register() {
  return (
    <>
      <div className="register-container">
        <div className="register-hero">
          <h1>Vendor Registration</h1>
        </div>
        <div className="register-form_container">
          <div className="register-form">
            <form action="" method="post">
              <div className="reg-form-box">
                <label>First Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Your First Name"
                  required
                />
              </div>
              <div className="reg-form-box">
                <label>Last Name</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Your Last Name"
                  required
                />
              </div>
              <div className="reg-form-box">
                <label>Username</label>
                <input type="text" id="uname" placeholder="Username" required />
              </div>
              <div className="reg-form-box">
                <label>Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="reg-form-box">
                <label>Phone Number</label>
                <input
                  type="phone"
                  id="phone"
                  placeholder="Your phone Number"
                  required
                />
              </div>
              <div className="reg-form-box">
                <label>Password</label>
                <input
                  type="password"
                  id="pass"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <input
                type="submit"
                value="Register Now"
                className="submit-reg"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
