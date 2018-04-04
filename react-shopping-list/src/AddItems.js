import React, { Component } from 'react';
import { Form, Header, Button, Segment } from 'semantic-ui-react';
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
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Header as='h3' inverted>Add New Items:</Header>
          <Form.Group widths='equal'>
            <Form.Input label='Item Name' name='name' placeholder='Item Name' required />
            <Form.Input label='Quantity' name='quantity' placeholder='Quantity' type='number' min={1} required />
            <Form.Input label='Unit Cost' name='cost' placeholder='Unit Cost' type='number' min={0} required />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default AddItems;
