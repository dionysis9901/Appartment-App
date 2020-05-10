const initialState = {
  postsData: null,
  currentNid: null,
  originalPrice: null,
  discount: null,
  discountPercent: null,
  priceWithDiscount: null,
  available: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      return {
        ...state,
      };

    case "GET_DATA_SUCCESS":
      return {
        ...state,
        postsData: payload.data,
      };

    case "GET_DATA_FAILED":
      return {
        ...state,
      };

    case "GET_AVAILABLE":
      return {
        ...state,
        originalPrice: null,
        priceWithDiscount: null,
        discount: null,
        discountPercent: null,
        available: null,
      };

    case "GET_AVAILABLE__SUCCESS":
      console.log(payload.info);
      return {
        ...state,
        originalPrice: payload.info.total_price_original,
        priceWithDiscount: payload.info.total_price_with_discount,
        discount: payload.info.discount,
        discountPercent: payload.info.discount_percent,
        available: payload.info.is_available,
      };

    case "GET_AVAILABLE__FAILED":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
