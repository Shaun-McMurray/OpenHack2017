import React, { Component } from 'react'
import { Button,
  Jumbotron,
  Row,
  Col,
  Image,
  Panel,
  ControlLabel,
  HelpBlock,
  FormGroup,
  FormControl,
  Form} from 'react-bootstrap'
  import { Link } from 'react-router-dom';

  import ReactBootstrapSlider from 'react-bootstrap-slider';
  import '../styles/Stylesheet.css'
  import {Field} from './Field'
  const titleSkill = (
    <h3>Job</h3>
  );
  const titleOctagon = (
    <h3>Who is your ideal colleague?</h3>
  );

  export const AddCandidate = () => {
    return (
      <div className="container">
        <Row>
          <Col xs={6} md={4}>
            <Panel header={titleSkill}>
              <Form>
                <HelpBlock>Enter the following fields</HelpBlock>

                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Job title"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Location"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Expiration date"
                  />
                  <br>
                  </br>
                </FormGroup>
                <FormGroup>
                  <HelpBlock>How can the potential colleagues reach you in case they have questions?</HelpBlock>
                  <FormControl
                    type="text"
                    placeholder="E-mail"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="password"
                    placeholder="Phone number"
                  />
                </FormGroup>
              </Form>
            </Panel>
          </Col>
          <Col xs={12} md={8}>
            <Panel header={titleOctagon}>
              <HelpBlock>Select the hard skills your ideal colleague must have (if any)</HelpBlock>
              <Field />
              <br>
              </br>
              <br>
              </br>
              <HelpBlock>Drop the pins on respectively personality diagram to describe your future colleague's personality</HelpBlock>
              <ControlLabel>Holland's Six Personality Types</ControlLabel>
              <div>
                <Image src="./images/Holland-Hexagon-Website1.png" style={{width: "30%"}} thumbnail/>
              </div>
              <br>
              </br>
              <div>
                <ControlLabel>The Enneagram of Personality</ControlLabel>
              </div>
              <Image src="./images/EnneagramWheel-transparent-bg.png" style={{width: "30%"}} thumbnail/>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
