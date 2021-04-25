import React from 'react'
import { Card } from "react-bootstrap"

const FoodItem = (props) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/Foodlist/${props.food._id}`}>
                <Card.Img src={props.food.image} variant='top' />
            </a>

        </Card>
    )
}

export default FoodItem
