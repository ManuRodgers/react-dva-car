import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";

import Picker from "./Picker";
import PicNav from "./PicNav";

import "../../styles/less.less";

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch({ type: "carShow/init_async" });
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div className="albumWrapper">
        <div className="rightPart">
          <div className="titleBox">
            <h1>BMW X4</h1>
            <h3>2018 1.8T</h3>
          </div>
          <div className="cl" />
          <Picker />
          <div className="cl" />
          <PicNav />
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default connect(null)(App);
