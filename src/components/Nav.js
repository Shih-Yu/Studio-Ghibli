import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Nav() {
  return (
    <>
      <Container fluid>
        <Navbar className="text-center justify-content-between pr-5 fs-4">
          <Navbar.Brand className="fs-1">株式会社スタジオジブリ</Navbar.Brand>
          <Link className="text-info" to="/">
            Home
          </Link>
          <Link className="text-info" to="/films">
            Films
          </Link>
          <Link className="text-info" to="/locations">
            Locations
          </Link>
          <Link className="text-info" to="/people">
            People
          </Link>
          <Link className="text-info" to="/species">
            Species
          </Link>
          <Link className="text-info" to="/vehicles">
            Vehicles
          </Link>
        </Navbar>
      </Container>
    </>
  );
}
