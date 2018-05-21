import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import classnames from "classnames";

class PicNav extends Component {
  showPanel = () => {
    const { images, position, dispatch } = this.props;

    const length = images.length;
    if (length > 0) {
      let ARR = [];
      for (let i = 0; i < Math.ceil(length / 6); i++) {
        ARR.push(
          <ul key={i}>
            {images.slice(i * 6, i * 6 + 6).map((item, index) => {
              return (
                <li
                  onClick={() => {
                    dispatch({ type: "carShow/changeIdx", payload: { index } });
                  }}
                  className={classnames({ cur: position.idx == i * 6 + index })}
                  key={index}
                >
                  <img
                    src={`../../images/Corolla/${position.color}/${
                      position.album
                    }/${item}`}
                  />
                </li>
              );
            })}
          </ul>
        );
      }

      return ARR;
    } else {
      return [];
    }
  };

  componentDidMount = () => {
    let self = this;
    $(this.refs.ol).delegate("li", "mouseenter", function() {
      $(this)
        .addClass("cur")
        .siblings()
        .removeClass("cur");
      // move unit
      $(self.refs.unit)
        .stop(true)
        .animate({ left: -290 * $(this).data("pagenumber") }, 400);
    });

    $(this.refs.PicNav).bind("mouseleave", function() {
      let page = Math.floor(self.props.position.idx / 6);

      $(self.refs.unit)
        .stop(true)
        .animate({ left: -290 * page }, 400);
      $(self.refs.ol)
        .find("li")
        .eq(page)
        .addClass("cur")
        .siblings()
        .removeClass("cur");
    });
  };

  componentWillUpdate = (prevProps, prevState) => {
    let page = Math.floor(prevProps.position.idx / 6);

    $(this.refs.ol)
      .find("li")
      .eq(page)
      .addClass("cur")
      .siblings()
      .removeClass("cur");
    $(this.refs.unit)
      .stop(true)
      .animate({ left: -290 * page }, 400);
  };

  render() {
    const { images, position } = this.props;
    const pageCount = Math.ceil(images.length / 6);
    const curPage = position.idx ? Math.floor(position.idx / 6) : 0;
    return (
      <div className="picNav" ref="picNav">
        <div className="unit" ref="unit">
          {this.showPanel()}
        </div>
        <div className="cl" />
        <ol ref="ol">
          {new Array(pageCount).fill("").map((item, index) => {
            return pageCount > 1 ? (
              <li
                className={classnames({ cur: curPage == index })}
                key={index}
                style={{ width: 100 / pageCount + "%" }}
                data-pagenumber={index}
              />
            ) : null;
          })}
        </ol>
      </div>
    );
  }
}

PicNav.propTypes = {
  images: PropTypes.array.isRequired,
  position: PropTypes.object.isRequired
};

const mapStateToProps = ({ carShow: { images, position } }) => ({
  images: (() => {
    if (images[position.color]) {
      return images[position.color][position.album].map(item => {
        return item;
      });
    } else {
      return [];
    }
  })(),
  position
});

export default connect(mapStateToProps)(PicNav);
