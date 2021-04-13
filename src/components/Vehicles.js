// Import dependences
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Create functional component and export it
export default function Vehicles() {
  // Declaring and setting state
  const [vehicles, setVehicles] = useState([]);
  // Invoking useEffect to get data from api
  useEffect(() => {
    // Using axios to getch from api
    axios
      .get("https://ghibliapi.herokuapp.com/vehicles")
      .then((response) => {
        console.log(response);
        let { data } = response;
        setVehicles(
          data.map((vehicle) => ({
            id: vehicle.id,
            name: vehicle.name,
            class: vehicle.vehicle_class,
            length: vehicle.length,
            description: vehicle.description
          }))
        );
      })
      // catching errors and showing it
      .catch((err) => console.error(err.message));
  }, []);
  // Rendering vehicle component
  return (
    <>
      <h1 className="m-5">Vehicles</h1>
      {/* Using Container/Row/Col/Cards to style the page */}
      <Container fluid>
        <Row>
          {/* Mapping through the data and get each property in setState */}
          {vehicles.map((vehicle) => (
            <Col md="4" className="mb-3">
              <Card key={vehicle.id}>
                <Card.Header as="h3" className="bg-info text-center">{vehicle.name}</Card.Header>
                <Card.Body className="bg-secondary">
                <Card.Text>Class: {vehicle.class}</Card.Text>
                <Card.Text>Length: {vehicle.length}</Card.Text>
                  <Card.Text>Description: { vehicle.description }</Card.Text>
                  </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
