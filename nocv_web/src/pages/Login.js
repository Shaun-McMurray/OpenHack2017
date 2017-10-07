import React from 'react'
import {
  FormGroup,
  Button,
  FormControl,
  Jumbotron } from 'react-bootstrap'

import { LoginHeader } from './LoginHeader'
import { Link } from 'react-router-dom';
import '../styles/Stylesheet.css'

export const Login = () => {
  return (
    <div className = "container">
      <LoginHeader />
      <Jumbotron className="centeredJumbotron">
        <form>
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
            <Link to="/EmployerDashboard">
            <Button bsStyle="custom" type="submit">Log in employer</Button>
          </Link>
          <Link to="/EmployeeDashboard">
          <Button bsStyle="custom" type="submit">Log in employee</Button>
        </Link>
    </form>
  </Jumbotron>
</div>
);
}
