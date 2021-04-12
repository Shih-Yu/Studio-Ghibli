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
              hairColor: person.hair_color,
              species: person.species,
              film: person.film,
              url: person.url,
            }))
          );
        })
        // catching errors and showing it
        .catch((err) => console.error(err.message)),
    []
  );
  // Rendering locations component
  return (
    <>
      <h1>People of Studio Ghibli</h1>
      {/* Using Container/Row/Col/Cards to style the page */}
      <Container fluid>
        <Row>
          {/* Mapping through the data and get each property in setState */}
          {people.map((person) => (
            <Col md="4" className="mb-3">
              <Card key={person.id}>
                <img src={person.url} alt="character" />
                <Card.Header as="h3" className="bg-primary text-center">
                  {person.name}
                </Card.Header>
                <Card.Body>
                  <Card.Text>Age: {person.age}</Card.Text>
                  <Card.Text>Gender: {person.gender}</Card.Text>
                  <Card.Text>Eye Color: {person.eyeColor}</Card.Text>
                  <Card.Text>Hair Color: {person.hairColor}</Card.Text>
                  {/* TODO Get image of species and url or link to it */}
                  <Card.Text>
                    Species: <Link>{person.species}</Link>
                  </Card.Text>
                  <Card.Text>
                    Appeared In: <Link>{person.url}</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
