import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Row, Col, Divider } from "antd";
import { capitalizeFirstLetter, template1 } from "../../lib/utilities";
class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  render() {
    const { showMore } = this.state;
    const { series, keyValue, dispatch } = this.props;
    const { common, more } = series.BMW;
    return (
      <Fragment>
        <Row className="series">
          <Col className="tagname" span={3}>
            {capitalizeFirstLetter(keyValue)}
          </Col>
          <Col className="content" span={19}>
            <div>
              {common.map((item, index) => {
                return (
                  <span key={index}>
                    <a
                      onClick={e => {
                        e.stopPropagation();
                        return dispatch({
                          type: "carPick/addOrUpdateTag",
                          keyValue,
                          value: item,
                          words: template1(keyValue, item)
                        });
                      }}
                      href="javascript:void(0):"
                    >
                      {item}
                    </a>
                    {common.length - 1 == index ? null : (
                      <Divider type="vertical" />
                    )}
                  </span>
                );
              })}
            </div>
          </Col>
          <Col className="more" span={2}>
            <a
              onClick={e => {
                e.stopPropagation();
                this.setState(prevState => ({ showMore: !prevState.showMore }));
              }}
              href="javascript:void(0);"
            >
              More
            </a>
          </Col>
        </Row>

        <div
          className="moreBox"
          style={{ display: showMore ? "block" : "none" }}
        >
          <Row>
            <Col offset={3} span={21}>
              {more.map((item, index) => {
                return (
                  <span key={index}>
                    <a
                      onClick={e => {
                        e.stopPropagation();
                        return dispatch({
                          type: "carPick/addOrUpdateTag",
                          keyValue,
                          value: item,
                          words: template1(keyValue, item)
                        });
                      }}
                      href="javascript:void(0):"
                    >
                      {item}
                    </a>
                    {more.length - 1 == index ? null : (
                      <Divider type="vertical" />
                    )}
                  </span>
                );
              })}
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

Series.propTypes = {
  series: PropTypes.object.isRequired,
  keyValue: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ carPick }) => ({
  filters: carPick.filters
});

export default connect(mapStateToProps)(Series);
