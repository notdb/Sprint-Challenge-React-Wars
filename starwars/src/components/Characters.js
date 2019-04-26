import React from "react";
import CharName from "./CharName";
import "./StarWars.css";

function Characters(props) {
  return (
    <div className="character-guy">
      {props.chars.map(char => (
        <CharName key={char.created} char={char} />
      ))}
    </div>
  );
}

export default Characters;
