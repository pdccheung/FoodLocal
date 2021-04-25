import foods from "../../Foodlist";
import {Row, Col} from "react-bootstrap"
import React from 'react'
import FoodItem from "../../components/FoodItem/FoodItem"

const HomePage = () => {
    return (
        <>
        <h1> Latest Food </h1>
        <Row>
            {foods.map(food => (
                <Col sm={12} md={6} lg={4} xl={3}>
                <FoodItem food={food}/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default HomePage
