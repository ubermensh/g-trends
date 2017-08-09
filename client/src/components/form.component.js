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
      if (dateFrom.getTime() > dateTo.getTime()){
          alert(`ivalid date range! ${this.state.dateFrom} -  ${this.state.dateTo}`);
      }
      else {
        this.props.getData(this.state.query, this.state.dateFrom, this.state.dateTo);
      }

  }

  render() {
		return (
          <form className='form-inline row' onSubmit={this.handleSubmit}>
            <div className=' form-group'>
            <label> Topic: <input className='form-control' required type="text" value={this.state.query} onChange={this.handleChange} name='query' /> </label>
           </div> 
            <div className='form-group'>
            <label> From: <input className='form-control' required type="date" value={this.state.dateFrom} onChange={this.handleChange} name='dateFrom' /></label>
           </div> 
            <div className='form-group'>
            <label> To: <input className='form-control' required type="date" value={this.state.dateTo} onChange={this.handleChange} name='dateTo' /> </label>
           </div> 
            <input className='btn btn-default' type="submit" value="Submit" />
          </form>
		);
    }
}

export default Form;
