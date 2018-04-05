import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function ListItems(props) {
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
        {props.items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.quantity}</Table.Cell>
            <Table.Cell>{item.cost}</Table.Cell>
            <Table.Cell textAlign='right'><Icon link name='delete' onClick={() => (props.removeItem(item))} /></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default ListItems;
