import { numberFormatter } from "@utils/numberFormatter";

interface CardProps {
    cca3: string;
    flagUrl: string;
    name: string;
    population: number;
    region: string;
    capital: string;
}

export default function CountryCard({
    flagUrl,
    name,
    population,
    region,
    capital,
}: CardProps) {
    return (
        <article className="card card-normal bg-primary shadow-xl rounded-lg">
            <figure>
                <img src={flagUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
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
                        <span className="capitalize">{capital}</span>
                    </p>
                </div>
            </div>
        </article>
    );
}
