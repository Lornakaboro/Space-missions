/* eslint-disable  camelcase */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const formatMissions = (missions) => missions.map(({ mission_name, mission_id, description }) => ({
  mission_name,
  mission_id,
  description,
}));

export default createAsyncThunk(
  'missions/getMissions',
  async (name, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(url);
      const missionData = formatMissions(data);
      return fulfillWithValue(missionData);
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);
