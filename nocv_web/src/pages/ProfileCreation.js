import React from 'react'
import {
  Jumbotron,
  Form,
  FormGroup,
  FormControl,
  HelpBlock,
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
              <Form>
                <FormGroup>

                  <HelpBlock>(Press the picture to upload a profile picture)</HelpBlock>
                  <FormControl
                    type="text"
                    placeholder="First name"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Last name"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="password"
                    placeholder="Password"
                  />
                </FormGroup>
              </Form>
              <Link to="/HardSkills">
              <Button bsStyle='custom'> Next </Button>
            </Link>
          </Tab>

          <Tab eventKey={2} title="Employer">
            <br>
            </br>
            <Image src="./images/placeholder.png" style={{width: "30%", height: "30%"}}/>
            <HelpBlock>(Press the picture to upload a profile picture)</HelpBlock>
            <Form>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="First name"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Last name"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Company"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Job title"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
            <Link to="/EmployerDashboard">
            <Button bsStyle='custom'> Next </Button>
          </Link>
        </Tab>
      </Tabs>
    </Jumbotron>
  </div>
);
}
