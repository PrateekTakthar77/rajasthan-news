// import React from 'react'
// import { Grid, Box, Typography, Divider } from '@mui/material'
// import { Link } from "react-router-dom"

// const BreakingNewsTitle = () => {
//     return (
//         <Grid container sx={{textDecoration:"none"}}>

//             <Grid item xs={12} sm={12} md={1.5} lg={1.5} ></Grid>

//             <Grid item xs={12} sm={12} md={9} lg={9}  sx={{textDecoration:"none"}}>
//                 <Link to="/breakingnews" style={{textDecoration:"none"}}>
//                     <Box sx={{
//                         height: 'auto',
//                         backgroundColor: 'red',
//                         margin: '0 auto',
//                         marginTop: 10,
//                         borderRadius: '20px',
//                         marginLeft: "20px",
//                         marginRight: "20px",
//                         marginBottom: "40px",
//                         display: 'flex',
//                         textDecoration: "none",
//                         flexDirection: 'row',
//                     }}>
//                         <Typography sx={{
//                              fontSize: "22px",
//                              fontFamily:"Poppins" ,
//                              fontWeight: "600",
//                              color: "#fff",
//                              padding: "3px",
//                              textDecoration: "none", // Remove underline
//                              marginTop: "3px",
//                              marginLeft: "20px",
//                              fontStyle: 'italic'
//                         }}>
//                             BREAKING NEWS
//                         </Typography>
//                         <Divider sx={{
//                             width: '0.2%',
//                             marginLeft: '15px',
//                             marginRight: "15px"
//                         }}
//                             orientation="vertical"
//                             variant="middle"
//                             flexItem
//                             style={{ backgroundColor: '#808080' }}
//                         />
//                         <Typography style={{
//                             fontSize: "20px",
//                             fontWeight: "700",
//                             color: "#fff",
//                             padding: "3px",
//                             textDecoration: "none",
//                             marginTop: "4px"
//                         }}>
//                             सोशल मीडिया पर एक कार पर हुए हमले का वीडियो तेजी से वायरल हो रहा है
//                         </Typography>
//                     </Box>
//                 </Link>
//             </Grid>
//             <Grid item xs={12} sm={12} md={1.5} lg={1.5} >
//             </Grid>


//         </Grid>
//     )
// }

// export default BreakingNewsTitle


import React from 'react'
import { Grid, Box, Typography, Divider } from '@mui/material'
import { Link } from "react-router-dom"
// import Marquee from 'react-marquee-slider'
import Marquee from "react-fast-marquee";

const BreakingNewsTitle = () => {
    return (
        <Grid container sx={{ textDecoration: "none" }}>
            <Grid item xs={12} sm={12} md={1} lg={1} ></Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} sx={{ textDecoration: "none" }}>
                <Link to="/breakingnews" style={{ textDecoration: "none" }}>
                    <Box sx={{
                        height: 'auto',
                        backgroundColor: 'red',
                        margin: '0 auto',
                        marginTop: 10,
                        borderRadius: '20px',
                        marginLeft: "20px",
                        marginRight: "20px",
                        // marginBottom: "10px",
                        display: 'flex',
                        textDecoration: "none",
                        flexDirection: 'row',
                        animation: 'blink 3s infinite', // Apply the animation
                    }}>
                        <Typography sx={{
                            fontSize: "22px",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            color: "#fff",
                            padding: "3px",
                            textDecoration: "none", // Remove underline
                            marginTop: "3px",
                            marginLeft: "20px",
                            fontStyle: 'italic',
                            width:"25%"
                        }}>
                            BREAKING NEWS
                        </Typography>
                        <Divider sx={{
                            width: '0.2%',
                            marginLeft: '15px',
                            marginRight: "15px"
                        }}
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            style={{ backgroundColor: '#808080' }}
                        />
                        <Marquee>
                            <Typography style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#fff",
                                padding: "3px",
                                textDecoration: "none",
                                marginTop: "4px"
                            }}>
                               मराठा आंदोलन पर बोले उद्धव- मराठा नहीं कर सकते बवाल, पता करना होगा इसके पीछे कौन है
                            </Typography>
                        </Marquee>

                    </Box>
                </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} >
            </Grid>
            <style>
                {`
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                `}
            </style>
        </Grid>
    )
}

export default BreakingNewsTitle
