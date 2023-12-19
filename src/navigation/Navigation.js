import React from "react";

// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI-Libraries
import { Box, Typography, Grid } from "@mui/material";

// HEADER
import Header from "../components/Header/Header";

//PARENT PAGES
import Home from "../pages/Home/Home";
import Breakingnews from "../pages/BreakingNews/Breakingnews";
import Elections from "../pages/Elections/Elections";
import Sports from "../pages/Sports/Sports";
import Education from "../pages/Education/Education";
import Technology from "../pages/Technology/Technology";
import Entertainment from "../pages/Entertainment/Entertainment";
import Health from "../pages/Health/Health";
import Wrongurl from "../WrongUrl/Wrongurl";
import Fullnews from "../pages/FullNews/Fullnews";

// FRONT PAGES CATEGORIES
import Allnews from "../pages/HomePageCategories/AllNews/Allnews";
import Bjpnews from "../pages/HomePageCategories/BjpNews/Bjpnews";
import Congressnews from "../pages/HomePageCategories/CongressNews/Congressnews";
import Sportsnews from "../pages/HomePageCategories/SportsNews/Sportsnews";
import ElectionsSubcategory from "../pages/SubCategory/Electionsubcategory";


const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* PARENT PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/breaking-news" element={<Breakingnews />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/education" element={<Education />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="*" element={<Wrongurl />} />

        {/* FRONT PAGE CATEGORIES */}
        <Route path="/all-news" element={<Allnews />} />
        <Route path="/bjp" element={<Bjpnews />} />
        <Route path="/congress" element={<Congressnews />} />
        <Route path="/sports-news" element={<Sportsnews />} />

        {/* FULL NEWS */}
        <Route path="/:param1?/:param2?/:param3?" element={<Fullnews/>} />

        {/* SUB CATEGORY PAGE */}
        <Route path="/election/:param1?" element={<ElectionsSubcategory/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
