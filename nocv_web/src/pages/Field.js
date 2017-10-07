import React, { Component } from 'react';
import { Jumbotron, DropdownButton, Checkbox, Col, ControlLabel, FormGroup, HelpBlock, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Field = () => {
  return (
    <div className = "container">
      <Jumbotron>
        <FormGroup>
          <ControlLabel bsSize="large">Work field and skills</ControlLabel>
        </FormGroup>
        <DropdownButton title="Programming" id="bg-vertical-dropdown-1">
          <Col smOffset={1}>
            <Checkbox>
              Java
            </Checkbox>
            <Checkbox>
              MySQL
            </Checkbox>
          </Col>
        </DropdownButton>
        <DropdownButton title="Beauty" id="bg-vertical-dropdown-1">
          <Col smOffset={1}>
            <Checkbox>
              Hair dresser
            </Checkbox>
            <Checkbox>
              Make-up artist
            </Checkbox>
          </Col>
        </DropdownButton>
          <FormGroup>
          <HelpBlock>Press your work field and select your skills.</HelpBlock>
          <Link to="/PersonalityTest">
            <Button bsStyle="custom" type="submit">Continue</Button>
          </Link>
        </FormGroup>
      </Jumbotron>
    </div>
  );
}
