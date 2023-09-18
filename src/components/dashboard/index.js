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
              <div className="card" key={index}>{repo.full_name}</div>
            ))
          : "no data here"}
      </div>
    </div>
  );
}

export default Dashboard;
