
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
              {"© 2023 Todaympnews | All Rights Reserved "}
              <Link color="inherit" style={{ textDecoration: "none" }} href="https://www.todaympnews.com/">
    
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