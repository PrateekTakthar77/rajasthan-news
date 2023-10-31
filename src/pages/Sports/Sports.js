import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import HomeCard from '../Home/HomeCard';

import { getArticles } from '../../Redux/actions/Home';



import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'


import { useSelector } from 'react-redux';
import Carousell from '../Carousel/Carousell';

function Sports() {

  const { Articles } = useSelector(state => state.HomeReducer)



  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (
<>
<Carousell/>
    <Box
      marginTop={8}
      sx={{ flexGrow: 1 }}
    >

      <Grid container>
        <Grid item xs={12} sm={12} md={10} lg={10} paddingInline={5} paddingBlock={2}>

          <Box>
            {/* <Grid container spacing={3}>
              {Articles?.map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid> */}
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "Sports").map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
          </Box>

        </Grid>

        <Grid item xs={12} sm={12} md={2} lg={2} marginTop={2}>
          <Typography>ADD Space</Typography>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Sports