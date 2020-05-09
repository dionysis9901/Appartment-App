import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import reducer from "../reducer";

// import //   getTodosEpic,
//   createTodoEpic,
//   createTodoSuccessEpic,
//   todoRenameEpic,
//   todoRenameSuccessEpic,
//   deleteTodoEpic,
//   deleteTodoSuccessEpic,
//   updateStatusEpic,
//   updateStatusSuccessEpic,
// "../epics";

const configureStore = () => {
  const epicsArr = [];
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
