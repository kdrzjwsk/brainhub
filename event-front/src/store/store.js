import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./events";
const store = configureStore({
    reducer: {
        events: eventsSlice
    }
});

export default store;