import React, { useEffect } from 'react';
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import Carousel from 'react-grid-carousel';


import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"
import advert from "../../assets/images/Uttarakhand.jpg"

// import ElectionsSubcategory from './ElectionsSubcategory';
function ElectionsSubcategory() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <> 

      <Box marginTop={10} sx={{ flexGrow: 1 }} >

        <Grid container >
          <Grid item xs={12} sm={12} md={0.3} lg={0.3} marginTop={2}
          // sx={{backgroundColor:"blue"}}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={8.7} lg={8.7} paddingBlock={2} >

            <Box>
              <Grid container spacing={3}>
                {state.data.map((result, index) =>(
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                }} />
              ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={2.7} lg={2.7}
              sx={{ display: "flex", flexDirection: "column", marginTop: "15px" }}>
              <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
              <a href="https://www.youtube.com/uttaranchalwasi" target="_blank" rel="noopener noreferrer" sx={{textDecoration:"none"}}>
                <Box sx={{ backgroundColor: "gray", width: "290px", height: "15px", alignSelf: "center" }}>
                  <Typography sx={{textAlign:"center" , fontSize:"12px" , color:"black" , textDecoration:"none"}}>ADVERTISEMENT</Typography>
                </Box>
               
                  <img src={advert} alt='add' style={{ width: "290px", height: "280px", alignSelf: "center" }} />
                </a>
              </Box>
            </Grid>

        </Grid>

      </Box>
    </>
  )
}

export default ElectionsSubcategory;