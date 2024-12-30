import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { lightTheme, darkTheme } from "./theme/theme";
import { useThemeMode } from "./theme/ThemeContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import { Listwidgets } from "./components/Listwidgets";
import { Row1 } from "./components/Row1";

export default function App() {
  const { i18n } = useTranslation(); //Use useTranslation

  const { isDarkMode } = useThemeMode(); //Use useThemeMode

  const [open, setOpen] = React.useState(false); // handleDrawerOpen and handleDrawerClose

  // handleDrawerOpen and handleDrawerClose
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  //handleDrawerOpen and handleDrawerClose
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //styled DrawerHeader
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  useEffect(() => {
    const currentLang = i18n.language; //currentLang
    //change the direction of the page
    if (currentLang === "ar") {
      document.documentElement.setAttribute("dir", "rtl"); //from right to left
    } else {
      document.documentElement.setAttribute("dir", "ltr"); //from left to right
    }
  }, [i18n.language]); //Enshure that the useEffect will run when the language is changed
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header handleDrawerOpen={handleDrawerOpen} open={open} />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ mt: 1, width: "100%" }}>
            <Row1 />
            <Listwidgets />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
