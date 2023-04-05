import React, { ReactNode } from "react";

export default function InlineList({
    items,
    separator,
    className,
}: {
    items: ReactNode[];
    separator?: ReactNode;
    className?: string;
}) {
    return (
        <ul
            className={`inline-flex flex-wrap ${!separator ? "gap-4" : ""} ${
                className ?? ""
            }`}
        >
            {items.map((item, idx) => (
                <li key={idx}>
                    {item}
                    {idx !== items.length - 1 && separator}
                </li>
            ))}
        </ul>
    );
}
