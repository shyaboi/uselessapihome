import React, { useState, useEffect, Suspense } from "react";
import {
    Container,
  Row,
  Col,
} from "reactstrap";
import HomeR from '../../assets/images/homer.png'
import HomeRE from '../../assets/images/homere.png'

const GettingStarted = (props) => {


  return (
    <Container fluid>
<Row>
    <Col className='doc-headers'>
    <h1>
        Getting Started with UseLessAPI.com
    </h1>
    <p>
        To get started with UselessAPI, the first thing you can do is make a new route/API.
    </p>
    <Suspense fallback={<div>Loading...</div>}>
    <img src={HomeR} 
    width='600vw'
    />
    </Suspense>
    <hr>
    </hr>
    <p>
        To do this, click on the Editor tab on the navigation bar on the top left similar to the example below.
    </p>
    <img src={HomeRE} 
    width='600vw'
    />
    <hr>
    </hr>
    <p>

    </p>
    </Col>
</Row>
    </Container>
  );
};

export default GettingStarted;