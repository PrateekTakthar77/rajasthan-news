import React from 'react'
import { Grid, Typography, Box, Divider } from '@mui/material'
import Data from "../../assets/Dummydata/Data.json"

const BreakingNews = () => {

    return (
        <>
            <Box sx={{ marginTop: "80px" }}>

                <Grid container>

                    <Grid item xs={12} sm={12} lg={1} md={1}
                        // style={{ backgroundColor: "yellow" }}
                    ></Grid>

                    {Data.map((item, index) => (
                        <Grid item xs={12} sm={12} lg={8} md={8} style={{ marginBottom: "20px" }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} lg={1.5} md={1.5}
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
                            </Grid>

                            <Divider textAlign="right" style={{ marginTop: "15px", marginBottom: "15px" }}></Divider>

                        </Grid>
                    ))}
                    <Grid item xs={12} sm={12} md={3} lg={3}
                        // style={{ backgroundColor: "purple" }}
                    >
                        <Typography>
                            ADVERTISEMENT
                        </Typography>
                    </Grid>


                </Grid>
            </Box>
        </>

    )
}

export default BreakingNews
