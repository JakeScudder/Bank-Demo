import {
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
} from "../constants/accountConstants";

export const getAccounts = () => async (dispatch) => {
  dispatch({ type: ACCOUNT_LIST_REQUEST });
  dispatch({
    type: ACCOUNT_LIST_SUCCESS,
  });
};
