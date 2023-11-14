import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material'
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";

import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

const BreakingNewsTitle = () => {
    const [loading, setLoading] = useState(true);
    const { Articles } = useSelector(state => state.HomeReducer)
    const navigate = useNavigate();

    useEffect(() => {
        getArticles().then(() => {
            setLoading(false)
        })
    }, [])
    return (
        <Grid container sx={{ textDecoration: "none" }}>
            <Grid item xs={12} sm={12} md={0.4} lg={0.4} ></Grid>
            <Grid item xs={12} sm={12} md={11.2} lg={11.2} sx={{ textDecoration: "none" }}>
                <Link to="/breakingnews" style={{ textDecoration: "none" }}>
                    <Box sx={{
                        height: 'auto',
                        backgroundColor: 'red',
                        margin: '0 auto',
                        marginTop: 10,
                        borderRadius: '5px',
                        marginLeft: "20px",
                        marginRight: "20px",
                        // marginBottom: "10px",
                        display: 'flex',
                        textDecoration: "none",
                        flexDirection: 'row',
                        animation: 'blink 3s infinite', // Apply the animation
                    }}>
                        
                        <Typography sx={{
                            fontSize: "20px",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            color: "#fff",
                            padding: "-3px",
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
                            marginLeft: '22px',
                            marginRight: "10px",
                        }}
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            style={{ backgroundColor: '#808080' ,}}
                        />
                        <Marquee>
                        {Articles?.map((result, index) => index < 1 && (
                            <Typography style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#fff",
                                // padding: "3px",
                                textDecoration: "none",
                                marginTop: "3px",
                                //  paddingRight:"2px" ,
                                 paddingLeft:"5px",
                                 paddingRight:"10px",
                                 marginRight:"3px"
                            }}>
                               {result?.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             
                            </Typography>
                            ))}
                        </Marquee>

                    </Box>
                </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={0.4} lg={0.4} >
            </Grid>
            <style>
                {`
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 1;
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
