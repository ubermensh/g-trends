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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    //state = {chartData : null,
            //options:{
                //responsive: true,
                //scales: {
                  //xAxes: [{
                    //ticks: {
                      //autoSkip: true,
                      //maxTicksLimit: 10
                    //}
                  //}]
                //}
          //}
    //};

  //componentDidMount() {
      //fetch('/chart')
        //.then(res => res.json())
        //.then(chartData  => this.setState({ chartData }));
    //}


  render() {
		return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
		);
    }
}

export default Form;
