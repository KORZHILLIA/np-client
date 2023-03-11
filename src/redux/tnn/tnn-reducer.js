import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as tnnActions from "./tnn-actions";

const initialState = {
  totalInfo: [],
  current: null,
};

const infoReducer = createReducer(initialState, (builder) =>
  builder.addCase(tnnActions.getTNNInfoSuccess, (store, { payload }) => {
    const { totalInfo } = store;
    const requiredIdx = totalInfo.findIndex(
      (tnn) => tnn.number === payload.number
    );
    if (requiredIdx !== -1) {
      const newTotalInfo = [...totalInfo];
      newTotalInfo.splice(requiredIdx, 1, payload);
      return { ...store, totalInfo: newTotalInfo, current: payload };
    }
    return { ...store, totalInfo: [...totalInfo, payload], current: payload };
  })
);

const loadingReducer = createReducer(false, (builder) =>
  builder
    .addCase(tnnActions.getTNNInfoRequest, () => true)
    .addCase(tnnActions.getTNNInfoSuccess, () => false)
    .addCase(tnnActions.getTNNInfoError, () => false)
);

const errorReducer = createReducer(null, (builder) =>
  builder
    .addCase(tnnActions.getTNNInfoRequest, () => null)
    .addCase(tnnActions.getTNNInfoSuccess, () => null)
    .addCase(tnnActions.getTNNInfoError, (_, { payload }) => payload)
);

const infoPersistConfig = {
  key: "content",
  storage,
  whitelist: ["totalInfo"],
};

const infoPersistReducer = persistReducer(infoPersistConfig, infoReducer);

const tnnReducer = combineReducers({
  content: infoPersistReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default tnnReducer;
