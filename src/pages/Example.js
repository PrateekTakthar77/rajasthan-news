// import React from 'react';
// import { CardContent, CardMedia } from '@mui/material';
// import img1 from "../assets/images/cricket.webp"

// const Example = (props) => {
//   const { classes } = props;

//   return (
//     <div>
//       <div style={{backgroundColor:"black" , height:"50px" , width:"400px"}}>

//       </div>
//       <CardContent>
//         <div
//           style={{
//             position: 'relative',
//             textAlign: 'center',
//           }}
//         >
//           <CardMedia
//             component="img"

//             image={img1}
//             style={{
//               width: '400px',
//               height: '200px',
//             }}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               color: '#011e29',
//               top: '50%',
//               left: '15%',
//               transform: 'translate(-50%, -50%)',
//               fontWeight:"700", 
//               fontSize:"40px",
//               fontFamily:"Poppins"
//             }}
//           >
//            CRICKET
//           </div>
//         </div>
//       </CardContent>
//     </div>
//   );
// };

// export default Example;


import React from 'react'
import img1 from "../assets/images/cricket.webp"

const Example = () => {
  return (
    <>
      {/* <div style={{display:"flex" , flexDirection:"column"  , borderRadius  :"10px"}}>
      <div style={{backgroundColor:"black" , height:"35px" , width:"200px" , display: "flex", justifyContent: "center", alignItems: "center" , color:"white", borderTopRightRadius  :"10px", borderTopLeftRadius  :"10px"}}>CRICKET</div>
       <img src={img1} style={{height:"120px" , width:"200px", borderBottomRightRadius  :"10px", borderBottomLeftRadius  :"10px"}}/>

    </div> */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", marginBottom:"20px" }}>
        <div style={{
          position: "absolute", top: "0", left: "0", width: "200px", height: "100%", backgroundColor: "black", opacity: "0.5", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontWeight: "700",
          fontSize: "40px",
          fontFamily: "Poppins"
        }}>CRICKET</div>
        <img src={img1} style={{ height: "120px", width: "200px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} />
      </div>


      <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" , marginBottom:"20px"}}>
        <div style={{
          position: "absolute", top: "0", left: "0", width: "200px", height: "100%", backgroundColor: "black",  opacity: "0.7" ,borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontWeight: "700",
          fontSize: "40px", fontFamily: "Poppins"
        }}>CRICKET</div>
        <img src={img1} style={{ height: "120px", width: "200px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} />
      </div>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
        <div style={{
          position: "absolute", top: "0", left: "0", width: "200px", height: "100%", backgroundColor: "black",  opacity: "0.8" ,borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontWeight: "700",
          fontSize: "40px", fontFamily: "Poppins"
        }}>CRICKET</div>
        <img src={img1} style={{ height: "120px", width: "200px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} />
      </div>

    </>

  )
}

export default Example
