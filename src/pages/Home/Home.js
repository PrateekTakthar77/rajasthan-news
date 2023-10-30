import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import HomeCard from './HomeCard';

import { getArticles } from '../../Redux/actions/Home';


import Card from "../Carousel/Card"
import Carousel from 'react-elastic-carousel'
import "../Carousel/Carousel.css"
import "../Carousel/Card.css"


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'


import { useSelector } from 'react-redux';

function Home() {

  const { Articles } = useSelector(state => state.HomeReducer)


  const breakPoints = [
    {
      width: 500,
      itemsToShow: 1
    },
    {
      width: 768,
      itemsToShow: 2
    },
    {
      width: 1200,
      itemsToShow: 3
    },
    {
      width: 1500,
      itemsToShow: 4
    },
  ]

  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (


    <Box
      marginTop={8}
      sx={{ flexGrow: 1 }}
    >
      <Box sx={{
        width: '100%',
        maxWidth: '1100px',
        height: '40px',
        backgroundColor: 'red',
        margin: '0 auto',
        marginTop: 10,
        borderRadius: '20px'
      }}>
        <h5 style={{ fontSize: 20, color: "#fff", paddingTop: 5, paddingBottom: 5, paddingLeft: 15 }}>BREAKING   NEWS |</h5>
      </Box>

      <div style={{ textAlign: "center", marginTop: "15px", marginBottom: "30px" }}>

        <Carousel breakPoints={breakPoints}>

          <Box sx={{
            backgroundImage: 'https://images.wallpaperscraft.com/image/single/zinnia_petals_red_1074616_1280x720.jpg',
            width: '50px',
            height: '50px'
          }}>
            <Typography>hello world</Typography>
          </Box>

          <CardActionArea >
            <CardMedia
              component="img"
              height="150"
              image="https://images.wallpaperscraft.com/image/single/zinnia_petals_red_1074616_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              {/* <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography> */}
            </CardContent>
          </CardActionArea>

          <CardActionArea >
            <CardMedia
              component="img"
              height="150"
              image="https://images.wallpaperscraft.com/image/single/tithonia_flower_petals_1066798_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              {/* <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography> */}
            </CardContent>
          </CardActionArea>

          <CardActionArea >
            <CardMedia
              component="img"
              height="100"
              image="https://images.wallpaperscraft.com/image/single/chrysanthemum_flower_macro_1075195_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActionArea >
            <CardMedia
              component="img"
              height="100"
              image="https://images.wallpaperscraft.com/image/single/berries_macro_leaves_1079514_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActionArea >
            <CardMedia
              component="img"
              height="100"
              image="https://images.wallpaperscraft.com/image/single/berries_macro_leaves_1079514_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActionArea >
            <CardMedia
              component="img"
              height="100"
              image="https://images.wallpaperscraft.com/image/single/berries_macro_leaves_1079514_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActionArea >
            <CardMedia
              component="img"
              height="100"
              image="https://images.wallpaperscraft.com/image/single/berries_macro_leaves_1079514_1280x720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>
                heelo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
                hello2
              </Typography>
            </CardContent>
          </CardActionArea>
        </Carousel>

      </div>

      <Grid container>
        <Grid item xs={12} sm={12} md={10} lg={10} paddingInline={5} paddingBlock={2}>

          <Box style={{ backgroundColor: "purplex" }}>
            <Grid container spacing={3}>
              {Articles?.map((result, index) => (
                <HomeCard key={index} result={result} onClick={() => {
                  console.log('navigate');
                  navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                }} />
              ))}
            </Grid>
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