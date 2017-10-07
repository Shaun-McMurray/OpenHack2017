import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, Button, FormControl, Jumbotron } from 'react-bootstrap'

import { LoginHeader } from './LoginHeader'

import '../styles/Stylesheet.css'

export const Login = () => {
  return (
    <div className = "container">
      <LoginHeader />
        <Jumbotron className="centeredJumbotron">
          <form>
            <FormGroup>
              <ControlLabel>Login</ControlLabel>
            </FormGroup>
            <FormGroup
              controlId="formBasicText"
            >
              <FormControl
                type="email"
                placeholder="Enter e-mail"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            <FormControl.Feedback />
          </FormGroup>
            <Button className="btn-custom" type="submit">
                Sign in
            </Button>
          </form>
        </Jumbotron>
    </div>
  );
}
