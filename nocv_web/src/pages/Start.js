import React, { Component } from 'react'
import { Button,
         Grid,
         Row,
         Col,
         Image} from 'react-bootstrap'

import '../styles/Stylesheet.css'

export const Start = () => {
  return (
    <div className="container">
      <Grid>
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <div>
              <Image className="hundredPercentageImage" src="./images/logo.gif"/>
            </div>
          </Col>
        </Row>
        <Row className="show-grid" style={{paddingTop: "5%"}}>
          <Col xs={3} md={6}>
            <Button className="btn-extraLarge"> Hire </Button>
          </Col>
          <Col xs={3} md={6}>
            <Button className="btn-extraLarge"> Apply </Button>
          </Col>
        </Row>
    </Grid>
  </div>
  );
}
