import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Species() {
  const [species, setSpecies] = useState([]);
  useEffect(() =>
    axios.get("https://ghibliapi.herokuapp.com/species")
      .then(response => {
        console.log(response);
        let { data } = response
        setSpecies(
          data.map((specie) => ({
            name: specie.name,
            classification: specie.classification,
            eyeColor: specie.eye_colors,
            hairColor: specie.hair_colors,
            people: specie.people,
            films: specie.films
          }))
        )
         })
         .catch(err => console.error(err.message))
    , [])

  return (
    <div>
      <h1>Species</h1>
      {species.map(specie => (
        <div>
          <h1>{ specie.name}</h1>
          <p>Classification: { specie.classification}</p>
          <p>Hair colors: { specie.hairColor}</p>
          <p>Eye colors: { specie.eyeColor}</p>
          <p>People: { specie.people}</p>
          <p>Films: { specie.films}</p>
        </div>
      ))
      }
    </div>
  )
}
