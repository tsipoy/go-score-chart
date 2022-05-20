import React from "react";
import styled from "@emotion/styled";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Chart = ({xAxisCategories, seriesData, className}) => {

  const options = {
    title: {
      text: null
    },
    xAxis: {
      categories: xAxisCategories,
    },
    yAxis: {
      title: null
    },
    plotOptions: {
      series: {
        allowPointSelect: false
      },
    },
    legend: {
      enabled: false,
    },
    series: [{
      data: seriesData,
      color: 'blue',
      shadow: {
        color: 'rgba(0, 219, 144, 1)',
        width: 5,
        offsetX: 0,
        offsetY: 0
      }
    }, {
    }]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ className }}
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
