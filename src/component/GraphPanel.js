import React, { Component } from "react";
import Graph from "./Graph";
import { CardPanel } from "react-materialize";
import { Row, Col } from "react-materialize";

var dataStyle = {
  //float: "right",
  color: "white"
};
var chartStyle = {
  //float: "left"
};
export default class GraphPanel extends Component {
  render() {
    return (
      <CardPanel
        className="card-panel blue-grey heightgraph"
        style={{ height: "308px" }}
      >
        <div>
          <Row>
            <span>
              <Col>
                <div style={chartStyle}>
                  <Graph />
                </div>
              </Col>
              <Col>
                <div style={dataStyle}>
                  <table className="centered mt">
                    <tr>
                      <td id="timePassed">Time passed (s)</td>
                      <td>00</td>
                    </tr>
                    <tr>
                      <td>Velocity (m/s)</td>
                      <td id="velocity">000</td>
                    </tr>
                    <tr>
                      <td>
                        Acceleration (m/s<sup>2</sup>)
                      </td>
                      <td id="acceleration">00s</td>
                    </tr>
                    <tr>
                      <td>Position (m)</td>
                      <td id="position">00 of 0000m</td>
                    </tr>
                  </table>
                </div>
              </Col>
            </span>
          </Row>
        </div>
      </CardPanel>
    );
  }
}
