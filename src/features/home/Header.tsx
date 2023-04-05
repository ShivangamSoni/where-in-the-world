import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
    selectRegionFilter,
    selectSearchTerm,
    setRegionFilter,
    setSearchTerm,
} from "@redux/site.slice";
import { RegionFilters, regionFilter } from "@data/Filter";

import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

import Dropdown from "@components/Dropdown";

export default function HomeHeader() {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(selectSearchTerm);
    const region = useAppSelector(selectRegionFilter);

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-8 gap-y-4 mb-10">
            <div className="w-full sm:w-80">
                <label className="relative">
                    <span className="sr-only">Search for a Country</span>
                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-lg md:text-xl text-accent">
                        <SearchIcon />
                    </span>
                    <input
                        value={searchTerm}
                        onChange={(e) =>
                            dispatch(setSearchTerm(e.target.value))
                        }
                        type="search"
                        placeholder="Search for a Country"
                        className="input input-md md:input-lg bg-primary shadow-md !pl-12 w-full"
                    />
                </label>
            </div>
            <Dropdown
                value={region}
                onChange={(value) => {
                    dispatch(setRegionFilter(value as RegionFilters));
                }}
                options={regionFilter}
                className="w-48 sm:w-80"
            />
        </div>
    );
}
