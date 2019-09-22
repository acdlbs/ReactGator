import React from "react";
import "./App.css";
import Header from "./component/Header";
import ControlPanel from "./component/ControlPanel";
import GraphPanel from "./component/GraphPanel";
import Status from "./component/Status";
import PodStatus from "./component/PodStatus";
import Footer from "./component/Footer";

import { Row, Col } from "react-materialize";
function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <div className="container">
        <Row>
          <Col m={4} s={4} l={3}>
            <ControlPanel />
          </Col>
          <Col m={4} s={4} l={9}>
            <GraphPanel />
          </Col>
        </Row>
        <Row>
          <Col m={8} s={8} l={12}>
            <Status />
          </Col>
        </Row>
        <Row>
          <Col m={4} s={4} l={8}>
            <PodStatus />
          </Col>
          <Col m={8} s={8} l={4}>
            <div className="card-panel blue-grey heightgraph">card 6</div>
          </Col>
        </Row>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
