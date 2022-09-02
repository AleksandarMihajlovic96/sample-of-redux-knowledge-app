import { PackageInterface } from './../models/index';
import { SearchRepositoriesActionType } from "../action-types";
import { SearchRepositoriesActions } from "../actions";

interface ReposioriesState {
  loading: boolean;
  error: string | null;
  data: PackageInterface[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

// after defining reducer state and action
// is defining the return type
const repositoriesReducer = (
  state: ReposioriesState = initialState,
  action: SearchRepositoriesActions
): ReposioriesState => {
  switch (action.type) {
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
