import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";




export default function Home() {
  return (
    <>
      <Jumbotron className="text-center mt-5 bg-info">
        <h1>Welcome To Studio Ghibli Info</h1>
        <h1>株式会社スタジオジブリ</h1>
      </Jumbotron>
    </>
  );
}
