import { numberFormatter } from "@utils/numberFormatter";

import InlineList from "@components/InlineList";
import LinkButton from "@components/LinkButton";

interface CountryProps {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    tld: string[];
    currencies: string[];
    languages: string[];
    borders: string[];
}

export default function CountryDetails({
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    tld,
    currencies,
    languages,
    borders,
}: CountryProps) {
    return (
        <section className="grid md:grid-cols-2 items-center gap-24">
            <figure>
                <img src="https://flagcdn.com/in.svg" alt="" />
            </figure>
            <div className="grid gap-8">
                <h2 className="text-3xl font-bold">{name}</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="grid gap-2 content-start">
                        <div>
                            <span className="font-semibold">Native Name:</span>{" "}
                            <span>{nativeName}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Population:</span>{" "}
                            <span>{numberFormatter.format(population)}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Region:</span>{" "}
                            <span>{region}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Sub Region:</span>{" "}
                            <span>{subRegion}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Capital:</span>{" "}
                            <span>{capital}</span>
                        </div>
                    </div>
                    <div className="grid gap-2 content-start">
                        <div>
                            <span className="font-semibold">
                                Top Level Domain:
                            </span>{" "}
                            <InlineList items={tld} separator={<>,&nbsp;</>} />
                        </div>
                        <div>
                            <span className="font-semibold">Currencies:</span>{" "}
                            <InlineList
                                items={currencies}
                                separator={<>,&nbsp;</>}
                            />
                        </div>
                        <div>
                            <span className="font-semibold">Languages:</span>{" "}
                            <InlineList
                                items={languages}
                                separator={<>,&nbsp;</>}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-2 mt-10">
                    <span>Border Countries:</span>
                    <InlineList
                        items={borders.map((country) => (
                            <LinkButton className="btn-sm font-normal">
                                {country}
                            </LinkButton>
                        ))}
                    />
                </div>
            </div>
        </section>
    );
}
