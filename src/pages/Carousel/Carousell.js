// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom'
// import { Card, CardMedia, Typography , Grid} from '@mui/material';

// import img1 from "../../assets/images/img1.jpeg"
// import img2 from "../../assets/images/elections.jpg"
// import img3 from "../../assets/images/cricket.webp"
// import img4 from "../../assets/images/eduction.jpeg"
// import img5 from "../../assets/images/vnews.jpeg"

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black", borderRadius: "15px" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black", borderRadius: "15px" }}
//       onClick={onClick}
//     />
//   );
// }

// const Carousell = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <SamplePrevArrow />,
//     prevArrow: <SampleNextArrow />,
//     responsive: [
//       {
//         // breakpoint: 1024,
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 0 ,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//    


//       <Slider {...settings}>

//         <Link to="/">
//           <Card style={{ position: "relative", borderRadius: "15px", height: "170px", width: "300px" , marginLeft:"10px" }}>
//             <CardMedia
//               component="img"
//               alt="home"
//               height="200"
//               image={img1}
//               title="Contemplative Reptile"
//             />
//             <Typography variant="h4" component="h1"
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "35%",
//                 width: "30px",
//                 textAlign: "center",
//                 color: "black",
//                 backgroundColor: "none",
//                 color: "#fff",
//                 fontWeight: "bold"
//               }}
//             >
//               HOME
//             </Typography>
//           </Card>
//         </Link>

//         <Link to="/elections">
//           <Card style={{ position: "relative", borderRadius: "15px", height: "170px", width: "300px" , marginLeft:"10px" }}>
//             <CardMedia
//               component="img"
//               alt="home"
//               height="200"
//               image={img2}
//               title="Contemplative Reptile"
//             />
//             <Typography variant="h4" component="h1"
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "25%",
//                 width: "30px",
//                 textAlign: "center",
//                 color: "black",
//                 backgroundColor: "none",
//                 color: "#fff",
//                 fontWeight: "bold"
//               }}
//             >
//               ELECTIONS
//             </Typography>
//           </Card>
//         </Link>

//         <Link to="/sports">
//           <Card style={{ position: "relative", borderRadius: "15px",height: "170px", width: "300px" , marginLeft:"10px" }}>
//             <CardMedia
//               component="img"
//               alt="home"
//               height="200"
//               image={img3}
//               title="Contemplative Reptile"
//             />
//             <Typography variant="h4" component="h1"
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "35%",
//                 width: "30px",
//                 textAlign: "center",
//                 color: "black",
//                 backgroundColor: "none",
//                 color: "#fff",
//                 fontWeight: "bold"
//               }}
//             >
//               SPORTS
//             </Typography>
//           </Card>
//         </Link>

//         <Link to="/education">
//           <Card style={{ position: "relative", borderRadius: "15px", height: "170px", width: "300px" , marginLeft:"10px" }}>
//             <CardMedia
//               component="img"
//               alt="home"
//               height="200"
//               width="340"
//               image={img4}
//               title="Contemplative Reptile"
//             />
//             <Typography variant="h4" component="h1"
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "25%",
//                 width: "30px",
//                 textAlign: "center",
//                 color: "black",
//                 backgroundColor: "none",
//                 color: "#fff",
//                 fontWeight: "bold"
//               }}
//             >
//               EDUCATION
//             </Typography>
//           </Card>
//         </Link>

//         <Link to="/viralnews">
//           <Card style={{ position: "relative", borderRadius: "15px", height: "170px", width: "300px" , marginLeft:"10px" }}>
//             <CardMedia
//               component="img"
//               alt="home"
//               height="200"
//               image={img5}
//               title="Contemplative Reptile"
//             />
//             <Typography variant="h4" component="h1"
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "35%",
//                 width: "100px",
//                 textAlign: "center",
//                 color: "black",
//                 backgroundColor: "none",
//                 color: "#fff",
//                 fontWeight: "bold"
//               }}
//             >
//               VIRAL NEWS
//             </Typography>
//           </Card>
//         </Link>
//       </Slider>
//     </div >

//   );
// };

// export default Carousell;

import React from 'react';
import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';
import './Carousell.css';


import img1 from "../../assets/images/img1.jpeg"
import img2 from "../../assets/images/elections.jpg"
import img3 from "../../assets/images/cricket.webp"
import img4 from "../../assets/images/eduction.jpeg"
import img5 from "../../assets/images/vnews.jpeg"


const Carousell = () => {
  return (
    <div className="carousel-container">
      <Carousel cols={4} rows={1} gap={10} loop={true} showDots={true} dotColorActive='#795548' dotColorInactive='#ccc'>

        <Carousel.Item>
          <Link to="/">
            <img width="100%" src={img1} style={{ height: "200px", borderRadius: "20px" }} />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/elections">
            <img width="100%" src={img2} style={{ height: "200px", borderRadius: "20px" }} />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/sports">
            <img width="100%" src={img3} style={{ height: "200px", borderRadius: "20px" }} />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/education">
            <img width="100%" src={img4} style={{ height: "200px", borderRadius: "20px" }} />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/viralnews">
            <img width="100%" src={img5} style={{ height: "200px", borderRadius: "20px" }} />
          </Link>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Carousell;


