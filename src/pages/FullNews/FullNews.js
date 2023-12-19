import React, { useEffect } from "react";

// MATERIAL-UI
import { Typography, Grid, Box } from "@mui/material";

// REACT-HELMET
import { Helmet } from "react-helmet";

// CSS
import "./Fullnews.css";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

// REDUX
import { getArticleById } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

// IMAGES
import JanusAdd from "../../assets/images/Janus.jpg";
import R2 from "../../assets/images/R2.png";

function createMarkup(htmlContent) {
  return { __html: htmlContent };
}

const FullNews = () => {
  const { param3 } = useParams();
  const FullArticle = useSelector((state) => state.HomeReducer.FullArticle);

  useEffect(() => {
    console.log(param3);
    // getArticleById(param3)
    getArticleById(param3);
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="google-site-verification"
          content="bbYxZyvg0xdO06ERBW-d0lDObNAaAyf47w8mh5rdk_M"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </Helmet>

      <Box
        sx={{ marginTop: { xs: "60px", sm: "60px", md: "80px", lg: "80px" } }}
      >
        {/* TITLE */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.6}
            lg={0.6}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.7}
            lg={10.7}
            // sx={{ backgroundColor: "aqua" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                height: "auto",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "15px",
                    sm: "15px",
                    md: "23px",
                    lg: "23px",
                  },
                  height: {
                    xs: "15px",
                    sm: "15px",
                    md: "23px",
                    lg: "23px",
                  },
                  marginTop: { xs: "12px", sm: "12px", md: "9px", lg: "9px" },
                }}
                alt="redTriangleArrow"
                src={R2}
              />

              <Typography
                sx={{
                  color: "#D2122E",
                  fontSize: { xs: "23px", sm: "23px", md: "27px", lg: "27px" },
                  fontFamily: " 'Mukta', sans-serif",
                  fontWeight: "600",
                  textAlign: "justify",
                  marginTop: { xs: "3px", sm: "3px", md: "0px", lg: "0px" },
                  paddingLeft: { xs: "3px", sm: "3px", md: "5px", lg: "5px" },
                  // wordSpacing: "-1px"
                  lineHeight: { xs: "1.2", sm: "1.2" },
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              >
                {FullArticle?.title}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>

        {/* IMAGE */}
        <Grid
          container
          sx={{
            // backgroundColor: "green",
            marginTop: "10px",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={0.6}
            lg={0.6}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8.5}
            lg={8.5}
            sx={{
              width: "800px",
              alignItems: "center",
              // backgroundColor: "aqua",
              // marginTop:"10px"
            }}
          >
            {/* IMAGE */}

            {/* <Box>
              <img
                src={FullArticle?.photo}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                }}
              />
            </Box> */}
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                    lg: "70%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  padding: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                alt="BarcodeLeft"
                src={FullArticle?.photo}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2.5}
            lg={2.5}
            sx={
              {
                // backgroundColor: "green",
                // marginTop:"10px"
              }
            }
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <a
                href="www.januskoncpets.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#F0F0F0",
                    height: "200px",
                    width: "200px",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginBottom: {
                      xs: "40px",
                      sm: "40px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          md: "9px",
                          lg: "9px",
                        },
                        fontWeight: "600",
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      ADVERTISEMENT
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "200px",
                        sm: "200px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "200px",
                        sm: "200px",
                        md: "200px",
                        lg: "200px",
                      },
                    }}
                    alt="redTriangleArrow"
                    src={JanusAdd}
                  />
                </Box>
              </a>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.4}
            lg={0.4}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>
        </Grid>

        {/* DESCRIPTION */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.6}
            lg={0.6}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.7}
            lg={10.7}
            // sx={{ backgroundColor: "aqua" }}
          >
            <Box>
              <Typography
                sx={{
                  // marginTop: "10px",
                  fontSize: "19px",
                  backgroundColor: "#fff",
                  // fontFamily: "'Noto Sans', sans-serif",
                  fontFamily: " 'Mukta', sans-serif",

                  fontWeight: "500",
                  textAlign: "justify",
                  paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                }}
                dangerouslySetInnerHTML={createMarkup(FullArticle?.description)}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FullNews;

{
  /* <Box>
              <Typography
                style={{
                  marginTop: "10px",
                  fontSize: "19px",
                  backgroundColor: "#fff",
                  // fontFamily: "'Noto Sans', sans-serif",
                  fontFamily: " 'Mukta', sans-serif",

                  fontWeight: "500",
                  textAlign: "justify",
                  padding: "10px",
                }}
                dangerouslySetInnerHTML={createMarkup(FullArticle?.description)}
              />
            </Box> */
}
