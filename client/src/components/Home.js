import React from "react";
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import "../assets/scss/main.scss";

const Home = props => {
  return (
    <div>
      <h1>Warm Fuzzies</h1>
      <Link to='/users/new'>Sign up</Link>
    </div>
  )
};

export default Home;
