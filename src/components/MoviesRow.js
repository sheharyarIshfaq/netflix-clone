import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import classes from "./MoviesRow.module.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const MoviesRow = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchUrl = props.fetchUrl;
  const isLarge = props.isLarge;

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl);
      const moviesData = request.data.results;
      setMovies(moviesData);
      return request;
    };
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const posterClass = `${classes.row_poster}`;
  const largePosterClass = `${classes.row_poster} ${classes.row_posterLarge}`;

  const movieClickHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={classes.row}>
      <h1>{props.title}</h1>
      <div className={classes.row_posters}>
        {movies.map((movie) => (
          <img
            onClick={() => movieClickHandler(movie)}
            key={movie.id}
            className={isLarge ? largePosterClass : posterClass}
            src={`${baseUrl}${
              isLarge
                ? movie.poster_path
                : !movie.backdrop_path
                ? "https://image.tmdb.org/t/p/original//dZ1sOBUIrgX4iIEKjo6GiQpUMiL.jpg"
                : movie.backdrop_path
            }`}
            alt={movie.original_title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default MoviesRow;
