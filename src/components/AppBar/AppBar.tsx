import * as React from "react";
import "./AppBar.css";
import logo from "../../assets/logo_circle.png";

export default function TkdAppBar() {
  return (
    <div className="appbar-container">
      <a href="/"><img src={logo} className="logo" /></a>
      <div className="appbar-link-container">
        <span className="appbar-link"><a href="/about">About Me</a></span>
        <span className="appbar-link"><a href="/portfolio">Portfolio</a></span>
        <span className="appbar-link"><a href="/resume">Resume</a></span>
        <span className="appbar-link"><a href="/contact">Contact</a></span>
      </div>
    </div>
  );
}
