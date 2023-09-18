import "./main.css";
import React from "react";
import Nav from "./Nav/Nav";

function Dashboard({ data, handleColorChange }) {
  return (
    <div className="dashboard">
      {data ? (
        <Nav avatar={data[0].owner.avatar_url} handleColorChange={handleColorChange} />
      ) : (
        <Nav handleColorChange={handleColorChange} />
      )}
      <h1>dashboard</h1>
    </div>
  );
}

export default Dashboard;
