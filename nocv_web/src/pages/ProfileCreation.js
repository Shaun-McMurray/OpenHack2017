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
            <Button bsStyle='custom'> Next </Button>
          </Jumbotron>
    </div>
  );
}
