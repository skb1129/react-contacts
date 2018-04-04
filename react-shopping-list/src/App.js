import React, { Component } from 'react';
import AddItems from './AddItems';
import ListItems from './ListItems';
import TotalCost from './TotalCost';
import './App.css';

class App extends Component {
  state = {
    items: [
      {
        name: 'Milk',
        quantity: 5,
        cost: 20
      }
    ]
  }

  render() {
    return (
      <div>
        <AddItems></AddItems>
        <ListItems items={this.state.items}></ListItems>
        <TotalCost></TotalCost>
      </div>
    );
  }
}

export default App;
