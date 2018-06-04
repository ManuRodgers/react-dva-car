import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Divider } from "antd";
import { connect } from "dva";

import Brand from "./Brand";
import Series from "./Series";
import Price from "./Price";
import Tags from "./Tags";

class CarPick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: {
        A: ["Audi", "Aston Martin"],
        B: ["BMW"],
        F: ["Ford"],
        H: ["Holden", "Hyundai"],
        K: ["Kia"],
        M: ["Mazda", "Mercedes-Benz", "Mitsubishi"],
        N: ["Nissan"],
        S: ["Subaru"],
        T: ["Toyota"],
        V: ["Volkswagen"]
      },
      series: {
        BMW: {
          common: ["X1", "X3", "X5", "320i", "550i", "760L"],
          more: ["X4", "mini", "760L"]
        },
        "Mercedes-Benz": {
          common: ["C", "E", "S", "CLA", "GLK"],
          more: ["A", "B", "R"]
        }
      },
      price: {
        examples: [
          {
            b: 0,
            t: 4999
          },
          {
            b: 5000,
            t: 9999
          },
          {
            b: 10000,
            t: 49999
          },
          {
            b: 50000,
            t: 100000
          }
        ],
        min: 0,
        max: 200000
      }
    };
  }

  render() {
    const { brand, series, price } = this.state;
    const { filters } = this.props;

    return (
      <div className="carPicker">
        <Brand keyValue="brand" brand={brand} />
        <Divider type="horizontal" />
        <Series series={series} keyValue="series" />
        <Divider type="horizontal" />
        <Price price={price} keyValue="price" />
        <Divider type="horizontal" />
        <Tags />
      </div>
    );
  }
}

CarPick.propTypes = {
  filters: PropTypes.array.isRequired
};
const mapStateToProps = ({ carPick }) => ({
  filters: carPick.filters
});

export default connect(mapStateToProps)(CarPick);
