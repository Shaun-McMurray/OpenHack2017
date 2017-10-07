import React, {Component} from 'react';
import { Image, Button, Media, Row, Col } from 'react-bootstrap';

export const EmployeeComponent = () => {
    return(
        <div className="container">
            <Row>
                <Col xs={4} md={2}>
                   <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                </Col>
                <Col xs={4} md={2}>
                    <div className="container" align="left"> <h1>Full Name</h1></div>
                    <div className="container" align="left"><h3>Email</h3></div>
                    <div className="container" align="left"><h3>Mobile</h3></div>
                </Col>
                <Col xs={10} md={6}>
                    <Image src="./images/hollands_octagon.jpg" style={{width: "25%", height: "25%"}}/>
                </Col>
                <Col xs={4} md={2}>
                    <h4>Match%</h4>
                    <Button bsStyle='custom'> Accept </Button>
                </Col>
            </Row>
        </div>
    );
}