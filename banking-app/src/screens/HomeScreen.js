import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { getAccounts } from "../actions/accountActions";

import Loader from "../components/Loader";
import AccountForm from "../components/AccountForm";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const accountList = useSelector((state) => state.accountList);
  const { loading, accounts } = accountList;

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  return (
    <div className="homescreen-container">
      <h1 className="home-h1">Account Info</h1>
      <div className="admin-account-info">
        {loading ? (
          <Loader />
        ) : accounts ? (
          accounts.map((user) => (
            <Row className="mb-2">
              <Col xs={2}>
                <h5 className="h5-username">{user.name}</h5>
              </Col>
              <Col xs={2}>
                <h5 className="h5-account-balance">{user.balance}</h5>
              </Col>
            </Row>
          ))
        ) : null}
      </div>
      <h3> Add Account</h3>
      <AccountForm />
    </div>
  );
};

export default HomeScreen;
