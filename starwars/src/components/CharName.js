import React from "react";
import HomePlanet from "./HomePlanet";
/*
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
*/
let emptyArray = [];

class CharName extends React.Component {
  constructor() {
    super();
    this.state = {
      homeworld: emptyArray
    };
  }
  componentDidMount() {
    this.getPlanet(this.props.char.homeworld);
  }

  getPlanet = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        emptyArray.push(data);
        this.setState({
          homeworld: emptyArray
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p className="name">{this.props.char.name}</p>
        <ul>
          <li>Birth Year: {this.props.char.birth_year}</li>
          <li>Weight: {this.props.char.mass}KG</li>
          <HomePlanet
            planet={this.state.homeworld}
            key={this.props.char.key}
            testPass={this.state.homeworld}
            charURL={this.props.char.homeworld}
          />
        </ul>
      </div>
    );
  }
}

export default CharName;
