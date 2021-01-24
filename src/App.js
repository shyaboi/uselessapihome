import React, { useState, useEffect } from "react";
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import {
  Container,
} from "reactstrap";


const Apps = (props) => {
  return (
    <Container fluid>
      <Nav />
    </Container>
  );
};

export default Apps;
