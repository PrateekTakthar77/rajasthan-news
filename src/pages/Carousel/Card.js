// import React from 'react'
// import "./Carousel.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../assets/images/img1.jpeg"

// import Slider from "react-slick"
// const Carousel = () => {
//     var settings = {
//         // dots: true,
//         // infinite: false,
//         // speed: 500,
//         // slidesToShow: 4,
//         // slidesToScroll: 4,
//         // initialSlide: 0,
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <div className='carousel'>
//             <Slider  {...settings}>
//                 <div className='box1'>
//                     <img
//                         src={img1}
//                         alt="Description of the Image"
//                         style={{height:"200px"  , width:"360px"}}
//                     />
//                 </div>

//                 <div className='box2'>
//                     <h3>2</h3>
//                 </div>

//                 <div className='box3'>
//                     <h3>3</h3>
//                 </div>

//                 <div className='box4'>
//                     <h3>4</h3>
//                 </div>

//                 <div className='box5'>
//                     <h3>5</h3>
//                 </div>
//                 <div className='box6'>
//                     <h3>6</h3>
//                 </div>
//                 <div className='box7'>
//                     <h3>7</h3>
//                 </div>
//                 <div className='box8'>
//                     <h3>8</h3>
//                 </div>
//             </Slider>

//         </div>
//     )
// }

// export default Carousel;


import React from 'react'
import "../Carousel/Card.css"
const Card= ({ number }) => {
  return (
    <div className='card'>
      {number}
    </div>
  )
}

export default Card

