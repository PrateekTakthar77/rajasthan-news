import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from '../../pages/Home/HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

function BjpNews() {

  const { Articles } = useSelector(state => state.HomeReducer)



  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (
    <Box style={{marginTop:"100px"}}>
      <Grid container>
        <Grid item xs={12} sm={12} md={10} lg={10} paddingInline={5} paddingBlock={2}>


          <Box >
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "bjp").map((result, index) => (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/${result?.category[0]}/${result?.title}`, { state: { data: result } });
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

  )
}

export default BjpNews