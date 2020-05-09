const initialState = { data: null };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      return {
        ...state,
      };

    case "GET_DATA_SUCCESS":
      return {
        ...state,
        data: payload.data,
      };

    case "GET_DATA_FAILED":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
