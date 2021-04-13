// Import dependences
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Create functional component and export it
export default function Species() {
  // Declaring and setting state
  const [species, setSpecies] = useState([]);
  // Invoking useEffect to get data from api
  useEffect(
    () =>
      // Using axios to getch from api
      axios
        .get("https://ghibliapi.herokuapp.com/species")
        .then((response) => {
          console.log(response);
          let { data } = response;
          setSpecies(
            data.map((specie) => ({
              name: specie.name,
              classification: specie.classification,
              eyeColor: specie.eye_colors,
              hairColor: specie.hair_colors,
              people: specie.people,
              films: specie.films,
            }))
          );
        })
        // catching errors and showing it
        .catch((err) => console.error(err.message)),
    []
  );
  // Rendering species component
  return (
    <>
      <h1 className="m-5">Species</h1>
      <Container fluid>
        <Row>
          {/* Using Container/Row/Col/Cards to style the page */}
          {/* Mapping through the data and get each property in setState */}
          {species.map((specie) => (
            <Col md="4" className="mb-3">
              <Card>
                <Card.Header as="h3" className="bg-info text-center">
                  {specie.name}
                </Card.Header>
                <Card.Body>
                  <Card.Text>Classification: {specie.classification}</Card.Text>
                  <Card.Text>Hair colors: {specie.hairColor}</Card.Text>
                  <Card.Text>Eye colors: {specie.eyeColor}</Card.Text>
                  <Card.Text>People: {specie.people}</Card.Text>
                  <Card.Text>Films: {specie.films}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
