import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import React, { useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-terminal";
var finalFunction
function onChange(newValue) {
  finalFunction = newValue
}
// var Mona = require('../src/Monaco-Editor/Monaco')

function Editor() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [isLoading, setIsLoading] = useState(false);
  let [route, setRoute] = useState("");
  let [funk, setFunk] = useState("");

  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();
    console.log(finalFunction);

    setFunk(finalFunction)
    setIsLoading(true);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/u-c/new", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        route: route,
        funktion: finalFunction,
      })
    );
    // do something asynchronous that takes time, this function is just an example
    // reset form and loading state
    setIsLoading(false);
    alert(`Redirecting you to https://uselessapi/u-c-r/${route}`);
    window.location.replace(`https://uselessapi.com/u-c-r/${route}`)
    // alert(`your new route can be see at https://uselessapi/u-c-r${route}`);
  };
  return (
    <Container className="App">
      <Row>
        <Col id='editor-head'>
          <Label for="exampleText" >
            <h1 >Make your useless thing</h1>
          </Label>
        </Col>
      </Row>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">
                Route will be hosted at https://uselessapi/u-c-r/{route}
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
        <Row fluid>
          <Col xs='3'>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </Col>
              <Col>
              <AceEditor
                mode="javascript"
                theme="terminal"
                editorProps={{ $blockScrolling: true }}
                value={funk}
                onChange={onChange}
                id="funktion"
                placeholder="response.send('hiworld')"
                type="textarea"
                name="funktion"
                showGutter="true"
              />

          </Col>
        </Row>
        <hr>
        </hr>
        <Row id='submitRow'>
          <Col>
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
