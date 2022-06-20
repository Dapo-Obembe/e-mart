import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/home.css";

function Home() {
  return (
    <Home className="home">
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
          <div className="vendor-box"></div>
          <div className="vendor-box"></div>
          <div className="vendor-box"></div>
          <div className="vendor-box"></div>
        </div>
      </div>
      <div className="popular-cat">
        <div className="cat-heading_readMore">
          <h3>Popular Categories</h3>
          <a href="/">See More</a>
        </div>
        <div className="cat-container">
          <div className="cat-box"></div>
          <div className="cat-box"></div>
          <div className="cat-box"></div>
          <div className="cat-box"></div>
        </div>
      </div>
    </Home>
  );
}

export default Home;
