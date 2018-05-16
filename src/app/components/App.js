import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";

class App extends Component {
  render() {
    return <div>you suck hello {this.props.v}</div>;
  }
}

App.propTypes = {};

const mapStateToProps = ({ todo }) => ({
  v: todo.v
});

export default connect(mapStateToProps)(App);
