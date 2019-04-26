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

class CharName extends React.Component {
  constructor() {
    super();
    this.state = {
      homePlanet: {}
    };
  }
  componentDidMount() {
    this.getPlanet(this.props.char.homeworld);
    console.log(this.props.char.homeworld);
    console.log(this.state);
  }

  getPlanet = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homePlanet: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div>
        <p className="name">{this.props.char.name}</p>
        <ul>
          <li>Birth Year: {this.props.char.birth_year}</li>
          <li>Weight: {this.props.char.mass}KG</li>
          <HomePlanet planet={this.state.homePlanet} />
        </ul>
      </div>
    );
  }
}

export default CharName;
