import { createAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { keys } from "lodash";
import { IStore } from "../store";
import { ModalParams, ModalParamsState, ModalType } from "../types/modal";

export const openModal = createAction("modal/open", (modalParams: ModalParams) => ({ payload: modalParams }));

export const closeModal = createAction("modal/close", (modalType: ModalType) => ({ payload: modalType }));

const initialState = {};

const modalSlice = createSlice<ModalParamsState, SliceCaseReducers<ModalParamsState>>({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openModal, (state, action) => {
        state[action.payload.type] = { ...action.payload, isOpen: true };
      })
      .addCase(closeModal, (state, action) => {
        state[action.payload] = { isOpen: false, type: action.payload };
      });
  },
});

export const selectModalState = (type: ModalType) => (state: IStore) => state.modal[type];
export const selectOpenModalState = (state: IStore) =>
  keys(state.modal).find((x) => state.modal[x as keyof ModalParamsState]?.isOpen ?? false) as keyof ModalParamsState;

export const modalReducer = modalSlice.reducer;
