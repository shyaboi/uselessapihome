import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label } from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";
import RoutePic from "../../assets/images/route.png";
import RoutePicR from "../../assets/images/routeR.png";
const Routing = (props) => {
  return (
    <Container fluid >
      <Row>
        <Col className="doc-headers">
          <Label>
            <h1>Routing</h1>
          </Label>
          <p>
            To create a route, simply type in the route you want into the route
            feild similar to the example below.
          </p>
          <img src={RoutePic} width="600vw" />
          <hr></hr>
          <p>Once you start typing, your route will be updated live</p>
          <img src={RoutePicR} width="600vw" />
        </Col>
      </Row>
    </Container>
  );
};

export default Routing;
