import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// Gives back reducers type of root state, that describes type
// of the information in store
export type RootState = ReturnType<typeof reducers>;
