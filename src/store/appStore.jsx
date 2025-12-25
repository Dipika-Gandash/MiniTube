import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice.jsx";

const appStore = configureStore({
    reducer : {
        app: appReducer,
        
    }
})

export default appStore;