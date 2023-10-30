import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from './Card'

const Caro = () => {


    const breakPoints = [
        {
            width: 500,
            itemsToShow: 1
        },
        {
            width: 768,
            itemsToShow: 2
        },
        {
            width: 1200,
            itemsToShow: 3
        },
        {
            width: 1500,
            itemsToShow: 4
        },
    ]
    return (
        <div style={{ textAlign: "center" }}>
            <Carousel breakPoints={breakPoints}>
                <Card number="1" />
                <Card number="2" />
                <Card number="3" />
                <Card number="4" />
                <Card number="5" />
                <Card number="6" />
                <Card number="7" />
                <Card number="8" />
            </Carousel>

        </div>
    )
}

export default Caro
