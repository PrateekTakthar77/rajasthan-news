import React, { useState, useEffect } from "react";

// MUI
import { Box, Grid, Typography, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// REDUX
import { getArticles } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

// REACT HELMET
import { Helmet } from "react-helmet";

// PAGES
import HomeCard from "./HomeCard";
import Homepagecarousel from "../Carousels/Homepagecarousel/Homepagecarousel";
import Breakingnewstitle from "../BreakingNewsTitle/Breakingnewstitle";

// CSS
import "./Home.css";

// IMAGES
import RedTriangle from "../../assets/images/RedTriangle.png";
import JanusAdd from "../../assets/images/Janus.jpg";
import UttrakhandAdd from "../../assets/images/Uttarakhand.jpg";
import panchang from "../../assets/images/panchang.jpg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>आज की बड़ी खबर: ताजगी से रिलेटेड समाचार</title>
        <meta
          name="description"
          content="दिनभर की ब्रेकिंग न्यूज़, आज की मुख्य समाचार, ताजगी से जुड़े हलचल। नवीनतम और अद्यतित समाचारों के लिए हमारे साथ रहें"
        />
      </Helmet>
      <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
        {/* <Header /> */}
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
            }}
          >
            <CircularProgress style={{ color: "#0a2351" }} />
            <Typography
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: "15px",
                fontWeight: "500",
                marginTop: "10px",
              }}
            >
              Loading...
            </Typography>
          </div>
        ) : (
      <Box sx={{ marginTop: "80px" }}>
        {/* ---------------------------------------------------------------------------------------------- */}
        {/* BREAKING NEWS TITLE */}
        <Breakingnewstitle />

        {/* ---------------------------------------------------------------------------------------------- */}
        {/* HOME PAGE CAROUSEL */}
        <Homepagecarousel />

        {/* ---------------------------------------------------------------------------------------------- */}
        {/* HINDI NEWS */}
        <Box>
          {/* HINDI NEWS HEADING */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              sx={{ backgroundColor: "#fff" }}
              // sx={{ backgroundColor: "blue" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignSelf: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontWeight: "700",
                      fontStyle: "italic",
                      paddingLeft: {
                        xs: "5px",
                        sm: "5px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontFamily: " 'Mukta', sans-serif",
                    }}
                  >
                    हिंदी न्यूज़
                  </Typography>
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "15px",
                          sm: "15px",
                          md: "30px",
                          lg: "30px",
                        },
                        height: {
                          xs: "12px",
                          sm: "12px",
                          md: "17px",
                          lg: "17px",
                        },
                        marginTop: {
                          xs: "0px",
                          sm: "0px",
                          md: "7px",
                          lg: "7px",
                        },
                        paddingLeft: {
                          xs: "7px",
                          sm: "7px",
                          md: "13px",
                          lg: "13px",
                        },
                      }}
                      alt="redTriangleArrow"
                      src={RedTriangle}
                    />
                  </Box>
                </Box>

                <Button variant="text" sx={{ backgroundColor: "transparent" }}>
                  <Link to={"/all-news"} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "12px",
                          lg: "12px",
                        },
                        fontWeight: "700",
                        // paddingRight: {
                        //   xs: "10px",
                        //   sm: "10px",
                        //   md: "0px",
                        //   lg: "0px",
                        // },
                        display: "flex",
                        justifyContent: "flex-end",
                        // alignSelf: "center",
                        color: "red",
                        fontFamily: " 'Mukta', sans-serif",
                        marginTop: "5px",
                      }}
                    >
                      और देखें..
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "aqua" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.4}
              lg={0.4}
              // sx={{ backgroundColor: "orange" }}
            ></Grid>
          </Grid>

          {/* HINDI NEWS CONTENT */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                }}
              >
                <Grid container spacing={3}>
                  {Articles?.map(
                    (result, index) =>
                      index < 6 && (
                        <HomeCard
                          key={index}
                          result={result}
                          onClick={() => {
                            console.log("navigate");
                            navigate(
                              `/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`,
                              { state: { data: result } }
                            );
                          }}
                        />
                      )
                  )}
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "green" }}
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
        </Box>

        {/* ---------------------------------------------------------------------------------------------- */}
        {/* BJP NEWS */}
        <Box>
          <Grid
            container
            sx={{ marginTop: { xs: "0px", sm: "0px", md: "15px", lg: "15px" } }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignSelf: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontWeight: "700",
                      fontStyle: "italic",
                      paddingLeft: {
                        xs: "5px",
                        sm: "5px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontFamily: " 'Mukta', sans-serif",
                    }}
                  >
                    बीजेपी न्यूज़
                  </Typography>
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "15px",
                          sm: "15px",
                          md: "30px",
                          lg: "30px",
                        },
                        height: {
                          xs: "12px",
                          sm: "12px",
                          md: "17px",
                          lg: "17px",
                        },
                        marginTop: {
                          xs: "0px",
                          sm: "0px",
                          md: "7px",
                          lg: "7px",
                        },
                        paddingLeft: {
                          xs: "7px",
                          sm: "7px",
                          md: "13px",
                          lg: "13px",
                        },
                      }}
                      alt="redTriangleArrow"
                      src={RedTriangle}
                    />
                  </Box>
                </Box>

                <Button variant="text" sx={{ backgroundColor: "transparent" }}>
                  <Link to={"/bjp"} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "12px",
                          lg: "12px",
                        },
                        fontWeight: "700",
                        // paddingRight: {
                        //   xs: "10px",
                        //   sm: "10px",
                        //   md: "0px",
                        //   lg: "0px",
                        // },
                        display: "flex",
                        justifyContent: "flex-end",
                        // alignSelf: "center",
                        color: "red",
                        fontFamily: " 'Mukta', sans-serif",
                        marginTop: "5px",
                      }}
                    >
                      और देखें..
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "aqua" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.4}
              lg={0.4}
              // sx={{ backgroundColor: "orange" }}
            ></Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                }}
              >
                <Grid container spacing={3}>
                  {Articles?.filter(
                    (item) => item.subcategory[0] === "bjp"
                  ).map(
                    (result, index) =>
                      index < 6 && (
                        <HomeCard
                          key={index}
                          result={result}
                          onClick={() => {
                            console.log("navigate");
                            navigate(
                              `/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`,
                              { state: { data: result } }
                            );
                          }}
                        />
                      )
                  )}
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "green" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="https://www.youtube.com/uttaranchalwasi"
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
                      src={UttrakhandAdd}
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
        </Box>

        {/* ---------------------------------------------------------------------------------------------- */}
        {/* CONGRESS NEWS */}
        <Box>
          <Grid
            container
            sx={{ marginTop: { xs: "0px", sm: "0px", md: "15px", lg: "15px" } }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignSelf: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontWeight: "700",
                      fontStyle: "italic",
                      paddingLeft: {
                        xs: "5px",
                        sm: "5px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontFamily: " 'Mukta', sans-serif",
                    }}
                  >
                    कांग्रेस न्यूज़
                  </Typography>
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "15px",
                          sm: "15px",
                          md: "30px",
                          lg: "30px",
                        },
                        height: {
                          xs: "12px",
                          sm: "12px",
                          md: "17px",
                          lg: "17px",
                        },
                        marginTop: {
                          xs: "0px",
                          sm: "0px",
                          md: "7px",
                          lg: "7px",
                        },
                        paddingLeft: {
                          xs: "7px",
                          sm: "7px",
                          md: "13px",
                          lg: "13px",
                        },
                      }}
                      alt="redTriangleArrow"
                      src={RedTriangle}
                    />
                  </Box>
                </Box>

                <Button variant="text" sx={{ backgroundColor: "transparent" }}>
                  <Link to={"/congress"} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "12px",
                          lg: "12px",
                        },
                        fontWeight: "700",
                        // paddingRight: {
                        //   xs: "10px",
                        //   sm: "10px",
                        //   md: "0px",
                        //   lg: "0px",
                        // },
                        display: "flex",
                        justifyContent: "flex-end",
                        // alignSelf: "center",
                        color: "red",
                        fontFamily: " 'Mukta', sans-serif",
                        marginTop: "5px",
                      }}
                    >
                      और देखें..
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "aqua" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.4}
              lg={0.4}
              // sx={{ backgroundColor: "orange" }}
            ></Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                }}
              >
                <Grid container spacing={3}>
                  {Articles?.filter(
                    (item) => item.subcategory[0] === "congress"
                  ).map(
                    (result, index) =>
                      index < 6 && (
                        <HomeCard
                          key={index}
                          result={result}
                          onClick={() => {
                            console.log("navigate");
                            navigate(
                              `/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`,
                              { state: { data: result } }
                            );
                          }}
                        />
                      )
                  )}
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "green" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="https://www.facebook.com/HeyGobind"
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
                      src={panchang}
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
        </Box>

        {/* ---------------------------------------------------------------------------------------------- */}
        {/* SPORTS NEWS */}
        <Box>
          <Grid
            container
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "15px", lg: "15px" },
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignSelf: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontWeight: "700",
                      fontStyle: "italic",
                      paddingLeft: {
                        xs: "5px",
                        sm: "5px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontFamily: " 'Mukta', sans-serif",
                    }}
                  >
                    स्पोर्ट्स न्यूज़
                  </Typography>
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "15px",
                          sm: "15px",
                          md: "30px",
                          lg: "30px",
                        },
                        height: {
                          xs: "12px",
                          sm: "12px",
                          md: "17px",
                          lg: "17px",
                        },
                        marginTop: {
                          xs: "0px",
                          sm: "0px",
                          md: "7px",
                          lg: "7px",
                        },
                        paddingLeft: {
                          xs: "7px",
                          sm: "7px",
                          md: "13px",
                          lg: "13px",
                        },
                      }}
                      alt="redTriangleArrow"
                      src={RedTriangle}
                    />
                  </Box>
                </Box>

                <Button variant="text" sx={{ backgroundColor: "transparent" }}>
                  <Link to={"/sports-news"} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "12px",
                          lg: "12px",
                        },
                        fontWeight: "700",
                        // paddingRight: {
                        //   xs: "10px",
                        //   sm: "10px",
                        //   md: "0px",
                        //   lg: "0px",
                        // },
                        display: "flex",
                        justifyContent: "flex-end",
                        // alignSelf: "center",
                        color: "red",
                        fontFamily: " 'Mukta', sans-serif",
                        marginTop: "5px",
                      }}
                    >
                      और देखें..
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "aqua" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.4}
              lg={0.4}
              // sx={{ backgroundColor: "orange" }}
            ></Grid>
          </Grid>

          <Grid
            container
            sx={{
              marginBottom: { xs: "0px", sm: "0px", md: "15px", lg: "15px" },
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              // sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8.5}
              lg={8.5}
              // sx={{ backgroundColor: "#fff" }}
            >
              <Box
                sx={{
                  paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                }}
              >
                <Grid container spacing={3}>
                  {Articles?.filter(
                    (item) => item.subcategory[0] === "sports-news"
                  ).map(
                    (result, index) =>
                      index < 6 && (
                        <HomeCard
                          key={index}
                          result={result}
                          onClick={() => {
                            console.log("navigate");
                            navigate(
                              `/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`,
                              { state: { data: result } }
                            );
                          }}
                        />
                      )
                  )}
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              // sx={{ backgroundColor: "green" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="https://www.facebook.com/HeyGobind"
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
                      textDecoration: "none",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "11px",
                            lg: "11px",
                          },
                          fontWeight: "500",
                          textAlign: "center",
                          textDecoration: "none",
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
                      src={panchang}
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
        </Box>
      </Box>
       )}
       </Box>
    </>
  );
};

export default Home;
