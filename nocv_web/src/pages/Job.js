import React from 'react'
import {
    Row,
    Col,
    Image,
    Panel,
    HelpBlock,
    ControlLabel,
    Button} from 'react-bootstrap'

import '../styles/Stylesheet.css'
import { EmployeeComponent } from './EmployeeComponent'
import { Field } from './Field'


const titleSkill = (
    <h3>My Skills</h3>
);
const titleOctagon = (
    <h3>Personality Octagon</h3>
);
const titleMatch = (
    <h3>Matches</h3>
);

export const Job = () => {
    return (
        <div className="container">
            <Row>
                <Col xs={6} md={4}>
                    <Panel header={titleSkill}>
                        <HelpBlock> Change the hard skills your ideal colleague must have (if any)
                        </HelpBlock>
                        <Field />
                    </Panel>
                </Col>
                <Col xs={12} md={8}>
                    <Panel header={titleOctagon}>
                        <HelpBlock>Change your ideal candidate's personality test match by clicking in the diagrams</HelpBlock>
                        <ControlLabel>Holland's Six Personality Types</ControlLabel>
                        <div>
                            <Image src="./images/Holland-Hexagon-Website1.png" style={{width: "30%"}} thumbnail/>
                        </div>
                        <br>
                        </br>
                        <div>
                            <ControlLabel>The Enneagram of Personality</ControlLabel>
                        </div>
                        <Image src="./images/EnneagramWheel-transparent-bg.png" style={{width: "30%"}} thumbnail/>
                    </Panel>
                </Col>
            </Row>
            <Panel header={titleMatch}>
                <Row>
                  <Row>
                      <Col xs={4} md={2}>
                         <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                      </Col>
                      <Col xs={4} md={2}>
                          <div className="container" align="left"> <h1>Shaun Stirbys</h1></div>
                          <div className="container" align="left"><h3>shaun@stirbys.se</h3></div>
                          <div className="container" align="left"><h3>0700000001</h3></div>
                      </Col>
                      <Col xs={10} md={6}>
                          <Image src="./images/hollands_octagon.jpg" style={{width: "25%", height: "25%"}}/>
                      </Col>                      
                  </Row>
                  <Row>
                      <Col xs={4} md={2}>
                         <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                      </Col>
                      <Col xs={4} md={2}>
                          <div className="container" align="left"> <h1>Elaine Dai</h1></div>
                          <div className="container" align="left"><h3>elaine@dai.se</h3></div>
                          <div className="container" align="left"><h3>0700000002</h3></div>
                      </Col>
                      <Col xs={10} md={6}>
                          <Image src="./images/hollands_octagon.jpg" style={{width: "25%", height: "25%"}}/>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={4} md={2}>
                         <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                      </Col>
                      <Col xs={4} md={2}>
                          <div className="container" align="left"> <h1>Joacim Qvarnström</h1></div>
                          <div className="container" align="left"><h3>joacim@qvarstrom.se</h3></div>
                          <div className="container" align="left"><h3>0700000003</h3></div>
                      </Col>
                      <Col xs={10} md={6}>
                          <Image src="./images/hollands_octagon.jpg" style={{width: "25%", height: "25%"}}/>
                      </Col>
                  </Row>
                </Row>
            </Panel>
        </div>

    );
}
