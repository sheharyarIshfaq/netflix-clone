import React, { useState, useEffect } from "react";

import axios from "../api/axios";
import requests from "../api/requests";
import classes from "./Banner.module.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie);
    };
    fetchMovies();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${
          !movie.backdrop_path
            ? "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg"
            : movie.backdrop_path
        })`,
      }}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.buttons}>
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className={classes.description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={classes.fadeBottom}></div>
    </header>
  );
};

export default Banner;
