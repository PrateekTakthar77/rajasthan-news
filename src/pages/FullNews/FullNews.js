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
        // <Grid container paddingBlock={2} style={{ padding: "20px" }}>
        //     <Grid item xs={12} sm={12} md={10} lg={10} paddingBlock={2}>
        //         <Grid container>
        //             <Typography variant="h4" component="div" style={{ marginTop: "100px" }}>
        //                 {state?.data?.title}
        //             </Typography>
        //         </Grid>
        //         <Grid xs={12} sm={12} md={10} lg={10} >
        //             <img src={state?.data?.photo} style={{ height: "400px", width: "400px" }} />
        //         </Grid>
        //         <Grid>
        //             <Typography variant="h6" color="textSecondary" style={{ marginTop: "10px" }} dangerouslySetInnerHTML={createMarkup(state?.data?.description)} />
        //         </Grid>
        //     </Grid>
        //     <Grid xs={12} sm={12} md={3} lg={2} paddingBlock={2} spacing={2}>
        //         <Typography style={{ backgroundColor: "gray", padding: "10px", marginTop: "100px" }}>
        //             Add Space
        //         </Typography>
        //     </Grid>
        // </Grid>
        <Grid container paddingBlock={2} style={{ marginTop: "60px" }}>

            <Grid xs={12} sm={12} md={0.5} lg={0.5}
                paddingBlock={2}
                spacing={2}
            // style={{backgroundColor:"green"}}
            ></Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} paddingBlock={2} style={{
                width: "800px",
                alignItems: "center",
                // backgroundColor:"red",
                padding: "10px"
            }}
            >

                <Grid container>
                    <Grid item xs={12} style={{ flexGrow: 1 }}>
                        <Box style={{ display: "flex", flexDirection: "row" }}>

                            <img src={R2} style={{ height: "20px", width: "20px", marginTop: "8px", marginRight: "5px", }} />
                            <Typography variant="h4" component="div" style={{ color: "black", fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>
                                {state?.data?.title}
                            </Typography>


                        </Box>
                    </Grid>
                </Grid>

                <Grid xs={12} sm={12} md={8} lg={8} style={{ marginTop: "10px" }}>
                    <img src={state?.data?.photo} style={{
                        maxWidth: '100%',
                        height: 'auto',
                        width: '100%',
                    }} />
                </Grid>

                {/* <Grid container>
                        <Grid item xs={12} style={{ flexGrow: 1 }}>
                            <Typography  variant="body1" style={{ marginTop: "10px", color: "black", fontSize: "20px" }} dangerouslySetInnerHTML={createMarkup(state?.data?.description)} />
                        </Grid>
                    </Grid> */}
                <Grid container>
                    <Grid item xs={12} style={{ flexGrow: 1 }}>
                        <Typography style={{ marginTop: "10px", fontSize: "20px", backgroundColor: "#fff" }} dangerouslySetInnerHTML={createMarkup(state?.data?.description)} />
                    </Grid>
                </Grid>

            </Grid>


            <Grid xs={12} sm={12} md={3} lg={3} paddingBlock={2} spacing={2} style={{
                // backgroundColor:"blue" ,
                align: "center"
            }}>
                   <img src={add2} alt='add' style={{ width: "260px", height: "250px" }} />
          <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} />
          <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop:"20px" }} />
          <img src={add5} alt='add' style={{ width: "260px", height: "250px" , marginTop:"20px" }} />
            </Grid>
        </Grid>
    );
}

export default FullNews;

