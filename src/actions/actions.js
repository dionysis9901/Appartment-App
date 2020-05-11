import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  GET_AVAILABLE,
  GET_AVAILABLE__SUCCESS,
  GET_AVAILABLE_FAILED,
  RESET_STATE,
} from "./actionTypes";

const getData = () => ({
  type: GET_DATA,
});

const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: { data },
});

const getDataFailed = (message) => ({
  type: GET_DATA_FAILED,
  payload: { message },
});

const getAvailable = (nid, startD, endD, guests) => ({
  type: GET_AVAILABLE,
  payload: { nid, startD, endD, guests },
});

const getAvailableSuccess = (info) => ({
  type: GET_AVAILABLE__SUCCESS,
  payload: { info },
});

const getAvailableFailed = (message) => ({
  type: GET_AVAILABLE_FAILED,
  payload: { message },
});

const resetState = () => ({
  type: RESET_STATE,
});

export {
  getData,
  getDataSuccess,
  getDataFailed,
  getAvailable,
  getAvailableSuccess,
  getAvailableFailed,
  resetState,
};
