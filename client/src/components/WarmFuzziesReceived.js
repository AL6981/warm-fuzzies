import React, { useEffect, useState } from "react";
import UserClient from "../apiClient/UserClient";
import BackWarmFuzzy from "./BackWarmFuzzy";
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
      <BackWarmFuzzy
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
    <>
      <h3 className="my-3 font-bold font-rubik text-blue text-4xl text-center"> Warm Fuzzies Received </h3>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {allFuzzies}
      </div>
    </>
  );
};

export default WarmFuzziesReceived;
