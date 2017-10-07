import React, {Component} from 'react';
import ReactDom,  {Link} from 'react-router-dom';
import { Panel, Button, Row, Col } from 'react-bootstrap';

export default class PostedJob extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div className="container">
            <Panel>
            <Row>
                <Col xs={6} md={4}>
                    <div className="container" align="left"> <h1>{this.props.title}</h1></div>
                    <div className="container" align="left"><h3>{this.props.companyName}</h3></div>
                    <div className="container" align="left"><h3>{this.props.location}</h3></div>
                    <div className="container" align="left"><h3>{this.props.jobdesc}</h3></div>
                </Col>
                <Col xs={6} md={4} xsPush={5}>
                    <Link to="/Job">
                        <Button bsStyle='custom'> More Info </Button>
                    </Link>
                </Col>
            </Row>
            </Panel>
        </div>
    );}
}
