import React from "react";

const WarmFuzzyItem = (props) => {

  const { date, title, description, elevatorEmail, recipientEmail } = props;
  let email, string;
  if (elevatorEmail) {
    email = elevatorEmail
    string = `Given by: ${email}`
  } else if (recipientEmail) {
    email = recipientEmail
    string = `Given to: ${email}`
  } else {
    email = [elevatorEmail, recipientEmail]
    string = `Given by: ${email[0]} \n\n Given to: ${email[1]}`
  }
  return (
    <div>
      <h4>{`Title: ${title}`}</h4>
      <p>{`Date given: ${date}`}</p>
      <p>{`Description: ${description}`}</p>
      <p>{string}</p>
    </div>
  )
}

export default WarmFuzzyItem;