import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import QuoteClient from '../apiClient/QuoteClient';

import SignInForm from "./SignInForm.js";

const SignInBox = () => {

  const [quote, setQuote] = useState({});
  useEffect(() => {
    const client = new QuoteClient;
    const randomQuote = client.getRandomQuote()
      .then(resp => {
        return resp;
      })
      .then(quote => {
        setQuote(quote)
      })
  }, []);

  return (
    <div className="text-center text-red-900">
      <SignInForm />
      <Link className="text-1xl text-gray-lightest mt-10 underline" to="/users/new">
        New to Warm Fuzzies? Sign Up!
      </Link>
      <br></br>
      <br></br>
      <div className="text-orange-lightest text-xl">{`"${quote.content}"`}</div>
      <div className="text-orange-lightest italic text-xl">{`~${quote.author}`}</div>

      <p></p>
    </div>
  )
};

export default SignInBox;
