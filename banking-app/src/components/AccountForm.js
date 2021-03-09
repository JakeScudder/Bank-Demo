import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { addAccount } from "../actions/accountActions";

//To be used to add accounts in future
const AccountForm = () => {
  return (
    <Row>
      <Col xs="auto">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Account Name" />
          </Form.Group>

          <Form.Group controlId="balance">
            <Form.Label>Balance</Form.Label>
            <Form.Control type="number" placeholder="Enter Balance" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AccountForm;
