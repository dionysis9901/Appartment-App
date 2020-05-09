const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SOMETHING":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
