import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Home';
// import About from './about';
import App from './App';
import Intro from './stash/Intro';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/intro' element={<Intro />} />
        </Routes>
    );
}

export default Main;
