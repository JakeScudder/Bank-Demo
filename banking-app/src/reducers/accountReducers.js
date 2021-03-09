import {
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
  ADD_ACCOUNT_REQUEST,
  ADD_ACCOUNT_SUCCESS,
} from "../constants/accountConstants";

export const accountListReducer = (state = { accounts: [] }, action) => {
  switch (action.type) {
    case ACCOUNT_LIST_REQUEST:
      return { loading: true };
    case ACCOUNT_LIST_SUCCESS:
      return { loading: false, accounts: action.payload };
    // case ACCOUNT_LIST_FAIL:
    //   return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addAccountReducer = (state = { accounts: [] }, action) => {
  switch (action.type) {
    case ADD_ACCOUNT_REQUEST:
      return { loading: true };
    case ADD_ACCOUNT_SUCCESS:
      return { loading: false, account: action.payload };
    // case ACCOUNT_LIST_FAIL:
    //   return { loading: false, error: action.payload };
    default:
      return state;
  }
};
