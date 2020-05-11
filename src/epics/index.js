import { ofType } from "redux-observable";
import { switchMap, catchError } from "rxjs/operators";
import { proxy, apiList, priceApi } from "./config";

import { GET_DATA, GET_AVAILABLE } from "../actions";

import {
  getDataSuccess,
  getDataFailed,
  getAvailableSuccess,
  getAvailableFailed,
} from "../actions";

const fetch = require("node-fetch");

export const getDataEpic = (action$) =>
  action$.pipe(
    ofType(GET_DATA),
    switchMap(async () => {
      const data = await fetch(proxy + apiList).then((res) => res.json());
      return getDataSuccess(data);
    }),
    catchError((err) => Promise.resolve(getDataFailed(err.message)))
  );

export const getAvailableEpic = (action$) =>
  action$.pipe(
    ofType(GET_AVAILABLE),
    switchMap(async ({ payload }) => {
      const data = await fetch(
        proxy +
          priceApi(payload.nid, payload.startD, payload.endD, payload.guests)
      ).then((res) => res.json());
      return getAvailableSuccess(data);
    }),
    catchError((err) => Promise.resolve(getAvailableFailed(err.message)))
  );
