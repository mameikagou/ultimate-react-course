import { useContext } from "react";
import { ThemeContext } from "../App";

export const Toggle = () => {
    const theme = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
    </label>
  );
};
