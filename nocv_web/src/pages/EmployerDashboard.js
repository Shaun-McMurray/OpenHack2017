import React from 'react'
import { Link } from 'react-router-dom'
import {
    Row,
    Button,
    Panel,} from 'react-bootstrap'

import '../styles/Stylesheet.css'
import PostedJob from './PostedJob'

const titleMatch = (
    <h3>Job Listings</h3>
);

export const EmployerDashboard = () => {
    return (
        <div>
            <Panel header={titleMatch}>
                <Row>
                    <Link to="/AddCandidate">
                        <Button bsStyle='custom'> Add a listing </Button>
                    </Link>
                    <PostedJob title = "Software engineer" companyName = "Ericsson" location = "Gothenburg" jobdesc = "As an sofware engineer..."/>
                    <PostedJob title = "Application tester" companyName = "Uber" location = "Stockholm" jobdesc = "At Uber you will get a chance to..."/>
                    <PostedJob title = "Web designer" companyName = "StartItUp" location = "Gothenburg" jobdesc = "In a small company..."/>
                </Row>
            </Panel>
        </div>

    );
}
