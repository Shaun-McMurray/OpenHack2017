import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl, Jumbotron } from 'react-bootstrap';

export const Login = () => {
  return (
    <div className = "container">
      <div>
        <img src='./images/logo.gif' alt="logo" />
      </div>
        <Jumbotron>
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
            <Button type="submit">
                Sign in
            </Button>
          </form>
        </Jumbotron>
    </div>
  );
}
