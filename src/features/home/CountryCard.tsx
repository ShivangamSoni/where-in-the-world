import { Link } from "react-router-dom";

import { type CountryResponse } from "@dataTypes/country";

import { numberFormatter } from "@utils/numberFormatter";

type CardProps = Pick<
    CountryResponse,
    "cca3" | "flags" | "name" | "population" | "region" | "capital"
>;

export default function CountryCard({
    flags: { png },
    name: { common },
    population,
    region,
    capital,
    cca3,
}: CardProps) {
    return (
        <article className="card card-normal bg-primary shadow-xl rounded-lg h-full grid grid-rows-[1fr_auto]">
            <figure>
                <img
                    src={png}
                    alt="Shoes"
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <Link to={`/countries/${cca3}`}>{common}</Link>
                </h2>
                <div>
                    <p>
                        <span className="font-semibold">Population:</span>{" "}
                        <span className="capitalize">
                            {numberFormatter.format(population)}
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">Region:</span>{" "}
                        <span className="capitalize">{region}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Capital:</span>{" "}
                        <span className="capitalize">
                            {capital && capital.length >= 1
                                ? capital[0]
                                : "Not Found"}
                        </span>
                    </p>
                </div>
            </div>
        </article>
    );
}
