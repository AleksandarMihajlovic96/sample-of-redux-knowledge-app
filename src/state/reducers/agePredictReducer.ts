import { AgePredictInterface } from "./../models/index";
import { GetAgePredictActionType } from "../action-types";
import { GetAgePredictActions } from "../actions";

interface AgePredictState {
  loadingAgePredict: boolean;
  errorAgePredict: string | null;
  agePredict: AgePredictInterface;
}

const initialState = {
  loadingAgePredict: false,
  errorAgePredict: null,
  agePredict: { name: "", age: "", count: 0 },
};

const agePredictReducer = (
  state: AgePredictState = initialState,
  action: GetAgePredictActions
): AgePredictState => {
  switch (action.type) {
    case GetAgePredictActionType.GET_AGE_PREDICT:
      return {
        loadingAgePredict: true,
        errorAgePredict: null,
        agePredict: { name: "", age: "", count: 0 },
      };
    case GetAgePredictActionType.GET_AGE_PREDICT_SUCCESS:
      return {
        loadingAgePredict: false,
        errorAgePredict: null,
        agePredict: action.payload,
      };
    case GetAgePredictActionType.GET_AGE_PREDICT_ERROR:
      return {
        loadingAgePredict: false,
        errorAgePredict: action.payload,
        agePredict: { name: "", age: "", count: 0 },
      };

    default:
      return state;
  }
};

export default agePredictReducer;
