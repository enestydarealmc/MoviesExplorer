import { Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/not-found-404.css";

export default function NotFound404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <div className="back-home-button-container">
          <Link to="/movie_explorer">
            <button className="back-home-button">Back Home</button>
          </Link>
        </div>
      }
    />
  );
}
