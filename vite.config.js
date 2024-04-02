import {defineConfig} from "vite";
import vike from "vike/plugin";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

export default defineConfig({
    plugins: [vike(), vanillaExtractPlugin()]
})
