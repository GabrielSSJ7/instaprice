import axios from "axios";
import { GET_MAIN_DATA, URL } from "../types";

export const getMainData = token => {
  return dispatch => {
    
    const instance = axios.create({
      headers: { Authorization: token }
    });
    instance.get(`${URL}main`).then(res => {
        
      dispatch(dispatchGetMainData(res));
    })
    .catch(err => {
     
    });
  };
};

const dispatchGetMainData = res => {
  return {
    type: GET_MAIN_DATA,
    payload: res.data
  };
};
