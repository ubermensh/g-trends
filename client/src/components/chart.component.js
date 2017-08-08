import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;

class Chart extends Component {
    constructor(props) {
        super(props);
    }

  render() {
	if (this.props.googleTrendsData) {
		return (
		  <div className="row">
				<LineChart data={this.props.googleTrendsData} width="600" height="250"/>
		  </div>
		);
	  }
	else return null;
	}
}

export default Chart;
