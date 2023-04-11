import { createSlice } from '@reduxjs/toolkit';
import getMissions from './missionsThunk';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getMissions.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        missions: payload,
        error: null,
      }))
      .addCase(getMissions.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        loading: false,
      }));
  },
});

export default missionSlice.reducer;
