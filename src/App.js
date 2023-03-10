import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Workout from "./Components/Workout";

function App() {


  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/workout" Component={Workout}/>
      </Routes>
    </div>
  );
}

export default App;