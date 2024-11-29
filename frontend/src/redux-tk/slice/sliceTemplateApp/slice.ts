import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux-tk/store/store';
import { initialState, TypeTabsList } from './initialState';
import { createNewPage, getAllPages } from 'redux-tk/asyncthunk';

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.tabsList.forEach(tab => {
        if (tab.id === action.payload) {
          tab.active = true;
          state.idActiveTab = tab.id;
        } else tab.active = false;
      });
    }
  },
  extraReducers: (buider) => {
    buider.addCase(createNewPage.pending, (state, action) => {
      state.loading = true;
    });
    buider.addCase(createNewPage.fulfilled, (state, action) => {
      state.loading = false;
      state.tabsList.push({ ...action.payload });
      setActiveTab(action.payload.title);
    });
    buider.addCase(createNewPage.rejected, (state, action) => {
      state.loading = false;
    });
    buider.addCase(getAllPages.pending, (state, action) => {
      state.loading = true;
    });
    buider.addCase(getAllPages.fulfilled, (state, action) => {
      state.loading = false;

      // state.tabsList.push({ ...action.payload });
      // setActiveTab(action.payload.title);
    });
    buider.addCase(getAllPages.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectTabsList = (state: RootState): TypeTabsList[] => state.app.tabsList;
export const selectLoading = (state: RootState): boolean => state.app.loading;

export const {
  setActiveTab
} = appSlice.actions;

export default appSlice.reducer;
