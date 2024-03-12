import { applyMiddleware} from "redux";
import {thunk}  from "redux-thunk";
import { legacy_createStore as createStore } from 'redux';


import  rootReducer from "../reducers";

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;