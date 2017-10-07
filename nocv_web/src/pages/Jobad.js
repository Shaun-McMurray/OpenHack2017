import React, { Component } from 'react'
import { Button,
  Jumbotron,
  Row,
  Col,
  Image,
  Panel,
  ControlLabel} from 'react-bootstrap'

  import ReactBootstrapSlider from 'react-bootstrap-slider';
  import '../styles/Stylesheet.css'

  const titleSkill = (
    <h3>Soft skills</h3>
  );
  const titleOctagon = (
    <h3>Personality Octagon</h3>
  );

  export const Jobad = () => {
    return (
      <div className="container">
        <Row>
          <Col xs={6} md={4}>
            <Panel header={titleSkill}>
              <Row>
                <ControlLabel bsSize="large">Social</ControlLabel>
                <ReactBootstrapSlider
                  orientation="horizontal"
                  reversed={false}
                />
              </Row>
              <Row>
                <ControlLabel bsSize="large">Communication</ControlLabel>

                <ReactBootstrapSlider
                  orientation="horizontal"
                  reversed={false}
                />
              </Row>
            </Panel>
          </Col>
          <Col xs={12} md={8}>
            <Panel header={titleOctagon}>
              <Image src="./images/placeholder.png" style={{width: "30%"}}/>
              <div>
                 <br>
                 </br>
                <Image src="./images/placeholder.png" style={{width: "30%"}}/>
              </div>
          </Panel>
          </Col>
        </Row>
      </div>

    );
  }
