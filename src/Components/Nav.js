import React from 'react';
import {  } from "react-icons"; 
import logo from "../images/logo.png";

export default function Nav() {
  return (
    <nav className="nav">
        <a href="#" className="nav__logo">
            <img src={logo} alt="Logo" />
        </a>

        <span className="nav__links">
            <a href="/" className="nav__link">Home</a>
            <a href="/workout" className="nav__link">Workout</a>
        </span>
    </nav>
    )
}
