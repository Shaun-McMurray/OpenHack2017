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
  Row,
  Tab,
  Tabs} from 'react-bootstrap'

  import { Link } from 'react-router-dom';
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

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Employee">
              <br>
              </br>
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
                    type="password"
                    placeholder="Password"
                  />
                </FormGroup>
              </Form>
              <Link to="/Field">
              <Button bsStyle='custom'> Next </Button>
            </Link>
          </Tab>

          <Tab eventKey={2} title="Employer">
            <br>
            </br>
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
                  placeholder="Job title"
                />
                <FormControl
                  type="text"
                  placeholder="Company name"
                />
                <FormControl
                  type="text"
                  placeholder="E-mail"
                />
                <FormControl
                  type="password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
            <Link to="/Field">
            <Button bsStyle='custom'> Next </Button>
          </Link>
        </Tab>
      </Tabs>
    </Jumbotron>
  </div>
);
}
