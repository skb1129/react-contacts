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
    cost: '',
    name_err: false,
    quantity_err: false,
    cost_err: false,
    button_disabled: true
  }

  validate = (name, value) => {
    let ne = this.state.name_err;
    let qe = this.state.quantity_err;
    let ce = this.state.cost_err;
    switch (name) {
      case 'name':
        ne = !/^[a-zA-Z ]+$/.test(value);
        break;
      case 'quantity':
        qe = !/^[1-9][0-9]*$/.test(value);
        break;
      case 'cost':
        ce = !/^[1-9][0-9]*$/.test(value);
        break;
      default:
        console.log('Input Name Error');
    }
    this.setState({
      [name]: value,
      name_err: ne,
      quantity_err: qe,
      cost_err: ce,
      button_disabled: (ne || qe || ce) || !(this.state.name && this.state.quantity && this.state.cost)
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.validate(name, value);
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
              value={this.state.name} onChange={this.handleChange}
              error={this.state.name_err}/>
            <Form.Input label='Quantity' name='quantity' placeholder='Quantity'
              type='number' value={this.state.quantity}
              onChange={this.handleChange} error={this.state.quantity_err}/>
            <Form.Input label='Unit Cost' name='cost' placeholder='Unit Cost'
              type='number' value={this.state.cost}
              onChange={this.handleChange} error={this.state.cost_err}/>
          </Form.Group>
          <Button type='submit'
            disabled={this.state.button_disabled}>
            Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default AddItems;
