import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// Second argument is inital state
export const store = createStore(reducers, {}, applyMiddleware(thunk));
