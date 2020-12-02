import React, { useEffect, useState } from "react";
import WarmFuzzyClient from "../apiClient/WarmFuzzyClient";
import WarmFuzzyItem from "../components/WarmFuzzyItem";
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
        console.log("returned fuzzies here")
        setWarmFuzzies(fuzzies)
      })
  }

  useEffect(fetchWarmFuzzies, []);

  const allFuzzies = warmFuzzies.map((fuzzy => {
    return (
      <WarmFuzzyItem
        key={fuzzy.id}
        title={fuzzy.title}
        description={fuzzy.description}
        elevatorId={fuzzy.elevatorId}
        recipientId={fuzzy.recipientId}
      />)
  }))

  return (
    <div className="centered-box">
      <div className="form-container">
        <h3 className="font-thin my-3"> WarmFuzzies Index </h3>
        {allFuzzies}
      </div>
    </div>
  );
};

export default WarmFuzziesIndex;
