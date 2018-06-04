import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Row, Col, Tabs, Divider } from "antd";

import { capitalizeFirstLetter, template1 } from "../../lib/utilities";
class Brand extends Component {
  render() {
    const { brand, keyValue, dispatch } = this.props;
    const TabPane = Tabs.TabPane;

    return (
      <Fragment>
        <Row className="brand">
          <Col className="tagname" span={3}>
            <div>{capitalizeFirstLetter(keyValue)}</div>
          </Col>
          <Col className="content" span={20}>
            <Tabs defaultActiveKey="0" onChange={() => {}}>
              {Object.keys(brand).map((initialLetter, index) => {
                return (
                  <TabPane tab={initialLetter} key={index}>
                    {brand[initialLetter].map((item, index) => {
                      return (
                        <span key={index}>
                          <a
                            onClick={() => {
                              return dispatch({
                                type: "carPick/addOrUpdateTag",
                                keyValue,
                                value: item,
                                words: template1(keyValue, item)
                              });
                            }}
                            href="javascript:void(0);"
                          >
                            {item}
                          </a>
                          {brand[initialLetter].length - 1 == index ? null : (
                            <Divider type="vertical" />
                          )}
                        </span>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
  keyValue: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(Brand);
