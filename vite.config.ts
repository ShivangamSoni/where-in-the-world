import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@features",
                replacement: resolve(__dirname, "src", "features"),
            },
            {
                find: "@pages",
                replacement: resolve(__dirname, "src", "pages"),
            },
            {
                find: "@components",
                replacement: resolve(__dirname, "src", "components"),
            },
            {
                find: "@utils",
                replacement: resolve(__dirname, "src", "utils"),
            },
            {
                find: "@dataTypes",
                replacement: resolve(__dirname, "src", "dataTypes"),
            },
        ],
    },
});
