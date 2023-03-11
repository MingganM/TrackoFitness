import React from 'react';
import { FaHome } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Nav() {
  return (
    <nav className="nav">
        <Link to="/" className="nav__logo">
            <img src={logo} alt="Logo" />
        </Link>

        <span className="nav__links">
            <Link to="/" className="nav__link">Home <FaHome /></Link>
            <Link to="/workout" className="nav__link">Workout</Link>
        </span>
    </nav>
    )
}
