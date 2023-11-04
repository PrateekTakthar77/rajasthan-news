import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import { Typography, Grid } from '@mui/material';

const HomeCard = ({ result, onClick }) => {
    
    function createMarkup(htmlContent) {
        return { __html: htmlContent };
    }
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>

            <Card variant="outlined">
                <CardActionArea onClick={onClick}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={result?.photo}
                        alt="Main Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            color: "#D2122E",
                            fontSize: "18px",
                            fontFamily:"Poppins", 
                            fontWeight: "500",
                            textAlign: "justify"
                        }}>
                            {result?.title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}>
                            {result?.description}
                        </Typography> */}
                        <Typography variant="body2" color="text.secondary" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            color: "black",
                            fontSize: "15px",
                            fontWeight: "500",
                            fontFamily:"Poppins",
                            textAlign: "justify"
                        }} dangerouslySetInnerHTML={createMarkup(result?.description)} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default HomeCard
