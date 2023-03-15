import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AlertState {
  type:"error" | "success" | null,
  message:string | null
}

const initialState: AlertState = {
  type:null,
  message:null
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addMessage:(state:AlertState , action: PayloadAction<AlertState>)=>{
      state.type = action.payload.type
      state.message = action.payload.message
    },
    deleteMessage:(state:AlertState )=>{
      state.message = null;
      state.type = null;
    }
  },
});

export const { addMessage ,deleteMessage } = alertsSlice.actions;

export const getMessage = (state:RootState) => state.alerts
export default alertsSlice.reducer;
