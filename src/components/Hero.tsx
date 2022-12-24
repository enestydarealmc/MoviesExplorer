import React from "react";
import hero from "../assets/undraw_home_cinema_l7yl.svg";
import "../styles/hero.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={hero} className="hero-image" />
      <Title level={2}>Welcome to Movie Explorer</Title>
      <Text type="secondary">Produce FILM feature, TELEVISION and GAME</Text>
      <div className="contact-button-container">
        <Link to="/movie_explorer/contact">
          <button className="contact-button">CONTACT US</button>
        </Link>
      </div>
    </div>
  );
}
