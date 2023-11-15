import * as React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Grid, Box, Typography, Divider } from '@mui/material'

export default function Footer() {
  return (
    <>
    <Box sx={{
      backgroundColor: "#A8A8A8",
      height: "100px"
    }}>
      <Grid container >
        <Grid item xs={12} sm={12} md={2.5} lg={2.5} sx={{
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px"

        }}>
          <Typography variant="h6" color="text.primary" gutterBottom style={{ fontSize: "25px" , fontFamily:"Poppins" ,fontWeight:"600"}}>
          आज का समाचार    
          </Typography>
        </Grid>


        <Grid item xs={12} sm={12} md={7} lg={7}>
        {/* <Typography variant="body2"  align="center" sx={{fontSize:"15px" , fontFamily:"Poppins" , fontWeight:"300" , marginTop:"9%" , color:"black"}}>
            {"Copyright © "}
            <Link color="inherit" href="" style={{textDecoration:"none" }}>
              All right reserved , Website Designed , Developed & Maintained by JanusKoncepts
            </Link>
            {new Date().getFullYear()}
          </Typography> */}

        </Grid>


        <Grid item xs={12} sm={12} md={2.5} lg={2.5} sx={{
          // backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"

        }}>

          <Typography variant="h6" color="text.primary" gutterBottom sx={{fontSize:"15px" , fontFamily:"Poppins" , fontWeight:"500"}}>
            Follow Us
          </Typography>
          <Link href="https://www.facebook.com/" color="inherit">
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="inherit"
          >
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/" color="inherit">
            <Twitter />
          </Link>
        </Grid>
      </Grid>
    </Box >

    <Box sx={{ backgroundColor: "#A8A8A8" }}>
    <Grid item xs={12} sm={12} lg={2} md={2} sx={{
          backgroundColor:"red" 
        }}>

        </Grid>
        <Grid item xs={12} sm={12} lg={8} md={8} sx={{
          // backgroundColor:"blue" ,
        }}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{paddingTop:"30px"}}>
            {"Copyright © "}
            <Link color="inherit" href="" style={{textDecoration:"none"}}>
              All right reserved , Website Designed , Developed & Maintained by JanusKoncepts
            </Link>
            {new Date().getFullYear()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={2} md={2} sx={{
          // backgroundColor:"green"
        }}>

        </Grid>
    </Box>
    </>
  );
}