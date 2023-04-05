export default function LinkButton({
    children,
    className,
    ...rest
}: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>) {
    return (
        <a
            className={`btn btn-primary bg-primary text-neutral font-semibold capitalize md:text-lg shadow-full rounded-sm ${
                className ?? ""
            }`}
            {...rest}
        >
            {children}
        </a>
    );
}
