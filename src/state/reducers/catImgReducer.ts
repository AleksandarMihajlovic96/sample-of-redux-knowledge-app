import { GetRandomCatImgActionType } from "../action-types";
import { GetRandomCatImgActions } from "../actions";

interface CatImgState {
  loadingCatImg: boolean;
  errorCatImg: string | null;
  catImg: string;
}

const initialState = {
  loadingCatImg: false,
  errorCatImg: null,
  catImg: "",
};

const catFactReducer = (
  state: CatImgState = initialState,
  action: GetRandomCatImgActions
): CatImgState => {
  switch (action.type) {
    case GetRandomCatImgActionType.GET_RANDOM_CAT_IMG:
      return { loadingCatImg: true, errorCatImg: null, catImg: "" };
    case GetRandomCatImgActionType.GET_RANDOM_CAT_IMG_SUCCESS:
      return {
        loadingCatImg: false,
        errorCatImg: null,
        catImg: action.payload,
      };
    case GetRandomCatImgActionType.GET_RANDOM_CAT_IMG_ERROR:
      return {
        loadingCatImg: false,
        errorCatImg: action.payload,
        catImg: "",
      };

    default:
      return state;
  }
};

export default catFactReducer;
