import React from 'react';
import { Image, Button, Media, Row, Col } from 'react-bootstrap';

export const MatchComponent = () => {
    return(
        <div className="container">
            <Row>
                <Col xs={6} md={4} xsPull={1}>
                    <Media.Left>
                        <Image src="./images/placeholder.png" style={{width: "40%", height: "40%"}}/>
                    </Media.Left>
                </Col>
                <Col xs={6} md={4} xsPull={2}>
                    <div className="container" align="left"> <h1>Job Title</h1></div>
                    <div className="container" align="left"><h3>Company Name</h3></div>
                    <div className="container" align="left"><h3>Brief job description</h3></div>
                </Col>
                <Col xs={6} md={4} xsPush={1}>
                    <h4>Match%</h4>
                    <Button bsStyle='custom'> Accept </Button>
                </Col>
            </Row>
        </div>
    );
}
