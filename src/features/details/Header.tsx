import LinkButton from "@components/LinkButton";
import { HiArrowNarrowLeft as BackIcon } from "react-icons/hi";

export default function DetailsHeader() {
    return (
        <div className="mb-14 md:mb-16 lg:mb-20">
            <LinkButton href="../">
                <span className="flex items-center gap-2 px-6">
                    <BackIcon />
                    Back
                </span>
            </LinkButton>
        </div>
    );
}
