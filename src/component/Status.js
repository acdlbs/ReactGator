import React, { Component } from "react";

export default class Status extends Component {
  render() {
    return (
      <div>
        <div className="card-panel blue-grey btn-block1">
          <p
            className="center paraformat"
            style={{ fontSize: "150%", color: "white", margin: "5px" }}
          >
            Status
          </p>
          <table
            className="table table-dark table-responsive centered highlight"
            id="batteryTable"
          >
            <thead>
              <tr
                className="orange txter"
                style={{ fontSize: "110%", color: "white" }}
              >
                <th>Battery</th>
                <th>Min Temp</th>
                <th>Actual Temp</th>
                <th>Max Temp</th>
                <th>Min I</th>
                <th>Actual I</th>
                <th>Max I</th>
                <th>Min V</th>
                <th>Actual V</th>
                <th>Max V</th>
              </tr>
            </thead>
            <tbody id="botTable">
              <tr
                className="highlight txter borderer trr"
                style={{
                  fontSize: "110%",
                  color: "white",
                  border: "1px solid orange"
                }}
              >
                <td>Primary</td>
                <td id="b1MinTemp">20</td>
                <td id="b1ActualTemp" className="bg-success">
                  28
                </td>
                <td id="b1MaxTemp">36</td>
                <td id="b1MinCurrent">4</td>
                <td id="b1ActualCurrent" className="bg-success">
                  5
                </td>
                <td id="b1MaxCurrent">6</td>
                <td id="b1MinVoltage">295</td>
                <td id="b1ActualVoltage" className="bg-success">
                  300
                </td>
                <td id="b1MaxVoltage">305</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
