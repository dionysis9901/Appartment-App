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
