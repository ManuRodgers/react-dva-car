import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Row, Col, Divider, Slider, InputNumber } from "antd";
import { capitalizeFirstLetter, template2 } from "../../lib/utilities";

class Price extends Component {
  render() {
    const { price, keyValue, dispatch, filters } = this.props;
    const { examples, min, max } = price;
    const priceTagFilter = filters.filter(
      filter => filter.keyValue == keyValue
    )[0];
    let value = [0, 200000];
    if (priceTagFilter) {
      value = priceTagFilter.value;
    }
    return (
      <Fragment>
        <Row className="price">
          <Col style={{ paddingTop: 10 }} className="tagname" span={3}>
            {capitalizeFirstLetter(keyValue)}
          </Col>
          <Col className="content" span={21}>
            <Row>
              <Col style={{ paddingTop: 10 }} span={12}>
                <div className="examples">
                  {examples.map((item, index) => {
                    return (
                      <span key={index}>
                        <a
                          onClick={() => {
                            let value = [item.b, item.t];
                            return dispatch({
                              type: "carPick/addOrUpdateTag",
                              keyValue,
                              value,
                              words: template2(keyValue, value)
                            });
                          }}
                          href="javascript:void(0);"
                        >{`From ${item.b} To ${item.t}`}</a>
                        {examples.length - 1 == index ? null : (
                          <Divider type="vertical" />
                        )}
                      </span>
                    );
                  })}
                </div>
              </Col>
              <Col style={{ paddingLeft: 40, paddingTop: 10 }} span={2}>
                <span>${value[0]}</span>
              </Col>
              <Col span={6}>
                <div className="slider">
                  <Slider
                    range
                    min={min}
                    max={max}
                    value={value}
                    onChange={([b, t]) => {
                      let value = [b, t];
                      return dispatch({
                        type: "carPick/addOrUpdateTag",
                        keyValue,
                        value,
                        words: template2(keyValue, value)
                      });
                    }}
                  />
                </div>
              </Col>
              <Col style={{ paddingTop: 10, paddingLeft: 10 }} span={2}>
                <span>${value[1]}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Price.propTypes = {
  price: PropTypes.object.isRequired,
  keyValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
};

const mapStateToProps = ({ carPick }) => ({
  filters: carPick.filters
});

export default connect(mapStateToProps)(Price);
