import { ThemeProvider } from "@emotion/react";
import { createTheme, useMediaQuery } from "@mui/material";
import { deepOrange, orange } from "@mui/material/colors";
import { createContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/localStorage";

const CustomThemeContext = createContext({
  mode: "",
  localTheme: "",
  changeMode: () => {},
});

const CustomThemeProvider = ({ children }) => {
  const [localTheme, setLocalTheme] = useLocalStorage("theme", "system");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(() => {
    if (localTheme === "system") {
      return prefersDarkMode ? "dark" : "light";
    } else {
      return localTheme;
    }
  });

  const colorMode = useMemo(
    () => ({
      changeMode: (value) => {
        if (value === "system") {
          setMode(prefersDarkMode ? "dark" : "light");
        } else {
          setMode(value);
        }
        setLocalTheme(value);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: deepOrange,
          secondary: { ...orange, contrastText: "#ffffff" },
        },
      }),
    [mode]
  );

  useEffect(() => {
    if (localTheme === "system") {
      setMode(prefersDarkMode ? "dark" : "light");
    } else {
      setMode(localTheme);
    }

    const html = document.getElementsByTagName("html")[0];
    html.style.backgroundColor = mode === "dark" ? "#000" : "#fff";
    html.style.color = mode === "dark" ? "#fff" : "#000";
  }, [localTheme, mode, prefersDarkMode]);

  return (
    <CustomThemeContext.Provider value={{ mode, localTheme, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeContext, CustomThemeProvider };
