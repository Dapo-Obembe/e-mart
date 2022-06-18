import React from "react";
import "./css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <img src="/images/e-mart-logo-white.png" alt="e-mart logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              molestias temporibus vitae quaerat veritatis placeat numquam sint
              et unde reprehenderit praesentium porro cum beatae ipsum, quas
              nobis voluptas doloribus recusandae
            </p>
          </div>
          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Vendors</li>
              <li>Account</li>
            </ul>
          </div>
          <div className="footer-suppot">
            <h3>Support</h3>
            <p>Ekiti State, Nigeria</p>
            <p>
              <i class="fa-solid fa-phone"></i> 458-965-3224
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> contact@emart.com.ng
            </p>
            <div className="footer-social">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="footer-credit">
          <p>Copyright 2022 e-Mart. All RIghts Reerved</p>
          <img src="/images/card_img.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
