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
import samaj from "../../assets/images/samjawadi.png"
import shivsena from "../../assets/images/shivsena2.webp"
import dmk from "../../assets/images/dmk2.webp"
import election from "../../assets/images/electionlogo.png"
import other from "../../assets/images/others.png"


import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"
import advert from "../../assets/images/Uttarakhand.jpg"

// import ElectionsSubcategory from './ElectionsSubcategory';
function Elections() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
      <Grid container  >
        <Grid item xs={12} sm={12} lg={0.4} md={0.4}
          sx={{
            // backgroundColor:"pink"
          }}>

        </Grid>

        <Grid item xs={12} sm={12} lg={11.2} md={11.2} >
          <div className="carousel-container" style={{
            // backgroundColor:"red"
          }}>
            <Carousel cols={4} rows={1} gap={10} loop={true} dotColorActive='#795548' dotColorInactive='#ccc'>


              <Carousel.Item width="20%">

                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }} onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "election"), "BJPpppppp");
                  navigate('/elections/politics/election', { state: { data: Articles?.filter(item => item.subcategory[0] === "election") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >ELECTIONS</div>
                  <img src={election} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>


              <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }} onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "bjp"), "BJPpppppp");
                  navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >BJP</div>
                  <img src={bjpimg} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }}  onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "congress"), "congressssss");
                  navigate('/elections/politics/congress', { state: { data: Articles?.filter(item => item.subcategory[0] === "congress") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >CONGRESS</div>
                  <img src={congimg} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>



              <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }} onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "samajwadi"), "BJPpppppp");
                  navigate('/elections/politics/samajwadi', { state: { data: Articles?.filter(item => item.subcategory[0] === "samajwadi") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >SAMAJWADI</div>
                  <img src={samaj} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>

            
              <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }}  onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "samajwadi"), "BJPpppppp");
                  navigate('/elections/politics/samajwadi', { state: { data: Articles?.filter(item => item.subcategory[0] === "samajwadi") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >SAMAJWADI</div>
                  <img src={shivsena} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>


              
               <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }}    onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "shiv sena"), "BJPpppppp");
                  navigate('/elections/politics/shivsena', { state: { data: Articles?.filter(item => item.subcategory[0] === "shiv sena") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >SHIV SENA</div>
                  <img src={shivsena} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }}     onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "dmk"), "BJPpppppp");
                  navigate('/elections/politics/dmk', { state: { data: Articles?.filter(item => item.subcategory[0] === "dmk") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >DMK</div>
                  <img src={dmk} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px"
                }}     onClick={() => {
                  console.log(Articles?.filter(item => item.subcategory[0] === "other"), "BJPpppppp");
                  navigate('/elections/politics/others', { state: { data: Articles?.filter(item => item.subcategory[0] === "other") } });
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "160px",
                    width: "100%",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                  }} >OTHERS</div>
                  <img src={other} style={{
                    height: "160px",
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }} />
                </div>
              </Carousel.Item>


            </Carousel>
          </div >

        </Grid>
        <Grid item xs={12} sm={12} lg={0.4} md={0.4} sx={{
          // backgroundColor:"pink"
        }}>

        </Grid>
      </Grid >


      {/* CONTENT */}
      <Box
        marginTop={5}
        sx={{ flexGrow: 1 }} >

        <Grid container >

          <Grid item xs={12} sm={12} md={0.5} lg={0.5}
          // sx={{ backgroundColor: "yellow" }}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={8.5} lg={8.5} paddingBlock={2} sx={{
            // backgroundColor: "green", 
            padding: "10px"
          }} >

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

          <Grid item xs={12} sm={12} md={2.7} lg={2.7} sx={{

            display: "flex",
            // backgroundColor: "yellow",
            flexDirection: "column",
          }}>
            <a href="https://www.youtube.com/uttaranchalwasi" target="_blank" rel="noopener noreferrer">
                <img src={advert} alt='add' style={{ width: "260px", height: "250px", alignSelf: "center" }} />
              </a>
          </Grid>
          <Grid item xs={12} sm={12} md={0.3} lg={0.3} sx={{

            // backgroundColor: "yellow",

          }}>

          </Grid>


        </Grid>

      </Box>
    </>
  )
}

export default Elections;