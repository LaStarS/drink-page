import { Link } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/ShowDrinks">
        <div>Drinks</div>
      </Link>
      <Link to="/Form">
        <div>Search</div>
      </Link>
    </div>
  );
}

export default Nav;