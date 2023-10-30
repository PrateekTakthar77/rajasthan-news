// import React, { useEffect } from 'react';
// import { Divider, Box, Typography, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { getArticles } from '../../Redux/actions/Home';
// import { useSelector } from 'react-redux';

// import HomeCard from '../Home/HomeCard';

// function Elections() {
//   const { Articles } = useSelector(state => state.HomeReducer)

//   const navigate = useNavigate();


//   useEffect(() => {
//     getArticles();
//   }, [])



//   return (
//     <>
//       <Divider textAlign="left" sx={{ marginBlock: 3 }} style={{ fontSize: "30px", color: "black", marginTop: "100px" }}>
//         चुनाव 2023</Divider>

//       <Box marginTop={1} sx={{ flexGrow: 1 }} >
//         <Grid container>
//           <Grid item xs={12} sm={12} md={10} lg={10} paddingInline={5} paddingBlock={2}>
//             <Box >
//               <Grid container spacing={3}>
//                 {Articles?.map((result, index) => index < 6 && (
//                   <HomeCard key={index} result={result} onClick={() => {
//                     console.log('navigate');
//                     navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
//                   }} />
//                 ))}
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Elections;

import React, { useEffect } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import HomeCard from '../Home/HomeCard';

import { getArticles } from '../../Redux/actions/Home';


import Card from "../Carousel/Card"
import Carousel from 'react-elastic-carousel'
import "../Carousel/Carousel.css"
import "../Carousel/Card.css"


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'


import { useSelector } from 'react-redux';

function Elections() {

  const { Articles } = useSelector(state => state.HomeReducer)



  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])


  return (


    <Box
      marginTop={8}
      sx={{ flexGrow: 1 }}
    >

      <Grid container>
        <Grid item xs={12} sm={12} md={10} lg={10} paddingInline={5} paddingBlock={2}>

          <Box>
            <Grid container spacing={3}>
              {Articles?.map((result, index) => index < 6 && (
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

export default Elections