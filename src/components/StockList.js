import React from "react";
import {Link} from "react-router";

import {getStocks} from "../services/stockService";

export default class StockList extends React.Component {
  constructor() {
    super();

    this.state = {
      stocks:[]
    };
  }

  componentWillMount() {
    this.setState({stocks: getStocks()});
  }

  render() {
    const stocks = this.state.stocks.map((stock, index) => (
      <li key={index}>
        <Link to={`/stocks/${stock._id}`}>{stock.company}</Link>
      </li>
    ));

      return (
        <ul>
          {stocks}
        </ul>
      );
  }
}
