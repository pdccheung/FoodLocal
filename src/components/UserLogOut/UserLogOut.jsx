import React, { Component }  from 'react';
import './UserLogOut.css'
import { Redirect } from "react-router-dom";



class UserLogOut extends Component {
  state ={
    navigate: false
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({navigate: true});
  }
  
  render() {
      const { navigate } = this.state;
      if (navigate){
        return(<Redirect to="/" push={true} />);
      }
      return (
        <div className='UserLogOut'>
          <button className="" onClick={this.logout} >Logout</button>
        </div>
      )
  }
}

export default UserLogOut;