/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import UsersIcon from "@mui/icons-material/People";
import ProductsIcon from "@mui/icons-material/Store";
import { List } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = ({ handleDrawerClose, open }) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // جلب العناصر من الترجمة
  const sidebarItems = t("Sidebar", { returnObjects: true });

  // تخصيص الأيقونات بناءً على المفتاح من الترجمة
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Home":
        return <HomeIcon />;
      case "Users":
        return <UsersIcon />;
      case "Products":
        return <ProductsIcon />;
      case "Settings":
        return <SettingsIcon />;
      default:
        return null;
    }
  };

  return (
    <Drawer
      anchor={direction === "rtl" ? "right" : "left"}
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem key={item.key} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: open ? 3 : "auto",
                }}
              >
                {getIcon(item.icon)} {/* تخصيص الأيقونة هنا */}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
