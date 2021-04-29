import React from "react"
import FoodItem from "../../components/FoodItem/FoodItem";
// import UserLogOut from "../../components/UserLogOut/UserLogOut"
// import { Link } from "react-router-dom"
// import Food from "../../../models/food"
import {Col, Row} from "react-bootstrap"

const UserFoodPage =  async (props) => {
    const foods = props.foods;
    foods.map(f => console.log(f))
    const userId = (props.user)._id;
    console.log("user id is ", userId, typeof(userId))

    return (
        <div>
        <h1> Here is your local food tour: </h1>
        <Row>
            {foods.length ? 
            foods.map(food => (
                <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
                <FoodItem food={food}/>
                </Col>
            ))
            :
            <h5>Looks like you don't have any posts yet...Don't be like Joey, share your food</h5>
        }
        </Row>

        </div>
    )
}

export default UserFoodPage

