import * as lovableConfig from "@lovable.dev/vite-tanstack-config";

const defineConfig =
  lovableConfig.defineConfig ||
  lovableConfig.default?.defineConfig ||
  lovableConfig.default;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: { preset: "netlify" },
});
