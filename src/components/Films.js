import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(
    () =>
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
              director: film.director
            }))
          );
        })
        .catch((err) => console.error(err.message)),
    []
  );

  return (
    <div>
      <h1>Welcome to the film page</h1>
      {films.map((film) => (
        <div className="row">
          <div className="col-md-6">
            <div className="card" key={film.id}>
              {/* TODO fix cors issues in React */}
              <img src={film.url} className="card-img-top" alt="movie poster" />
              <div className="card-body">
                <h2 className="card-title">
                  {film.title} - {film.release}
                </h2>
                <h3>{film.original_title}</h3>
                <h6>{film.director}</h6>
                <p className="card-text text-secondary">{film.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
