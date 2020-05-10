import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import reducer from "../reducer";

import { getDataEpic, getAvailableEpic } from "../epics";

const configureStore = () => {
  const epicsArr = [getDataEpic, getAvailableEpic];
  const epics = combineEpics(...epicsArr);
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  epicMiddleware.run(epics);
  return store;
};

export { configureStore };
