import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Input(props) {
  return (
    <Form
      className="input"
      // onSubmit={props.onSubmit}
    >
        <Form.Group as={Row} controlId="inputField">
          <Form.Label column sm="3">{props.label}</Form.Label>
          <Col sm="1">
            <Form.Control className="inline" placeholder={props.placeholder} />
          </Col>
          <Col sm="8">
            <Button className="float-left" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Group>
    </Form>
  )
}

export default Input;