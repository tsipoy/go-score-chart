import React, { useState } from "react";
import styled from "@emotion/styled";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Chart = (props) => {

  const [options] = useState({
    title: {
      text: null
    },
    xAxis: {
      categories: [2021, 2031, 2041, 2051, 2061, 2071, 2081, 2091, 2101, 2111, 2121, 2131, 2151]
    },
    // yAxis: {
    //   min: 0.0,
    //   max: 40.000
    // },
    plotOptions: {
      series: {
        pointStart: Date.UTC(2021, 0, 1),
        pointIntervalUnit: 'year',
        pointInterval: 10,
      },
      series: {
        allowPointSelect: false
      }
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      color: 'blue',
      shadow: {
        color: 'rgba(0, 219, 144, 1)',
        width: 5,
        offsetX: 0,
        offsetY: 0
      }
    }, {
    }]
  });

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ className: props?.className }}
    />
  );
};

export const HighChartWrapper = styled(Chart)`
  .highcharts-point {
    fill: #FFFFFF;
    stroke: rgba(4, 212, 148, 1);
    stroke-width: 2;
  }
`;
