import React from 'react';
import { Link } from "react-router-dom";

import bannerIMG from "../images/bannerIMG.jpg";

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner__content">
            <h2 className="banner__title">Stay Fit <br /> Track It</h2>
            <Link className="banner__link" to="/workout">Start Tracking</Link>
        </div>

        <div className="banner__img">
            <img src={bannerIMG} alt="" className="banner__img--i" />
        </div>
    </div>
  )
}
