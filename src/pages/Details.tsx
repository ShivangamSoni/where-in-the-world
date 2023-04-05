import DetailsHeader from "@features/details/Header";
import CountryDetails from "@features/details/CountryDetails";

export default function DetailsPage() {
    return (
        <>
            <DetailsHeader />
            <CountryDetails {...DEMO_COUNTRY} />
        </>
    );
}

const DEMO_COUNTRY = {
    name: "India",
    nativeName: "India",
    population: 97364653653,
    region: "Asia",
    subRegion: "Southern Asia",
    capital: "New delhi",
    tld: [".in"],
    currencies: ["Rupees"],
    languages: ["English", "Hindi"],
    borders: ["Nepal", "China"],
};
