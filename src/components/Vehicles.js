import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios.get("https://ghibliapi.herokuapp.com/vehicles")
      .then(response => {
        console.log(response);
        let {data} = response
        setVehicles(
          data.map(vehicle => (
            {
              name: vehicle.name,
              class: vehicle.vehicle_class,
              length: vehicle.length,
              pilot: vehicle.pilot,
              description: vehicle.description
            }))
        )
         })
         .catch(err => console.error(err.message))
  }, [])
  return (
    <div>
      <h1>Vehicles</h1>
      {vehicles.map(vehicle => (
        <div>
          <h3>{ vehicle.name}</h3>
          <p>Class: { vehicle.class}</p>
          <p>Length: { vehicle.length}</p>
          <p>Pilot: { vehicle.pilot}</p>
          <p>Description: { vehicle.description}</p>
        </div>
      ))}
    </div>
  )
}
