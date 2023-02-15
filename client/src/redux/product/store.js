import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../user/user.reducer";
import { productReducer } from "./product.reducer";

const rootReducer = combineReducers({
products:productReducer,
user:userReducer,

});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))