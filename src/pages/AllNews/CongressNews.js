import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from '../../pages/Home/HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';
import advert from "../../assets/images/Uttarakhand.jpg"

function CongressNews() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (

    <Box style={{ marginTop: "100px" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.5} lg={0.5} > </Grid>
        <Grid item xs={12} sm={12} md={8.5} lg={8.5} paddingBlock={2} sx={{
          // backgroundColor: "green", 
          padding: "10px"
        }}>
          <Box>
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "congress").map((result, index) => (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
          </Box>

        </Grid>

        <Grid item xs={12} sm={12} md={2.7} lg={2.7} sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
          <a href="https://www.youtube.com/uttaranchalwasi" target="_blank" rel="noopener noreferrer">
            <img src={advert} alt='add' style={{ width: "290px", height: "280px", alignSelf: "center" }} />
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={0.3} lg={0.3} marginTop={2}>

        </Grid>
      </Grid>
    </Box>

  )
}

export default CongressNews