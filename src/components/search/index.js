import React from "react";
import "./main.css";

function Search() {
  return (
    <div className="search-container">
      <div className="input-box">
        <input type="text" placeholder="Search for a github profile" />
        <button>
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

export default Search;
