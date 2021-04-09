import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h5>株式会社スタジオジブリ</h5>
       <Link to="/">Home</Link>
       <Link to="/films">Films</Link>
       <Link to="/locations">Locations</Link>
       <Link to="/people">People</Link>
       <Link to="/species">Species</Link>
       <Link to="/vehicles">Vehicles</Link>
    </div>
  )
}
