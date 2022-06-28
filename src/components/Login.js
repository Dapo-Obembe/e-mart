import React from "react";
import "./css/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-container">
        <div
          className="login-hero"
          style={{
            backgroundImage: "url(/images/hero-bg3.jpg",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1>My Account</h1>
        </div>
        <div className="login-form_container">
          <p className="login-heading">Welcome, Guest. Please Login</p>
          <div className="social-login">
            <div className="google-login">
              <img
                src="/images/Google.png"
                alt="login with Google"
                width="30"
              />
              <p>Sign in with Google</p>
            </div>
            <div className="facebook-login">
              <img
                src="/images/facebook.png"
                alt="login with Facebook"
                width="30"
              />
              <p>Sign in with Facebook</p>
            </div>
          </div>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              padding: "1.25rem 0",
            }}
          >
            -OR-
          </div>
          <div className="login-form">
            <form>
              <label>
                Username or Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <label className="login-rem">
                <input type="checkbox" name="checkbox" required />
                Remember me
                <p>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Forgot Password?
                  </Link>
                </p>
              </label>
              <input
                style={{
                  backgroundColor: "#f27b0c",
                  border: "none",
                  padding: "0.5rem 1.25rem",
                  color: "#fff",
                  fontWeight: "600",
                  marginBottom: "1.25rem",
                }}
                type="submit"
                value="LOGIN"
              />
              <button type="button" className="signUp-Btn">
                REGISTER HERE NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
