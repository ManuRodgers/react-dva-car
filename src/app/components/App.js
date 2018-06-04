import React, { Component } from "react";
import PropTypes from "prop-types";
import CarPick from "./CarPick";
import "../../styles/less.less";

class App extends Component {
  render() {
    return (
      <div>
        <CarPick />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
