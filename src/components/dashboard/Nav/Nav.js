import React from "react";
import "./nav.css";

import { NavLink } from "react-router-dom";

import { useState, useRef, useEffect } from "react";

function Nav({ avatar, handleColorChange }) {
  const style = {
    nav: {
      width: "25%",
      height: "95%",
      background: "var(--bg-dark2)",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "15px",
      position: "relative",
    },
    navSpan: {
      color: "var(--color-dark)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.3s",
    },
  };

  const [themeBtnClick, setThemeBtnClick] = useState(0);
  const themeBtnRef = useRef();
  const navRef = useRef();
  const navSpanRef = useRef();
  useEffect(() => {
    if (themeBtnClick % 2 === 0) {
      themeBtnRef.current.style.color = "var(--color-dark)";
      navRef.current.style.background = "var(--bg-dark2)";
      navSpanRef.current.style.color = "var(--color-dark)";
      navSpanRef.current.style.borderColor = "var(--color-dark)";
      handleColorChange(themeBtnClick);
    } else {
      themeBtnRef.current.style.color = "var(--color-light)";
      navRef.current.style.background = "var(--bg-light2)";
      navSpanRef.current.style.color = "var(--color-light)";
      navSpanRef.current.style.borderColor = "var(--color-light)";
      handleColorChange(themeBtnClick)
    }
  }, [themeBtnClick, handleColorChange]);
  return (
    <div className="nav" style={style.nav} ref={navRef}>
      <div className="profile" ref={navSpanRef}>
        <img src={avatar} alt="gitHub Avatar" />
      </div>
      <NavLink to="/" style={style.navSpan} className="dashboard-item" ref={navSpanRef}>
        <i className="material-symbols-outlined">home</i>
        <span className="text">Home</span>
      </NavLink>

      <span
        ref={themeBtnRef}
        className="theme-btn material-symbols-outlined"
        onClick={() => setThemeBtnClick(themeBtnClick + 1)}
      >
        {themeBtnClick % 2 === 0 ? "light_mode" : "dark_mode"}
      </span>
    </div>
  );
}

export default Nav;
