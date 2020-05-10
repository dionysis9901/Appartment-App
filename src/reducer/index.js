const initialState = {
  postsData: null,
  originalPrice: null,
  discount: null,
  discountPercent: null,
  priceWithDiscount: null,
  available: null,
  nights: null,
  isRendered: false,
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
        nights: null,
        isRendered: false,
      };

    case "GET_AVAILABLE__SUCCESS":
      return {
        ...state,
        originalPrice: payload.info.total_price_original,
        priceWithDiscount: payload.info.total_price_with_discount,
        discount: payload.info.discount,
        discountPercent: payload.info.discount_percent,
        available: payload.info.is_available,
        nights: payload.info.nights,
        isRendered: true,
      };

    case "GET_AVAILABLE__FAILED":
      return {
        ...state,
      };

    case "RESET_STATE":
      return {
        ...state,
        originalPrice: null,
        priceWithDiscount: null,
        discount: null,
        discountPercent: null,
        available: null,
        nights: null,
        isRendered: false,
      };
    default:
      return state;
  }
};

export default reducer;
