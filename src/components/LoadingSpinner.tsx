export default function LoadingSpinner({ label }: { label?: string }) {
    return (
        <div className="flex items-center justify-center">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="sr-only">{label || "Loading"}</span>
            </div>
        </div>
    );
}
