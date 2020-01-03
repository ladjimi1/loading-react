import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieItem = props => {
  return (
    <div className="movie-card">
      <img src={props.oneMovie.image} alt=".." />
      <h3>{props.oneMovie.title}</h3>
      <p>{props.oneMovie.year}</p>
      <StarRatingComponent
        className="stars"
        name="rate1"
        starCount={5}
        value={props.oneMovie.rating}
      />
    </div>
  );
};

export default MovieItem;
