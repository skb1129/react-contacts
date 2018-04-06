import React, { Component } from 'react';
import AddItems from './AddItems';
import ListItems from './ListItems';
import TotalCost from './TotalCost';
import './App.css';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Milk',
        quantity: 5,
        cost: 20
      }
    ],
    total: 100
  }

  addItems = (item) => {
    item.id = this.state.items.length + 1;
    this.setState((state) => ({
      items: state.items.concat([item]),
      total: state.total + (item.quantity * item.cost)
    }));
  }

  removeItem = (item) => {
    this.setState((state) => ({
      items: state.items.filter((c) => (c.id !== item.id)),
      total: state.total - (item.quantity * item.cost)
    }));
  }

  render() {
    return (
      <div>
        <AddItems addItems={this.addItems}></AddItems>
        <ListItems items={this.state.items}
          removeItem={this.removeItem}></ListItems>
        <TotalCost total={this.state.total}></TotalCost>
      </div>
    );
  }
}

export default App;
