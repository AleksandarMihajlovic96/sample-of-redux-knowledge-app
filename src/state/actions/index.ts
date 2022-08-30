import { ActionType } from "../action-types";

interface SearchReposioriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchReposioriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchReposioriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchReposioriesAction
  | SearchReposioriesSuccessAction
  | SearchReposioriesErrorAction;
