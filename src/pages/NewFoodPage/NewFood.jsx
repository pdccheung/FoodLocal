import React, {Component} from "react"
import UserLogOut from "../../components/UserLogOut/UserLogOut"
import { Link } from "react-router-dom"


class NewFood extends Component {
    render() {
        return(
            <div>
                <h1>Add new food item here</h1>
                <Link to="/userfood" className="button btn-sm">My Food items</Link><br /><br />
                <Link to="/food" className="button btn-sm"> All Food</Link><br /><br />
                <UserLogOut />
            </div>
        )
    }
}

export default NewFood