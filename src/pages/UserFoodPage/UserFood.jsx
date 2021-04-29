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
        <h1> Your food posts: </h1>
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


// class UserFoodPage extends Component {

//     render(props) { 
//         const foods = props.foods;
//            console.log(foods)
//         return(
//             <div>
//                 <h1>User Food Page</h1>


// {/* 
//                 <Link to="/food" className="button btn-sm">All food</Link><br /><br />
//                 <Link to="/userfood/new" className="button btn-sm">Add Food</Link><br /><br />
//                 <UserLogOut /> */}


//             </div>
//         )
//     }
// }

// export default UserFoodPage