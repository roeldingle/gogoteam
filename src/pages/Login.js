import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardBody, CardHeader, CardTitle, CardFooter, Button,
  Form, FormGroup, Label, Input,
} from 'reactstrap';

import fire from '../config/Fire';
import Alert from '../components/AlertComponent';


class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state ={
      email: '',
      password: '',
      error: {
        status: false,
        message: ''
      }
    }
  }

  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

      console.log(u);

    }).catch((error) => {
      console.log(error);
      //alert(error.message);
      this.setState({
        error:{
          status: true,
          message: error.message
        }
      });
    });
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container style={{ marginTop: "2em"}}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <CardTitle tag="h2">Login</CardTitle>
                <br />
                {this.state.error.status ? (<Alert message={this.state.error.message} code="danger" />) : ''}
                <Form>
                   <FormGroup>
                     <Label for="exampleEmail">Email</Label>
                     <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="emailadd@sample.com" />
                   </FormGroup>
                   <FormGroup>
                     <Label for="examplePassword">Password</Label>
                     <Input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="password" />
                   </FormGroup>
                 </Form>
              </CardBody>
              <CardFooter style={{ margin: '0 auto', background: 'none', borderTop: 'none', marginBottom: '20px' }}>
                <Button color="primary" onClick={this.login}>Login</Button> <Button color="secondary">Register</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Login;
