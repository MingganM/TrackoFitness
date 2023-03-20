import React from 'react';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner__content">
            <h2 className="banner__title">Stay Fit <br /> Track It</h2>
            <Link className="banner__link" to="/workout">Start Tracking</Link>
        </div>

        <div className="banner__info">
            <p className="banner__text">
              Exercise is one of the best ways to stay healthy. When it comes to staying healthy, tracking your exercise time is key. By keeping track of the time you spend working out, you can make sure that you are reaching your fitness goals. tracking your exercise time will help you stay motivated and on track. Get started today.
            </p>
        </div>
    </div>
  )
}
