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
    <div className="hover:from-orange-lightest hover:to-pink-lightest bg-orange-lightest rounded-md p-2 m-3">
      <div>
        <p className="font-bold">Title:</p>
        <p className="p-1">{`${title}`}</p>
      </div>
      <div>
        <p className="font-bold">Date given:</p>
        <p className="p-1">{`${date}`}</p>
      </div>
      <div>
        <p className="font-bold">Description:</p>
        <p className="p-1">{`${description}`}</p>
      </div>
      <div>
        <p className="p-1">{`${string}`}</p>
      </div>
    </div>
  )
}

export default WarmFuzzyItem;