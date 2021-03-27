import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

let store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export { store, persistor };
