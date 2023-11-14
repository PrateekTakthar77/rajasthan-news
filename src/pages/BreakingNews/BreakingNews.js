import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import add2 from "../../assets/images/add2.jpeg"
import add4 from "../../assets/images/add4.jpeg"


const BreakingNews = () => {
    const [loading, setLoading] = useState(true);
    const { Articles } = useSelector(state => state.HomeReducer)
    const navigate = useNavigate();

    useEffect(() => {
        getArticles().then(() => {
            setLoading(false)
        })
    }, [])
    return (
        <>
            <Box sx={{ marginTop: "50px" }}>

                <Grid container>
                    <Grid item xs={12} sm={12} lg={0.5} md={0.5}
                        // style={{ backgroundColor: "yellow" }}
                    ></Grid>
                    <Grid item xs={12} sm={12} lg={8.5} md={8.5} sx={{ padding: "10px", 
                    // backgroundColor: "green" 
                    }} >

                        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "11px", marginBottom: "40px" , marginTop:"20px"}}>
                            <Typography sx={{ fontSize: "17px", fontFamily: "Poppins", fontWeight: "600", marginTop: "4px" }}>Hindi News</Typography>
                            <Typography sx={{ fontSize: "17px", fontFamily: "Poppins", fontWeight: "600", marginTop: "3px", padding: "4px" }}>  /  </Typography>
                            <Box sx={{ backgroundColor: "red", }}>
                                <Typography sx={{ padding: "3px", fontSize: "17px", fontFamily: "Poppins", fontWeight: "600", color: "#fff", marginTop: "3px" }}>ब्रेकिंग न्यूज़</Typography>
                            </Box>
                        </Box>

                        {Articles?.map((result, index) => index < 10 && (
                            <Grid container>
                                <Grid key={index} item xs={12} sm={12} lg={1.5} md={1.5}
                                // style={{ backgroundColor: "red" }}
                                >
                                    <Typography style={{ fontSize: "19px", fontWeight: "700", marginLeft: "10px" }}>
                                        {new Date(result?.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={8} md={8}
                                // style={{ backgroundColor: "blue" }}
                                >

                                    <Typography key={index} result={result} onClick={() => {
                                        console.log('navigate');
                                        navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                                    }} style={{ fontSize: "20px", fontWeight: "600", fontFamily: "Poppins", color: "#D2122E" }}>{result?.title}</Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} lg={2.5} md={2.5}
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

                    <Grid item xs={12} sm={12} md={2.7} lg={2.7}
                        style={{
                            // backgroundColor: "purple",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img src={add2} style={{ width: "260px", height: "250px", marginTop: "20px" ,alignSelf:"center" }} />
                        <img src={add4} style={{ width: "260px", height: "250px", marginTop: "20px" ,alignSelf:"center"  }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={0.3} lg={0.3}>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BreakingNews

