import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Locations() {
  const [location, setLocation] = useState([]);
  useEffect(() =>
    axios.get("https://ghibliapi.herokuapp.com/locations")
      .then(response => {
        let { data } = response;
        console.log(data);
        setLocation(
          data.map(place => ({
            name: place.name,
            climate: place.climate,
            terrain: place.terrain,
            surface_water: place.surface_water,
            url: place.url
          }))
        )
      })
      .catch(err => console.error(err.message))
   , []);
  return (
    <div>
      <h1>Locations</h1>
      {location.map(place => (
        <div className="row">
        <div className="col-md-6">
          <div className="card" key={place.id}>
            {/* TODO fix cors issues in React */}
            <img src={place.url} className="card-img-top" alt="movie image" />
            <div className="card-body">
              <h3 className="card-title"> Place: {place.name}</h3>
              <h4>Climate: {place.climate}</h4>
              <p>Terrain: { place.terrain}</p>
              <p className="card-text">Surface Water: {place.surface_water}</p>
            </div>
          </div>
        </div>
      </div>
        ))}
    </div>
  )
}