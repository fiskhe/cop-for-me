import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

import './App.css';
import MapChart from "./MapChart";
import MapChartWithToolTip from "./MapChart";
import Main from "./Main";
import Intro from './stash/Intro';
import Scenarios from './stash/Scenarios';
import CountryDataVisual from './CountryDataVisual'

function App() {
  // const [content, setContent] = useState("");
  return (
      <>
      <h1 id="title">COP26 FOR ME</h1>

      <div id="navBar">
      <div class="navBarLink">
          <Link to="/home">Home</Link>
      </div>
      <div class="navBarLink">
          <Link to="/intro">Intro</Link>
      </div>
      <div class="navBarLink">
          <Link to="/scenarios">Scenarios</Link>
      </div>
      <div class="navBarLink">
          <Link to="/map">Map</Link>
      </div>
      </div>

      <Main />
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
