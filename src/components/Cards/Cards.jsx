import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
const Cards = ({ title, subTitle }) => {
  return (
    <Card
      style={{ width: "20rem" }}
      className="hover:bg-yellow-500 transition  bg-black text-white">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          accusantium eaque placeat maxime quos ratione. Culpa vel voluptatem
          aperiam! Perspiciatis quod iusto placeat ea in natus reprehenderit
          laboriosam ipsam voluptatem?
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
