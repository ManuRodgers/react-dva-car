import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Icon } from "antd";

class BigPic extends Component {
  render() {
    const { images, position, dispatch } = this.props;
    const { color, album } = position;

    const currentImageURL = images[position.idx];
    return (
      <div className="bigPic">
        <div className="leftButton">
          <span
            className="leftArrow"
            onClick={() => {
              console.log(`previous`);
              dispatch({ type: "carShow/goPrevious" });
            }}
          >
            <Icon type="left" />
          </span>
        </div>
        {currentImageURL ? (
          <img
            src={`../../images/Corolla/${color}/${album}/${currentImageURL}`}
          />
        ) : null}
        <div className="rightButton">
          <span
            className="rightArrow"
            onClick={() => {
              console.log(`next`);
              dispatch({ type: "carShow/goNext" });
            }}
          >
            <Icon type="right" />
          </span>
        </div>
      </div>
    );
  }
}

BigPic.propTypes = {};

const mapStateToProps = ({ carShow }) => ({
  images: (() => {
    if (carShow.images[carShow.position.color]) {
      return carShow.images[carShow.position.color][carShow.position.album];
    } else {
      return [];
    }
  })(),
  position: carShow.position
});

export default connect(mapStateToProps)(BigPic);
