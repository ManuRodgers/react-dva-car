import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Divider, Tag } from "antd";
import { connect } from "dva";

class Tags extends Component {
  render() {
    const { filters, dispatch } = this.props;

    return (
      <Fragment>
        <Row className="tags">
          <Col className="tagname" span={3}>
            Current
          </Col>
          <Col span={21}>
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
                  color="#2db7f5"
                  key={index}
                >
                  {filter.words}
                </Tag>
              );
            })}
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
