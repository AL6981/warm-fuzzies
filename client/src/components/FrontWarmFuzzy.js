import React from "react";

const FrontWarmFuzzy = (props) => {
  const { title, handleClick } = props
  return (
    <div onClick={handleClick} className="p-2 m-3 text-center align-middle place-self-center">
      <p> <span className="font-bold">Title:</span> {` ${title}`}</p>
    </div>
  )
}

export default FrontWarmFuzzy;