import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label } from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";
import Edit from '../../assets/images/editor.png'

const Editor = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="doc-headers">
          <Label>
            <h1>Editor</h1>
          </Label>
          <p>
              This is the editor page. Here you can create your new route/API and edit your exisiting routes.
          </p>
          <p>
              This editor was built with the help of <a href='https://github.com/securingsincity/react-ace#readme'> React-Ace Editor</a>
          </p>
          <img src={Edit} width="600vw" />
          <hr>
          </hr>
          <p>
            You can customize the editor to your likeing on the side panel such
            as the example below.
          </p>
          <img src={Edit} width="600vw" />
<hr>
</hr>
<p>
    The editor currently can highlight syntax for JavaScript, and can change a varity of configuation options in the <a href='https://github.com/securingsincity/react-ace#readme'> React-Ace Editor</a>
</p>
<img src={Edit} width="600vw" />

        </Col>
      </Row>
    </Container>
  );
};

export default Editor;
