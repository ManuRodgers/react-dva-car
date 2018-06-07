import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Divider, Tag, Button } from "antd";
import { connect } from "dva";

class Tags extends Component {
  shouldComponentUpdate(nextProps) {
    const { filters } = this.props;
    if (filters == nextProps.filters) {
      return false;
    }
    return true;
  }

  render() {
    const { filters, dispatch } = this.props;

    return (
      <Fragment>
        <Row className="tags">
          <Col className="tagname" span={3}>
            Current
          </Col>
          <Col span={21}>
            <div>
              {filters.map((filter, index) => {
                return (
                  <Tag
                    closable
                    onClose={() => {
                      return dispatch({
                        type: "carPick/removeTag",
                        keyValue: filter.keyValue
                      });
                    }}
                    color="geekblue"
                    key={index}
                  >
                    {filter.words}
                  </Tag>
                );
              })}
              <Button
                onClick={() => {
                  return dispatch({ type: "carPick/getFilteredCars" });
                }}
                type="primary"
                icon="search"
              >
                search
              </Button>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Tags.propTypes = {
  filters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = ({ carPick }) => ({
  filters: carPick.filters
});

export default connect(mapStateToProps)(Tags);
