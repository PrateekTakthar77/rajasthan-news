import React from 'react'
import { Grid, Typography, Box, Divider } from '@mui/material'
import Data from "../../assets/Dummydata/Data.json"


import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"


const BreakingNews = () => {

    return (
        <>
            <Box sx={{ marginTop: "80px" }}>

                <Grid container>

                    <Grid item xs={12} sm={12} lg={1} md={1}
                    // style={{ backgroundColor: "yellow" }}
                    ></Grid>


                    <Grid item xs={12} sm={12} lg={8} md={8} >

                        {Data.map((item, index) => (
                            <Grid container>
                                <Grid key={index} item xs={12} sm={12} lg={1.5} md={1.5}
                                // style={{ backgroundColor: "red" }}
                                >
                                    <Typography style={{ fontSize: "19px", fontWeight: "700", marginLeft: "10px" }}>
                                        {item.time}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={9} md={9}
                                // style={{ backgroundColor: "blue" }}
                                >
                                    <Typography style={{ fontSize: "17px", fontWeight: "700", marginTop: "1px", marginLeft: "10px" }}>
                                        {item.news}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} lg={1.5} md={1.5}
                                // style={{ backgroundColor: "green" }}
                                >
                                    <Typography style={{ fontSize: "17px", fontWeight: "700", marginTop: "1px", marginLeft: "10px" }}>

                                    </Typography>
                                </Grid>
                                <Box
                                    borderBottom="1px solid #ccc" 
                                    width="100%"
                                    my={2}
                                />

                            </Grid>
                        ))}


                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3}
                    // style={{ backgroundColor: "purple" }}
                    >
                       <img src={add2} style={{ height:"300px" , width:"350px" , paddingLeft:"40px"}}/>
                       {/* <img src={add1} style={{ height:"300px" , width:"350px" , paddingLeft:"40px"}}/> */}
                       {/* <img src={add3} style={{ height:"300px" , width:"350px" , paddingLeft:"40px"}}/> */}
                       <img src={add4} style={{ height:"300px" , width:"350px" , paddingLeft:"40px"}}/>
                       {/* <img src={add5} style={{ height:"400px" , width:"500px" , paddingLeft:"40px"}}/> */}
                    </Grid>


                </Grid>
            </Box>
        </>

    )
}

export default BreakingNews
