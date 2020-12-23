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
    let showAllEmail;
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
        showAllEmail={true}
      />)
  }))

  return (
    <div className="grid grid-col-3">
      <h3 className="font-josefin font-bold text-gray-lightest text-4xl pt-3"> ALLLLLL the WarmFuzzies! </h3>
      {allFuzzies}
    </div>
  );
};

export default WarmFuzziesIndex;
