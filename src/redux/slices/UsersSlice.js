import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    headers: {Authorization: "simple Auth",
    'Content-Type': 'application/json'
  },
}};
export const CreateUserAction = createAsyncThunk(
  "new/user",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/users`,payload
        
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

export const loginUserAction = createAsyncThunk(
  "login/User",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/users/login `, payload
        
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
export const passwordResetAction = createAsyncThunk(
  "password/reset",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/users/mailPasswordreset`,payload
        
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

export const passwordConfirmAction = createAsyncThunk(
  "password/Confirm",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/users/resetPassword`,payload
        
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



const UsersSlices = createSlice({
  name: "users",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(CreateUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreateUserAction.fulfilled, (state, action) => {
      state.CreateUser = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(CreateUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.CreateUser = undefined;
    });




    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loginUser = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.loginUser = undefined;
    });

    
    builder.addCase(passwordResetAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(passwordResetAction.fulfilled, (state, action) => {
      state.passwordReset = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(passwordResetAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.passwordReset= undefined;
    });

    builder.addCase(passwordConfirmAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(passwordConfirmAction.fulfilled, (state, action) => {
      state.passwordConfirm = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(passwordConfirmAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.passwordConfirm = undefined;
    });

  },
});

export default UsersSlices.reducer;


