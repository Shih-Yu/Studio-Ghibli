import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function People() {
  const [people, setPeople] = useState([]);
  
  useEffect(() =>
    axios.get("https://ghibliapi.herokuapp.com/people")
      .then(response => {
        console.log(response);
        let { data } = response;
        setPeople(
          data.map(person => (
            {
              name: person.name,
              age: person.age,
              gender: person.gender,
              eyeColor: person.eye_color,
              hairColor: person.hair_color,
              species: person.species,
              film: person.film,
              url: person.url

            }
          ))
        )
      }
        )
       .catch(err => console.error(err.message))
  , []);
  return (
    <div>
      <h1>People of Studio Ghibli</h1>
      {people.map(person => (
        <div className="row">
          <div className="col-md-6">
            <div className="card" key={person.id}>
              <img src={person.url} alt="character"/>
              <h3>{ person.name }</h3>
              <p>Age: { person.age}</p>
              <p>Gender: { person.gender }</p>
              <p>Eye Color: { person.eyeColor }</p>
              <p>Hair Color: { person.hairColor }</p>
              {/* TODO Get image of species and url or link to it */}
              <p>Species: <Link>{ person.species }</Link></p>
              <p>Appeared In: <Link>{ person.url }</Link></p>
            </div>
          </div>
        </div>
        ))}
    </div>
    
  )
}