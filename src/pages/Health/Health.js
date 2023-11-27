import React, { useEffect } from 'react';
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';


import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import Carousel from 'react-grid-carousel';
import { Card, CardMedia } from '@mui/material';

import advert from "../../assets/images/Uttarakhand.jpg"

// import ElectionsSubcategory from './ElectionsSubcategory';
function Health() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
      {/* CONTENT */}
      <Box
        marginTop={10}
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
                {Articles?.filter(item => item.category[0] === "health").map((result, index) => (
                  <HomeCard key={index} result={result} onClick={() => {
                    console.log('navigate');
                    // navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                    navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                  }} />
                ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={2.7} lg={2.7}
              sx={{ display: "flex", flexDirection: "column", marginTop: "10px" , 
              // backgroundColor:"black" 
              }}>
              <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
              <a href="https://www.youtube.com/uttaranchalwasi" target="_blank" rel="noopener noreferrer" sx={{textDecoration:"none"}}>
                <Box sx={{ backgroundColor: "gray", width: "290px", height: "15px", alignSelf: "center" }}>
                  <Typography sx={{textAlign:"center" , fontSize:"12px" , color:"black" , textDecoration:"none"}}>ADVERTISEMENT</Typography>
                </Box>
               
                  <img src={advert} alt='add' style={{ width: "290px", height: "280px", alignSelf: "center" }} />
                </a>
              </Box>


            </Grid>
          <Grid item xs={12} sm={12} md={0.3} lg={0.3} sx={{

            // backgroundColor: "purple",

          }}>

          </Grid>


        </Grid>

      </Box>
    </>
  )
}

export default Health;


