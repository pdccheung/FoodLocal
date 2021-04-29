import React from "react"
import FoodItem from "../../components/FoodItem/FoodItem";
// import UserLogOut from "../../components/UserLogOut/UserLogOut"
// import { Link } from "react-router-dom"
// import Food from "../../../models/food"
import {Col, Row} from "react-bootstrap"

const UserFoodPage =   (props) => {
//    const userId = (props.user)._id; 
   
   
   const foods = []
   console.log(foods)

   return (
       <>
       
       <h1> Your previous meals: </h1>
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
       </>
   )
}


export default UserFoodPage

