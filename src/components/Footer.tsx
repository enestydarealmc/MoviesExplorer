import React from "react";
import "../styles/footer.css";
import { Typography } from "antd";

const { Title } = Typography;

export default function Footer() {
  return (
    <div className="footer-container">
      <Title level={4}>@2022 Nguyen Son Truong</Title>
    </div>
  );
}
