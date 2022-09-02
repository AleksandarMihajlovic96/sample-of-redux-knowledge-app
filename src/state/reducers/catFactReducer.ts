import { GetRandomCatFactActionType } from "../action-types";
import { GetRandomCatFactActions } from "../actions";

interface CatFactState {
  loadingCatFact: boolean;
  errorCatFact: string | null;
  catFact: string;
}

const initialState = {
  loadingCatFact: false,
  errorCatFact: null,
  catFact: "",
};

const catFactReducer = (
  state: CatFactState = initialState,
  action: GetRandomCatFactActions
): CatFactState => {
  switch (action.type) {
    case GetRandomCatFactActionType.GET_RANDOM_CAT_FACT:
      return { loadingCatFact: true, errorCatFact: null, catFact: "" };
    case GetRandomCatFactActionType.GET_RANDOM_CAT_FACT_SUCCESS:
      return {
        loadingCatFact: false,
        errorCatFact: null,
        catFact: action.payload,
      };
    case GetRandomCatFactActionType.GET_RANDOM_CAT_FACT_ERROR:
      return {
        loadingCatFact: false,
        errorCatFact: action.payload,
        catFact: "",
      };

    default:
      return state;
  }
};

export default catFactReducer;
