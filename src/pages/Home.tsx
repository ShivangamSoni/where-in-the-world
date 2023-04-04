import HomeHeader from "@features/home/Header";
import CountryListing from "@features/home/CountryListing";
import CountryCard from "@features/home/CountryCard";

export default function HomePage() {
    return (
        <>
            <HomeHeader />
            <CountryListing countries={DEMO_DATA} />
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
