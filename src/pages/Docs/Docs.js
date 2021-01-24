import React, { useState, useEffect } from "react";
import {
    Container,
  NavLink,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col,
} from "reactstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GettingStarted from '../../pages/Docs/GettingStarted'
import HelloWorld from '../../pages/Docs/HelloWorld'
import Routing from '../../pages/Docs/Routing'


const Docs = (props) => {


  return (
<Router>

    <Container fluid>
      <Row>
        <Col xs="3">
          <ListGroup>
            <ListGroupItem className="justify-content-between">
                    <NavLink href="/docs/getting-started/">Getting Started</NavLink>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
            <NavLink href="/docs/hello-world">
                      Hello World Examples
                    </NavLink>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
            <NavLink href="/docs/routing">
                      Routing
                    </NavLink>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
        {/* switch for router to load different parts of docs */}
    <Switch>
    <Route exact path="/docs/getting-started">
      <GettingStarted />
    </Route>
    <Route exact path="/docs/routing">
      <Routing />
    </Route>
    <Route exact path="/docs/hello-world">
      <HelloWorld />
    </Route>
  </Switch>
        </Col>
      </Row>
    </Container>
</Router>

  );
};

export default Docs;
