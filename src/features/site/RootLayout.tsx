import { useEffect } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "@hooks/redux";
import { selectTheme } from "@redux/site.slice";

import Header from "./Header";

export default function RootLayout() {
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <div className="min-h-screen text-neutral">
            <Header />
            <QueryClientProvider client={new QueryClient()}>
                <main className="wrap-width py-8">
                    <Outlet />
                </main>
            </QueryClientProvider>
        </div>
    );
}
