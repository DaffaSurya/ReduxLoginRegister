import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./Reducer";
import { Authreducer } from "./Reducer/Authreducer";

export const Store = createStore(rootreducer, applyMiddleware(thunk));