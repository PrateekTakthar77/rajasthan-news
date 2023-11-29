import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeCard from "./HomeCard";
import { getArticles } from "../../Redux/actions/Home";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BreakingNewsTitle from "../BreakingNews/BreakingNewsTitle";
import Carousel from "react-grid-carousel";
import Header from "../../components/Header";
import redTia from "../../assets/images/RedTriangle.png";
import { Helmet } from "react-helmet";

import breakingnews from "../../assets/images/breakingNews.jpeg";
import election from "../../assets/images/election.jpeg";
import sportsimg from "../../assets/images/sportsimg.jpeg";
import eduimg from "../../assets/images/educationimg.jpeg";
import Techimg from "../../assets/images/TechnoImg.jpeg";
import Entimg from "../../assets/images/entertainmentimg.jpeg";
import CircularProgress from "@mui/material/CircularProgress";

import add1 from "../../assets/images/add1.jpeg";
import breakingnewsimage from "../../assets/images/cover-lg.jpeg";

import add3 from "../../assets/images/add3.jpeg";
import add4 from "../../assets/images/add4.jpeg";
import add5 from "../../assets/images/add5.jpeg";
import advert from "../../assets/images/Uttarakhand.jpg";

function Home() {
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
                <meta name="description" content="दिनभर की ब्रेकिंग न्यूज़, आज की मुख्य समाचार, ताजगी से जुड़े हलचल। नवीनतम और अद्यतित समाचारों के लिए हमारे साथ रहें" />
                <meta name="keywords" content="news" />
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
          <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }} style={{}}>
            {/* Breaking news */}

            <BreakingNewsTitle />

            {/* Carousell */}

            <Grid container sx={{ marginTop: "15px" }}>
              <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>
              <Grid item xs={12} sm={12} md={11.2} lg={11.2}>
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
                    <Link to="/breakingnews" style={{ textDecoration: "none" }}>
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
                            fontFamily: "Poppins",
                          }}
                        >
                          ब्रेकिंग न्यूज
                        </div>
                        <img
                          src={breakingnewsimage}
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
                            fontFamily: "Poppins",
                          }}
                        >
                          चुनाव 2023
                        </div>
                        <img
                          src={election}
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
                            fontFamily: "Poppins",
                          }}
                        >
                          स्पोर्ट्स
                        </div>
                        <img
                          src={sportsimg}
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
                            fontFamily: "Poppins",
                          }}
                        >
                          एजुकेशन
                        </div>
                        <img
                          src={eduimg}
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
                            fontFamily: "Poppins",
                          }}
                        >
                          टेक्नोलॉजी
                        </div>
                        <img
                          src={Techimg}
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
                    <Link
                      to="/entertainment"
                      style={{ textDecoration: "none" }}
                    >
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
                            fontFamily: "Poppins",
                          }}
                        >
                          मनोरंजन
                        </div>
                        <img
                          src={Entimg}
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
              </Grid>

              <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>
            </Grid>

            {/* CONTENT */}

            <Grid container sx={{ marginTop: "5px" }}>
              <Grid
                xs={12}
                sm={12}
                md={0.5}
                lg={0.5}
                sx={
                  {
                    // backgroundColor: "yellow"
                  }
                }
              ></Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={8.5}
                lg={8.5}
                paddingBlock={2}
                sx={{
                  //  backgroundColor: "green" ,
                  padding: "10px",
                }}
              >
                {/* --------ALL NEWS------------------------------------------------ */}

                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ paddingTop: "15px" }}
                >
                  <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      style={{
                        fontSize: "35px",
                        fontWeight: "700",
                        fontStyle: "italic",
                        fontFamily: "Poppins",
                      }}
                    >
                      HINDI NEWS
                    </Typography>
                    <img
                      src={redTia}
                      style={{
                        width: "28px",
                        height: "28px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    />
                  </Box>

                  <Box style={{ textDecoration: "none" }}>
                    <Link to={"/all-news"} style={{ textDecoration: "none" }}>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: "'Noto Sans', sans-serif",
                          margin: "15px",
                        }}
                      >
                        और देखें
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box>
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

                {/* --------BJP NEWS------------------------------------------------ */}

                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ paddingTop: "15px" }}
                >
                  <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      style={{
                        fontSize: "35px",
                        fontWeight: "700",
                        fontStyle: "italic",
                        fontFamily: "Poppins",
                      }}
                    >
                      BJP
                    </Typography>
                    <img
                      src={redTia}
                      style={{
                        width: "28px",
                        height: "28px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Box style={{ textDecoration: "none" }}>
                    <Link to={"/bjp-news"} style={{ textDecoration: "none" }}>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          margin: "15px",
                        }}
                      >
                        और देखें
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box>
                  <Box>
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
                </Box>

                {/* --------CONGRESS NEWS------------------------------------------------ */}

                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ paddingTop: "15px" }}
                >
                  <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      style={{
                        fontSize: "35px",
                        fontWeight: "700",
                        fontStyle: "italic",
                        fontFamily: "Poppins",
                      }}
                    >
                      CONGRESS
                    </Typography>
                    <img
                      src={redTia}
                      style={{
                        width: "28px",
                        height: "28px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Box style={{ textDecoration: "none" }}>
                    <Link
                      to={"/congress-news"}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          margin: "15px",
                        }}
                      >
                        और देखें
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box>
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

                {/* --------SPORTS NEWS------------------------------------------------ */}

                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ paddingTop: "15px" }}
                >
                  <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      style={{
                        fontSize: "35px",
                        fontWeight: "700",
                        fontStyle: "italic",
                        fontFamily: "Poppins",
                      }}
                    >
                      SPORTS
                    </Typography>
                    <img
                      src={redTia}
                      style={{
                        width: "28px",
                        height: "28px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Box style={{ textDecoration: "none" }}>
                    <Link
                      to={"/sports-news"}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          margin: "15px",
                        }}
                      >
                        और देखें
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box>
                  <Grid container spacing={3}>
                    {Articles?.filter(
                      (item) =>
                        item.subcategory[0] === "cricket" ||
                        item.subcategory[0] === "sports-news"
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

              {/* --------ADVERTISEMENT------------------------------------------------ */}

              <Grid
                item
                xs={12}
                sm={12}
                md={2.7}
                lg={2.7}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "78px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                        backgroundColor: "#eaeaea",
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

              <Grid xs={12} sm={12} md={0.3} lg={0.3}></Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Home;
