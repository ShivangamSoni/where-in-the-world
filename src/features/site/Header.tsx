import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { selectTheme, toggleTheme } from "@redux/site.slice";

import {
    BsMoon as LightModeIcon,
    BsMoonFill as DarkModeIcon,
} from "react-icons/bs";

export default function Header() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    function toggleHandler() {
        dispatch(toggleTheme());
    }

    return (
        <header className="bg-primary shadow-sm shadow-accent">
            <div className="navbar py-4 wrap-width">
                <h1 className="flex-1">
                    <a
                        className="normal-case font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
                        href="/"
                    >
                        Where in the world?
                    </a>
                </h1>

                <ul className="flex-none menu menu-horizontal menu-compact md:menu-normal">
                    <li>
                        <button
                            className="font-semibold"
                            onClick={toggleHandler}
                        >
                            <label className="swap swap-flip">
                                <input
                                    type="checkbox"
                                    checked={theme === "light"}
                                    readOnly
                                />
                                <LightModeIcon className="swap-on" />
                                <DarkModeIcon className="swap-off" />
                            </label>
                            <span>
                                {theme === "dark" ? "Light" : "Dark"} Mode
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
