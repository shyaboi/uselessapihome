import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Jumbotron fluid id="jumbo">
        <Container fluid>
          <h1 className="display-3">UselessAPI.com</h1>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <p className="lead">Welcome to uselessapi.com</p>
          <br></br>
          <p>A collection of APIs</p>
      <DropdownToggle caret>
        APIs
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Node.js Based APIs</DropdownItem>
        <a href='https://uselessapi.com/api/name-gen'><DropdownItem>Name Generator 2</DropdownItem></a>
        <DropdownItem divider />
        <DropdownItem header>Python Based APIs</DropdownItem>
        <DropdownItem> Sorting Algorithms</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
