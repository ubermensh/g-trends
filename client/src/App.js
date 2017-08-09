import React, { Component } from 'react';
import Chart from './components/chart.component'
import Form  from './components/form.component'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentQuery: null, 
        googleTrendsData: null
    }
    this.getData = this.getData.bind(this);
  }

  getData(query, dateFrom, dateTo) {
    this.setState({currentQuery: query });
      fetch(`/chart/${query}/${dateFrom}/${dateTo}`)
        .then(res => res.json())
        .then(chartData  => this.setState({ googleTrendsData: chartData }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <Form getData = {this.getData} />
            </div>
          <div className="row">
        <Chart currentQuery = {this.state.currentQuery} googleTrendsData={this.state.googleTrendsData} />
      </div>
      </div>
    );
  }
}

export default App;
