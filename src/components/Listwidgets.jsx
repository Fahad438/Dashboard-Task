import React from "react";
import { Stack } from "@mui/material";
import { Widgets } from "./Widgets";
import { TempleHinduRounded } from "@mui/icons-material";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import MailIcon from "@mui/icons-material/Mail";

//mock data
const List = [
  {
    id: 1,
    titleEn: "Current Temperature",
    titleAr: "درجة الحرارة الحالية",
    value: "22°C",
    icon: <ThermostatAutoIcon sx={{ fontSize: 50, color: "red" }} />,
  },
  {
    id: 2,
    titleEn: "Device Status",
    titleAr: "حالة الجهاز",

    value: "22°C",
    icon: <CheckIcon sx={{ fontSize: 50, color: "green" }} />,
  },
  {
    id: 3,
    titleEn: "New Messages",
    titleAr: "الرسائل الجديدة",
    value: "5 ",
    icon: <MailIcon sx={{ fontSize: 50, color: "blue" }} />,
  },
];
export const Listwidgets = () => {
  const { i18n } = useTranslation(); //Use the hook

  return (
    <Stack
      sx={{
        my: 5,
        flexDirection: { xs: "column", md: "row" },
        gap: 5,
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 2,
        py: 10,
      }}
    >
      {List.map((item) => (
        <Widgets
          key={item.id}
          title={i18n.language === "en" ? item.titleEn : item.titleAr}
          value={item.value}
          icon={item.icon}
          width={"31%"}
        />
      ))}
    </Stack>
  );
};
