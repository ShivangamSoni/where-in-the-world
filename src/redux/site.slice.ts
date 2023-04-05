import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { type RootState } from "./store";
import { type RegionFilters } from "@data/Filter";

interface SiteState {
    theme: "light" | "dark";
    searchTerm: string;
    regionFilter: RegionFilters;
}

const initialState: SiteState = {
    theme: (localStorage.getItem("theme") as SiteState["theme"]) || "dark",
    searchTerm: "",
    regionFilter: "all",
};

export const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        toggleTheme(state) {
            const { theme } = state;
            if (theme === "dark") {
                state.theme = "light";
            } else {
                state.theme = "dark";
            }
            localStorage.setItem("theme", state.theme);
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setRegionFilter(
            state,
            action: PayloadAction<SiteState["regionFilter"]>,
        ) {
            state.regionFilter = action.payload;
        },
    },
});

export const { toggleTheme, setRegionFilter, setSearchTerm } =
    siteSlice.actions;

export const selectTheme = (state: RootState) => state.site.theme;
export const selectSearchTerm = (state: RootState) => state.site.searchTerm;
export const selectRegionFilter = (state: RootState) => state.site.regionFilter;

export default siteSlice.reducer;
