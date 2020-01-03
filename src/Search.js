import React from "react";

const Search = props => {
  return (
    <div className="search-input">
      <input
        onChange={e => props.searchIt(e.target.value)}
        type="text"
        placeholder="Type movie's name"
      />
      <button>Search</button>
    </div>
  );
};
export default Search;
