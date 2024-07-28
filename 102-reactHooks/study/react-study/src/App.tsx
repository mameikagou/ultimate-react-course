import React,{ useState } from "react";
// import { GlobalStyle } from  './style';
import { List } from "./pages/List";
import { Toggle } from "./components/toggle";
import { MyCompWithWindowSize } from "./components/withWindowSize";
import { ReducerDemo } from "./Hooks/useReducer";
import { UseRefDemo } from "./Hooks/useRef";
import { MemoDemo } from "./Hooks/memo";
import {NavMenu} from "./components/layout/header/components/NavMenu";
// 定义一个接口来描述context的值类型
interface ThemeContextType {
  theme: Theme; // 假设Theme是一个字符串类型，根据实际情况调整
  toggleTheme: () => void;
}

// 在createContext中使用这个接口作为泛型参数
export const ThemeContext = React.createContext<ThemeContextType>({
  theme: { background: "black", color: "white" }, // 默认主题，根据实际情况设定
  toggleTheme: () => {}, // 默认的切换主题函数，实际应用中应替换为有效实现
});

interface Theme {
  background: string;
  color: string;
}

interface Themes {
  dark: Theme;
  light: Theme;
}
const themes: Themes = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};

// 封装高阶工厂函数;
// 钩子里面从父组件获取状态;
// 直接从钩子里获取状态;
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // 还能向下传递方法;
  const providerValue: ThemeContextType = { theme: themes[theme], toggleTheme };
  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <Toggle />
        <List />
        <MyCompWithWindowSize />
        <ReducerDemo />
        <UseRefDemo />
        <MemoDemo />
        <NavMenu />
      </ThemeProvider>
    </>
  );
}

export default App;
