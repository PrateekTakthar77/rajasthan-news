import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home/Home';
import Elections from '../pages/Elections/Elections';
import Sports from '../pages/Sports/Sports';
import Education from '../pages/Education/Education';
import Viralnews from '../pages/Viralnews/Viralnews';

import Header from '../components/Header';
import FullNews from '../pages/FullNews/FullNews';

function Navigation() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/elections' element={<Elections />} />
                <Route path='/sports' element={<Sports />} />
                <Route path='/education' element={<Education />} />
                <Route path='/viralnews' element={<Viralnews />} />
                <Route path='/fullnews/:param1?/:param2?/:param3?' element={<FullNews />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;