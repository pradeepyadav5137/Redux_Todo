import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slice";

export const store = configureStore({
    reducer: {
        todo : TodoReducer
    }
})