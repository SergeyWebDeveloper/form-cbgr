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
    },
    "grid-list": {
      values: {
        rowsValue: [
          {
            name: "India",
            population: 1324171354
          },
          {
            name: "India 2",
            population: 4242
          },
          {
            name: "India 3",
            population: 234234
          }
        ]
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
