import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "dva";

class Picker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images, position, dispatch } = this.props;

    const currentColor = position ? position.color : null;
    const currentAlbum = position ? position.album : null;

    const Albums = images[currentColor] || {};

    return (
      <div className="picker">
        <ul className="album">
          {Object.keys(Albums)
            .reverse()
            .map((album, index) => {
              return (
                <li
                  onClick={() => {
                    dispatch({
                      type: "carShow/changeAlbum",
                      payload: { album }
                    });
                  }}
                  className={classnames({ cur: currentAlbum == album })}
                  key={index}
                >
                  {album}
                  {`(${Albums[album].length})`}
                </li>
              );
            })}
        </ul>
        <div className="cl" />
        <ul className="color">
          {Object.keys(images).map((color, index) => {
            return (
              <li
                onClick={() => {
                  dispatch({
                    type: "carShow/changeColor",
                    payload: { color }
                  });
                }}
                className={classnames({ cur: currentColor == color })}
                key={index}
                style={{ backgroundColor: color }}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Picker.propTypes = {
  images: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ carShow }) => ({
  images: carShow.images,
  position: carShow.position
});

export default connect(mapStateToProps)(Picker);
