import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import MapChart from "./MapChart";
import Main from "./Main";
import Intro from './stash/Intro';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

function App() {
  const [content, setContent] = useState("");
  return (
      <>
      <h1> Climate Change Progress</h1>
    <div id="HILLO">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Main />

      <Intro />
      <Link to="/home">home</Link>
      <Link to="/intro">  intro</Link>
    </div>
      </>
  );
}

export default App;
