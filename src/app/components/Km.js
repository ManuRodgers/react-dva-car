import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Row, Col, Divider, Slider, InputNumber } from "antd";
import { capitalizeFirstLetter, template2 } from "../../lib/utilities";
import { filter } from "rxjs/operators";

class Km extends Component {
  render() {
    const { dispatch, km, filters, keyValue } = this.props;
    const { examples, min, max } = km;
    let value = [0, 500000];
    filters.forEach((filter, index) => {
      if (filter.keyValue === keyValue) {
        value = filter.value;
      }
    });
    return (
      <Fragment>
        <Row className="km">
          <Col className="tagname" span={3}>
            Km
          </Col>
          <Col className="examples" span={12}>
            {examples.map((example, index) => {
              return (
                <span key={index}>
                  <a
                    onClick={e => {
                      e.stopPropagation();
                      let value = [example.b, example.t];
                      dispatch({
                        type: "carPick/addOrUpdateTag",
                        keyValue,
                        value,
                        words: template2(keyValue, value)
                      });
                    }}
                    href="javascript:void(0);"
                  >{`From ${example.b} To ${example.t}`}</a>
                  {examples.length - 1 == index ? null : (
                    <Divider type="vertical" />
                  )}
                </span>
              );
            })}
          </Col>
          <Col span={1} className="min">
            {value[0]}(km)
          </Col>
          <Col className="slider" span={6}>
            <Slider
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
              min={min}
              max={max}
              range
            />
          </Col>
          <Col span={1} className="max">
            ${value[1]}(km)
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Km.propTypes = {
  dispatch: PropTypes.func.isRequired,
  km: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  keyValue: PropTypes.string.isRequired
};

const mapStateToProps = ({ carPick }) => ({
  filters: carPick.filters
});

export default connect(mapStateToProps)(Km);
