import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;

class Chart extends Component {
    state = {chartData : null
  //state = {chartData :{
		//labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		//datasets: [{
			//data: [12, 19, 3, 5, 2, 3],
		//}]
	//}
};

  componentDidMount() {
      fetch('/chart')
        .then(res => res.json())
        .then(chartData  => this.setState({ chartData }));
    }


  render() {
	if (this.state.chartData) {
		return (
		  <div className="row">
				<LineChart data={this.state.chartData} width="600" height="250"/>
		  </div>
		);
	  }
	else return null;
	}
}

export default Chart;
