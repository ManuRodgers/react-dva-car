import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";

import Picker from "./Picker";
import PicNav from "./PicNav";
import BigPic from "./BigPic";


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
        <div className="leftPart">
          <div className="inner">
            <BigPic />
          </div>
        </div>
        <div className="rightPart">
          <div className="titleBox">
            <h1>Corolla Sport</h1>
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
