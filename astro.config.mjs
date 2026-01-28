// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://www.albcosmetology.com",
    base: "/",
    output: "static",
    devToolbar: {
        enabled: false,
    }
});
