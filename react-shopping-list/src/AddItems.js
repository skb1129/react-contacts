import React, { Component } from 'react';
import { Form, Header, Button, Segment } from 'semantic-ui-react';

class AddItems extends Component {
  state = {
    name: '',
    quantity: '',
    cost: ''
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.addItems)
      this.props.addItems(this.state);
    this.setState({
      name: '',
      quantity: '',
      cost: ''
    });
  }

  render() {
    return(
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Header as='h3' inverted>Add New Items:</Header>
          <Form.Group widths='equal'>
            <Form.Input label='Item Name' name='name' placeholder='Item Name'
              value={this.state.name} onChange={this.handleChange}/>
            <Form.Input label='Quantity' name='quantity' placeholder='Quantity'
              type='number' value={this.state.quantity}
              onChange={this.handleChange}/>
            <Form.Input label='Unit Cost' name='cost' placeholder='Unit Cost'
              type='number' value={this.state.cost}
              onChange={this.handleChange}/>
          </Form.Group>
          <Button type='submit' disabled={!this.state.name || !this.state.quantity || !this.state.cost}>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default AddItems;
