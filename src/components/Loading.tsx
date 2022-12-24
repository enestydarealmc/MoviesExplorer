import { Spin } from "antd";
import React from "react";
import "../styles/spin.css";

export default function Loading({ width = "100vw", height = "70vh" }) {
  return (
    <div className="spin-container" style={{ width: width, height: height }}>
      <Spin size="large" />
    </div>
  );
}
