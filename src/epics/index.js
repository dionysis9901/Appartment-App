import { switchMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";

import { getDataSuccess, getDataFailed } from "../actions";

const fetch = require("node-fetch");

export const getData = (action$) =>
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
