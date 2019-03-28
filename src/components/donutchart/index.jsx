import React, { Component } from 'react';
import Chart from 'react-google-charts';

export default class DonutChart extends Component {
  render() {
    return (
        <Chart
        width={this.props.width}
        height={this.props.width}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={this.props.data}
        options={{
            title: this.props.title,
            titleTextStyle: {
              color: 'white',
              fontSize: 24,
          },
          pieHole: 0.3,
          backgroundColor: '#282c34',
            // backgroundColor: {
            //     stroke: 'green',
            //     strokeWidth: 1
            //     },
          legend: 'none',
          slices: {
            0: { color: 'green' },
            1: { color: 'red' }
          }
        }}
      />
    );
  }
}