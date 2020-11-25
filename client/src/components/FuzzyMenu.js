import React from "react";
import { Link } from 'react-router-dom'
import "../assets/scss/main.scss";

const FuzzyMenu = props => {
  return (
    <div>
      <h1>Warm Fuzzies Menu!</h1>
      <Link to='/'>Give</Link>
      <Link to='/'>Mine</Link>
    </div>
  )
};

export default FuzzyMenu;
