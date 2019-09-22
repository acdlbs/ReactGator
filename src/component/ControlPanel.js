import React, { Component } from "react";
import { CardPanel } from "react-materialize";

export default class ControlPanel extends Component {
  render() {
    return (
      <div>
        <div className="card-panel blue-grey heightgraph">
          <div className="row center">
            <button className="waves-effect waves-light btn-large btn-block">
              Start Pod
            </button>
          </div>
          <div className="row center">
            <button className="waves-effect waves-light btn orange btn-block">
              Before Tunnel Testing
            </button>
          </div>
          <div className="row center">
            <button className="waves-effect waves-light btn center orange btn-block">
              In Tunnel Testing
            </button>
          </div>
          <div className="row center">
            <button className="waves-effect waves-light btn-large red darken-4 disabled btn-block">
              EMERGENCY STOP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
