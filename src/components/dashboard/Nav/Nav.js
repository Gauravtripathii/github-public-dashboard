import React from "react";
import "./nav.css";

import { NavLink } from "react-router-dom";

function Nav({avatar}) {
  const style = {
    nav: {
      width: "25%",
      height: "95%",
      background: "#202020",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "15px",
    },
    navSpan: {
      color: "#cccccc",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.3s",
    },
  };
  return (
    <div className="nav" style={style.nav}>
        <div className="profile">
            <img src={avatar} alt="gitHub Avatar" />
        </div>
      <NavLink to="/" style={style.navSpan} className="dashboard-item">
        <i className="material-symbols-outlined">home</i>
        <span className="text">Home</span>
      </NavLink>
    </div>
  );
}

export default Nav;
