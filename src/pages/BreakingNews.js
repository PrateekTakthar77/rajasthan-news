import React from 'react'

import { Grid, Box } from '@mui/material'
import { MarginOutlined } from '@mui/icons-material'

const BreakingNews = () => {
    return (
        <Grid container>

            <Grid item xs={12} sm={12} md={1} lg={1} ></Grid>

            <Grid item xs={12} sm={12} md={10} lg={10} >
                <Box sx={{
                    // width: '100%',
                    // maxWidth: '1100px',
                    height: 'auto',
                    backgroundColor: 'red',
                    margin: '0 auto',
                    marginTop: 10,
                    borderRadius: '20px',
                    marginLeft:"20px",
                    marginRight:"20px"
                }}>
                    <h5 style={{ fontSize: 20, color: "#fff", padding:"10px" }}>BREAKING   NEWS | सोशल मीडिया पर एक कार पर हुए हमले का वीडियो तेजी से वायरल हो रहा है</h5>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} >
            </Grid>


        </Grid>
    )
}

export default BreakingNews
