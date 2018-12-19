import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
  // Card, CardBody, CardHeader, CardTitle, CardFooter, Button,
  // Form, FormGroup, Label, Input,
} from 'reactstrap';

import fire from '../config/Fire';

class Home extends Component {

  logout(){
    fire.auth().signOut();
  }
  render() {
    return (
      <Container style={{ marginTop: "2em"}}>
      <Row>
        <Col xs="6">
        <Button color="danger" onClick={this.logout}>Logout</Button>
        </Col>
        <Col xs="6">Content</Col>
      </Row>
      </Container>
    );
  }
}
export default Home;
