import { GET_MAIN_DATA } from "../types";

const INITIAL_STATE = {
  produto: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MAIN_DATA:
    return { ...state, produto: action.payload}

    default:
      return state;
  }
};
