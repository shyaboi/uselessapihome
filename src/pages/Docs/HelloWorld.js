import React, { useState, useEffect } from "react";
import {
    Container,
  Row,
  Col,
} from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";
import Submit from '../../assets/images/submit.png'
import Alert from '../../assets/images/alert.png'

const HelloWorld = (props) => {


  return (
    <Container fluid >
        <Row>
            <Col className='doc-headers'>
        <h1>
            Hello World
        </h1>
        <p>
            First follow the instructions for <a href='/docs/routing'>choosing a route</a>
        </p>
        <p>After you have chosen a route, you can write your code in the editor.</p>
        <p>UseLessAPI can handle most normal JavaScript functions, as well as containing the 'response' and 'request' parameters from an Express route.</p>
        <p>To send a simple string of 'Hello World'; Simply pass the response parameter, with the .send() method. In the '.send' method, you can contain your string such as the example below.</p>
        <CodeBlock
          codeString={`response.send('Hello World');`} />
          <hr>
          </hr>
          <p>After you have configured your route, and you have placed your code in the editor; you can click the submit button to submit your new route/API to UseLessAPI.com</p>
          <img src={Submit} width="600vw" />
          <hr>
          </hr>
          <p>
              After your submission, you will be redirected to your new route/API!
          </p>
          <img src={Alert} width="600vw" />
          
        </Col>
        </Row>
    </Container>
  );
};

export default HelloWorld;