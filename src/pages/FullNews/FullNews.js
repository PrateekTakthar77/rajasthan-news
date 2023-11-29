import React, { useEffect } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import R2 from "../../assets/images/R2.png";
import advert from "../../assets/images/Uttarakhand.jpg";
import { getArticleById } from "../../Redux/actions/Home";
import { useSelector } from "react-redux";

function createMarkup(htmlContent) {
  return { __html: htmlContent };
}

const FullNews = () => {
  const {param3} = useParams();
  const FullArticle = useSelector(state => state.HomeReducer.FullArticle);

  useEffect(() => {
    console.log(param3);
    // getArticleById(param3)
    getArticleById(param3);
  }, [])
  

  return (
    <>
      <Helmet>
        <title>
          {FullArticle?.seotitle ? FullArticle?.seotitle : FullArticle?.title}
        </title>
        <meta
          name="description"
          content={
            FullArticle?.seodescription
              ? FullArticle?.seodescription
              : FullArticle?.description
          }
        />
        <meta name="keywords" content="news" />
      </Helmet>

      <Box sx={{ marginTop: "65px" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "#A52A2A" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11.2}
            lg={11.2}
            // sx={{ backgroundColor: "#8A2BE2" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                width: "100%",
                paddingLeft:"10px",
                    paddingRight:"10px"
              }}
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#eaeaea",
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                    paddingTop: "10px",
                    
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    ADVERTISEMENT
                  </Typography>
                </Box>

                {/* <img
                  src={advert}
                  alt="add"
                  style={{
                    width: "290px",
                    height: "280px",
                    alignSelf: "center",
                  }} */}
              </a>
            </Box>
          </Grid>
          {/* <Grid
            item
            xs={12}
            sm={12}
            md={2.7}
            lg={2.7}
            sx={{ backgroundColor: "#0000FF" }}
          ></Grid> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={0.3}
            lg={0.3}
            // sx={{ backgroundColor: "#7FFF00" }}
          ></Grid>
        </Grid>

        {/* COntenbt */}
        <Grid container paddingBlock={2}>
          <Grid
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            paddingBlock={2}
            spacing={2}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8.5}
            lg={8.5}
            paddingBlock={2}
            sx={{
              width: "800px",
              alignItems: "center",
              // backgroundColor: "blue",
              // padding: "10px"
            }}
          >
            {/* TITLE */}

            <Box style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={R2}
                style={{
                  height: "20px",
                  width: "30px",
                  marginTop: "10px",
                  marginRight: "5px",
                  paddingLeft:"10px",
                }}
              />
              <Typography
                variant="h4"
                component="div"
                style={{
                  color: "#D2122E",
                  fontSize: "27px",
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: "600",
                  textAlign: "justify",
                 
                  paddingRight:"10px"
                  // wordSpacing: "-1px"
                }}
              >
                {FullArticle?.title}
              </Typography>
            </Box>

            {/* IMAGE */}

            <Box sx={{ padding: "10px" }}>
              {/* <img src={state?.data?.photo}
                            sx={{
                                maxWidth: '100%',
                                height: 'auto',
                                width: '100%',
                            }} /> */}
              <img
                src={FullArticle?.photo}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                  
                }}
              />
            </Box>

            {/* DESCRIPTION */}

            <Box>
              <Typography
                style={{
                  marginTop: "10px",
                  fontSize: "19px",
                  backgroundColor: "#fff",
                  // fontFamily: "'Noto Sans', sans-serif",
                  fontFamily: "'Noto Sans Devanagari'",
                  fontWeight: "500",
                  textAlign: "justify",
                  padding: "10px",
                }}
                dangerouslySetInnerHTML={createMarkup(FullArticle?.description)}
              />
            </Box>
          </Grid>

          <Grid
            xs={12}
            sm={12}
            md={2.7}
            lg={2.7}
            sx={{
              // backgroundColor: "green",
              display: "flex",
              flexDirection: "column",
              // backgroundColor:"red"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <a
                href="https://www.youtube.com/uttaranchalwasi"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    backgroundColor: "gray",
                    width: "290px",
                    height: "15px",
                    alignSelf: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    ADVERTISEMENT
                  </Typography>
                </Box>

                <img
                  src={advert}
                  alt="add"
                  style={{
                    width: "290px",
                    height: "280px",
                    alignSelf: "center",
                  }}
                />
              </a>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={0.3}
            lg={0.3}
            style={
              {
                // backgroundColor: "yellow",
                // display: "flex",
                // flexDirection: "column",
                // backgroundColor:"red"
              }
            }
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FullNews;
