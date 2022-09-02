import { combineReducers } from "redux";
import catFactReducer from "./catFactReducer";
import catImgReducer from "./catImgReducer";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  catFact: catFactReducer,
  catImg: catImgReducer,
});

export default reducers;

// Gives back reducers type of root state, that describes type
// of the information in store
export type RootState = ReturnType<typeof reducers>;
