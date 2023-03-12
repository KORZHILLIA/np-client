import * as npApi from "../../shared/api/np";
import * as tnnActions from "./tnn-actions";

export const getTNNInfo = (tnnNumber) => {
  const func = async (dispatch) => {
    dispatch(tnnActions.getTNNInfoRequest());
    try {
      const info = await npApi.fetchTNNInfo(tnnNumber);
      dispatch(tnnActions.getTNNInfoSuccess(info));
    } catch (error) {
      dispatch(tnnActions.getTNNInfoError(error.message));
    }
  };
  return func;
};
