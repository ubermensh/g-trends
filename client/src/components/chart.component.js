import React, { Component } from 'react';
//var LineChart = require("react-chartjs").Line;
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
    }

  render() {
	if (this.props.googleTrendsData) {
		return (
		  <div className="row">
                <Line data={this.props.googleTrendsData} />
		  </div>
		);
	  }
	else return null;
	}
}

export default Chart;
