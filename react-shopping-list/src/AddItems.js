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
    let bd = this.state.button_disabled;
    switch (name) {
      case 'name':
        ne = !/^[a-zA-Z ]+$/.test(value);
        bd = (ne || qe || ce) || !(value && this.state.quantity && this.state.cost);
        break;
      case 'quantity':
        qe = !/^[1-9][0-9]*$/.test(value);
        bd = (ne || qe || ce) || !(this.state.name && value && this.state.cost);
        break;
      case 'cost':
        ce = !/^[1-9][0-9]*$/.test(value);
        bd = (ne || qe || ce) || !(this.state.name && this.state.quantity && value);
        break;
      default:
        console.log('Input Name Error');
    }
    this.setState({
      [name]: value,
      name_err: ne,
      quantity_err: qe,
      cost_err: ce,
      button_disabled: bd
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
      name: this.state.name.trim(),
      quantity: this.state.quantity.trim(),
      cost: this.state.cost.trim()
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
