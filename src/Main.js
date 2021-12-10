// import React from 'react';
import React, { useState } from "react";
import { Routes, Route} from 'react-router-dom';

import Home from './Home';
// import About from './about';
import App from './App';
import Intro from './stash/Intro';
import Scenarios from './stash/Scenarios';
import MapChartWithToolTip from "./MapChart";
import COP from './stash/COP';

const Main = () => {
  const [content, setContent] = useState("");
    return (
        <Routes>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/home' element={<COP />} />
            <Route exact path='/map' element={<MapChartWithToolTip setContent={setContent} content={content}/>} />
            <Route exact path='/intro' element={<Intro />} />
            <Route exact path='/scenarios' element={<Scenarios />} />
        </Routes>
    );
}

export default Main;
