import React, {Component} from 'react'
import {
  Jumbotron,
  PageHeader,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Image} from 'react-bootstrap'

import { Link } from 'react-router-dom';

import { Header } from './Header'

import '../styles/Stylesheet.css'

export const ProfileCreation = () => {

  return(
    <div className="container">
      <Header>
      </Header>
          <Jumbotron className="centeredJumbotron">
          <Image src="./images/placeholder.png" style={{width: "30%", height: "30%"}}/>
          <p>Upload Profile picture</p>
            <Form>
              <FormGroup controlId="formProfileText">
                <ControlLabel>Register</ControlLabel>
                <FormControl
                  type="text"
                  value=''
                  placeholder="First name"
                />
                <FormControl
                  type="text"
                  value=''
                  placeholder="Last name"
                />
                <FormControl
                  type="text"
                  value=''
                  placeholder="Email"
                />
                <FormControl
                  type="text"
                  value=''
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
