import React, { Component } from 'react'
import {
    Row,
    Col,
    Image,
    Panel,
    HelpBlock,
    ControlLabel,
    Media,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Well
  } from 'react-bootstrap'

import '../styles/Stylesheet.css'
import { MatchComponent } from './MatchComponent'
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

export const EmployeeDashboard = () => {
    return (
        <div className="container">
            <Row>
                <Col xs={6} md={4}>
                    <Panel header={titleSkill}>
                      <HelpBlock>Do you want to update your skills?
                        You are welcome to change them below
                      </HelpBlock>
                        <Field />
                    </Panel>
                </Col>
                <Col xs={12} md={8}>
                    <Panel header={titleOctagon}>
                      <HelpBlock>Here is your personality according to our tests!</HelpBlock>
                      <ControlLabel>Holland's Six Personality Types</ControlLabel>
                      <div>
                        <Image src="./images/hollands_octagon.jpg" style={{width: "30%"}} thumbnail/>
                      </div>
                      <br>
                      </br>
                      <div>
                        <ControlLabel>The Enneagram of Personality</ControlLabel>
                      </div>
                      <Image src="./images/nine_enneagram.jpg" style={{width: "30%"}} thumbnail/>
                    </Panel>
                </Col>
            </Row>
            <Panel header={titleMatch}>
                <Row>
                  <div className="container">
                    <Well style={{width:"98.5%"}}>
                      <Row>
                          <Col xs={6} md={4} xsPull={1}>
                              <Media.Left>
                                  <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                              </Media.Left>
                          </Col>
                          <Col xs={6} md={4} xsPull={2}>
                              <div className="container" align="left"> <h1>IT Senior Service Desk and Project Engineer</h1></div>
                              <div className="container" align="left"><h3>IT Xperts</h3></div>
                              <div className="container" align="left"><h2>The ‘Senior Service Desk & Project Engineer’ is
                                responsible for providing high quality ICT services to internal IT Xpert staff.</h2></div>
                          </Col>
                          <Col xs={6} md={4} xsPush={1}>
                              <h4>Match 89%</h4>
                              <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
                                <ToggleButton value={1}>Applied</ToggleButton>
                              </ToggleButtonGroup>
                          </Col>
                      </Row>
                    </Well>
                  </div>
                  <div className="container">
                      <Row>
                          <Col xs={6} md={4} xsPull={1}>
                              <Media.Left>
                                  <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                              </Media.Left>
                          </Col>
                          <Col xs={6} md={4} xsPull={2}>
                              <div className="container" align="left"> <h1>Residential Family Violence Case Worker</h1></div>
                              <div className="container" align="left"><h3>MIYSS LTD</h3></div>
                              <div className="container" align="left"><h2>WAYSS has an opportunity for an experienced Residential Case
                                Worker to join their dedicated team in the Southern Metro region.</h2></div>
                          </Col>
                          <Col xs={6} md={4} xsPush={1}>
                              <h4>Match 72%</h4>
                              <Button bsStyle='custom'> Apply </Button>
                          </Col>
                      </Row>
                  </div>
                  <div className="container">
                      <Row>
                          <Col xs={6} md={4} xsPull={1}>
                              <Media.Left>
                                  <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                              </Media.Left>
                          </Col>
                          <Col xs={6} md={4} xsPull={2}>
                              <div className="container" align="left"> <h1>Practice Nurse</h1></div>
                              <div className="container" align="left"><h3>IT Xperts</h3></div>
                              <div className="container" align="left"><h2>We are looking for an enthusiastic nurse who thrives in
                                a busy practice environment and wants to utilise their community nursing skills. </h2></div>
                          </Col>
                          <Col xs={6} md={4} xsPush={1}>
                              <h4>Match 53%</h4>
                              <Button bsStyle='custom'> Apply </Button>
                          </Col>
                      </Row>
                  </div>
                </Row>
            </Panel>
        </div>
    );
}
