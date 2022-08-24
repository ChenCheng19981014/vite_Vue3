import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  base: "./", // 打包路径
  server: {
    // port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: true,
  },
  define: { "process.env": {} },
});
