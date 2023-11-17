// import * as React from "react";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import { Facebook, Instagram, Twitter } from "@mui/icons-material";
// import { Grid, Box, Typography, Divider } from '@mui/material'

// export default function Footer() {
//   return (
//     <>
//       <Box sx={{
//         backgroundColor: "#A8A8A8",
//         height: "100px"
//       }}>
//         <Grid container >
//           <Grid xs={12} sm={12} lg={0.5} marginBlockEnd={0.5} sx={{ backgroundColor: "green" }}></Grid>
//           <Grid item xs={12} sm={12} md={8.5} lg={8.5} sx={{
//             backgroundColor: "red",
//             // display: "flex",
//             // justifyContent: "center",
//             // alignItems: "center",
//             // height: "100px"

//           }}>
//             <Typography variant="h6" color="text.primary" gutterBottom style={{ fontSize: "15px", fontFamily: "Poppins", fontWeight: "700" }}>
//               आज का समाचार
//             </Typography>
//           </Grid>


//           <Grid item xs={12} sm={12} md={2.7} lg={2.7} sx={{ backgroundColor: "orange" }} >
// <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontSize: "15px", fontFamily: "Poppins", fontWeight: "700" }}>
//   Follow Us
// </Typography>
// <Link href="https://www.facebook.com/" color="inherit">
//   <Facebook />
// </Link>
// <Link
//   href="https://www.instagram.com/"
//   color="inherit"
// >
//   <Instagram />
// </Link>
// <Link href="https://www.twitter.com/" color="inherit">
//   <Twitter />
// </Link>

//           </Grid>


//           <Grid item xs={12} sm={12} md={0.3} lg={0.3} sx={{
//             backgroundColor: "yellow",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"

//           }}>


//           </Grid>
//         </Grid>
//       </Box >

//       <Box sx={{ backgroundColor: "#A8A8A8" }}>
//         <Grid item xs={12} sm={12} lg={2} md={2} sx={{
//           backgroundColor: "red"
//         }}>

//         </Grid>
//         <Grid item xs={12} sm={12} lg={8} md={8} sx={{
//           // backgroundColor:"blue" ,
//         }}>
// <Typography variant="body2" color="text.secondary" align="center" sx={{ paddingTop: "30px" }}>
//   {"Copyright © "}
//   <Link color="inherit" href="" style={{ textDecoration: "none" }}>
//     All right reserved , Website Designed , Developed & Maintained by JanusKoncepts
//   </Link>
//   {new Date().getFullYear()}
// </Typography>
//         </Grid>
//         <Grid item xs={12} sm={12} lg={2} md={2} sx={{
//           // backgroundColor:"green"
//         }}>

//         </Grid>
//       </Box>
//     </>
//   );
// }


import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#A8A8A8",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "absolute"
      }}
    >
      <Container maxWidth="lg">

        <Grid container direction="column" alignItems="center">

          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              आज का समाचार
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row" , marginTop:"5px"}}>
              <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontSize: "15px", fontFamily: "Poppins", fontWeight: "600" , marginRight:"5px" }}>
                Follow Us
              </Typography>

              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>

              <Link href="https://www.instagram.com/" color="inherit" >
                <Instagram />
              </Link>

              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12}>

            <Typography variant="body2" color="text.secondary" align="center" sx={{ paddingTop: "10px" }}>
              {"Copyright © "}
              <Link color="inherit" style={{ textDecoration: "none" }} href="https://www.todaympnews.com/">
                All right reserved , Website Designed , Developed & Maintained by JanusKoncepts
              </Link>
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;