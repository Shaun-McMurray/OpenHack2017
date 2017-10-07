import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, Button, FormControl, Jumbotron } from 'react-bootstrap'

import { Link } from 'react-router-dom';
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
                placeholder="E-mail"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            <FormControl.Feedback />
          </FormGroup>
          <Link to="/">
            <Button bsStyle="custom" type="submit">Log in employer</Button>
          </Link>
          <Link to="/Field">
            <Button bsStyle="custom" type="submit">Log in employee</Button>
          </Link>
          <Link to="/">
            <Button bsStyle="custom" type="submit">Forget password</Button>
          </Link>

          </form>
        </Jumbotron>
    </div>
  );
}
