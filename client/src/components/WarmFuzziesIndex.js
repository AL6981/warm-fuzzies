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
        setWarmFuzzies(fuzzies)
      })
  }

  useEffect(fetchWarmFuzzies, []);

  const allFuzzies = warmFuzzies.map((fuzzy => {
    return (
      <WarmFuzzyItem
        key={fuzzy.id}
        title={fuzzy.title}
        date={fuzzy.date}
        description={fuzzy.description}
        elevatorId={fuzzy.elevatorId}
        recipientId={fuzzy.recipientId}
        recipientEmail={fuzzy.recipientEmail}
        elevatorEmail={fuzzy.elevatorEmail}
      />)
  }))

  return (
    <div className="centered-box">
      <h3 className="font-thin my-3"> ALLLLLL the WarmFuzzies! </h3>
      <div className="space-y-4">
        {allFuzzies}
      </div>
    </div>
  );
};

export default WarmFuzziesIndex;
