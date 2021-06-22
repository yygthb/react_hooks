import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
import ThemeContext from "./components/context";

const Main = () => {
  const [theme, setTheme] = useState("light");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
