import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home/Home';
import Elections from '../pages/Elections/Elections';
import Sports from '../pages/Sports/Sports';
import Education from '../pages/Education/Education';
import Viralnews from '../pages/Viralnews/Viralnews';
import Technology from '../pages/Technology/Technology';

import Header from '../components/Header';

import All from '../pages/AllNews/All';
import BjpNews from '../pages/AllNews/BjpNews';
import CongressNews from '../pages/AllNews/CongressNews'
import SportsNews from '../pages/AllNews/SportsNews';

import FullNews from '../pages/FullNews/FullNews';
import BreakingNews from '../pages/BreakingNews/BreakingNews';
import JduNews from '../pages/AllNews/JduNews';
import Entertainment from '../pages/AllNews/Entertainment';
import Others from "../pages/AllNews/Others"

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
                <Route path='/technology' element={<Technology/>} />

                <Route path='/all' element={<All />} />
                <Route path='/bjpnews' element={<BjpNews />} />
                <Route path='/congressnews' element={<CongressNews />} />
                <Route path='/sportsnews' element={<SportsNews />} />
                <Route path='/jdunews' element={<JduNews/>} />
                <Route path='/entertainment' element={<Entertainment/>} />
                <Route path='/breakingnews' element={<BreakingNews />} />
                <Route path='/others' element={<Others/>} />


                <Route path='/fullnews/:param1?/:param2?/:param3?' element={<FullNews />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;