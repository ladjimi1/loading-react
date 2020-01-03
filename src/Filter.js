import React, { Component } from "react";
import Search from "./Search";
import StarRatingComponent from "react-star-rating-component";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue }, () =>
      this.props.rateIt(this.state.rating)
    );
  };
  render() {
    return (
      <div className="filter">
        <Search searchIt={x => this.props.searchIt(x)} />
        <div className="rate">
          <p>Minimum Rating:</p>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
