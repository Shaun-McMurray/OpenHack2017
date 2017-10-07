import React, { Component } from 'react'
import { Button,
         Grid,
         Row,
         Col,
         Image,
         Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/Stylesheet.css'

export const Start = () => {
  return (
    <div className="container body">
      <Grid>
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <div>
              <Image bsStyle="hundredPercentageImage" src="./images/logo.gif"/>
            </div>
          </Col>
        </Row>
        <Jumbotron className="fullJumbotron">
        <Row className="show-grid" style={{paddingTop: "5%"}}>
          <Col xs={3} md={6}>
            <Link to="/Profile">
                <Button bsStyle="extraLarge"> Register </Button>
            </Link>
          </Col>
          <Col xs={3} md={6}>
              <Link to="/Login">
                  <Button bsStyle="extraLarge"> Log in </Button>
              </Link>
          </Col>
        </Row>
      </Jumbotron>
    </Grid>
  </div>
  );
}
