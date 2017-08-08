import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.props.getData(this.state.value);
    event.preventDefault();
  }

  render() {
		return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Topic:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
		);
    }
}

export default Form;
