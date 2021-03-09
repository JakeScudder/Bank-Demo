import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AccountForm = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(addAccount(name, balance))
  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Enter Account Name"
        />
      </Form.Group>

      <Form.Group controlId="balance">
        <Form.Label>Balance</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Enter Balance"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AccountForm;
