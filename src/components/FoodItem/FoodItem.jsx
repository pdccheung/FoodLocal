import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom"

const FoodItem = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/food/${props.food._id}`}>
        <Card.Img src={props.food.imageUrl} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/food/${props.food._id}`}>
          <Card.Title>
            <strong>{props.food.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h5">${props.food.price}</Card.Text>
        <Card.Text as="div">
          <Rating
            value={props.food.rating}
            description={props.food.description}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FoodItem;
