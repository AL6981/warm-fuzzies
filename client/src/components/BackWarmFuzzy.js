import React from "react";


const BackWarmFuzzy = (props) => {
  const { date, title, description, elevatorEmail, recipientEmail, handleClick } = props;

  return (
    <div className="text-center align-middle place-self-center p-3 m-3 border-solid border-4 border-purple bg-gray-lightest rounded-2xl shadow-2xl" onClick={handleClick}>
      <div>
        <p> <span className="font-bold">Title:</span>{` ${title}`}</p>
        <p> <span className="font-bold">Date given:</span>{` ${date}`}</p>
        <p> <span className="font-bold">Description:</span>{` ${description}`}</p>
        <p> <span className="font-bold">Given by:</span>{` ${elevatorEmail}`}</p>
        <p> <span className="font-bold">Given to:</span>{` ${recipientEmail}`}</p>
      </div>
    </div>
  )
}

export default BackWarmFuzzy;