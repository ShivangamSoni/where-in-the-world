import { type ComponentProps } from "react";

import CountryCard from "./CountryCard";

export default function CountryListing({
    countries,
}: {
    countries: ComponentProps<typeof CountryCard>[];
}) {
    return (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 lg:gap-16">
            {countries.map((country) => (
                <li key={country.cca3}>
                    <CountryCard {...country} />
                </li>
            ))}
        </ul>
    );
}
