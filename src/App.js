import React, { Component } from "react";
import "./App.css";

import randomNumber from './service/Random';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Skill from "./components/pages/Skill";
import SnowStorm from 'react-snowstorm';

import data from "./data.json";


library.add(faIgloo)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { background: "#303f9f", color: "#ffffff" };
    this.colorChange = this.colorChange.bind(this);
  }

  setSnowColor(color) {
    var style = document.getElementById("snow-color");

    if (style != null) {
      style.parentNode.removeChild(style);

      style = document.createElement('style');
      style.id = "snow-color";
      style.type = 'text/css';
      style.innerHTML = `.___snowStorm___ { color: ${color} !important; }`;
      document.getElementsByTagName('head')[0].appendChild(style);
    }


  }

  colorChange() {

    let data = require('./data.json');

    const { length } = data.themes;

    let index = randomNumber(0, length);

    let theme = data.themes[index];

    this.setState({
      background: theme.background,
      color: theme.color
    })

  }

  render() {



    const background = this.state.background;
    const color = this.state.color;
    this.setSnowColor(color);
    return (

      <div className="App">

        <SnowStorm  followMouse={false} snowColor={color}></SnowStorm>
        <Welcome context={data.welcome}  menu={data.menu} background={background} color={color} colorChange={this.colorChange.bind(this)}></Welcome>
        <About context={data.about} background={background} color={color}></About>
        <Skill context={data.skill} background={background} color={color}></Skill>


      </div>
    );
  }
}

export default App;
