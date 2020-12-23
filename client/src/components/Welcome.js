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
      <h4 className="font-josefin font-bold text-gray-lightest text-3xl mb-4 pt-4">Welcome</h4>
      <div className="text-orange-lightest text-xl">{`"${quote.content}"`}</div>
      <div className="text-orange-lightest italic text-xl">{`~${quote.author}`}</div>

      <p></p>
    </div>
  )
};

export default Welcome;
