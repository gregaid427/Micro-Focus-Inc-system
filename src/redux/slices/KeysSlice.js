import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    headers: {Authorization: "simple Auth",
    'Content-Type': 'application/json'
  },
}};
export const fetchkeyAction = createAsyncThunk(
  "keys/list",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys`
        
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchSinglekey = createAsyncThunk(
  "single/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/${payload}`
        
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchPendingkey = createAsyncThunk(
  "pending/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/pending`
        
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchinstitutionkey = createAsyncThunk(
  "institution/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/all/${payload}`
        
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);



const keysSlices = createSlice({
  name: "mykeys",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchkeyAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchkeyAction.fulfilled, (state, action) => {
      state.keysList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchkeyAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.keysList = undefined;
    });




    builder.addCase(fetchSinglekey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSinglekey.fulfilled, (state, action) => {
      state.Singlekey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchSinglekey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.Singlekey = undefined;
    });

    
    builder.addCase(fetchPendingkey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPendingkey.fulfilled, (state, action) => {
      state.Pendingkey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchPendingkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.Pendingkey = undefined;
    });

    builder.addCase(fetchinstitutionkey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchinstitutionkey.fulfilled, (state, action) => {
      state.institutionkey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchinstitutionkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.institutionkey= undefined;
    });

  },
});

export default keysSlices.reducer;


