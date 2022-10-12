import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import channelsReducer from "../reducers/channelsReducer";
import topicsReducer from "../reducers/topicsReducer";

const store = configureStore({
    reducer: {
        channels: channelsReducer,
        topics: topicsReducer
    },
    /* middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(socketMiddleware) */
})

export default store