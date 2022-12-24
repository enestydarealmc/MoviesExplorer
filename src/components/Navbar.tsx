import Drawer from "antd/es/drawer";
import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { AlignRightOutlined } from "@ant-design/icons";
import { Empty, Input, Spin } from "antd";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { API_KEY, server } from "../constants/constants";
import SearchResultItem from "./SearchResultItem";

const { Search } = Input;

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const location = useLocation();
  function showDrawer() {
    setOpenDrawer(true);
  }
  function closeDrawer() {
    setOpenDrawer(false);
  }
  function onSearch(value) {
    console.log(value);
  }
  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchValue.length > 0) {
        setIsLoadingSearch(true);
        axios
          .get(
            `${server}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchValue}`
          )
          .then((res) => {
            const data = res.data.results;
            setSearchResults(data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsLoadingSearch(false);
          });
      }
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchValue]);

  useEffect(() => {
    setSearchValue("");
  }, [location]);

  return (
    <>
      <nav className="menu-bar">
        <Link to="/movie_explorer" className="logo-wrapper">
          <span className="logo-movie">Movie</span>
          <span className="logo-explorer">Explorer</span>
        </Link>
        <div className="search-bar-container">
          <Search
            placeholder="Search movie..."
            onSearch={onSearch}
            className="search-bar"
            value={searchValue}
            onChange={handleChange}
          />
          <div
            className="search-bar-result-container"
            style={{
              visibility: searchValue.length > 0 ? "visible" : "hidden",
              opacity: searchValue.length > 0 ? 1 : 0,
            }}
          >
            {isLoadingSearch ? (
              <div className="search-spin-container">
                <Spin size="large" />
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map((item) => (
                <SearchResultItem key={item.id} data={item} />
              ))
            ) : (
              <Empty />
            )}
          </div>
        </div>
        <div className="menu-icon-container">
          <div className="menu-temp-expand" />
          <AlignRightOutlined
            onClick={showDrawer}
            style={{ color: "white", fontSize: 25 }}
          />
        </div>
      </nav>
      <Drawer
        title="Please login"
        placement="right"
        onClose={closeDrawer}
        open={openDrawer}
      >
        <p>Login</p>
        <p>Upcoming</p>
      </Drawer>
    </>
  );
}
