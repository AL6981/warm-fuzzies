import React from "react";
import { Link } from 'react-router-dom';
import "../assets/scss/main.scss";

const Home = props => {
  return (
    <div>
      <h1>Warm Fuzzies</h1>
      <Link to='/'>Give</Link><br></br>
      <Link to='/'>Mine</Link><br></br>
      <Link to='/'>All</Link>
    </div>
  )
};

export default Home;
