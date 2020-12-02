import React from "react";

const WarmFuzzyItem = (props) => {
  const { title, description } = props;

  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default WarmFuzzyItem;