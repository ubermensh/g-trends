import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.options = {
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                }]
            }

        }

    }

    createData() {
        const data = {
            labels: this.props.googleTrendsData.labels,
            datasets: [{
                data: this.props.googleTrendsData.data,
                label: this.props.currentQuery,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                fill: false,
            }]
        };
        return data;
    }

    render() {
        if (this.props.googleTrendsData) {
            return (
                <div className="col-md-10 col-md-offset-1" id='chart'>
                    <Line data={this.createData()} options={this.options}/>
                </div>
            );
        }
        else return null;
    }
}

export default Chart;
