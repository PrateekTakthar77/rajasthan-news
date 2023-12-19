import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// CSS
import "./Homepagecarousel.css"

// IMAGES
import breakingNewsImage from "../../../assets/images/HomePageCarousel/breakingNewsImage.jpeg";
import electionImage from "../../../assets/images/HomePageCarousel/electionImage.jpeg";
import sportsImage from "../../../assets/images/HomePageCarousel/sportsImage.jpeg";
import educationImage from "../../../assets/images/HomePageCarousel/educationImage.jpeg";
import technologyImage from "../../../assets/images/HomePageCarousel/technologyImage.jpeg";
import entertainmentImage from "../../../assets/images/HomePageCarousel/entertainmentImage.jpeg";

const Homepagecarousel = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.4}
          lg={0.4}
          //   sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11.1}
          lg={11.1}
          //   sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
              marginBottom: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
            }}
          >
            <Carousel
              cols={3}
              rows={1}
              gap={20}
              loop={true}
              showDots={false}
              dotColorActive="#795548"
              dotColorInactive="#ccc"
              style={{ padding: "10px" }}
            >
               <Carousel.Item width="20%">
                    <Link to="/breaking-news" style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "10px",
                          borderTopRightRadius: "10px",
                          borderTopLeftRadius: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            height: "160px",
                            width: "100%",
                            backgroundColor: "black",
                            opacity: "0.8",
                            borderBottomRightRadius: "10px",
                            borderBottomLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            borderTopLeftRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: "40px",
                           fontFamily: "'Noto Sans Devanagari'",
                          }}
                        >
                          ब्रेकिंग न्यूज
                        </div>
                        <img
                          src={breakingNewsImage}
                          style={{
                            height: "160px",
                            width: "100%",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            borderTopRightRadius: "10px",
                            borderTopLeftRadius: "10px",
                          }}
                        />
                      </div>
                    </Link>
                  </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/elections" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      चुनाव 2023
                    </div>
                    <img
                      src={electionImage}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/sports" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      स्पोर्ट्स
                    </div>
                    <img
                      src={sportsImage}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/education" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      एजुकेशन
                    </div>
                    <img
                      src={educationImage}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/technology" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      टेक्नोलॉजी
                    </div>
                    <img
                      src={technologyImage}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/entertainment" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      मनोरंजन
                    </div>
                    <img
                      src={entertainmentImage}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          //   sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Homepagecarousel;
