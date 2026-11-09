import { configureStore } from "@reduxjs/toolkit";
import ObjectReducer from "./ObjectReducer";

export default configureStore({
    reducer:ObjectReducer
})