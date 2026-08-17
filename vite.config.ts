// Static client-side SPA build of the ARSMEDICA site (for GitHub Pages).
//
// The main repo (arsmedica-next) is TanStack *Start* (SSR). This copy drops the
// server entirely: the site has no server-side data — every page is built from
// a single TypeScript content module — so it ships as a plain Vite + React SPA
// with TanStack Router running client-side. No Nitro, no prerender server, no
// Cloudflare Worker output: just static HTML/JS/CSS that any static host serves.
//
// `base` is the GitHub Pages project-site sub-path (https://<user>.github.io/arsmedica-next-static/).
// Change it (and the router basepath reads it automatically) when hosting elsewhere.
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/arsmedica-next-static/",
  plugins: [tsConfigPaths(), viteReact(), tailwindcss()],
});
