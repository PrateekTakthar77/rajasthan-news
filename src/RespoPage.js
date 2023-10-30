import React from 'react'
import { Typography, Card, CardContent, CardMedia, Container } from "@mui/material";


const RespoPage = () => {
    return (
        <>
        
        <Container maxWidth="lg">
            {/* <Card> */}
                
                <CardContent>
                    <Typography variant="h4" component="div">
                        Chandrayaan-3 Lander Module generated spectacular 'ejecta halo' of lunar material on Aug 23
                    </Typography>
                    <CardMedia
                    component="img"
                    height="300"
                    width="400"
                    image="https://images.wallpaperscraft.com/image/single/begonia_leaves_plant_1079460_1280x720.jpg"
                    alt="Image Alt Text"
                />
                    <Typography variant="body2" color="textSecondary">
                        Description goes here. You can add more text or content as needed.
                        On eight former Indian Navy personnel sentenced for the death penalty in Qatar, Congress leader Salman Khurshid said, "We cannot say anything until everything will come in front... I can express sadness for what has happened... It is not possible for us to accept that the personnel have done anything due to which they are getting punished...When there are relations between two countries, diplomatic ways can be created...This is an important thing for us because the message goes to the whole world..."
                    </Typography>
                </CardContent>
            {/* </Card> */}

        </Container>
        </>
    )
}

export default RespoPage
