import { useState } from "react";

import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

import Dropdown from "@components/Dropdown";

const REGIONS = [
    {
        label: "Filter by Region",
        value: "filter-by-region",
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
];

export default function HomeHeader() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState(REGIONS[0].value);

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-8 gap-y-4 mb-10">
            <form className="w-full sm:w-80">
                <label className="relative">
                    <span className="sr-only">Search for a Country</span>
                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-lg md:text-xl text-accent">
                        <SearchIcon />
                    </span>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="search"
                        placeholder="Search for a Country"
                        className="input input-md md:input-lg bg-primary shadow-md !pl-12 w-full"
                    />
                </label>
            </form>

            <Dropdown
                value={selectedRegion}
                onChange={(value) => {
                    setSelectedRegion(value);
                }}
                options={REGIONS}
                className="w-48 sm:w-80"
            />
        </div>
    );
}
