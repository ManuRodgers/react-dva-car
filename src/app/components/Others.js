import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Row, Col, Divider, Tabs, Checkbox } from "antd";
import { template3 } from "../../lib/utilities";

class Others extends Component {
  render() {
    const { dispatch, others, keyValue, filters } = this.props;
    const TabPane = Tabs.TabPane;

    // filters.map((filter, index) => {
    //   if (filter.keyValue == "carTypes") {
    //     const carTypesOptions = filter.value;
    //     console.log(carTypesOptions);
    //   } else if (filter.keyValue == "seats") {
    //     const seatsOptions = filter.value;
    //     console.log(seatsOptions);
    //   } else if (filter.keyValue == "colors") {
    //     const colorsOptions = filter.value;
    //     console.log(colorsOptions);
    //   } else if (filter.keyValue == "engines") {
    //     const enginesOptions = filter.value;
    //     console.log(enginesOptions);
    //   }
    // });

    return (
      <Fragment>
        <Row className="others">
          <Col className="tagname" span={3}>
            Others
          </Col>
          <Col className="content" span={21}>
            <Tabs>
              {Object.keys(others).map((item, index) => {
                return (
                  <TabPane tab={item} key={index}>
                    <Checkbox.Group
                      onChange={value => {
                        return dispatch({
                          type: "carPick/addOrUpdateTag",
                          keyValue: item,
                          value,
                          words: template3(item, value)
                        });
                      }}
                    >
                      {others[item].map((item, index) => {
                        return (
                          <Checkbox key={index} value={item}>
                            {item}
                          </Checkbox>
                        );
                      })}
                    </Checkbox.Group>
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

Others.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  others: PropTypes.object.isRequired,
  keyValue: PropTypes.string.isRequired
};

const mapStateToProps = ({ carPick }) => ({
  filters: carPick.filters
});

export default connect(mapStateToProps)(Others);
