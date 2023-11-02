import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';
import Carousell from '../Carousel/Carousell';
import { Link } from 'react-router-dom';
import BreakingNewsTitle from '../BreakingNews/BreakingNewsTitle';

import redTia from "../../assets/images/RedTriangle.png";
import add from "../../assets/images/img10.jpeg"

import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"



function Home() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "10px" }} >

      {/* Breaking news */}

      <BreakingNewsTitle />


      {/* Carousell */}
      <div style={{ marginTop: "-130px" }}>
        <Carousell />
      </div>


      <Grid container style={{ marginTop: "1px" }}>
        <Grid item xs={12} sm={12} md={9.5} lg={9.5} paddingInline={5} paddingBlock={2} 
        // sx={{backgroundColor:"green"}}
        >

          {/* --------ALL NEWS------------------------------------------------ */}

          <Box display="flex" justifyContent="space-between">
            < Box style={{ display: "flex", flexDirection: "row",}}>
              <Typography style={{ fontSize: "20px", fontWeight: "600" }}>हिंदी न्यूज़</Typography>
              <Typography style={{ fontSize: "20px", fontWeight: "600", marginLeft: "10px", marginRight: "10px" }}>/</Typography>
              <Typography style={{ fontSize: "20px", fontWeight: "600", padding: "2px", backgroundColor: "red", color: "#fff" }}>Explained</Typography>
            </Box>

            <Box style={{ textDecoration: 'none'}}>
              <Link to={'/all'} style={{ textDecoration: 'none' }}>
                <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700" }}>
                  और भी..
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box sx={{marginTop:"10px"}}>
            <Grid container spacing={3}>
              {Articles?.map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.engtitle}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
          </Box>

          {/* --------BJP NEWS------------------------------------------------ */}

          <Box display="flex" justifyContent="space-between">
            < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
              <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic" }}>BJP</Typography>
              <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
            </Box>
            <Box style={{ textDecoration: 'none', marginTop: "25px" }}>
              <Link to={'/bjpnews'} style={{ textDecoration: 'none' }}>
                <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700" }}>
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
                    navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                  }} />
                ))}
              </Grid>
            </Box>
          </Box>

          {/* --------CONGRESS NEWS------------------------------------------------ */}

          <Box display="flex" justifyContent="space-between">
            < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
              <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic" }}>CONGRESS</Typography>
              <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
            </Box>
            <Box style={{ textDecoration: 'none', marginTop: "25px" }}>
              <Link to={'/congressnews'} style={{ textDecoration: 'none' }}>
                <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700" }}>
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
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
          </Box>


          {/* --------SPORTS NEWS------------------------------------------------ */}

          <Box display="flex" justifyContent="space-between">
            < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
              <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic" }}>SPORTS</Typography>
              <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
            </Box>
            <Box style={{ textDecoration: 'none', marginTop: "25px" }}>
              <Link to={'/sportsnews'} style={{ textDecoration: 'none' }}>
                <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "15px", fontWeight: "700" }}>
                  और भी..
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box>
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "Sports").map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
          </Box>

        </Grid >

        {/* --------ADVERTISEMENT------------------------------------------------ */}


        <Grid item xs={12} sm={12} md={2} lg={2.5} marginTop={7}
          // sx={{ backgroundColor: "blue" }}
          >
          <img src={add2} alt='add' style={{ width: "260px", height: "250px" }} />
          <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} />
          <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} />
          <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} />
          <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} />
        </Grid>
      </Grid >
    </Box >
  )
}

export default Home