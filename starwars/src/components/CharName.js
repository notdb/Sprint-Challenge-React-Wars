import React from "react";

function CharName(props) {
  return (
    <div>
      <p className="name">{props.char.name}</p>
      <ul>
        <li>Birth Year: {props.char.birth_year}</li>
        <li>Weight: {props.char.mass}KG</li>
      </ul>
    </div>
  );
}

export default CharName;
