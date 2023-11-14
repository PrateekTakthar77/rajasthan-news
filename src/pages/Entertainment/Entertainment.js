import React, { useEffect } from 'react';
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';


import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import Carousel from 'react-grid-carousel';

import Button from '@mui/material/Button';

import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"

import advert from "../../assets/images/Uttarakhand.jpg"

// import ElectionsSubcategory from './ElectionsSubcategory';
function Entertainment() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>
        <Grid item xs={12} sm={12} md={11.2} lg={11.2}>
          {/* <div className="carousel-container">
            <Carousel cols={5} rows={1} gap={10} loop={true} dotColorActive='#795548' dotColorInactive='#ccc'>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bbjjppp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>CINEMA</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bbjjppp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>CINEMA</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bbjjppp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>CINEMA</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bbjjppp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>CINEMA</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bbjjppp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>CINEMA</h3>
                </div>
              </Carousel.Item>

            </Carousel>
          </div > */}

        </Grid>
        <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>

      </Grid>

      {/* CONTENT */}

      <Box marginTop={10} sx={{ flexGrow: 1 }} >

        <Grid container >
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}
          // sx={{backgroundColor:"yellow"}}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={8.5} lg={8.5} paddingBlock={2} sx={{
            // backgroundColor:"green", 
            padding: "10px"
          }}>

            <Box>
              <Grid container spacing={3}>
                {/* {Articles?.filter(item => item.subcategory[0] === "Politics").map((result, index) => index < 6 && ( */}
                {Articles?.filter(item => item.category[0] === "entertainment").map((result, index) => (
                  <HomeCard key={index} result={result} onClick={() => {
                    console.log('navigate');
                    // navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                    navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                  }} />
                ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={2.7} lg={2.7} sx={{

            display: "flex",
            //  backgroundColor:"purple",
            flexDirection: "column",
          }}>
            <a href="https://www.youtube.com/uttaranchalwasi" target="_blank" rel="noopener noreferrer">
                <img src={advert} alt='add' style={{ width: "260px", height: "250px", alignSelf: "center" }} />
              </a>
          </Grid>
          <Grid xs={12} sm={12} md={0.3} lg={0.3} sx={{

            //  backgroundColor:"purple",
          }}>

          </Grid>

        </Grid>

      </Box>
    </>
  )
}

export default Entertainment;