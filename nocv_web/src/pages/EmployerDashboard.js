import React, { Component } from 'react'
import ReactDom, { Link } from 'react-router-dom'
import {
    Row,
    Button,
    Panel,} from 'react-bootstrap'

import '../styles/Stylesheet.css'
import { PostedJob } from './PostedJob'

const titleMatch = (
    <h3>Job Listings</h3>
);

export const EmployerDashboard = () => {
    return (
        <div>
            <Panel header={titleMatch}>
                <Row>
                    <Link to="/AddCandidate"><Button bsStyle='custom'> Add Job </Button></Link>
                    <PostedJob />
                    <PostedJob />
                    <PostedJob />
                </Row>
            </Panel>
        </div>

    );
}