import React, { Component } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import serializeForm from 'form-serialize';

class AddItems extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const item = serializeForm(e.target, { hash: true });
    if (this.props.addItems)
      this.props.addItems(item);
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Header as='h3'>Add New Items:</Header>
        <Form.Group>
          <Form.Input name='name' placeholder='Item Name' width={6} required />
          <Form.Input name='quantity' placeholder='Quantity' type='number' min={1} width={3} required />
          <Form.Input name='cost' placeholder='Unit Cost' type='number' min={0} width={3} required />
          <Button primary width={2}>Add</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddItems;
