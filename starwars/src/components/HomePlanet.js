import React from "react";

/*
function HomePlanet(props) {
    props.planet.map(item =>( {
	if (item.url === props.charURL)
	    let something = item.name;
    }
			    ))}
  return (
    <div>
	 something
    </div>
  );
    
    }

*/
let fakeArray = [];
let fakeArray2 = fakeArray.pop();
class HomePlanet extends React.Component {
  constructor() {
    super();
    this.state = {
      what: []
    };
  }

  bla() {
    this.setState({
      what: this.props.testPass
    });
  }

  kaa() {
    this.state.map(item => {
      if (item.url === "https://swapi.co/api/planets/8/") {
        return item.name;
      }
    });
  }

  render() {
    return (
      <div>
        {this.props.testPass.map(item => {
          if (item.url === this.props.charURL) {
            fakeArray.push(item.name);
          }
        })}
        <p>{fakeArray.pop()}</p>
      </div>
    );
  }
}
export default HomePlanet;
