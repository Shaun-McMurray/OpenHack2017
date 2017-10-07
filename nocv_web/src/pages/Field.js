import React, { Component } from 'react';
import { Jumbotron, DropdownButton, Checkbox, Col, ControlLabel, FormGroup, HelpBlock, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Field = () => {
  return (
    <div className = "container" style={{width: "100%"}} >
        <DropdownButton title="Programming" id="bg-vertical-dropdown-1">
            <Checkbox>
              Java
            </Checkbox>
            <Checkbox>
              MySQL
            </Checkbox>
            <Checkbox>
              React
            </Checkbox>
            <Checkbox>
              Elite Scrumer 2.0
            </Checkbox>
        </DropdownButton>
        <DropdownButton title="Beauty care" id="bg-vertical-dropdown-1">
            <Checkbox>
              Manicure
            </Checkbox>
            <Checkbox>
              Make-up artist
            </Checkbox>
            <Checkbox>
              Pedicure
            </Checkbox>
        </DropdownButton>
        <DropdownButton title="Economics" id="bg-vertical-dropdown-1">
            <Checkbox>
              Accounting
            </Checkbox>
            <Checkbox>
              Statistics
            </Checkbox>
        </DropdownButton>
        <DropdownButton title="Media" id="bg-vertical-dropdown-1">
            <Checkbox>
              Music production
            </Checkbox>
            <Checkbox>
              Movie editing
            </Checkbox>
        </DropdownButton>
    </div>
  );
}
