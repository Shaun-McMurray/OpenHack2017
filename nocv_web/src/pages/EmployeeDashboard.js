import React, { Component } from 'react'
import {
    Row,
    Col,
    Image,
    Panel,} from 'react-bootstrap'

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
                        <Field />
                    </Panel>
                </Col>
                <Col xs={12} md={8}>
                    <Panel header={titleOctagon}>
                        <Image src="./images/hollands_octagon.jpg" style={{width: "30%"}}/>
                        <div>
                            <br>
                            </br>
                            <Image src="./images/nine_enneagram.jpg" style={{width: "30%"}}/>
                        </div>
                    </Panel>
                </Col>
            </Row>
            <Panel header={titleMatch}>
                <Row>
                    <MatchComponent />
                    <MatchComponent />
                    <MatchComponent />
                </Row>
            </Panel>
        </div>

    );
}
