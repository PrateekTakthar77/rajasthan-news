import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home/Home';
import Elections from '../pages/Elections/Elections';
import Sports from '../pages/Sports/Sports';
import Education from '../pages/Education/Education';
import Viralnews from '../pages/Viralnews/Viralnews';
import Technology from '../pages/Technology/Technology';
import Entertainment from "../pages/Entertainment/Entertainment"
import Header from '../components/Header';

import All from '../pages/AllNews/All';
import BjpNews from '../pages/AllNews/BjpNews';
import CongressNews from '../pages/AllNews/CongressNews'
import SportsNews from '../pages/AllNews/SportsNews';

import FullNews from '../pages/FullNews/FullNews';
import BreakingNews from '../pages/BreakingNews/BreakingNews';
import JduNews from '../pages/AllNews/JduNews';
import Others from "../pages/AllNews/Others"
import ElectionsSubcategory from '../pages/Elections/ElectionsSubcategory';
import SportsSubcategory from '../pages/Sports/SportsSubcategory';
import EducationSubcategory from '../pages/Education/EducationSubcategory';
import Health from '../pages/Health/Health';
// import Articles from '../pages/Articles/Articles';
import NotFound from "../pages/NotFound/NotFound"

function Navigation() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:param1?/:param2?/:param3?' element={<FullNews />} />
                {/* <Route path='/articles/:id' element={<Articles />} /> */}
                <Route path='/election' element={<Elections />} />
                {/* <Route path='/elections/:param1?/:param2?' element={<ElectionsSubcategory />} /> */}
                <Route path='/election/:param1?' element={<ElectionsSubcategory />} />
                <Route path='/sports' element={<Sports />} />
                <Route path='/game/:param1?/:param2?' element={<SportsSubcategory />} />
                <Route path='/education' element={<Education />} />
                {/* <Route path='/education/:param1?/:param2?' element={<EducationSubcategory/>} /> */}
                <Route path='/viralnews' element={<Viralnews />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/entertainment' element={<Entertainment />} />
                <Route path='/health' element={<Health />} />

                {/* <Route path='/all' element={<All />} /> */}
                <Route path='/all-news' element={<All />} />
                {/* <Route path='/bjpnews' element={<BjpNews />} /> */}
                <Route path='/bjp-news' element={<BjpNews />} />
                {/* <Route path='/congressnews' element={<CongressNews />} /> */}
                <Route path='/congress-news' element={<CongressNews />} />
                {/* <Route path='/sportsnews' element={<SportsNews />} /> */}
                <Route path='/sports-news' element={<SportsNews />} />
                <Route path='/jdunews' element={<JduNews />} />
                <Route path='/breakingnews' element={<BreakingNews />} />
                <Route path='/others' element={<Others />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;