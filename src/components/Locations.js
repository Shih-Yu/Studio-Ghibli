// Import dependences
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Create functional component and export it
export default function Locations() {
  // Declaring and setting state
  const [location, setLocation] = useState([]);
  // Invoking useEffect to get data from api
  useEffect(
    () =>
      // Using axios to getch from api
      axios
        .get("https://ghibliapi.herokuapp.com/locations")
        .then((response) => {
          let { data } = response;
          console.log(data);
          setLocation(
            data.map((place) => ({
              name: place.name,
              climate: place.climate,
              terrain: place.terrain,
              surface_water: place.surface_water,
              url: place.url,
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
      <h1 className="m-5">Locations</h1>
      {/* Using Container/Row/Col/Cards to style the page */}
      <Container fluid>
        <Row>
          {/* Mapping through the data and get each property in setState */}
          {location.map((place) => (
            <Col md="4" className="mb-3">
              <Card key={place.id}>
                {/* TODO fix cors issues in React */}
                <img variant="top" src={place.url} alt="movie" />
                  <Card.Header as="h3" className="bg-info text-center">{place.name}</Card.Header>
                <Card.Body>
                  <Card.Text>Climate: {place.climate}</Card.Text>
                  <Card.Text>Terrain: {place.terrain}</Card.Text>
                  <Card.Text>Surface Water: {place.surface_water}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
