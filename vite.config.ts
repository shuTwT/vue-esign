import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    //打包后文件目录
    outDir: "es",
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      //input: ["index.ts"],
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "dist",
      },
    },
    lib: {
      entry: "./src/components/index.ts",
      name: "esign",
      fileName: "esign",
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [vue(),dts({
    copyDtsFiles: true,
    outDir: [
      'dist'
    ],
    rollupTypes:true
  })],
});
