import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../features/rootReducers";

const store = configureStore({
  reducer: rootReducer
});

// @ts-ignore
if (process.env.NODE_ENV === "development" && module.hot) {
  // @ts-ignore
  module.hot.accept("../features/rootReducers", () => {
    const newRootReducer = require("../features/rootReducers").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
