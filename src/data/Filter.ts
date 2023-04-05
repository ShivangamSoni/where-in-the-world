export const regionFilter = [
    {
        label: "Filter by Region",
        value: "all",
    },
    {
        label: "Africa",
        value: "africa",
    },
    {
        label: "America",
        value: "america",
    },
    {
        label: "Asia",
        value: "asia",
    },
    {
        label: "Europe",
        value: "europe",
    },
    {
        label: "Oceania",
        value: "oceania",
    },
] as const;

export type RegionFilters = typeof regionFilter[number]["value"];
