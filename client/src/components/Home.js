import React from "react";
import { Link } from 'react-router-dom';
import "../assets/scss/main.scss";

const Home = props => {
  return (
    <div>
      <h1>Warm Fuzzies</h1>
      <Link to='/warm-fuzzies/new'>Give</Link><br></br>
      <Link to='/'>Mine</Link><br></br>
      <Link to='/warm-fuzzies/index'>All</Link>
    </div>
  )
};

export default Home;
