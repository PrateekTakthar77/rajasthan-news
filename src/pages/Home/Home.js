import React, { useEffect, useState } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BreakingNewsTitle from '../BreakingNews/BreakingNewsTitle';

import Carousel from 'react-grid-carousel';
// import "./HomeCarousell.css"
// import "../Home/HomeCarousell.css"

import redTia from "../../assets/images/RedTriangle.png";
import add from "../../assets/images/img10.jpeg"

import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
  const [loading, setLoading] = useState(true);
  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then(() => {
      setLoading(false)
    })
  }, [])


  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }} style={{ marginTop: "10px" }}>
      {/* ... your existing code ... */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }} style={{ marginTop: "10px" }} >

          {/* Breaking news */}

          <BreakingNewsTitle />


          {/* Carousell */}
          <div style={{ marginTop: "10px" }}>
            <Carousel cols={4} rows={1} gap={10} loop={true} showDots={false} dotColorActive='#795548' dotColorInactive='#ccc'>

              {/* <Carousel.Item>
          <Link to="/" style={{textDecoration:"none"}}>
            <div style={{ backgroundColor: "#606060", height: "100px", width: "100%" , display:"flex" , alignItems:"center" , justifyContent:"center" , borderRadius:"10px"}}>
              <h3 style={{ color: "#fff" , fontFamily: "Poppins" , fontSize:"40px" , fontWeight:"700" }}>होम</h3>
            </div>
          </Link>
        </Carousel.Item> */}

              <Carousel.Item>
                <Link to="/elections" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#606060", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                    <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "40px", fontWeight: "700" }}>चुनाव 2023</h3>
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link to="/sports" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#606060", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                    <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "40px", fontWeight: "700" }}>स्पोर्ट्स</h3>
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link to="/education" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#606060", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                    <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "40px", fontWeight: "700" }}>एजुकेशन</h3>
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link to="/technology" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#606060", height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                    <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "40px", fontWeight: "700" }}>टेक्नोलॉजी</h3>
                  </div>
                </Link>
              </Carousel.Item>

            </Carousel>
          </div>


          <Grid container style={{ marginTop: "1px", padding: "10px" }}>
            <Grid xs={12} sm={12} md={0.3} lg={0.3}
            //  sx={{ backgroundColor: "orange" }}
            ></Grid>

            <Grid item xs={12} sm={12} md={8.7} lg={8.7} paddingBlock={2}
            // sx={{ backgroundColor: "green" }}
            >

              {/* --------ALL NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between">
                < Box style={{ display: "flex", flexDirection: "row", }}>
                  <Typography style={{ fontSize: "20px", fontWeight: "600", fontFamily: "Poppins" }}>हिंदी न्यूज़</Typography>
                  {/* <Typography style={{ fontSize: "20px", fontWeight: "600", marginLeft: "10px", marginRight: "10px", fontFamily: "Poppins" }}>/</Typography> */}
                  {/* <Typography style={{ fontSize: "20px", fontWeight: "600", padding: "2px", backgroundColor: "red", color: "#fff", fontFamily: "Poppins", borderRadius: "6px" }}>Explained</Typography> */}
                </Box>

                <Box style={{ textDecoration: 'none' }}>
                  <Link to={'/all'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700", marginTop: "8px", fontFamily: "Poppins" }}>
                      और भी..
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Grid container spacing={3}>
                  {Articles?.map((result, index) => index < 6 && (
                    <HomeCard key={index} result={result} onClick={() => {
                      console.log('navigate');
                      navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                    }} />
                  ))}
                </Grid>
              </Box>

              {/* --------BJP NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between">
                < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>BJP</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>
                <Box style={{ textDecoration: 'none', marginTop: "25px" }}>
                  <Link to={'/bjpnews'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और भी..
                    </Typography>
                  </Link>

                </Box>
              </Box>

              <Box>
                <Box >
                  <Grid container spacing={3}>
                    {Articles?.filter(item => item.subcategory[0] === "BJP").map((result, index) => index < 6 && (
                      <HomeCard key={index} result={result} onClick={() => {
                        console.log('navigate');
                        navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.title}`, { state: { data: result } });
                      }} />
                    ))}
                  </Grid>
                </Box>
              </Box>

              {/* --------CONGRESS NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between">
                < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>CONGRESS</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>
                <Box style={{ textDecoration: 'none', marginTop: "25px" }}>
                  <Link to={'/congressnews'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और भी..
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  {Articles?.filter(item => item.subcategory[0] === "Congress").map((result, index) => index < 6 && (
                    <HomeCard key={index} result={result} onClick={() => {
                      console.log('navigate');
                      navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.title}`, { state: { data: result } });
                    }} />
                  ))}
                </Grid>
              </Box>

              {/* --------SPORTS NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between">
                < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>SPORTS</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>
                <Box style={{ textDecoration: 'none', marginTop: "25px" }}>
                  <Link to={'/sportsnews'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और भी..
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  {Articles?.filter(item => item.subcategory[0] === "Sports" || item.subcategory[0] === "cricket").map((result, index) => index < 6 && (
                    <HomeCard key={index} result={result} onClick={() => {
                      console.log('navigate');
                      navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.title}`, { state: { data: result } });
                    }} />
                  ))}
                </Grid>
              </Box>

            </Grid >


            {/* --------ADVERTISEMENT------------------------------------------------ */}


            <Grid item xs={12} sm={12} md={2.5} lg={2.5} marginTop={7}
              sx={{
                // backgroundColor: "blue",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={add2} alt='add' style={{ width: "260px", height: "250px", alignSelf: "center" }} />
              <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
            </Grid>
          </Grid >
        </Box >
      )}
    </Box>
  )
}

export default Home