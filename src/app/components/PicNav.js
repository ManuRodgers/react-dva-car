import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";

class PicNav extends Component {
  render() {
    return (
      <div className="picNav">
        <div className="unit">
          <ul>
            <li>
              <img src="../../images/Corolla/blue/view/1024x0_1_q87_autohomecar__wKgH0VZO7RCARQ9WAAKhIymcUik590.jpg" />
            </li>
            <li>
              <img src="../../images/Corolla/blue/view/1024x0_1_q87_autohomecar__wKgH0VZO7RCARQ9WAAKhIymcUik590.jpg" />
            </li>
            <li>
              <img src="../../images/Corolla/blue/view/1024x0_1_q87_autohomecar__wKgH0VZO7RCARQ9WAAKhIymcUik590.jpg" />
            </li>
            <li>
              <img src="../../images/Corolla/blue/view/1024x0_1_q87_autohomecar__wKgH0VZO7RCARQ9WAAKhIymcUik590.jpg" />
            </li>
            <li>
              <img src="../../images/Corolla/blue/view/1024x0_1_q87_autohomecar__wKgH0VZO7RCARQ9WAAKhIymcUik590.jpg" />
            </li>
            <li>
              <img src="../../images/Corolla/blue/view/1024x0_1_q87_autohomecar__wKgH0VZO7RCARQ9WAAKhIymcUik590.jpg" />
            </li>
          </ul>
        </div>
        <div className="cl" />
        <ol>
          <li style={{ width: 100 / 4 + "%" }} />
          <li style={{ width: 100 / 4 + "%" }} />
          <li style={{ width: 100 / 4 + "%" }} />
          <li style={{ width: 100 / 4 + "%" }} />
        </ol>
      </div>
    );
  }
}

PicNav.propTypes = {};

export default connect()(PicNav);
