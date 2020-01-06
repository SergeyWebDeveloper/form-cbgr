import { createSlice } from "@reduxjs/toolkit";
import set from "lodash/set";

const form = createSlice({
  name: "form",
  initialState: {
    test: {
      values: {
        name: "sergey",
        lastName: "kozlov",
        test: {
          prop: "111"
        }
      }
    }
  },
  reducers: {
    changeField: (state: any, action: any) => {
      const { idMeta, name, value } = action.payload;
      set(state, `${idMeta}.values.${name}`, value);
    }
  }
});

export const { changeField } = form.actions;

export default form.reducer;
