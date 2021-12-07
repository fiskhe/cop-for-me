import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import MapChart from "./MapChart";
import Main from "./Main";
import Intro from './stash/Intro';
import CountryDataVisual from './CountryDataVisual'
import { Link } from 'react-router-dom';
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
      // <CountryDataVisual value={{NAME: "hi",
      //     POP_EST: "34124811",
      //     END_DEFOREST: "No",
      //     NET_ZERO_TARGET_DATE: "2050",
      //     QUIT_COAL: "No",
      //     CUT_METHANE: "No"}}/>

export default App;
