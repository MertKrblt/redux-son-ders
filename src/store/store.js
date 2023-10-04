import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import languageReducer from "./languages/languageSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    theme: themeReducer,
  },
});
