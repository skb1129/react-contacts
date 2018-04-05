import React, { Component } from 'react';
import { Form, Header, Button, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AddItems extends Component {
  static propTypes = {
    addItems: PropTypes.func.isRequired
  }

  state = {
    name: '',
    quantity: '',
    cost: ''
  }

  validateInputs = () => {
    return (
      /^[a-zA-Z ]+$/.test(this.state.name) &&
      /^[1-9][0-9]*$/.test(this.state.quantity) &&
      /^[1-9][0-9]*$/.test(this.state.cost)
    )
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      name: this.state.name,
      quantity: this.state.quantity,
      cost: this.state.cost
    };
    this.props.addItems(item);
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
          <Button type='submit'
            disabled={!this.validateInputs()}>
            Submit</Button>
        </Form>
        {JSON.stringify(this.state)}
      </Segment>
    );
  }
}

export default AddItems;
