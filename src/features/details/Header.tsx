import { HiArrowNarrowLeft as BackIcon } from "react-icons/hi";

export default function DetailsHeader() {
    return (
        <div className="mb-14 md:mb-16 lg:mb-20">
            <a
                href="../"
                className="btn btn-primary bg-primary text-neutral gap-2 px-10 font-semibold md:text-lg shadow-full"
            >
                <BackIcon />
                Back
            </a>
        </div>
    );
}
