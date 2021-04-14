// Import dependences
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Create functional component and export it
export default function People() {
  // Declaring and setting state
  const [people, setPeople] = useState([]);
  // Invoking useEffect to get data from api
  useEffect(
    () =>
      // Using axios to getch from api
      axios
        .get("https://ghibliapi.herokuapp.com/people")
        .then((response) => {
          console.log(response);
          let { data } = response;
          setPeople(
            data.map((person) => ({
              name: person.name,
              age: person.age,
              gender: person.gender,
              eyeColor: person.eye_color,
              hairColor: person.hair_color
            }))
          );
        })
        // catching errors and showing it
        .catch((err) => console.error(err.message)),
    []
  );
  // Rendering people component
  return (
    <>
      <h1 className="m-5">People of Studio Ghibli</h1>
      {/* Using Container/Row/Col/Cards to style the page */}
      <Container fluid>
        <Row>
          {/* Mapping through the data and get each property in setState */}
          {people.map((person) => (
            <Col md="4" className="mb-3">
              <Card key={person.id} style={{borderColor: "#000", backgroundColor: "#3cadef"}}>
                <Card.Header as="h3" className="text-center" style={{backgroundColor: "#3cadef"}}>
                  {person.name}
                </Card.Header>
                <Card.Body className="text-light">
                  <Card.Text>Age: {person.age}</Card.Text>
                  <Card.Text>Gender: {person.gender}</Card.Text>
                  <Card.Text>Eye Color: {person.eyeColor}</Card.Text>
                  <Card.Text>Hair Color: {person.hairColor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
