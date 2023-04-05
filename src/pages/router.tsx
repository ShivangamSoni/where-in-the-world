import RootLayout from "@features/site/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import DetailsPage from "./Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <h1>404 Not Found</h1>,
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
