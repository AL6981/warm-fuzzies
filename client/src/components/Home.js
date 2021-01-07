import React from "react";
import { Link } from 'react-router-dom';
import { useAuthentication } from "../providers/Authentication";
import "../assets/scss/main.css";

const Home = props => {
  const { user } = useAuthentication();
  return (
    <>
      <h1 className="font-josefin font-bold text-gray-lightest text-4xl mt-5">Warm Fuzzies</h1>
      <div className="grid grid-cols-3">
        <div className="max-w-md col-span-2 my-7 bg-orange-lightest rounded-2xl">
          <Link className="text-black text-2xl m-3" to='/warm-fuzzies/new'>
            Give A Fuzzy
        </Link>
        </div>
        <div className="max-w-md col-span-2 my-7 bg-orange-light rounded-2xl">
          <Link className="text-black text-2xl m-3" to={`/users/${user.userId}/warm-fuzzies/given`}>
            Fuzzies You've Given
        </Link>
        </div>
        <div className="max-w-md col-span-2 my-7 bg-orange rounded-2xl">
          <Link className="text-black-lightest text-2xl m-3" to={`/users/${user.userId}/warm-fuzzies/received`}>
            Fuzzies You've Received
        </Link>
        </div>
        <div className="max-w-md col-span-2 my-7 bg-orange-darkest rounded-2xl">
          <Link className="text-black-lightest text-2xl m-3" to='/warm-fuzzies'>
            All Da Fuzzies!
      </Link>
        </div>
      </div>
    </>
  )
};

export default Home;
