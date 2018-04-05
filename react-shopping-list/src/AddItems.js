import React, { Component } from 'react';
import { Form, Header, Button, Segment, Message } from 'semantic-ui-react';
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
    this.setState({ [name]: value })
  };

  render() {
    return(
      <Segment inverted>
        <Form inverted onSubmit={() => (this.props.addItems(this.state))}>
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
          <Message
            warning
            header='Could you check something!'
            list={[
              'The item name must only contain alphabets',
              'Quantity and Unit Cost must be a whole number'
            ]}
          />
          <Button type='submit'
            disabled={!this.validateInputs()}>
            Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default AddItems;
