import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import Header from "./Header";

export default function RootLayout() {
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
