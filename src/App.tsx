import Header from "@features/site/Header";

import HomePage from "@pages/Home";

export default function App() {
    return (
        <div data-theme="light" className="min-h-screen text-neutral">
            <Header />
            <main className="wrap-width py-8">
                <HomePage />
            </main>
        </div>
    );
}
