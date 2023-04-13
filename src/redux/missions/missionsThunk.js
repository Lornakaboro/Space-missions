import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const formatMissions = (dat) => dat.map(({ mission_name: name, mission_id: id, description }) => ({
  name,
  id,
  description,
  reserved: false,
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
