import {
  GetRandomCatFactActionType,
  SearchRepositoriesActionType,
  GetRandomCatImgActionType,
} from "../action-types";
import { PackageInterface } from "../models";

// Search repositories
interface SearchRepositoriesAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES;
}

interface SearchReposioriesSuccessAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: PackageInterface[];
}

interface SearchReposioriesErrorAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type SearchRepositoriesActions =
  | SearchRepositoriesAction
  | SearchReposioriesSuccessAction
  | SearchReposioriesErrorAction;

// Random cat fact

interface GetRandomCatFactAction {
  type: GetRandomCatFactActionType.GET_RANDOM_CAT_FACT;
}

interface GetRandomCatFactSuccessAction {
  type: GetRandomCatFactActionType.GET_RANDOM_CAT_FACT_SUCCESS;
  payload: string;
}

interface GetRandomCatFactErrorAction {
  type: GetRandomCatFactActionType.GET_RANDOM_CAT_FACT_ERROR;
  payload: string;
}

export type GetRandomCatFactActions =
  | GetRandomCatFactAction
  | GetRandomCatFactSuccessAction
  | GetRandomCatFactErrorAction;

  interface GetRandomCatImgAction {
    type: GetRandomCatImgActionType.GET_RANDOM_CAT_IMG;
  }
  
  interface GetRandomCatImgSuccessAction {
    type: GetRandomCatImgActionType.GET_RANDOM_CAT_IMG_SUCCESS;
    payload: string;
  }
  
  interface GetRandomCatImgErrorAction {
    type: GetRandomCatImgActionType.GET_RANDOM_CAT_IMG_ERROR;
    payload: string;
  }
  
  export type GetRandomCatImgActions =
    | GetRandomCatImgAction
    | GetRandomCatImgSuccessAction
    | GetRandomCatImgErrorAction;
