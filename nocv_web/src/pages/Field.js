import React, { Component } from 'react';
import { Jumbotron, DropdownButton, Checkbox, Col} from 'react-bootstrap';

export const Field = () => {
  return (
    <div className = "container">
      <Jumbotron>
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
      </Jumbotron>
    </div>
  );
}
