import React, {Component} from "react"
import UserLogOut from "../../components/UserLogOut/UserLogOut"
import { Link } from "react-router-dom"


class UserFoodPage extends Component {
    render() {
        return(
            <div>
                <h1>User Food Page</h1>
                <Link to="/food" className="button btn-sm">All food</Link><br /><br />
                <Link to="/userfood/new" className="button btn-sm">Add Food</Link><br /><br />
                <UserLogOut />
            </div>
        )
    }
}

export default UserFoodPage