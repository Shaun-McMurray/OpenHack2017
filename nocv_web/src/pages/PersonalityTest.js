import React, { Component } from 'react'
import { Button,
         Panel,
         ListGroup,
         ListGroupItem,
         Label,
         Radio,
         FormGroup,
         ButtonGroup,
         radioGroup,
         Jumbotron,} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import '../styles/Stylesheet.css'

export const PersonalityTest = () => {
  return (
    <div className="container">
      <Jumbotron>
    <Panel collapsible defaultExpanded header="Personality test">
      <ListGroup fill>
        <ListGroupItem>You often get so lost in thoughts that you ignore or forget your surroundings.</ListGroupItem>
        <ListGroupItem>

          <FormGroup>
            <Label>
              Agree
            </Label>
            {' '}
            <radioGroup>
            <Radio name="radioGroup" inline>
              1
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              2
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              3
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              4
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              5
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              6
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              7
            </Radio>
            {' '}
          </radioGroup>
            <Label>
              Disagree
            </Label>
          </FormGroup>
        </ListGroupItem>
        <ListGroupItem>You try to respond to your e-mails as soon as possible and cannot stand a messy inbox. </ListGroupItem>
        <ListGroupItem>

          <FormGroup>
            <Label>
              Agree
            </Label>
            {' '}
            <radioGroup>
            <Radio name="radioGroup" inline>
              1
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              2
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              3
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              4
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              5
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              6
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              7
            </Radio>
            '{' '}'
          </radioGroup>
            <Label>
              Disagree
            </Label>
          </FormGroup>
        </ListGroupItem>
        <ListGroupItem>You enjoy dancing to Iggy Azelea - Mo Bounce</ListGroupItem>
        <ListGroupItem>
            <FormGroup>
              <Label>
                Agree
              </Label>
              <radioGroup>
              <Radio name="radioGroup" inline>
                1
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                2
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                3
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                4
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                5
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                6
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                7
              </Radio>
            </radioGroup>
              {' '}
              <Label>
                Disagree
              </Label>
              </FormGroup>
        </ListGroupItem>
        <ListGroupItem>You often feel as if you have to justify yourself to other people.</ListGroupItem>
        <ListGroupItem>
          <FormGroup>
            <Label>
              Agree
            </Label>
            {' '}
          <radioGroup>
            <Radio name="radioGroup" inline>
              1
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              2
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              3
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              4
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              5
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              6
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              7
            </Radio>
            {' '}
          </radioGroup>
          <Label>
            Disagree
          </Label>
        </FormGroup>
      </ListGroupItem>
        <ListGroupItem>Draw me like one of your french girls</ListGroupItem>
      <ListGroupItem>
      <FormGroup>
        <Label>
          Agree
        </Label>
        {' '}
        <radioGroup>
        <Radio name="radioGroup" inline>
          1
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
          2
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
          3
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
          4
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
          5
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
          6
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
          7
        </Radio>
        {' '}
      </radioGroup>
        <Label>
          Disagree
        </Label>
      </FormGroup>
    </ListGroupItem>
      <ListGroupItem>
        <ButtonGroup>
          <Button>
            Previous
          </Button>
          <Button>
            Next
          </Button>
        </ButtonGroup>
        <Button>
          Finish
        </Button>
      </ListGroupItem>
    </ListGroup>
    </Panel>

  </Jumbotron>
  </div>
);
  }
