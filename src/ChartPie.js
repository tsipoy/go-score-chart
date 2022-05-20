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
        colors: ['rgba(236, 245, 254, 1)'],
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
                "backgroundImage": `url(${WhiteCircle}), url(${Ellipse11}), url(${Rectangle29}), url(${Rectangle23}), url(${Rectangle23}), url(${BlueCircle}), url(${RedArrow})`,
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "auto",
                "fontStyle": "normal",
                "fontWeight": 700,
                "fontSize": "16px",
                "lineHeight": "22px",
                "height": "81px",
                "padding": "50px",
                "backgroundPositionX": "54%, 58%, 76%, 63%, 41%, 54%, 31%",
                "backgroundPositionY": "40%, 28%, 39%, 55%, 55%, 40%, 23%",
            },
            x: 0,
            y: 25,
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
                name: '17,10 kr / 90,238.54 kr',
                y: 10,
                color: 'rgba(224, 85, 70, 1)'
            }, {
                name: null,
                y: 90,
            }]
        }],
    };
    return (
        <PieChart highcharts={Highcharts} options={options} />
    );
}


export default ChartPie;