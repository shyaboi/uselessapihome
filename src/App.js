import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Button, CardTitle, CardText, CardImg, CardColumns } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container>
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
        <a href='https://openflags.net'><DropdownItem>Open Flags API</DropdownItem></a>
        <a href='https://uselessapi.com/api/name-gen'><DropdownItem>Name Generator 2</DropdownItem></a>
        <DropdownItem divider />
        <DropdownItem header>Python Based APIs</DropdownItem>
        <a href="https://sortpy.herokuapp.com/"><DropdownItem> Sorting Algorithms</DropdownItem></a>
      </DropdownMenu>
    </Dropdown>
        </Container>
      </Jumbotron>
      <CardColumns>
      <Card body className="text-center">
        <CardTitle tag="h5">All the words API</CardTitle>
        <CardImg top width="100%" src='https://i.ibb.co/HNyxmT3/2021-01-06-22h43-01.png' alt="Card image cap" />
        <CardText>This API has more than 400k English words that can access any number of words in the API as well as showing all words based on the first letter of the word.</CardText>
        <a href="http://uselessapi.com/api/name-gen">  <Button>UselessAPI Page</Button> </a>

      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">PySort API</CardTitle>
        <CardImg top width="100%" src="https://i.ibb.co/NSbVQnd/2021-01-06-22h47-17.png" alt="Card image cap"  />
        <CardText>PySort API is an API that will take a given array of numbers, and sort them with the given sorting method. The current methods availible are Bubble Sort, and insertSort. Bubble sort currently has a direct result option, and a step by step return option. </CardText>
        <a href="https://sortpy.herokuapp.com/">  <Button>UselessAPI Page</Button> </a>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Open Flags API</CardTitle>
        <CardImg top width="100%" src="https://i.ibb.co/JQ7B2wd/2021-01-06-22h51-44.png" alt="Card image cap"  />
        <CardText>This is the Open Flags API. This is an API that can be serched by ISO-3166 region codes.</CardText>
        <a href="https://openflags.net">  <Button>UselessAPI Page</Button> </a>

      </Card>

      </CardColumns>
          </Container>
  );
};

export default Example;
