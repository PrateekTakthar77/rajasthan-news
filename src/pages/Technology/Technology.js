import React, { useEffect } from 'react'
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';

// images
import advert from "../../assets/images/Uttarakhand.jpg"

function Technology() {

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
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bjp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>MOBILE & APPS</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bjp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>MOBILE & APPS</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bjp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>MOBILE & APPS</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bjp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>MOBILE & APPS</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  onClick={() => {
                    console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "bjp");
                    navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                  }}
                  style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", transition: "background-color 0.3s" }}>
                  <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>MOBILE & APPS</h3>
                </div>
              </Carousel.Item>

            </Carousel>
          </div > */}
        </Grid>
        <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>

      </Grid>


      {/* CONTENT */}
      <Box marginTop={10} sx={{ flexGrow: 1 }} >

        <Grid container>

          <Grid item xs={12} sm={12} md={0.5} lg={0.5}
          // sx={{backgroundColor:"yellow"}}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={8.5} lg={8.5} paddingBlock={2} style={{
            // backgroundColor:"green",
            padding: "10px"
          }}>

            <Box>
              <Grid container spacing={3}>
                {Articles?.filter(item => item.category[0] === "technology").map((result, index) => (
                  <HomeCard key={index} result={result} onClick={() => {
                    console.log('navigate');
                    navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                  }} />
                ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={2.7} lg={2.7}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <a href="https://www.youtube.com/uttaranchalwasi" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none" }}>
                <Box sx={{ backgroundColor: "gray", width: "290px", height: "15px", alignSelf: "center" }}>
                  <Typography sx={{ textAlign: "center", fontSize: "12px", color: "black", textDecoration: "none" }}>ADVERTISEMENT</Typography>
                </Box>

                <img src={advert} alt='add' style={{ width: "290px", height: "280px", alignSelf: "center" }} />
              </a>
            </Box>


          </Grid>
          <Grid item xs={12} sm={12} md={0.3} lg={0.3} sx={{
            // backgroundColor:"purple"
          }}></Grid>



        </Grid>

      </Box>
    </>
  )
}

export default Technology;


