import React, { Component } from 'react';
import dateFormat from 'dateformat';

class Form extends Component {
    constructor(props) {
        super(props);
        let dateFrom = new Date();
        //30 days ago
        dateFrom = new Date(dateFrom.setDate(dateFrom.getDate() - 30));
        this.state = {
            query: '',
            dateFrom: dateFormat(dateFrom, 'yyyy-mm-dd'),
            dateTo: dateFormat(new Date(), 'yyyy-mm-dd'),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
      const dateFrom = new Date(this.state.dateFrom);
      const dateTo = new Date(this.state.dateTo);
      if(!this.state.query){
          alert("Enter query!");
      }
      else if (dateFrom.getTime() > dateTo.getTime()){
          alert(`ivalid date range! ${this.state.dateFrom} -  ${this.state.dateTo}`);
      }
      else {
        this.props.getData(this.state.query, this.state.dateFrom, this.state.dateTo);
      }

  }

  render() {
		return (
          <form onSubmit={this.handleSubmit}>
            <label> Topic:
              <input type="text" value={this.state.query} onChange={this.handleChange} name='query' />
            </label>
            <label> From:
              <input type="date" value={this.state.dateFrom} onChange={this.handleChange} name='dateFrom' /></label>
            <label> To:
              <input type="date" value={this.state.dateTo} onChange={this.handleChange} name='dateTo' /> </label>
            <input type="submit" value="Submit" />
          </form>
		);
    }
}

export default Form;
