import "./main.css";
import React from "react";
import Nav from "./Nav/Nav";

function Dashboard({ data, handleColorChange }) {
  console.log(data);
  return (
    <div className="dashboard">
      {data ? (
        <Nav
          avatar={data[0].owner.avatar_url}
          handleColorChange={handleColorChange}
        />
      ) : (
        <Nav handleColorChange={handleColorChange} />
      )}
      <div className="dashboard-main">
        {data
          ? data.map((repo, index) => (
              <div className="card" key={index}>
                <div className="profile-name">{repo.owner.login}/</div>
                <div className="repo-name">{repo.name}</div>
                <footer>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
                </footer>
              </div>
            ))
          : "no data here"}
      </div>
    </div>
  );
}

export default Dashboard;
