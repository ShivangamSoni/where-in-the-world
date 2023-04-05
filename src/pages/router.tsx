import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@features/site/RootLayout";

import HomePage from "./Home";
import DetailsPage from "./Details";
import NotFound from "./404";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/countries/:cca3",
                element: <DetailsPage />,
            },
        ],
    },
]);
