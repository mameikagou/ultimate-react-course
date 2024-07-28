import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import windi from "vite-plugin-windicss"; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),windi()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});


// 将入口文件放到src目录下:

// import { defineConfig } from vite'
// / 引入 path 包注意两点：
// 1. 为避免类型报错，你需要通过‘pnpm i @types/node -D° 安装类型
// 1/ 2. tsconfig. node. json 中设置 aLLowSyntheticDefaultImports：true°，以允许下面的 default 导入
// import path from path'
// import react from  @vitejs/plugin-react'
// export default defineConfig({
//手动指定项目根目录位置
// root: path. join(_dirname， 'src')
// plugins: [react()]
// })