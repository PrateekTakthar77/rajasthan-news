import React, { useState, useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box, Divider } from "@mui/material";

// MARQUEE
import Marquee from "react-fast-marquee";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// CSS
import "./Breakingnewstitle.css";

// REDUX
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

const Breakingnewstitle = () => {
  const [loading, setLoading] = useState(true);
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.6}
          lg={0.6}
          //   sx={{ backgroundColor: "blue" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.7}
          lg={10.7}
          //   sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
              paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
            }}
          >
            <Link to="/breakingnews" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  height: "auto",
                  backgroundColor: "red",
                  margin: "0 auto",
                  borderRadius: "5px",
                  display: "flex",
                  textDecoration: "none",
                  flexDirection: "row",
                  animation: "blink 3s infinite", // Apply the animation
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: " 'Mukta', sans-serif",
                    fontWeight: "600",
                    color: "#fff",
                    padding: "-3px",
                    textDecoration: "none", // Remove underline
                    marginTop: "3px",
                    marginLeft: "20px",
                    fontStyle: "italic",
                    width: {xs:"45%" , sm:"45%" , md:"25%" , lg:"25%"},
                  }}
                >
                  ब्रेकिंग न्यूज
                </Typography>

                <Divider
                  sx={{
                    width: "0.2%",
                    marginLeft: "22px",
                    // marginRight: "10px",
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ backgroundColor: "#808080" }}
                />
                <Marquee>
                  {Articles?.map(
                    (result, index) =>
                      index < 1 && (
                        <Typography
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#fff",
                            // padding: "3px",
                            textDecoration: "none",
                            // marginTop: "3px",
                            //  paddingRight:"2px" ,
                            paddingLeft: "5px",
                            paddingRight: "10px",
                            marginRight: "3px",
                            fontFamily: " 'Mukta', sans-serif",
                          }}
                        >
                          {result?.title}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Typography>
                      )
                  )}
                </Marquee>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          //   sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Breakingnewstitle;
