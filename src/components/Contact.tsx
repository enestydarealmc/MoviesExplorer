import React from "react";
import "../styles/contact-us.css";
import { Typography } from "antd";

const { Title } = Typography;

export default function Contact() {
  return (
    <div className="contact-us-container">
      <Title level={2}>Contact Us</Title>
    </div>
  );
}
