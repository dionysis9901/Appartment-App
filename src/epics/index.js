import { switchMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";

import {
  getDataSuccess,
  getDataFailed,
  getAvailableSuccess,
  getAvailableFailed,
} from "../actions";

const fetch = require("node-fetch");

export const getDataEpic = (action$) =>
  action$.pipe(
    ofType("GET_DATA"),
    switchMap(async () => {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const url = `https://www.dealbnb.com/en/api/test-list`;
      const data = await fetch(proxy + url).then((res) => res.json());
      return getDataSuccess(data);
    }),
    catchError((err) => Promise.resolve(getDataFailed(err.message)))
  );

export const getAvailableEpic = (action$) =>
  action$.pipe(
    ofType("GET_AVAILABLE"),
    switchMap(async ({ payload }) => {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const url = `https://www.dealbnb.com/en/api/pricecalculator/${payload.nid}?startDate=${payload.startD}&endDate=${payload.endD}&guests=${payload.guests}`;
      const data = await fetch(proxy + url).then((res) => res.json());
      return getAvailableSuccess(data);
    }),
    catchError((err) => Promise.resolve(getAvailableFailed(err.message)))
  );
