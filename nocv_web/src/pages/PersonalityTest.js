import React from 'react'
import { Button,
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Radio,
  FormGroup,
  Jumbotron,
  Row,
  Col,
  Image} from 'react-bootstrap'
  import { Link } from 'react-router-dom';
  import '../styles/Stylesheet.css'

  export const PersonalityTest = () => {
    return (
      <div className="container">
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <div>
              <Image className="hundredPercentageImage" src="./images/logo.gif"/>
            </div>
          </Col>
        </Row>
        <Jumbotron className="personalTestJumbotron">
          <Panel collapsible defaultExpanded header="Personality test">
            <ListGroup fill>
              <ListGroupItem>You often get so lost in thoughts that you ignore or forget your surroundings.
                <FormGroup>
                  <Label>
                    Agree
                  </Label>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    1
                  </Radio>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    2
                  </Radio>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    3
                  </Radio>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    4
                  </Radio>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    5
                  </Radio>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    6
                  </Radio>
                  {' '}
                  <Radio name="radioGroup0" inline>
                    7
                  </Radio>
                  {' '}
                  <Label>
                    Disagree
                  </Label>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>You try to respond to your e-mails as soon as possible and cannot stand a messy inbox.
                <FormGroup>
                  <Label>
                    Agree
                  </Label>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    1
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    2
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    3
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    4
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    5
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    6
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    7
                  </Radio>
                  {' '}
                  <Label>
                    Disagree
                  </Label>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>You enjoy dancing to Iggy Azelea - Mo Bounce
                <FormGroup>
                  <Label>
                    Agree
                  </Label>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    1
                  </Radio>
                  {' '}
                  <Radio name="radioGroup1" inline>
                    2
                  </Radio>
                  {' '}
                  <Radio name="radioGroup2" inline>
                    3
                  </Radio>
                  {' '}
                  <Radio name="radioGroup2" inline>
                    4
                  </Radio>
                  {' '}
                  <Radio name="radioGroup2" inline>
                    5
                  </Radio>
                  {' '}
                  <Radio name="radioGroup2" inline>
                    6
                  </Radio>
                  {' '}
                  <Radio name="radioGroup2" inline>
                    7
                  </Radio>
                  {' '}
                  <Label>
                    Disagree
                  </Label>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>You often feel as if you have to justify yourself to other people.
                <FormGroup>
                  <Label>
                    Agree
                  </Label>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    1
                  </Radio>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    2
                  </Radio>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    3
                  </Radio>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    4
                  </Radio>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    5
                  </Radio>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    6
                  </Radio>
                  {' '}
                  <Radio name="radioGroup3" inline>
                    7
                  </Radio>
                  {' '}
                  <Label>
                    Disagree
                  </Label>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>Draw me like one of your french girls
                <FormGroup>
                  <Label>
                    Agree
                  </Label>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    1
                  </Radio>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    2
                  </Radio>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    3
                  </Radio>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    4
                  </Radio>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    5
                  </Radio>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    6
                  </Radio>
                  {' '}
                  <Radio name="radioGroup4" inline>
                    7
                  </Radio>
                  {' '}
                  <Label>
                    Disagree
                  </Label>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/EmployeeDashboard">
                <Button bsStyle='custom'>
                  Finish
                </Button>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </Jumbotron>
    </div>
  );
}
