import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid, Box } from "@mui/material";
import { useLocation } from 'react-router-dom';
import img from "../../assets/images/img2.jpeg"

import R1 from "../../assets/images/R1.png"
import R2 from "../../assets/images/R2.png"

import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"




function createMarkup(htmlContent) {
    return { __html: htmlContent };
}

const FullNews = () => {
    const { state } = useLocation();

    return (
        <Grid container paddingBlock={2} style={{ marginTop: "60px" }}>

            <Grid xs={12} sm={12} md={0.5} lg={0.5}
                paddingBlock={2}
                spacing={2}
                // sx={{backgroundColor:"red"}}
                
           
            ></Grid>

            <Grid item xs={12} sm={12} md={9} lg={9} paddingBlock={2} style={{
                width: "800px",
                alignItems: "center",
                // backgroundColor:"blue",
                // padding: "10px"
            }}
            >

                <Grid container >
                    <Grid item xs={12} style={{ flexGrow: 1 }}>
                        <Box style={{ display: "flex", flexDirection: "row" ,padding:"10px"  }}>

                            <img src={R2} style={{ height: "20px", width: "20px", marginTop: "8px", marginRight: "5px", }} />
                            <Typography variant="h4" component="div" style={{ color: "#D2122E", fontSize: "30px", fontFamily: "Poppins", fontWeight: "600", textAlign: "justify" , }}>
                                {state?.data?.title}
                            </Typography>


                        </Box>
                    </Grid>
                </Grid>

                <Grid xs={12} sm={12} md={8} lg={8} style={{ marginTop: "10px" , padding:"10px"}}>
                    <img src={state?.data?.photo} style={{
                        // maxWidth: '100%',
                        height: '400px',
                        width: '100%',
                    }} />
                </Grid>

                {/* <Grid container>
                        <Grid item xs={12} style={{ flexGrow: 1 }}>
                            <Typography  variant="body1" style={{ marginTop: "10px", color: "black", fontSize: "20px" }} dangerouslySetInnerHTML={createMarkup(state?.data?.description)} />
                        </Grid>
                    </Grid> */}
                <Grid container >
                    <Grid item xs={12} style={{ flexGrow: 1 }}>
                        <Typography style={{ marginTop: "10px", fontSize: "17px", backgroundColor: "#fff", fontFamily: "Poppins", fontWeight: "500", textAlign: "justify" , padding:"10px"}} dangerouslySetInnerHTML={createMarkup(state?.data?.description)} />
                    </Grid>
                </Grid>

            </Grid>


            <Grid xs={12} sm={12} md={2.5} lg={2.5} paddingBlock={2} spacing={2} style={{
                // backgroundColor:"yellow" ,
                display:"flex",
                flexDirection:"column", 
                // backgroundColor:"red"
            }}>
                <img src={add2} alt='add' style={{ width: "260px", height: "250px" , alignSelf:"center"}} />
                <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px" ,alignSelf:"center"  }} />
                <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px" , alignSelf:"center"}} />
                <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px" , alignSelf:"center"}} />
                <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px" , alignSelf:"center"}} />
                {/* <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} /> */}
            </Grid>
        </Grid>
    );
}

export default FullNews;

