import { Component } from "react";
import "./App.css";

function App() {
  return (
    <>
      <SimpleCard />
    </>
  );
}

export default App;

function Title(props) {
  return <h1>{props.name}</h1>;
}

class Description extends Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

function Image(props) {
  return <img className="image" src={props.url} />;
}

class SimpleCard extends Component {
  render() {
    return (
      <>
        <div className="layout">
          <div className="image">
            <Image url="https://images.pexels.com/photos/3206078/pexels-photo-3206078.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
          <div>
            <div className="title">
              <Title name="Daniel Owusu" />
            </div>
            <div className="description">
              <Description message="A passionate software engineer with a focus on developing efficient, reusable, and scalable solutions. Skilled in JavaScript and React, with hands-on experience in projects like game development, sorting visualizations, and interactive applications. Driven by a love for continuous learning, I combine innovation and structured problem-solving to create impactful software that meets user needs." />
            </div>
          </div>
        </div>
      </>
    );
  }
}
