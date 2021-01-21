import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import React, { useState } from "react";
  // var Mona = require('../src/Monaco-Editor/Monaco')
  
  function Editor() {
    const [isLoading, setIsLoading] = useState(false);
    let [route, setRoute] = useState("");
    let [funk, setFunk] = useState("");
  
    const onSubmit = async (event) => {
      // prevent redirect
      event.preventDefault();
  
      setIsLoading(true);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/u-c/new", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(
        JSON.stringify({
          route: route,
          funktion: funk,
        })
      );
      // do something asynchronous that takes time, this function is just an example
  
      // reset form and loading state
      setIsLoading(false);
      alert(`your new route can be see at https://uselessapi/u-c-r${route}`)
      
      
    };
    return (
      <Container className="App">
        <Row>
          <Col>
            <Label for="exampleText">
              <h1>Make your thing</h1>
            </Label>
          </Col>
        </Row>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">
                  Route will be hosted at https://uselessapi/u-c-r{route} 
                  {/* Example:(https://uselessapi.com/api/u-c-r/my-test) */}
                </Label>
                <Input
                  type="route"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  name="route"
                  id="route"
                  placeholder="my-rad-api"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Select(not used yet)</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  value={funk}
                  onChange={(e) => setFunk(e.target.value)}
                  id="funktion"
                  placeholder="response.send('hiworld')"
                  type="textarea"
                  name="funktion"
                />
              </FormGroup>
  
              <Button type="submit" color="info">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      
      </Container>
    );
  }
  
  export default Editor;
  