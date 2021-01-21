import React, { useState, useEffect } from "react";
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import { Jumbotron, Container } from "reactstrap";
import {
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

const Apps = (props) => {
  return (
    <Container fluid>
      <Nav />
    </Container>
  );
};

export default Apps;
