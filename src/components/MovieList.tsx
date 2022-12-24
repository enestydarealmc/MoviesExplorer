import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, image_server, server } from "../constants/constants";
import { Card, Spin } from "antd";
import "../styles/movie-list.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import placeHolder from "../assets/movie_place_holder.jpg";

const { Title } = Typography;
const { Meta } = Card;

export default function MovieList() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getMovies() {
    setIsLoading(true);
    try {
      const reponse = await axios.get(
        `${server}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = reponse.data;
      setUpcomingMovies(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="movie-card-container">
          <Title level={3} style={{ color: "white" }}>
            Up Coming Movies
          </Title>
          <div className="movie-card-grid">
            {upcomingMovies.map((item) => (
              <Link
                key={item.id}
                to={`/movie_explorer/up_comming/${item.id}`}
                className="movie-card-link"
              >
                <Card
                  hoverable
                  style={{ width: "250px" }}
                  cover={
                    <img
                      alt="movie"
                      src={
                        item.poster_path
                          ? `${image_server}/t/p/w500${item.poster_path}`
                          : placeHolder
                      }
                    />
                  }
                >
                  <Meta
                    title={item.original_title}
                    description={item.release_date}
                  />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
