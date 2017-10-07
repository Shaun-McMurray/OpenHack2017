import React, {Component} from 'react'
import {
  Jumbotron,
  PageHeader,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Image,
  Col,
  Row} from 'react-bootstrap'

import { Link } from 'react-router-dom';

import { Header } from './Header'

import '../styles/Stylesheet.css'

export const ProfileCreation = () => {

  return(
    <div className="container">
      <Row className="show-grid">
        <Col xs={6} xsOffset={3}>
          <div>
            <Image className="hundredPercentageImage" src="./images/logo.gif"/>
          </div>
        </Col>
      </Row>
          <Jumbotron className="centeredJumbotron">
          <Image src="./images/placeholder.png" style={{width: "30%", height: "30%"}}/>
          <p>Upload Profile picture</p>
            <Form>
              <FormGroup controlId="formProfileText">
                <ControlLabel>Register</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="First name"
                />
                <FormControl
                  type="text"
                  placeholder="Last name"
                />
                <FormControl
                  type="text"
                  placeholder="Email"
                />
                <FormControl
                  type="text"
                  placeholder="placeholder"
                />
              </FormGroup>
            </Form>
            <Link to="/Field">
              <Button bsStyle='custom'> Next </Button>
            </Link>
          </Jumbotron>
    </div>
  );
}
