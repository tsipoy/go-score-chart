import React from 'react';
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

import BlueCircle from "./assets/blue-circle.png";
import Ellipse11 from "./assets/ellipse-11.png";
import Rectangle23 from "./assets/rectangle-23.png";
import Rectangle29 from "./assets/rectangle-29.png";
import WhiteCircle from "./assets/white-circle.png";
import RedArrow from "./assets/red-arrow.png";



function ChartPie() {
    const options = {
        colors: ['rgba(224, 85, 70, 1)'],
        chart: {
            type: 'pie'
        },
        title: {
            text: null
        },
        subtitle: {
            text: `<p>1 %</p>`,
            align: "center",
            verticalAlign: "middle",
            style: {
                "display": "inline-block",
                "background": "inline-block",
                // url(${WhiteCircle}), 
                "backgroundImage": `url(${WhiteCircle}), url(${Ellipse11}), url(${Rectangle29}), url(${Rectangle23}), url(${Rectangle23}), url(${BlueCircle}), url(${RedArrow})`,
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "auto",
                "fontStyle": "normal",
                "fontWeight": 700,
                "fontSize": "16px",
                "lineHeight": "22px",
                "height": "81px",
                "padding": "50px",
                "backgroundPosition": "52% 39%",
                // background-position-y: 39%, 25%, 39%, 55%, 55%, 38%, 23%;

                // background-position-x: 56%, 61%, 77%, 66%, 42%, 58%, 34%;
                // background-position-y: 39%, 25%, 39%, 55%, 55%, 38%, 23%;
            },
            x: 0,
            y: 22,
            useHTML: true
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ["50%", "50%"],
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                size: "70%",
                innerSize: "100%",
                borderColor: null,
                borderWidth: 8,
            }

        },
        // tooltip: {
        //     valueSuffix: '%'
        // },
        series: [{
            innerSize: '60%',
            data: [{
                name: null,
                y: 90,
                color: 'rgba(236, 245, 254, 1)'
            }, {
                name: '17,10 kr / 90,238.54 kr',
                y: 10,
            }]
        }],
    };
    return (
        <PieChart highcharts={Highcharts} options={options} />
    );
}


export default ChartPie;