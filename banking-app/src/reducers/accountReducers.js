import {
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
} from "../constants/accountConstants";

//Declare initial state
const initialState = {
  accounts: [
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
  ],
};

export const accountListReducer = (state = initialState, action) => {
  switch (action.type) {
    //Set loading true, normally when dealing with a fetch
    case ACCOUNT_LIST_REQUEST:
      return { loading: true };
    //Set loading false, return data.  Normally data is fetched in actions
    case ACCOUNT_LIST_SUCCESS:
      return {
        loading: false,
        accounts: initialState.accounts,
      };
    default:
      return state;
  }
};
