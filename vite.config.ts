import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/f055ed4d330297e7c3c47ac352bd0507e6e263cb.png": path.resolve(
        __dirname,
        "./src/assets/f055ed4d330297e7c3c47ac352bd0507e6e263cb.png",
      ),
      "figma:asset/c486c20bb8dc95ef4762040ee76a7564a8502a5f.png": path.resolve(
        __dirname,
        "./src/assets/c486c20bb8dc95ef4762040ee76a7564a8502a5f.png",
      ),
      "figma:asset/b824857bbafa17237dc53f9610e5e7ef7b72d703.png": path.resolve(
        __dirname,
        "./src/assets/b824857bbafa17237dc53f9610e5e7ef7b72d703.png",
      ),
      "figma:asset/a2063f8d37d62140ea97ddd45a7a387490170b66.png": path.resolve(
        __dirname,
        "./src/assets/a2063f8d37d62140ea97ddd45a7a387490170b66.png",
      ),
      "figma:asset/9917ddc3f11635b70e4743f941dfb83c3dc158ee.png": path.resolve(
        __dirname,
        "./src/assets/9917ddc3f11635b70e4743f941dfb83c3dc158ee.png",
      ),
      "figma:asset/7e354359a6bfd53bf053fef990b02d5d71af753e.png": path.resolve(
        __dirname,
        "./src/assets/7e354359a6bfd53bf053fef990b02d5d71af753e.png",
      ),
      "figma:asset/6287e279e54e87c6582cf5f2281ccd03b91bd3fe.png": path.resolve(
        __dirname,
        "./src/assets/6287e279e54e87c6582cf5f2281ccd03b91bd3fe.png",
      ),
      "figma:asset/58e86cbe74003e6fb69944de74d0dea5b40de6de.png": path.resolve(
        __dirname,
        "./src/assets/58e86cbe74003e6fb69944de74d0dea5b40de6de.png",
      ),
      "figma:asset/41c1a10e3833bd0975db4e869609b0ce06495c70.png": path.resolve(
        __dirname,
        "./src/assets/41c1a10e3833bd0975db4e869609b0ce06495c70.png",
      ),
      "figma:asset/2f5e7cae21ced5fb191f3b4bea3eb8a4b18a55b9.png": path.resolve(
        __dirname,
        "./src/assets/2f5e7cae21ced5fb191f3b4bea3eb8a4b18a55b9.png",
      ),
      "figma:asset/27fddfd3654770f677e6e7e4b3e8e666080fae46.png": path.resolve(
        __dirname,
        "./src/assets/27fddfd3654770f677e6e7e4b3e8e666080fae46.png",
      ),
      "figma:asset/21fc46a879edec18d54f2616245e1a1ae09c2beb.png": path.resolve(
        __dirname,
        "./src/assets/21fc46a879edec18d54f2616245e1a1ae09c2beb.png",
      ),
      "figma:asset/012daeb75dba7a52675164bdac8b8ecc56dfd137.png": path.resolve(
        __dirname,
        "./src/assets/012daeb75dba7a52675164bdac8b8ecc56dfd137.png",
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5":
        "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});

