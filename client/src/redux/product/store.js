import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../cart/cart.reducer";
import { userReducer } from "../user/user.reducer";
import { productReducer } from "./product.reducer";

const rootReducer = combineReducers({
products:productReducer,
user:userReducer,
cart:cartReducer,

});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))