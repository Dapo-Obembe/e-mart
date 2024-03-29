import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./css/udashboard.css";

function Udashboard() {
  const dashHero = {
    minHeight: "200px",
    display: "grid",
    placeItems: "center",
  };
  const dashTitle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    textTransform: "uppercase",
  };

  const dashRow = {
    backgroundColor: "#fff",
    minHeight: "600px",
    Col1: {
      boxShadow: "4px 4px 4px 0px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    UserList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    UserItem: {
      listStyle: "none",
      fontSize: "1rem",
      backgroundColor: "var(--secondary-color)",
      color: "#fff",
      fontWeight: "600",
      marginBottom: ".5rem",
      padding: ".5rem 1rem",
      borderRadius: ".5rem",
    },
  };

  const UserLink = {
    color: "#fff",
    textDecoration: "none",
  };
  return (
    <>
      <div
        className="user-dash"
        style={{ backgroundColor: "#ccc", width: "100%", padding: "2rem 0" }}
      >
        <Container
          className="dash-container"
          style={{
            width: "60%",
            margin: "0 auto",
          }}
        >
          <Row style={dashHero}>
            <Col>
              <h1 className="text-center" style={dashTitle}>
                User Dashboard
              </h1>
            </Col>
          </Row>
          <Row style={dashRow}>
            <Col lg={2} style={dashRow.Col1}>
              <div className="user-avatar">
                <img src="/images/user-avatar.png" alt="user avatar" />
              </div>
              <ul style={dashRow.UserList}>
                <li className="user-item" style={dashRow.UserItem}>
                  <Link to="" style={UserLink}>
                    Profile
                  </Link>
                </li>
                <li className="user-item" style={dashRow.UserItem}>
                  <Link to="" style={UserLink}>
                    Wishlist
                  </Link>
                </li>
                <li className="user-item" style={dashRow.UserItem}>
                  <Link to="" style={UserLink}>
                    Settings
                  </Link>
                </li>
                <li className="user-item" style={dashRow.UserItem}>
                  <Link to="" style={UserLink}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={10}>
              <div className="user-details">
                <div className="account-details">
                  <h4>Account Details</h4>
                  <p>Raymond Adeleke</p>
                  <p>+2348151244131</p>
                  <p>adeleke@e-mart.com</p>
                  <Link to="">Change password</Link>
                </div>
                <div className="address-book">
                  <h4>Account Details</h4>
                  <p style={{ fontWeight: "700" }}>Your default address:</p>
                  <p>Oluwatobiloba Adebayo</p>
                  <p>
                    St. Paul's Anglican Church, Idagba Street, Efon Alaaye Ekiti
                    State
                  </p>
                  <p>+234 8166715024 / +234 7014673387</p>
                </div>
              </div>
              <div className="user-boxes">
                <div className="box">
                  <p>Wishlist</p>
                  <p>5</p>
                </div>
                <div className="box">
                  <p>Purchased</p>
                  <p>5</p>
                </div>
                <div className="box">
                  <p>Pending</p>
                  <p>5</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Udashboard;
