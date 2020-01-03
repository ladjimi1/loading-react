import React from "react";
import MovieItem from "./MovieItem";
import Hoc from './Hoc'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map((el, index) => (
        <MovieItem oneMovie={el} key={index} />
      ))}
    </div>
  );
};

export default Hoc(MovieList);
