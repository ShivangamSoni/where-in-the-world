import { useQuery } from "@tanstack/react-query";

import { type CountryResponse } from "@dataTypes/country";

import HomeHeader from "@features/home/Header";
import CountryListing from "@features/home/CountryListing";

import LoadingSpinner from "@components/LoadingSpinner";

export default function HomePage() {
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const resp = await fetch("https://restcountries.com/v3.1/all");
            const data: CountryResponse[] = await resp.json();
            return data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common),
            );
        },
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <HomeHeader />
            <CountryListing countries={data!} />
        </>
    );
}

const DEMO_DATA = [
    {
        cca3: "IND",
        name: "India",
        population: 120000,
        region: "asia",
        capital: "new delhi",
        flagUrl: "https://flagcdn.com/in.svg",
    },
    {
        cca3: "IND2",
        name: "India",
        population: 120000,
        region: "asia",
        capital: "new delhi",
        flagUrl: "https://flagcdn.com/in.svg",
    },
    {
        cca3: "IND3",
        name: "India",
        population: 120000,
        region: "asia",
        capital: "new delhi",
        flagUrl: "https://flagcdn.com/in.svg",
    },
    {
        cca3: "IND4",
        name: "India",
        population: 120000,
        region: "asia",
        capital: "new delhi",
        flagUrl: "https://flagcdn.com/in.svg",
    },
];
