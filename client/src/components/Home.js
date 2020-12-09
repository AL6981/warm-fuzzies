import React from "react";
import { Link } from 'react-router-dom';
import { useAuthentication } from "../providers/Authentication";
import "../assets/scss/main.scss";

const Home = props => {
  const { user } = useAuthentication();
  return (
    <div>
      <h1>Warm Fuzzies</h1>
      <Link to='/warm-fuzzies/new'>Give</Link><br></br>
      <Link to={`/users/${user.userId}/warm-fuzzies/given`}>Given</Link><br></br>
      <Link to={`/users/${user.userId}/warm-fuzzies/received`}>Received</Link><br></br>
      <Link to='/warm-fuzzies/index'>All</Link>
    </div >
  )
};

export default Home;
