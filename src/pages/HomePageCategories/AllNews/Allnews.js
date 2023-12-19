import React, { useState, useEffect } from "react";

// MUI
import { Grid, Box, Typography } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// PAGES
import HomeCard from "../../Home/HomeCard";

// REDUX
import { getArticles } from "../../../redux/actions/Home";
import { useSelector } from "react-redux";

// CSS
import "./Allnews.css"

// Images
import JanusAdd from "../../../assets/images/Janus.jpg"

const Allnews = () => {
  const [loading, setLoading] = useState(true);
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <Box  style={{ marginTop: "80px" }}>
      <Grid container  sx={{
            marginBottom: { xs: "0px", sm: "0px", md: "15px", lg: "15px" },
          }}>
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
                (result, index) =>(
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
                  marginTop: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
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
  );
};

export default Allnews;
