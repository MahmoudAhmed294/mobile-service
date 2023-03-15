import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../api/types";
import { RootState } from "./store";


const initialState: LoginResponse = {
  name: '',
  id: null 
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state , action:PayloadAction<LoginResponse | any>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setUser } = loginSlice.actions;
export const getUserInfo =(state: RootState) => state.user
export default loginSlice.reducer;
