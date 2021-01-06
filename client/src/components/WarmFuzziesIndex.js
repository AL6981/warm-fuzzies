import React, { useEffect, useState } from "react";
import WarmFuzzyClient from "../apiClient/WarmFuzzyClient";
import WarmFuzzyItem from "./WarmFuzzyItem";
import { useAuthentication } from "../providers/Authentication";

const WarmFuzziesIndex = (props) => {
  const { user } = useAuthentication();
  const [warmFuzzies, setWarmFuzzies] = useState([]);

  const fetchWarmFuzzies = () => {
    const client = new WarmFuzzyClient()
    const allWarmFuzzies = client.getAllFuzzies()
      .then(resp => {
        return resp;
      })
      .then(fuzzies => {
        setWarmFuzzies(fuzzies)
      })
  }

  useEffect(fetchWarmFuzzies, []);

  const allFuzzies = warmFuzzies.map((fuzzy => {
    return (
      <WarmFuzzyItem
        key={fuzzy.id}
        data={fuzzy}
      />
    )
  }))

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {allFuzzies}
      </div >
    </>
  );
};

export default WarmFuzziesIndex;
