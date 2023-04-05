import { useState, useEffect, useRef } from "react";

interface Option {
    label: React.ReactNode;
    value: string;
}

export default function Dropdown({
    options,
    value,
    onChange,
    className,
    id,
}: {
    options: readonly Option[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
    id: string;
}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownContainer = useRef<HTMLDivElement>(null);

    function toggleDropdown(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) {
        setDropdownOpen((prev) => !prev);
    }

    function clickOutside(e: MouseEvent) {
        if (
            dropdownOpen &&
            !dropdownContainer.current?.contains(e.target as Node)
        ) {
            setDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => document.removeEventListener("mousedown", clickOutside);
    }, [dropdownOpen]);

    const selectedItem = options.find((item) => item.value === value);

    return (
        <div
            ref={dropdownContainer}
            className={`dropdown dropdown-bottom dropdown-end ${
                dropdownOpen ? "dropdown-open" : ""
            } ${className ?? ""}`}
        >
            <span
                id={id}
                onClick={toggleDropdown}
                className="select select-md md:select-lg bg-primary shadow-md sm:!pr-20 items-center w-full"
            >
                {selectedItem?.label || "Invalid Value"}
            </span>

            <ul
                role="listbox"
                aria-labelledby={id}
                className="dropdown-content menu p-2 mt-3 gap-2 bg-primary shadow-lg rounded-lg w-full"
            >
                {options.map(({ label, value }) => (
                    <li
                        key={value}
                        role="option"
                        aria-selected={value === selectedItem?.value}
                    >
                        <button
                            className={`${
                                value === selectedItem?.value
                                    ? "bg-accent text-primary font-semibold"
                                    : ""
                            }`}
                            onClick={(e) => {
                                onChange(value);
                                setDropdownOpen((prev) => !prev);
                                e.currentTarget.blur();
                            }}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
