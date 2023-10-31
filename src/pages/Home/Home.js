import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';
import Carousell from '../Carousel/Carousell';
import BreakingNews from '../BreakingNews';
import {Link} from 'react-router-dom';

function Home() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"10px"}} >

      {/* Breaking news */}
      <BreakingNews />

      {/* Carousell */}
      <div style={{ marginTop: "-100px" }}>
        <Carousell />
      </div>


      <div style={{ textAlign: "center", marginTop: "15px", marginBottom: "30px" }}>

      </div>

      <Grid container>
        <Grid item xs={12} sm={12} md={10} lg={10} paddingInline={5} paddingBlock={2}>

          <Box style={{ backgroundColor: "purplex" }}>
            <Grid container spacing={3}>
              {Articles?.map((result, index) => index < 6 &&(
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
            <Link to={'/all'} style={{ textDecoration: 'none'}}>
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
          </Box>

          <Divider textAlign="left" sx={{ marginBlock: 3 }} style={{ fontSize: "40px", color: "black" }}>BJP NEWS</Divider>

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
              <Link to={'/bjpnews'} style={{ textDecoration: 'none'}}>
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
            </Box>
          </Box>

          <Divider textAlign="left" sx={{ marginBlock: 3 }} style={{ fontSize: "40px", color: "black" }}>CONGRESS NEWS</Divider>

          <Box>
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "Congress").map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
            <Link to={'/congressnews'} style={{ textDecoration: 'none'}}>
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
          </Box>

          <Divider textAlign="left" sx={{ marginBlock: 3 }} style={{ fontSize: "40px", color: "black" }}>SPORTS NEWS</Divider>

          <Box>
            <Grid container spacing={3}>
              {Articles?.filter(item => item.subcategory[0] === "Sports").map((result, index) => index < 6 && (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
            <Link to={'/sportsnews'} style={{ textDecoration: 'none'}} >
              <Typography style={{ textDecoration: 'none', color: 'blue' }}>
                See All
              </Typography>
            </Link>
          </Box>

        </Grid>

        <Grid item xs={12} sm={12} md={2} lg={2} marginTop={2}>
          <Typography>ADD Space</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home