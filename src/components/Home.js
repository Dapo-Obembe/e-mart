import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="hero-section">
          <Carousel className="hero-carousel">
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src="/images/hero-bg.jpg"
                height="500"
                alt="First slide"
              />
              <Carousel.Caption className="captions">
                <h1>Shopping Made Easy</h1>
                <p>
                  Lorem ipsum dolor sit amet consec teturus added sicing elit.
                  Itaqueus eum distin actio commodi sit amet deserunt sitdo.
                </p>
                <div className="heroBtns">
                  <button className="getStarted_Btn">Get Started</button>
                  <button className="regBtn">Register as Vendor</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/hero-bg2.png"
                height="500"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/hero-bg3.jpg"
                height="500"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="below-hero">
          <div className="below-hero_content">
            <h2>Your Product delivery is our concern</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut non
              excepturi reprehenderit est cumque similique, sed, eum asperiores,
              officiis doloribus unde! Unde illo sunt soluta mollitia alias eum,
              nemo commodi
            </p>
          </div>
        </div>
        <div className="popular-vendors">
          <div className="vendors-heading_readMore">
            <h3>Popular Vendors</h3>
            <a href="/">See More</a>
          </div>
          <div className="vendor-container">
            <div className="vendor-box">
              <img
                src="/images/vendors.png"
                alt="vendors"
                width="235"
                height="290"
              />
              <p>Crunchies</p>
            </div>
            <div className="vendor-box">
              <img
                src="/images/vendors.png"
                alt="vendors"
                width="235"
                height="290"
              />
              <p>NOA Supermarket</p>
            </div>
            <div className="vendor-box">
              <img
                src="/images/vendors.png"
                alt="vendors"
                width="235"
                height="290"
              />
              <p>Portofino</p>
            </div>
            <div className="vendor-box">
              <img
                src="/images/vendors.png"
                alt="vendors"
                width="235"
                height="290"
              />
              <p>Takeaway</p>
            </div>
          </div>
        </div>
        <div className="popular-cat">
          <div className="cat-heading_readMore">
            <h3>Popular Categories</h3>
            <a href="/">See More</a>
          </div>
          <div className="cat-container">
            <div className="cat-box">
              <img
                src="/images/vendors.png"
                alt="Food Stuffs"
                width="235"
                height="290"
              />
              <p>Food Stuffs</p>
            </div>
            <div className="cat-box">
              <img
                src="/images/Electronic.png"
                alt="Equipments"
                width="235"
                height="290"
              />
              <p>Home and Office Equipments</p>
            </div>
            <div className="cat-box">
              <img
                src="/images/Fashion.png"
                alt="Fashion"
                width="235"
                height="290"
              />
              <p>Men and Women Clothes</p>
            </div>
            <div className="cat-box">
              <img
                src="/images/medical.png"
                alt="Medical Equipments"
                width="235"
                height="290"
              />
              <p>Medical Equipments</p>
            </div>
          </div>
        </div>
        <div className="shop-info">
          <div className="info-container">
            <div className="info-box">
              <i class="fa-solid fa-truck"></i>
              <p>Free shipping on over $50</p>
            </div>
            <div className="info-box">
              <i class="fa-solid fa-percent"></i>
              <p>Membership Discount</p>
            </div>
            <div className="info-box">
              <i class="fa-solid fa-sack-dollar"></i>
              <p>Money return</p>
            </div>
            <div className="info-box">
              <i class="fa-solid fa-headset"></i>
              <p>Online Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
