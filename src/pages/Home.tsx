import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { type CountryResponse } from "@dataTypes/country";

import HomeHeader from "@features/home/Header";
import CountryListing from "@features/home/CountryListing";

import LoadingSpinner from "@components/LoadingSpinner";
import { useAppSelector } from "@hooks/redux";
import { selectRegionFilter } from "@redux/site.slice";

export default function HomePage() {
    const region = useAppSelector(selectRegionFilter);
    const { data, isLoading, isFetching, isRefetching, refetch } = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const url =
                region === "all"
                    ? "https://restcountries.com/v3.1/all"
                    : `https://restcountries.com/v3.1/region/${region}`;
            const resp = await fetch(url);
            const data: CountryResponse[] = await resp.json();
            return data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common),
            );
        },
    });

    useEffect(() => {
        refetch();
    }, [region]);

    if (isLoading || isFetching || isRefetching) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <HomeHeader />
            <CountryListing countries={data!} />
        </>
    );
}
