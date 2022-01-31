import { defineConfig } from "vite";
import { resolve } from "path";
// plugins
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import jsx from "@vitejs/plugin-vue-jsx";

function pathResolve(dir: string) {
  // console.log(resolve(process.cwd(), ".", dir));
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  plugins: [vue(), WindiCSS(), jsx()],
  resolve: {
    alias: [
      {
        find: /\@\//,
        replacement: pathResolve("src") + "/",
      },
      {
        find: /\@views\//,
        replacement: pathResolve("src/views") + "/",
      },
      {
        find: /\@types\//,
        replacement: pathResolve("src/types") + "/",
      },
      {
        find: /\@comps\//,
        replacement: pathResolve("src/components") + "/",
      },
      {
        find: /\@utils\//,
        replacement: pathResolve("src/utils") + "/",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/index.scss";`,
        charset: false,
      },
    },
  },
});
