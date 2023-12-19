import React from "react";

import {
  Typography,
  Grid,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import "./HomeCard.css";

const HomeCard = ({ result, onClick }) => {
  function createMarkup(htmlContent) {
    return { __html: htmlContent };
  }
  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card variant="outlined">
          <CardActionArea onClick={onClick}>
            <Box>
              <CardMedia
                component="img"
                height="160"
                image={result?.photo}
                alt="Main Image"
              />
            </Box>
            <CardContent>
              <Box sx={{}}>
                <Typography
                  gutterBottom
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    color: "#D2122E",
                    fontSize: "16px",
                    fontFamily:" 'Mukta', sans-serif",
                    fontWeight: "600",
                    // textAlign: "justify",
                    wordSpacing: "1px",
                  }}
                >
                  {result?.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily:" 'Mukta', sans-serif",
                    // textAlign: "justify"
                  }}
                  dangerouslySetInnerHTML={createMarkup(result?.description)}
                />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default HomeCard;
