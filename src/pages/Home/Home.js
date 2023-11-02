import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';
import Carousell from '../Carousel/Carousell';
import { Link } from 'react-router-dom';
import BreakingNewsTitle from '../BreakingNews/BreakingNewsTitle';

import redTia from "../../assets/images/RedTriangle.png"
import add from "../../assets/images/img10.jpeg"


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
      <div style={{ marginTop: "-100px" }}>
        <Carousell />
      </div>


      <Grid container style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={12} md={9.5} lg={9.5} paddingInline={5} paddingBlock={2} 
        // style={{ backgroundColor: "green" }}
        >


          {/* --------ALL NEWS------------------------------------------------ */}

          <Box 
          // style={{ backgroundColor: "purple" }}
          >
            <Grid container spacing={3}>
              {Articles?.map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.engtitle}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
            <Link to={'/all'} style={{ textDecoration: 'none' }}>
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
          </Box>

          {/* --------BJP NEWS------------------------------------------------ */}

          <Divider textAlign="left" >
            < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
              <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic" }}>BJP NEWS</Typography>
              <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
            </Box></Divider>

          <Box>
            <Box >
              <Grid container spacing={3}>
                {Articles?.filter(item => item.subcategory[0] === "BJP").map((result, index) => index < 6 && (
                  <HomeCard key={index} result={result} onClick={() => {
                    console.log('navigate');
                    navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                  }} />
                ))}
                {/* multiple filter conditions
                const filteredItems = Articles?.filter(item => {
                 return item.subcategory.some(sub => sub === "BJP" || sub === "AnotherValue" || sub === "YetAnotherValue");
                 });
                */}
              </Grid>
              <Link to={'/bjpnews'} style={{ textDecoration: 'none' }}>
                <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                  See All
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* --------CONGRESS NEWS------------------------------------------------ */}

          <Divider textAlign="left" >
            < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
              <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic" }}>CONGRESS NEWS</Typography>
              <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
            </Box>
          </Divider>

          <Box>
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "Congress").map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
            <Link to={'/congressnews'} style={{ textDecoration: 'none' }}>
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
          </Box>


          {/* --------SPORTS NEWS------------------------------------------------ */}

          <Divider textAlign="left" >
            < Box style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
              <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic" }}>SPORTS NEWS</Typography>
              <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
            </Box>
          </Divider>




          <Box>
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "Sports").map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
            <Link to={'/sportsnews'} style={{ textDecoration: 'none' }} >
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
          </Box>

        </Grid >

        {/* --------ADVERTISEMENT------------------------------------------------ */}


        {/* <Grid item xs={12} sm={12} md={1} lg={1} marginTop={2} sx={{backgroundColor:"red"}}>
      
        </Grid> */}

        <Grid item xs={12} sm={12} md={2} lg={2.5} marginTop={2.5}
          // sx={{ backgroundColor: "blue" }}
          paddingInline={5}>
          {/* <Typography>ADD Space</Typography> */}
          <img src={add} alt='add' style={{ width: "220px", height: "200px" }} />
        </Grid>
      </Grid >
    </Box >
  )
}

export default Home