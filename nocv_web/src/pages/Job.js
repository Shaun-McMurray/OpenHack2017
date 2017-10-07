import React, { Component } from 'react'
import {
    Row,
    Col,
    Image,
    Panel,
    HelpBlock,
    ControlLabel} from 'react-bootstrap'

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

export const Job = ({props}) => {
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
                    <EmployeeComponent />
                    <EmployeeComponent />
                    <EmployeeComponent />
                </Row>
            </Panel>
        </div>

    );
}
