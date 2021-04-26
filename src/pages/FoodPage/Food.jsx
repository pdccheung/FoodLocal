import React, {Component} from "react"
import UserLogOut from "../../components/UserLogOut/UserLogOut"
import { Link } from "react-router-dom"


class Food extends Component {
    render() {  
        // modifiy this to show individual food item
    //     const FoodItem = ({match}) => (
    //     <h1>Food id is: {match.params.id}</h1>
    //   );
    //   mod the above
        return(
            <div>
                <h1> Food Page</h1>
                <Link to="/userfood" className="button btn-sm">My Food items</Link><br /><br />
                <Link to="/userfood/new" className="button btn-sm">Add Food</Link><br /><br />
                <UserLogOut />
            </div>
        )
    }
}

export default Food