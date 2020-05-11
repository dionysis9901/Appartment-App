export const proxy = "https://cors-anywhere.herokuapp.com/";
export const apiList = `https://www.dealbnb.com/en/api/test-list`;

export const priceApi = (nid, startD, endD, guests) =>
  `https://www.dealbnb.com/en/api/pricecalculator/${nid}?startDate=${startD}&endDate=${endD}&guests=${guests}`;
