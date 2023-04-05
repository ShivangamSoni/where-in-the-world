import { type ComponentProps } from "react";

import { useAppSelector } from "@hooks/redux";
import { selectSearchTerm } from "@redux/site.slice";

import CountryCard from "./CountryCard";

export default function CountryListing({
    countries,
}: {
    countries: ComponentProps<typeof CountryCard>[];
}) {
    const searchTerm = useAppSelector(selectSearchTerm);
    const searchFilteredCountries = countries.filter(({ name: { common } }) => {
        return common.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 lg:gap-16">
            {searchFilteredCountries.map((country) => (
                <li key={country.cca3}>
                    <CountryCard {...country} />
                </li>
            ))}
        </ul>
    );
}
