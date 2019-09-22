import React, { Component } from "react";
import Chart from "../../node_modules/chart.js";
var canvasStyle = {
  display: "block",
  width: "435px",
  height: "217px"
};
export default class Graph extends Component {
  componentDidMount() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var charts = [
      {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: ["0", "2", "4", "6", "8", "10", "12"],
          datasets: [
            {
              label: "Acceleration Curve",
              backgroundColor: "#ff9800",
              borderColor: "#1d998d",
              data: [100, 80, 70, 20, 10, -5, -200]
            }
          ]
        },

        // Configuration options go here
        options: {
          legend: {
            labels: {
              fontColor: "white",
              fontSize: 15
            }
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  color: "#90a4ae" //give the needful color
                },
                ticks: {
                  fontColor: "white",
                  fontSize: 12
                },
                display: true,
                stacked: true
              }
            ],

            xAxes: [
              {
                gridLines: {
                  color: "#90a4ae",
                  display: true
                },
                ticks: {
                  fontColor: "white",
                  fontSize: 12,
                  beginAtZero: true
                },
                stacked: true
              }
            ]
          }
        }
      },
      {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: ["0", "2", "4", "6", "8", "10", "12"],
          datasets: [
            {
              label: "Acceleration Curve",
              backgroundColor: "#ff9800",
              borderColor: "#1d998d",
              data: [50, 100, 200, -10, 10, -5, -200]
            }
          ]
        },

        // Configuration options go here
        options: {
          legend: {
            labels: {
              fontColor: "white",
              fontSize: 15
            }
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  color: "#90a4ae" //give the needful color
                },
                ticks: {
                  fontColor: "white",
                  fontSize: 12
                },
                display: true,
                stacked: true
              }
            ],

            xAxes: [
              {
                gridLines: {
                  color: "#90a4ae",
                  display: true
                },
                ticks: {
                  fontColor: "white",
                  fontSize: 12,
                  beginAtZero: true
                },
                stacked: true
              }
            ]
          }
        }
      }
    ];
    var chart = new Chart(ctx, charts[0]);
  }
  render() {
    return (
      <div>
        <canvas id="myChart" style={canvasStyle}></canvas>{" "}
      </div>
    );
  }
}
