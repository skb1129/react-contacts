import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class TotalCost extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  calcTotalCost = (items) => {
    let total = 0;
    for (let item of items) {
      total += item.quantity * item.cost;
    }
    return total;
  }

  render() {
    return(
      <Segment inverted>
        <Header as='h4' inverted color='grey'>
          Total Cost : ₹{this.calcTotalCost(this.props.items)}</Header>
      </Segment>
    );
  }
}

export default TotalCost;
