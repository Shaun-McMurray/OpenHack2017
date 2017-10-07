import React, {Component} from 'react';
import ReactDom,  {Link} from 'react-router-dom';
import { Panel, Button, Row, Col } from 'react-bootstrap';

export const PostedJob = () => {
    return(
        <div className="container">
            <Panel>
            <Row>
                <Col xs={6} md={4}>
                    <div className="container" align="left"> <h1>Job Title</h1></div>
                    <div className="container" align="left"><h3>Company Name</h3></div>
                    <div className="container" align="left"><h3>Location</h3></div>
                    <div className="container" align="left"><h3>Brief job description</h3></div>
                </Col>
                <Col xs={6} md={4} xsPush={5}>
                    <Link to="/Job">
                        <Button bsStyle='custom'> More Info </Button>
                    </Link>
                </Col>
            </Row>
            </Panel>
        </div>
    );
}