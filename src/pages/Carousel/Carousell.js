import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'
import { Container, Typography, styled } from '@mui/material';
import { Card, CardMedia } from '@mui/material';
import { Grid } from '@material-ui/core';

import img1 from "../../assets/images/img1.jpeg"
import img2 from "../../assets/images/elections.jpg"
import img3 from "../../assets/images/cricket.webp"
import img4 from "../../assets/images/eduction.jpeg"
import img5 from "../../assets/images/vnews.jpeg"

const Background = styled("div")({
  width: "340px",
  height: "200px",
  backgroundImage: `url(${img1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "15px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "15px" }}
      onClick={onClick}
    />
  );
}

const Carousell = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginLeft: "20px",marginRight: "20px", marginTop: "80px" }}>
      
      <Slider {...settings}>

        <Link to="/">
          <Card style={{ position: "relative" , borderRadius: "15px" , height:"200px" , width:"340px"}}>
            <CardMedia
              component="img"
              alt="home"
              height="200"
              image={img1}
              title="Contemplative Reptile"
            />
            <Typography variant="h4" component="h1"
              style={{
                position: "absolute",
                top: "50%", // Center vertically
                left: "35%", // Center horizontally
                // transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                width: "30px",
                textAlign: "center",
                color: "black",
                backgroundColor: "none",
                color: "#fff",
                fontWeight:"bold"
              }}
            >
              HOME
            </Typography>
          </Card>
        </Link>

        <Link to="/elections">
          <Card style={{ position: "relative" , borderRadius: "15px" , height:"200px" , width:"340px"}}>
            <CardMedia
              component="img"
              alt="home"
              height="200"
              image={img2}
              title="Contemplative Reptile"
            />
            <Typography variant="h4" component="h1"
              style={{
                position: "absolute",
                top: "50%", // Center vertically
                left: "25%", // Center horizontally
                // transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                width: "30px",
                textAlign: "center",
                color: "black",
                backgroundColor: "none",
                color: "#fff",
                fontWeight:"bold"
              }}
            >
              ELECTIONS
            </Typography>
          </Card>
        </Link>

        <Link to="/sports">
          <Card style={{ position: "relative" , borderRadius: "15px" , height:"200px" , width:"340px"}}>
            <CardMedia
              component="img"
              alt="home"
              height="200"
              image={img3}
              title="Contemplative Reptile"
            />
            <Typography variant="h4" component="h1"
              style={{
                position: "absolute",
                top: "50%", // Center vertically
                left: "35%", // Center horizontally
                // transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                width: "30px",
                textAlign: "center",
                color: "black",
                backgroundColor: "none",
                color: "#fff",
                fontWeight:"bold"
              }}
            >
              SPORTS
            </Typography>
          </Card>
        </Link>

        <Link to="/education">
          <Card style={{ position: "relative"  , borderRadius: "15px" , height:"200px" , width:"340px"}}>
            <CardMedia
              component="img"
              alt="home"
              height="200"
              width="340"
              image={img4}
              title="Contemplative Reptile"
            />
            <Typography variant="h4" component="h1"
              style={{
                position: "absolute",
                top: "50%", // Center vertically
                left: "25%", // Center horizontally
                // transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                width: "30px",
                textAlign: "center",
                color: "black",
                backgroundColor: "none",
                color: "#fff",
                fontWeight:"bold"
              }}
            >
              EDUCATION
            </Typography>
          </Card>
        </Link>

        <Link to="/viralnews">
          <Card style={{ position: "relative" , borderRadius: "15px" , height:"200px" , width:"340px"}}>
            <CardMedia
              component="img"
              alt="home"
              height="200"
              image={img5}
              title="Contemplative Reptile"
            />
            <Typography variant="h4" component="h1"
              style={{
                position: "absolute",
                top: "50%", // Center vertically
                left: "35%", // Center horizontally
                // transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                width: "100px",
                textAlign: "center",
                color: "black",
                backgroundColor: "none",
                color: "#fff",
                fontWeight:"bold"
              }}
            >
              VIRAL NEWS
            </Typography>
          </Card>
        </Link>


        {/* <Link to="/">
          <div style={{ margin: "10px" }}>
            <img src={img1} style={{ height: "200px", width: "340px", borderRadius: "15px" }} />
          </div>
        </Link>

        <Link to="/elections">
          <div style={{ margin: "10px" }}>
            <img src={img2} style={{ height: "200px", width: "340px", borderRadius: "15px" }} />
          </div>
        </Link>

        <Link to="/sports">
          <div style={{ margin: "10px" }} >
            <img src={img3} style={{ height: "200px", width: "340px", borderRadius: "15px" }} />
          </div>
        </Link>
        <Link to="/education">
          <div style={{ margin: "10px" }}>
            <img src={img4} style={{ height: "200px", width: "340px", borderRadius: "15px" }} />
          </div>
        </Link>
        <Link to="/viralnews">
          <div style={{ margin: "10px" }}>
            <img src={img5} style={{ height: "200px", width: "340px", borderRadius: "15px" }} />
          </div>
        </Link> */}
      </Slider>
    </div >
  );
};

export default Carousell;

