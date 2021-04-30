
import {Row, Col} from "react-bootstrap"
import React from 'react'
import FoodItem from "../../components/FoodItem/FoodItem"



const HomePage = (props) => {
    const foods = props.foods

    return (
        <>
        
        <h1> Latest Food </h1>
        <Row>
            {foods.length ? 
            foods.map(food => (
                <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
                <FoodItem food={food}/>
                </Col>
            ))
            :
            <h5>No Foods posted yet. Get started here</h5>
        }
        </Row>
        </>
    )
}

export default HomePage
