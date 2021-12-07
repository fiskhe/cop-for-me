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
      <h1>Climate Change Progress</h1>

      <Link to="/home">home</Link>
      <Link to="/intro">  intro</Link>
      <Link to="/scenarios">  scenarios</Link>

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
