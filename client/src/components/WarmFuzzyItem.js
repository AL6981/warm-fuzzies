import React, { useState } from "react";
import FrontWarmFuzzy from "../components/FrontWarmFuzzy";
import BackWarmFuzzy from "../components/BackWarmFuzzy";
import ReactCardFlip from 'react-card-flip';

const WarmFuzzyItem = (props) => {
  const { id, date, title, description, elevatorEmail, recipientEmail } = props.data;

  const [fuzzyIsFlipped, setFuzzyIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFuzzyIsFlipped(!fuzzyIsFlipped);
  }

  return (
    <div className="border-solid border-4 border-purple bg-gray-lightest rounded-2xl shadow-2xl">
      <ReactCardFlip flipDirection="horizontal" isFlipped={fuzzyIsFlipped}>
        <FrontWarmFuzzy
          key={id}
          title={title}
          handleClick={handleClick}
        />
        <BackWarmFuzzy
          key={id}
          title={title}
          date={date}
          description={description}
          recipientEmail={recipientEmail}
          elevatorEmail={elevatorEmail}
          handleClick={handleClick}
        />
      </ReactCardFlip>
    </div>
  )
}

export default WarmFuzzyItem;