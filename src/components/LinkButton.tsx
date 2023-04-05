import { Link, type LinkProps } from "react-router-dom";

export default function LinkButton({
    children,
    className,
    ...rest
}: LinkProps) {
    return (
        <Link
            className={`btn btn-primary bg-primary text-neutral font-semibold capitalize md:text-lg shadow-full rounded-sm ${
                className ?? ""
            }`}
            {...rest}
        >
            {children}
        </Link>
    );
}
