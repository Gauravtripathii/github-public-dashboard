import "./main.css";
import React from "react";
import Nav from "./Nav/Nav";

function Dashboard({data}) {
  return (
    <div className="dashboard">
      <Nav avatar={data[0].owner.avatar_url} />
      <h1>dashboard</h1>
    </div>
  );
}

export default Dashboard;
