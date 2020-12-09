import React from "react";

const WarmFuzzyItem = (props) => {
  const { date, title, description, elevatorEmail, recipientEmail } = props;
  let email, userEmail;
  if (elevatorEmail) {
    email = elevatorEmail
    userEmail = "Given by: "
  } else {
    email = recipientEmail
    userEmail = "Given to: "
  }
  return (
    <div>
      <h4>{`Title: ${title}`}</h4>
      <p>{`Date given: ${date}`}</p>
      <p>{`Description: ${description}`}</p>
      <p>{`${userEmail} ${email}`}</p>
    </div>
  )
}

export default WarmFuzzyItem;