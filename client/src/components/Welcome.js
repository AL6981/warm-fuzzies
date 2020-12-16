import React, { useEffect, useState } from "react";
import QuoteClient from '../apiClient/QuoteClient';

const Welcome = () => {
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
      <h4>Welcome</h4>
      <div>{`"${quote.content}"`}</div>
      <div>{`~${quote.author}`}</div>

      <p></p>
    </div>
  )
};

export default Welcome;
