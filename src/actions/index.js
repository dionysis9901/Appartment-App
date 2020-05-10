export const getData = () => ({
  type: "GET_DATA",
});

export const getDataSuccess = (data) => ({
  type: "GET_DATA_SUCCESS",
  payload: { data },
});

export const getDataFailed = (message) => ({
  type: "GET_DATA_FAILED",
  payload: { message },
});

export const getAvailable = (nid, startD, endD, guests) => ({
  type: "GET_AVAILABLE",
  payload: { nid, startD, endD, guests },
});

export const getAvailableSuccess = (info) => ({
  type: "GET_AVAILABLE__SUCCESS",
  payload: { info },
});

export const getAvailableFailed = (message) => ({
  type: "GET_AVAILABLE_FAILED",
  payload: { message },
});

export const resetState = () => ({
  type: "RESET_STATE",
});
