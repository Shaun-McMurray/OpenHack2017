import React, { Component } from 'react'
import { Button,
         Grid,
         Row,
         Col,
         Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/Stylesheet.css'

import Octagon from './Octagon'

export const Start = () => {
  return (
    <div className="container body">
      <Grid>
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <div>
              <Octagon size="500"/>
              <Image bsStyle="hundredPercentageImage" src="./images/logo.gif"/>
            </div>
          </Col>
        </Row>
        <Row className="show-grid" style={{paddingTop: "5%"}}>
          <Col xs={3} md={6}>
            <Link to="/Login">
            <Button className="btn-extraLarge"> Hire </Button>
            </Link>
          </Col>
          <Col xs={3} md={6}>
            <Button className="btn-extraLarge"> Apply </Button>
          </Col>
        </Row>
    </Grid>
  </div>
  );
}
