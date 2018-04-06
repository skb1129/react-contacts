import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class TotalCost extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired
  }

  render() {
    return(
      <Segment inverted>
        <Header as='h4' inverted color='grey'>
          Total Cost : ₹{this.props.total}</Header>
      </Segment>
    );
  }
}

export default TotalCost;
