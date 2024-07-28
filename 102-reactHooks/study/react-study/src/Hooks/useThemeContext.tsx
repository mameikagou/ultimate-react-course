
import { useContext } from "react";
import { ThemeContext } from "../App";
export function useThemeContext()
{
  // 获取ContextProvider的值; 
  const theme = useContext(ThemeContext);
  if(!theme){
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return theme
}

