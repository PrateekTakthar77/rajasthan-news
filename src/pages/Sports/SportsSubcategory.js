import React, { useEffect } from 'react';
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

// import ElectionsSubcategory from './ElectionsSubcategory';
function SportsSubcategory() {

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

export default SportsSubcategory;