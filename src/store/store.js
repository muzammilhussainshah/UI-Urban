import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// reducers

import { authReducer } from "./reducers";

export const rootReducer = combineReducers({
    authReducer,
});

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(rootReducer, middleware);
