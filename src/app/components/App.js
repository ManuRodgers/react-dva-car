import React, { Component } from "react";
import PropTypes from "prop-types";
import CarPick from "./CarPick";
import CarShow from "./CarShow";
import { Table, Divider, Icon, Button, Input } from "antd";
import "../../styles/less.less";

class App extends Component {
  render() {
    return (
      <div>
        <CarShow />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
