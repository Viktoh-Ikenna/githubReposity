import {
    createSlice,
    createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type UIState = {
    repos?: any;
};

export const initialUIState: UIState = {
    repos: [],
};

const slice = createSlice({
    name: 'reposLists',
    initialState: initialUIState,
    reducers: {
        repositories: (state, action) => {
            state.repos = [...action.payload];
        },
    },
});

const { reducer } = slice;

export const { repositories } = slice.actions;

export const ResposiorySelector = createSelector(
    (state: RootState) => state.repositories.repos,
    (repos) => repos
);

export default reducer;
