import React, { useEffect, useState } from "react";
import UserClient from "../apiClient/UserClient";
import WarmFuzzyItem from "./WarmFuzzyItem";
import { useAuthentication } from "../providers/Authentication";

const WarmFuzziesReceived = (props) => {
  const { user } = useAuthentication();
  const [warmFuzzies, setWarmFuzzies] = useState([]);

  const fetchWarmFuzziesReceived = () => {
    const client = new UserClient()
    const allWarmFuzzies = client.getReceivedFuzzies(user.userId)
      .then(resp => {
        return resp;
      })
      .then(fuzzies => {
        setWarmFuzzies(fuzzies)
      })
  }

  useEffect(fetchWarmFuzziesReceived, []);

  const allFuzzies = warmFuzzies.map((fuzzy => {
    let showAllEmail;
    return (
      <WarmFuzzyItem
        key={fuzzy.id}
        title={fuzzy.title}
        description={fuzzy.description}
        elevatorId={fuzzy.elevatorId}
        recipientId={fuzzy.recipientId}
        elevatorEmail={fuzzy.elevatorEmail}
        date={fuzzy.date}
        showAllEmail={"elevator"}
      />)
  }))

  return (
    <div className="centered-box">
      <div className="form-container">
        <h3 className="font-thin my-3"> WarmFuzzies Received </h3>
        {allFuzzies}
      </div>
    </div>
  );
};

export default WarmFuzziesReceived;
