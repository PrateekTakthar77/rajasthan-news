import React, { useState, useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

// PAGES
import HomeCard from "../Home/HomeCard";

// IMAGES
import JanusAdd from "../../assets/images/Janus.jpg";

// CSS
import "./Breakingnews.css";

const Breakingnews = () => {
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Box sx={{ marginTop: { xs: "60px", sm: "60px", md: "80px", lg: "80px" } }}>
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
          // sx={{ backgroundColor: "aqua" }}
        >
          {Articles?.map(
            (result, index) =>
              index < 10 && (
                <Grid container>
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={12}
                    lg={1.5}
                    md={1.5}
                    // style={{ backgroundColor: "red" }}
                  >
                    <Typography
                      sx={{
                        fontSize:{ xs:"14px" , sm:"14px" , md:"17px" , lg:"17px"} ,
                        fontWeight: "600",
                        marginTop: "2px",
                        marginLeft:{ xs:"5px" , sm:"5px" , md:"0px" , lg:"0px"} ,
                      }}
                    >
                      {new Date(result?.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={10.5}
                    md={10.5}
                    // style={{ backgroundColor: "blue" }}
                  >
                    <Typography
                      key={index}
                      result={result}
                      onClick={() => {
                        console.log("navigate");
                        navigate(
                          `/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`,
                          { state: { data: result } }
                        );
                      }}
                      sx={{
                        fontSize: "20px",
                        fontSize:{xs:"15px" , sm:"15px" , md:"20px" , lg:"20px"},
                        fontWeight: "600",
                        fontFamily: " 'Mukta', sans-serif",
                        color: "#D2122E",
                        marginLeft:{xs:"5px" , sm:"5px" , md:"0px" , lg:"0px"},
                        marginRight:{xs:"5px" , sm:"5px" , md:"0px" , lg:"0px"}
                      }}
                    >
                      {result?.title}
                    </Typography>
                  </Grid>

                  <Box borderBottom="1px solid #ccc" width="100%" my={2} />
                </Grid>
              )
          )}
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
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Breakingnews;
