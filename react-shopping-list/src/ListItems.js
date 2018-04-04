import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';

class ListItems extends Component {
  render() {
    return(
      <Table celled inverted selectable unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity(Unit)</Table.HeaderCell>
            <Table.HeaderCell>Unit Cost(₹)</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
              <Table.Cell>{item.cost}</Table.Cell>
              <Table.Cell textAlign='right'><Icon link name='delete' onClick={() => (this.props.removeItem(item))} /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default ListItems;
