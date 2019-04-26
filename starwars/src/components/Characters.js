import React from "react";
import CharName from "./CharName";
import "./StarWars.css";

function Characters(props) {
  let luke = props.chars[0];
  console.log(typeof luke);
  console.log(props.chars[0]);

  return (
    <div className="character-guy">
      {props.chars.map(char => (
        <CharName key={char.created} char={char} />
      ))}
    </div>
  );
}

export default Characters;
