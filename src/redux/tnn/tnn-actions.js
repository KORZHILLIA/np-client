import { createAction } from "@reduxjs/toolkit";

export const getTNNInfoRequest = createAction("tnn/info/request");
export const getTNNInfoSuccess = createAction("tnn/info/success");
export const getTNNInfoError = createAction("tnn/info/error");

export const clearTNNHistory = createAction("tnn/clearHistory");

export const clearTNNCurrent = createAction("tnn/clearCurrent");

export const clearTNNError = createAction("tnn/clearError");
