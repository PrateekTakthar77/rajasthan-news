import React , {useEffect} from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// REDUX
import { getArticles } from "../../../redux/actions/Home";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


// CSS
import "./Electionpagecarousel.css";

// IMAGES
import todayNewsImage from "../../../assets/images/ElectionPageCarousel/todayNewsImage.webp";
import bjpNewsImage from "../../../assets/images/ElectionPageCarousel/bjpNewsImage.jpeg";
import congressNewsImage from "../../../assets/images/ElectionPageCarousel/congressNewsImage.webp";
import samajwadiNewsImage from "../../../assets/images/ElectionPageCarousel/samajwadiNewsImage.png";
import shivsenaNewsImage from "../../../assets/images/ElectionPageCarousel/shivsenaNewsImage.webp";
import dmkNewsImage from "../../../assets/images/ElectionPageCarousel/dmkNewsImage.webp";
import aapNewsImage from "../../../assets/images/ElectionPageCarousel/aapNewsImage.jpeg";

const Electionpagecarousel = () => {
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);
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
              cols={4}
              rows={1}
              gap={10}
              loop={true}
              dotColorActive="#795548"
              dotColorInactive="#ccc"
            >
              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter(
                        (item) => item.subcategory[0] === "todays-news"
                      ),
                      "BJPpppppp"
                    );
                    // navigate('/elections/politics/election', { state: { data: Articles?.filter(item => item.subcategory[0] === "election") } });
                    navigate("/election/todays-news", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "todays-news"
                        ),
                      },
                    });
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
                    टुडे न्यूज़
                  </div>
                  <img
                    src={todayNewsImage}
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
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter((item) => item.subcategory[0] === "bjp"),
                      "BJPpppppp"
                    );
                    // navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                    navigate("/election/bjp", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "bjp"
                        ),
                      },
                    });
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
                    बीजेपी
                  </div>
                  <img
                    src={bjpNewsImage}
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
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter(
                        (item) => item.subcategory[0] === "congress"
                      ),
                      "congressssss"
                    );
                    // navigate('/elections/politics/congress', { state: { data: Articles?.filter(item => item.subcategory[0] === "congress") } });
                    navigate("/election/congress", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "congress"
                        ),
                      },
                    });
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
                    कांग्रेस
                  </div>
                  <img
                    src={congressNewsImage}
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
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter(
                        (item) => item.subcategory[0] === "samajwadi"
                      ),
                      "BJPpppppp"
                    );
                    // navigate('/elections/politics/samajwadi', { state: { data: Articles?.filter(item => item.subcategory[0] === "samajwadi") } });
                    navigate("/election/samajwadi", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "samajwadi"
                        ),
                      },
                    });
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
                    समाजवादी
                  </div>
                  <img
                    src={samajwadiNewsImage}
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
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter(
                        (item) => item.subcategory[0] === "shiv-sena"
                      ),
                      "BJPpppppp"
                    );
                    // navigate('/elections/politics/shivsena', { state: { data: Articles?.filter(item => item.subcategory[0] === "shiv sena") } });
                    navigate("/election/shiv-sena", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "shiv-sena"
                        ),
                      },
                    });
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
                    शिव सेना
                  </div>
                  <img
                    src={shivsenaNewsImage}
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
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter((item) => item.subcategory[0] === "dmk"),
                      "BJPpppppp"
                    );
                    // navigate('/elections/politics/dmk', { state: { data: Articles?.filter(item => item.subcategory[0] === "dmk") } });
                    navigate("/election/dmk", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "dmk"
                        ),
                      },
                    });
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
                    डीएमके
                  </div>
                  <img
                    src={dmkNewsImage}
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
              </Carousel.Item>

              <Carousel.Item width="20%">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                  onClick={() => {
                    console.log(
                      Articles?.filter(
                        (item) => item.subcategory[0] === "aam-aadmi-party"
                      ),
                      "aam-aadmi-party"
                    );
                    // navigate('/elections/politics/others', { state: { data: Articles?.filter(item => item.subcategory[0] === "other") } });
                    navigate("/election/aam-aadmi-party", {
                      state: {
                        data: Articles?.filter(
                          (item) => item.subcategory[0] === "aam-aadmi-party"
                        ),
                      },
                    });
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
                    आम आदमी पार्टी
                  </div>
                  <img
                    src={aapNewsImage}
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

export default Electionpagecarousel;
