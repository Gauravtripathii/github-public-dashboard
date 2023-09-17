import React from "react";
import "./main.css";

import { useState } from "react";

function Search(props) {
  const [profileName, setProfileName] = useState("");
  const handleSubmit = () => {
    props.callback(profileName);
    setProfileName("");
  };
  return (
    <div className="search-container">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search for a github profile"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

export default Search;
