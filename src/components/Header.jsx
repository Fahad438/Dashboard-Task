/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Toolbar, IconButton, Typography, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import {
  AccountCircle,
  DarkMode,
  LightMode,
  Notifications,
  Translate,
} from "@mui/icons-material";
import { useThemeMode } from "../theme/ThemeContext";
import { useTranslation } from "react-i18next"; // استيراد useTranslation

//set the width of the drawer
const drawerWidth = 240;

//coustem styled component
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        // تحديد موقع السايد بار بناءً على اللغة من الlocalStorage
        marginLeft:
          localStorage.getItem("language") === "ar" ? "0" : drawerWidth, // إذا كانت اللغة عربية، السايد بار يفتح من اليمين
        marginRight:
          localStorage.getItem("language") === "ar" ? drawerWidth : "0", // إذا كانت اللغة عربية، السايد بار يفتح من اليمين
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const Header = ({ handleDrawerOpen, open }) => {
  //this is the translation hook
  const { t, i18n } = useTranslation();
  //get the theme mode
  const theam = useTheme();
  //get the toggle theme function
  const { toggleTheme } = useThemeMode();

  //change the language function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); //change the language
    localStorage.setItem("language", lang); //save the language in localStorage
  };

  //get the language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // تعيين اللغة من localStorage
    }
  }, [i18n]);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ mx: 3 }}>
          {t("Dashboard")}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={
            i18n.language === "en"
              ? { marginLeft: "auto" }
              : { marginRight: "auto" }
          }
        >
          {/* change the language */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
          >
            <Translate />
          </IconButton>

          {/* check the theme */}
          {theam.palette.mode === "dark" ? (
            <IconButton
              onClick={toggleTheme}
              size="large"
              edge="end"
              color="inherit"
            >
              <DarkMode />
            </IconButton>
          ) : (
            <IconButton
              onClick={toggleTheme}
              size="large"
              edge="end"
              color="inherit"
            >
              <LightMode />
            </IconButton>
          )}
          <IconButton size="large" edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton size="large" edge="end" color="inherit">
            <Notifications />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
