import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  // 首先我们来看看 attributify ，翻译过来就是 属性化 ，也就是说我们可以用 props 的方式去定义样式属性;
  attributify: true,
  plugins: [require("windicss/plugin/forms")],
  // 封装类名集合
  shortcuts: { 
    "flex-c": "flex justify-center items-center",   } 
});
