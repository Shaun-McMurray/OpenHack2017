import React from 'react'
import { Button,
  Jumbotron,
  Row,
  Col,
  Image,
  HelpBlock,
  FormGroup} from 'react-bootstrap'
  import { Link } from 'react-router-dom';

  import '../styles/Stylesheet.css'
  import {Field} from './Field'

  export const HardSkills = () => {
    return (
      <div className = "container" align={"center"}>
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <div>
              <Image className="hundredPercentageImage" src="./images/logo.gif"/>
            </div>
          </Col>
        </Row>
      <Jumbotron className="centeredJumbotron">
        <FormGroup>
          <HelpBlock>Do you have any skills in the following fields?
            If you do, feel free to select those
          </HelpBlock>
          <Field />
          <Link to="/PersonalityTest">
            <Button bsStyle="custom" type="submit">Continue</Button>
          </Link>
        </FormGroup>
      </Jumbotron>
    </div>
  );
}
