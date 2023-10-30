// import React, { useEffect } from 'react'
// import { Typography, Card, CardContent, CardMedia, Container, Grid  , Box} from "@mui/material";
// import { useLocation } from 'react-router-dom';


// const FullNews = () => {

//     const { state } = useLocation();

//     return (
//             <Grid container   paddingBlock={2}>
//                 <Grid item xs={12} sm={12} md={10} lg={10} paddingBlock={2}>
//                     <Grid container>
//                         <Typography variant="h4" component="div" style={{ marginTop: "100px" }}>
//                             {state?.data?.title}
//                         </Typography>
//                     </Grid>
//                     <Grid>
//                         <img src={state?.data?.photo} style={{height:"400px" , width:"400px"}}/>
//                     </Grid>
//                     <Grid>
//                         <Typography variant="h6" color="textSecondary" style={{ marginTop: "10px" }}>
//                             {state?.data?.description}
//                         </Typography>

//                     </Grid>
//                 </Grid>
//                 <Grid xs={12} sm={12} md={3} lg={2} paddingBlock={2} spacing={2}>
//                     <Typography style={{ backgroundColor: "gray", padding: "10px"  , marginTop:"100px"}}>
//                         Add Space
//                     </Typography>
//                 </Grid>
//             </Grid>
//     )
// }

// export default FullNews

import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid, Box } from "@mui/material";
import { useLocation } from 'react-router-dom';

function createMarkup(htmlContent) {
    return { __html: htmlContent };
}

const FullNews = () => {
    const { state } = useLocation();

    return (
        <Grid container paddingBlock={2} style={{ padding: "20px" }}>
            <Grid item xs={12} sm={12} md={10} lg={10} paddingBlock={2}>
                <Grid container>
                    <Typography variant="h4" component="div" style={{ marginTop: "100px" }}>
                        {state?.data?.title}
                    </Typography>
                </Grid>
                <Grid>
                    <img src={state?.data?.photo} style={{ height: "400px", width: "400px" }} />
                </Grid>
                <Grid>
                    <Typography variant="h6" color="textSecondary" style={{ marginTop: "10px" }} dangerouslySetInnerHTML={createMarkup(state?.data?.description)} />
                </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={2} paddingBlock={2} spacing={2}>
                <Typography style={{ backgroundColor: "gray", padding: "10px", marginTop: "100px" }}>
                    Add Space
                </Typography>
            </Grid>
        </Grid>
    );
}

export default FullNews;

