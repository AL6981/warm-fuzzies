import React, { useEffect, useState } from "react";
import UserClient from "../apiClient/UserClient";
import WarmFuzzyItem from "./WarmFuzzyItem";
import { useAuthentication } from "../providers/Authentication";

const WarmFuzziesGiven = (props) => {
  const { user } = useAuthentication();
  const [warmFuzzies, setWarmFuzzies] = useState([]);

  const fetchWarmFuzzies = () => {
    const client = new UserClient()
    const allWarmFuzzies = client.getGivenFuzzies(user.userId)
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
        description={fuzzy.description}
        elevatorId={fuzzy.elevatorId}
        recipientId={fuzzy.recipientId}
        recipientEmail={fuzzy.recipientEmail}
        date={fuzzy.date}
        showAllEmail={"recipient"}
      />)
  }))

  return (
    <div className="centered-box">
      <div className="form-container">
        <h3 className="font-thin my-3"> WarmFuzzies Given </h3>
        {allFuzzies}
      </div>
    </div>
  );
};

export default WarmFuzziesGiven;
