import React from 'react'
import { Button } from "react-bootstrap"


const Map = (props) => {
    
    return (
        <div>
            <h2>What is the current location: </h2>
            <Button className="btn" onClick={props.getLocation}> Get Coordinates</Button>
            <p>Latitude: {props.lat}</p>
            <p>Longitude: {props.lng}</p>
            <p>Address: {props.restaurantAddress}</p>
            { props.lat && props.lng ? 
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69205.22634672919!2d-79.32689004932485!3d43.79143810559483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb726a906bbcc654!2sJatujak%20Thai%20Cuisine!5e0!3m2!1sen!2sca!4v1619732855052!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>: null
            }


        </div>
    )
}

export default Map
