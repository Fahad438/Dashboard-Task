import React from "react";
import { Stack } from "@mui/material";
import Graph from "./Graph";
import { Widgets } from "./Widgets";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import PeopleIcon from "@mui/icons-material/People";
//mock data
const List = [
  {
    id: 1,
    titleEn: "Battery Percentage",
    titleAr: "نسبة البطارية",
    value: "85%",
    icon: <BatteryChargingFullIcon sx={{ fontSize: 50, color: "green" }} />,
  },
  {
    id: 2,
    titleEn: "Data Usage",
    titleAr: "معدل استهلاك البيانات",
    value: "3GB",
    icon: <DataUsageIcon sx={{ fontSize: 50, color: "orange" }} />,
  },
];

export const Row1 = () => {
  const { i18n } = useTranslation(); //Use the hook

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        gap: 5,
        mb: 5,
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 2,
        py: 10,
      }}
    >
      <Graph />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "column" },
          gap: 5,
        }}
      >
        {List.map((item) => (
          <Widgets
            key={item.id}
            title={i18n.language === "en" ? item.titleEn : item.titleAr}
            value={item.value}
            icon={item.icon}
            width={"40%"}
          />
        ))}
      </Stack>
      <Widgets
        title={i18n.language === "en" ? "Website Visitors" : "عدد الزوار"}
        value="1400"
        width={"30%"}
        icon={<PeopleIcon sx={{ fontSize: 50, color: "blue" }} />}
      />
    </Stack>
  );
};
