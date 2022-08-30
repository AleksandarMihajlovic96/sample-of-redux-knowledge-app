import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ReposioriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// after defining reducer state and action
// is defining the return type
const repositoriesReducer = (state: ReposioriesState, action: Action): ReposioriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;