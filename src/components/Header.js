import React from "react";
import "./css/header.css";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  return (
    <div className="header">
      <div className="header-first">
        <div className="header-items">
          <div className="header-menuIcon">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                className="menu-toggle"
              >
                MENU
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <ul className="header-Deskmenu">
            <li>Home</li>
            <li>Fashion</li>
            <li>Medical Equip</li>
            <li>Farm Product</li>
            <li>Electronics</li>
          </ul>
        </div>
        <div className="header-shop-Btn">
          <i class="fa-solid fa-cart-arrow-down"></i> Shop Now
        </div>
      </div>
      <div className="header-second">
        <div className="header-logo">
          <img src="/images/e-mart-logo.png" alt="e-Mart logo" />
        </div>
        <div className="header-nav">
          <div className="email-link">
            <a href="/">
              <i class="fa-solid fa-envelope"></i> info@emart.com.ng
            </a>
          </div>
          <div className="contact-link">
            <a href="/">
              <i class="fa-solid fa-phone"></i> +234 9030 945 543
            </a>
          </div>
          <div className="login-Reg">
            <a href="/">
              <i class="fa-solid fa-right-to-bracket"></i> Login or Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="header-third">
        <div className="search-bar">
          <form action="" method="get">
            <input
              type="text"
              name="s"
              id=""
              placeholder="Search for products here"
            />
            <select name="vendors" id="option" placeholder="Select vendor">
              <option value="option">Select a vendor</option>
              <option value="option">NOA</option>
              <option value="option">EKSUTH</option>
              <option value="option">Crunchies</option>
            </select>
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
