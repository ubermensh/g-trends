import React, { Component } from 'react';
import Chart from './components/chart.component'
import Form  from './components/form.component'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <Chart />

      </div>
    );
  }
}

export default App;
