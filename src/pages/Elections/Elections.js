import React, { useEffect } from 'react';
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';


import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import Carousel from 'react-grid-carousel';
import { Card, CardMedia } from '@mui/material';

import bjpimg from "../../assets/images/bjpimg2.jpeg"
import congimg from "../../assets/images/congoimg1.webp"



import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"

// import ElectionsSubcategory from './ElectionsSubcategory';
function Elections() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
      <div className="carousel-container">
        <Carousel cols={4} rows={1} gap={10} loop={true} dotColorActive='#795548' dotColorInactive='#ccc'>


        <Carousel.Item width="20%">
                {/* <Link to="/breakingnews" style={{ textDecoration: "none" }}> */}
                  <Card >
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      image={bjpimg}
                      title="Contemplative Reptile"
                      sx={{ position: "relative" , height:"100px" , width:"100%" }}
                      onClick={() => {
                        console.log(Articles?.filter(item => item.subcategory[0] === "election"), "BJPpppppp");
                        navigate('/elections/politics/election', { state: { data: Articles?.filter(item => item.subcategory[0] === "election") } });
                      }}
                    />
                    <Typography
                      sx={{
                        // position: "absolute",
                        top: "20%",
                        width: "8-0%",
                        textAlign: "center",
                        color: "#011e29",
                        backgroundColor: "none",
                        fontFamily: "Poppins",
                        fontSize:"25px",
                        fontWeight:"600"
                      }}
                    >
                      ELECTIONS
                    </Typography>
                  </Card>
                {/* </Link> */}
              </Carousel.Item>

        <Carousel.Item width="20%">
                {/* <Link to="/breakingnews" style={{ textDecoration: "none" }}> */}
                  <Card >
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      image={bjpimg}
                      title="Contemplative Reptile"
                      sx={{ position: "relative" , height:"100px" , width:"100%" }}
                      onClick={() => {
                        console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "BJPpppppp");
                        navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                      }}
                    />
                    <Typography
                      sx={{
                        // position: "absolute",
                        top: "20%",
                        width: "8-0%",
                        textAlign: "center",
                        color: "#011e29",
                        backgroundColor: "none",
                        fontFamily: "Poppins",
                        fontSize:"25px",
                        fontWeight:"600"
                      }}
                    >
                      BJP
                    </Typography>
                  </Card>
                {/* </Link> */}
              </Carousel.Item>

        <Carousel.Item width="20%">
                {/* <Link to="/breakingnews" style={{ textDecoration: "none" }}> */}
                  <Card >
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      image={congimg}
                      title="Contemplative Reptile"
                      sx={{ position: "relative" , height:"100px" , width:"100%" }}
                      onClick={() => {
                        console.log(Articles?.filter(item => item.subcategory[0] === "congress"), "BJPpppppp");
                        navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "congress") } });
                      }}
                    />
                    <Typography
                      sx={{
                        // position: "absolute",
                        top: "20%",
                        width: "8-0%",
                        textAlign: "center",
                        color: "#011e29",
                        backgroundColor: "none",
                        fontFamily: "Poppins",
                        fontSize:"25px",
                        fontWeight:"600"
                      }}
                    >
                      CONGRESS
                    </Typography>
                  </Card>
                {/* </Link> */}
              </Carousel.Item>

          <Carousel.Item>
            <div
              onClick={() => {
                console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "BJPpppppp");
                navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
              }}
              style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" , transition: "background-color 0.3s"}}>
              <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>BJP</h3>
            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div
              onClick={() => {
                console.log(Articles?.filter(item => item.subcategory[0] === "congress"), "CONGOOooooooo");
                navigate('/elections/politics/congress', { state: { data: Articles?.filter(item => item.subcategory[0] === "congress") } });
              }}
              style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" , transition: "background-color 0.3s"}}>
              <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700" }}>CONGRESS</h3>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              onClick={() => {
                console.log(Articles?.filter(item => item.subcategory[0] === "samajwadi"), "CONGOOooooooo");
                navigate('/elections/politics/samajwadi', { state: { data: Articles?.filter(item => item.subcategory[0] === "samajwadi") } });
              }}
              style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" , transition: "background-color 0.3s"}}>
              <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700",  alignItems: "center", justifyContent: "center", textAlign:"center" }}>SAMAJWADI</h3>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              onClick={() => {
                console.log(Articles?.filter(item => item.subcategory[0] === "shiv sena"), "COshivsenaaaaaa");
                navigate('/elections/politics/shivsena', { state: { data: Articles?.filter(item => item.subcategory[0] === "shiv sena") } });
              }}
              style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" , transition: "background-color 0.3s"}}>
              <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700",  alignItems: "center", justifyContent: "center", textAlign:"center" }}>SHIV SENA</h3>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              onClick={() => {
                console.log(Articles?.filter(item => item.subcategory[0] === "other"), "otherssssssss");
                navigate('/elections/politics/shivsena', { state: { data: Articles?.filter(item => item.subcategory[0] === "other") } });
              }}
              style={{ backgroundColor: "#011e29", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" , transition: "background-color 0.3s"}}>
              <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "30px", fontWeight: "700",  alignItems: "center", justifyContent: "center", textAlign:"center" }}>OTHERS</h3>
            </div>
          </Carousel.Item>


        </Carousel>
      </div >

      <Box marginTop={5} sx={{ flexGrow: 1 }} >

        <Grid container >
          <Grid item xs={12} sm={12} md={0.3} lg={0.3} marginTop={2}
          // sx={{backgroundColor:"blue"}}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={8.7} lg={8.7} paddingBlock={2} >

            <Box>
              <Grid container spacing={3}>
                {/* {Articles?.filter(item => item.subcategory[0] === "Politics").map((result, index) => index < 6 && ( */}
                {Articles?.filter(item => item.category[0] === "politics").map((result, index) => (
                  <HomeCard key={index} result={result} onClick={() => {
                    console.log('navigate');
                    // navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                    navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                  }} />
                ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3} sx={{
            marginTop: "16px",
            display: "flex",
            //  backgroundColor:"green",
            flexDirection: "column",
          }}>
            <img src={add2} alt='add' style={{ width: "260px", height: "250px", alignSelf: "center" }} />
            <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
            <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
          </Grid>

        </Grid>

      </Box>
    </>
  )
}

export default Elections;