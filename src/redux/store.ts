import { configureStore } from "@reduxjs/toolkit";

import siteSlice from "./site.slice";

export const store = configureStore({
    reducer: {
        site: siteSlice,
    },
    devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
