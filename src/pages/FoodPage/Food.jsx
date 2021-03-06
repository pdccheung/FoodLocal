import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Rating from "../../components/Rating/Rating";

const Food = (props) => {
  const foods = props.foods;
  const food = foods.find((f) => f._id === props.match.params.id);
  console.log("food is defined as", food)
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        <i className="fas fa-long-arrow-alt-left"> Home</i>
      </Link>
      <Row>
        <Col md={8}>
          <Image fluid src={food.imageUrl} alt={food.name} />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{food.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={food.rating} />
            </ListGroup.Item>
            <ListGroup.Item>
              User reported price: <br />${food.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: <br />
              {food.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Food;
