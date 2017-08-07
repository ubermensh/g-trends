import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;

class Chart extends Component {
    state = {chartData : null,
            options:{
                responsive: true,
                scales: {
                  xAxes: [{
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10
                    }
                  }]
                }
          }
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
				<LineChart data={this.state.chartData}   width="600" height="250"/>
            {this.state.options.scales.xAxes[0].ticks.autoSkip}
		  </div>
		);
	  }
	else return null;
	}
}

export default Chart;
