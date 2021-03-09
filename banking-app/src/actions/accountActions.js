import {
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
} from "../constants/accountConstants";

export const getAccounts = () => async (dispatch) => {
  dispatch({ type: ACCOUNT_LIST_REQUEST });

  const data = [
    {
      name: "Frodo",
      balance: 399,
    },
    {
      name: "Samwise",
      balance: 580,
    },
    {
      name: "Gandalf",
      balance: 777,
    },
    {
      name: "Aragorn",
      balance: 1111,
    },
  ];

  dispatch({
    type: ACCOUNT_LIST_SUCCESS,
    payload: data,
  });
};
