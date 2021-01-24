import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardColumns,
  Row,
  Col,
} from "reactstrap";
var derta;

const Home = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenLow, setDropdownOpenLow] = useState(false);
  const [routes, setRoutes] = useState([]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleLow = () => setDropdownOpenLow((prevState) => !prevState);

  useEffect(async() => {
    fetch("/u-c/all-routes")
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        derta = data;
        setRoutes(derta);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  });

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron fluid id="jumbo">
            <Container>
              <h1 className="display-3 d-none d-sm-block">UselessAPI.com</h1>
              <a href='/editor'><Button color='info'>Make Your Own API</Button></a>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <p className="lead ">Welcome to UseLessAPI.com</p>
                <p>User Made APIs</p>
                <DropdownToggle caret color="info">
                  APIs
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>User Created Routes</DropdownItem>
                  {routes.map((routes) => (
                    <a href={"http://uselessapi.com/u-c-r" + routes}>
                      <DropdownItem color="info">{routes}</DropdownItem>
                    </a>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          {routes.map((routes) => (
            <Card>
              <CardBody>
                <CardTitle tag="h5">{routes}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {routes}
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <a href={"/u-c-r" + routes}>
                  {" "}
                  <Button color="info">Take a look at the raw output</Button>
                </a>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Jumbotron fluid id="jumbo">
            <Container>
              <h4 className="display-5">Example APIs</h4>
              <Dropdown isOpen={dropdownOpenLow} toggle={toggleLow}>
                <p className="lead">These are some things I made</p>
                <br></br>
                <p>Checkout some example APIs</p>
                <DropdownToggle caret color="info">
                  APIs
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Node.js Based APIs</DropdownItem>
                  <a href="https://openflags.net">
                    <DropdownItem>Open Flags API</DropdownItem>
                  </a>
                  <a href="https://shyaboi.github.io/namegen2/">
                    <DropdownItem>Name Generator 2</DropdownItem>
                  </a>
                  <DropdownItem divider />
                  <DropdownItem header>Python Based APIs</DropdownItem>
                  <a href="https://uselessapi.com/api/py-sort/home">
                    <DropdownItem> Sorting Algorithms</DropdownItem>
                  </a>
                </DropdownMenu>
              </Dropdown>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <CardColumns>
        <Card body className="text-center">
          <CardTitle tag="h5">All the words API</CardTitle>
          <CardImg
            top
            width="100%"
            src="https://i.ibb.co/HNyxmT3/2021-01-06-22h43-01.png"
            alt="Card image cap"
          />
          <CardText>
            This API has more than 400k English words that can access any number
            of words in the API as well as showing all words based on the first
            letter of the word.
          </CardText>
          <a href="https://shyaboi.github.io/namegen2/">
            {" "}
            <Button color="info">UselessAPI Page</Button>{" "}
          </a>
        </Card>
        <Card body className="text-center">
          <CardTitle tag="h5">PySort API</CardTitle>
          <CardImg
            top
            width="100%"
            // src="https://i.ibb.co/NSbVQnd/2021-01-06-22h47-17.png"
            src="https://i.ibb.co/yfBJLHf/construct.jpg"
            alt="Card image cap"
          />
          <CardText>
            PySort API is an API that will take a given array of numbers, and
            sort them with the given sorting method. The current methods
            availible are Bubble Sort, and insertSort. Bubble sort currently has
            a direct result option, and a step by step return option.(Currently
            Offline)
          </CardText>
          <a href="https://uselessapi.com/api/py-sort/home">
            {" "}
            <Button color="info">UselessAPI Page</Button>{" "}
          </a>
        </Card>
        <Card body className="text-center">
          <CardTitle tag="h5">Open Flags API</CardTitle>
          <CardImg
            top
            width="100%"
            src="https://i.ibb.co/JQ7B2wd/2021-01-06-22h51-44.png"
            alt="Card image cap"
          />
          <CardText>
            This is the Open Flags API. This is an API that can be serched by
            ISO-3166 region codes.
          </CardText>
          <a href="https://openflags.net">
            {" "}
            <Button color="info">UselessAPI Page</Button>{" "}
          </a>
        </Card>
      </CardColumns>
    </Container>
  );
};

export default Home;
