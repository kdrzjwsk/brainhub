import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/api";

export const addEvent = createAsyncThunk("events/addEvent", async (event) => {
    const response = await api.post("/event", event);
    return response.data;
})

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        loading: false,
        error: "",
        success: false,
        event: null,
    },
    reducers: {},
    extraReducers: {
        [addEvent.pending]: (state, action) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        },
        [addEvent.fulfilled]: (state, action) => {
            state.success = true;
            state.loading = false;
            state.event = action.payload.data;
            state.error = null;
        },
        [addEvent.rejected]: (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.error.message;
        },
    }
})

export default eventsSlice.reducer;