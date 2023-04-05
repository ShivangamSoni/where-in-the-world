import { useQueries } from "@tanstack/react-query";

import { type CountryResponse } from "@dataTypes/country";
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

type Props = Pick<
    CountryResponse,
    | "name"
    | "population"
    | "flags"
    | "region"
    | "subregion"
    | "capital"
    | "tld"
    | "currencies"
    | "languages"
    | "borders"
>;

export default function CountryDetails({
    name: { common, nativeName },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags: { svg, alt },
}: Props) {
    if (!borders) {
        borders = [];
    }

    const borderCountriesQueries = useQueries({
        queries: borders
            .sort((a, b) => a.localeCompare(b))
            .map((cca3) => {
                return {
                    queryKey: ["countries", cca3],
                    queryFn: async () => {
                        const resp = await fetch(
                            `https://restcountries.com/v3.1/alpha/${cca3}`,
                        );
                        const data: CountryResponse = (await resp.json())[0];
                        return data;
                    },
                };
            }),
    });

    const borderCountries = borderCountriesQueries
        .filter(({ isFetched }) => isFetched)
        .map(({ data }) => data!);

    const nativeNames = Object.entries(nativeName)
        .reduce<
            {
                name: string;
                lang: string;
            }[]
        >((res, [key, value]) => {
            const lang = languages[key];
            if (lang) {
                res.push({
                    name: value.common,
                    lang,
                });
            }
            return res;
        }, [])
        .sort((a, b) => a.lang.localeCompare(b.lang));

    return (
        <section className="grid md:grid-cols-2 items-center gap-24">
            <figure>
                <img src={svg} alt={alt || `${common} Flag`} />
            </figure>
            <div className="grid gap-8">
                <h2 className="text-3xl font-bold">{common}</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="grid gap-2 content-start">
                        <div>
                            <span className="font-semibold">Native Name:</span>{" "}
                            <InlineList
                                items={nativeNames.map(({ lang, name }) => (
                                    <span
                                        className="tooltip"
                                        data-tip={`Name in ${lang}`}
                                    >
                                        {name}
                                    </span>
                                ))}
                                separator={<>,&nbsp;</>}
                            />
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
                            <span>{subregion}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Capital:</span>{" "}
                            <span>{capital || "Not Found"}</span>
                        </div>
                    </div>
                    <div className="grid gap-2 content-start">
                        {tld && tld.length >= 1 && (
                            <div>
                                <span className="font-semibold">
                                    Top Level Domain:
                                </span>{" "}
                                <InlineList
                                    items={tld}
                                    separator={<>,&nbsp;</>}
                                />
                            </div>
                        )}
                        <div>
                            <span className="font-semibold">Currencies:</span>{" "}
                            <InlineList
                                items={Object.values(currencies).map(
                                    ({ name, symbol }) => (
                                        <span>
                                            {name}{" "}
                                            <span className="badge">
                                                {symbol}
                                            </span>
                                        </span>
                                    ),
                                )}
                                separator={<>,&nbsp;</>}
                            />
                        </div>
                        <div>
                            <span className="font-semibold">Languages:</span>{" "}
                            <InlineList
                                items={Object.values(languages)
                                    .sort((a, b) => a.localeCompare(b))
                                    .map((lang) => (
                                        <span>{lang}</span>
                                    ))}
                                separator={<>,&nbsp;</>}
                            />
                        </div>
                    </div>
                </div>
                {borderCountries.length >= 1 && (
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-2 mt-10">
                        <span>Border Countries:</span>
                        <InlineList
                            items={borderCountries.map(
                                ({ name: { common }, cca3 }) => (
                                    <LinkButton
                                        to={`/countries/${cca3}`}
                                        className="btn-sm font-normal"
                                    >
                                        {common}
                                    </LinkButton>
                                ),
                            )}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
