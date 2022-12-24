import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, image_server, server } from "../constants/constants";
import axios from "axios";
import Loading from "./Loading";
import "../styles/movie-item.css";
import { Typography } from "antd";
import placeHolder from "../assets/movie_place_holder.jpg";

const { Title, Text } = Typography;

export default function MovieItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);
  const params = useParams();
  const movieId = params.id;
  async function getMovie() {
    setIsLoading(true);
    try {
      const reponse = await axios.get(
        `${server}/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = reponse.data;
      setSingleMovie(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovie();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : singleMovie ? (
        <div className="movie-item-container">
          <div className="movie-item-wrapper">
            <img
              src={
                singleMovie.backdrop_path
                  ? `${image_server}/t/p/original${singleMovie.backdrop_path}`
                  : placeHolder
              }
              className="movie-item-image"
            />
            <Title level={3}>{singleMovie.title}</Title>
            <Text>{singleMovie.overview}</Text>
            <br />
            <Text type="secondary">
              Genres: {singleMovie.genres.map((item) => item.name).join(", ")}
            </Text>
            <br />
            <Text type="secondary">
              Release Date: {singleMovie.release_date}
            </Text>
          </div>
        </div>
      ) : null}
    </>
  );
}
