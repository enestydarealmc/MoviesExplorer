import React from "react";
import { image_server } from "../constants/constants";
import "../styles/search-result-item.css";
import placeHolder from "../assets/movie_place_holder.jpg";
import { Link } from "react-router-dom";

export default function SearchResultItem({ data }) {
  return (
    <Link
      to={`/movie_explorer/up_comming/${data.id}`}
      className="search-result-item-container"
    >
      <div className="search-result-item-effect" />
      <img
        src={
          data.poster_path
            ? `${image_server}/t/p/w500${data.poster_path}`
            : placeHolder
        }
        className="search-result-item-image"
      />
      <div className="search-result-item-title">{data.title}</div>
    </Link>
  );
}
