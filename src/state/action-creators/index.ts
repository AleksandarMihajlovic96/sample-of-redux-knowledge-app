import { GetAgePredictActionType } from "./../action-types/index";
import { GetAgePredictActions } from "./../actions/index";
import axios from "axios";
import { Dispatch } from "redux";
import {
  GetRandomCatFactActionType,
  GetRandomCatImgActionType,
  SearchRepositoriesActionType,
} from "../action-types";
import {
  GetRandomCatFactActions,
  GetRandomCatImgActions,
  SearchRepositoriesActions,
} from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<SearchRepositoriesActions>) => {
    dispatch({
      type: SearchRepositoriesActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const packageData = data.objects.map((result: any) => {
        return { name: result.package.name, version: result.package.version };
      });

      dispatch({
        type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: packageData,
      });
    } catch (err: any) {
      dispatch({
        type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getRandomCatFact = () => {
  return async (dispatch: Dispatch<GetRandomCatFactActions>) => {
    dispatch({
      type: GetRandomCatFactActionType.GET_RANDOM_CAT_FACT,
    });

    try {
      const { data } = await axios.get("https://catfact.ninja/fact");

      const catFact = data.fact;

      dispatch({
        type: GetRandomCatFactActionType.GET_RANDOM_CAT_FACT_SUCCESS,
        payload: catFact,
      });
    } catch (err: any) {
      dispatch({
        type: GetRandomCatFactActionType.GET_RANDOM_CAT_FACT_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getRandomCatImg = () => {
  return async (dispatch: Dispatch<GetRandomCatImgActions>) => {
    dispatch({
      type: GetRandomCatImgActionType.GET_RANDOM_CAT_IMG,
    });

    try {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );

      const catImg = data[0].url;

      dispatch({
        type: GetRandomCatImgActionType.GET_RANDOM_CAT_IMG_SUCCESS,
        payload: catImg,
      });
    } catch (err: any) {
      dispatch({
        type: GetRandomCatImgActionType.GET_RANDOM_CAT_IMG_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getAgePredict = (name: string) => {
  return async (dispatch: Dispatch<GetAgePredictActions>) => {
    dispatch({
      type: GetAgePredictActionType.GET_AGE_PREDICT,
    });

    try {
      const { data } = await axios.get(`https://api.agify.io/?name=${name}`);

      dispatch({
        type: GetAgePredictActionType.GET_AGE_PREDICT_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: GetAgePredictActionType.GET_AGE_PREDICT_ERROR,
        payload: err.message,
      });
    }
  };
};
