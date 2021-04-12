// Import dependences
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Create functional component and export it
export default function Films() {
  // Declaring and setting state
  const [films, setFilms] = useState([]);
  // Invoking useEffect to get data from api
  useEffect(
    () =>
      // Using axios to getch from api
      axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((response) => {
          let { data } = response;
          // console.log(data);
          setFilms(
            data.map((film) => ({
              title: film.title,
              original_title: film.original_title,
              description: film.description,
              url: film.url,
              release: film.release_date,
              director: film.director,
            }))
          );
        })
        // catching errors and showing it
        .catch((err) => console.error(err.message)),
    []
  );

  // Rendering film component
  return (
    <>
      <h1>Welcome to the film page</h1>
      {/* Using Container/Row/Col/Cards to style the page */}
      <Container fluid>
        <Row>
          {/* Mapping through the data and get each property in setState */}
          {films.map((film) => (
            <Col md="4" className="mb-3">
              <Card key={film.id}>
                {/* TODO fix cors issues in React */}
                <img variant="top" src={film.url} alt="movie poster" />
                <Card.Header as="h3" className="bg-info text-center">
                  {film.title} - {film.release}
                </Card.Header>
                <Card.Body>
                  <Card.Text as="h3">{film.original_title}</Card.Text>
                  <Card.Text>{film.director}</Card.Text>
                  <Card.Text className="card-text text-secondary">{film.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
