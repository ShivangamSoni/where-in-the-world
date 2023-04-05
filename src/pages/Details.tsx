import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { type CountryResponse } from "@dataTypes/country";

import DetailsHeader from "@features/details/Header";
import CountryDetails from "@features/details/CountryDetails";

import LoadingSpinner from "@components/LoadingSpinner";

export default function DetailsPage() {
    const { cca3 } = useParams();
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ["countries", cca3],
        queryFn: async () => {
            const resp = await fetch(
                `https://restcountries.com/v3.1/alpha/${cca3}`,
            );
            const data: CountryResponse = (await resp.json())[0];
            return data;
        },
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <DetailsHeader />
            <CountryDetails {...data!} />
        </>
    );
}
