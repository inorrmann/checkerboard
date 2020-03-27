import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Input(props) {
  return (
    <Form
      className="input"
      // onSubmit={props.onSubmit}
    >
        <Form.Group controlId="inputField">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control placeholder={props.placeholder} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}

export default Input;