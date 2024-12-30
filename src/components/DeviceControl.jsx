import React, { useState } from "react";
import { Switch, Stack, Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const DeviceControl = ({ deviceName }) => {
  const [isOn, setIsOn] = useState(false);
  const { t, i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "row-reverse" : "row"; // تحديد الاتجاه بناءً على اللغة

  const toggleDevice = () => {
    setIsOn(!isOn);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "50%",
      }}
    >
      <Paper
        elevation={3} // تأثير الظل
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          borderRadius: 2,
          bgcolor: "background.paper", // استخدام خلفية بيضاء
          boxShadow: 3, // التأثير الخارجي
        }}
      >
        <Typography variant="h6">{deviceName}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: direction, // تغيير الاتجاه بناءً على اللغة
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ mr: 2 }}>
            {isOn ? t(`TurnOff${deviceName}`) : t(`TurnOn${deviceName}`)}
          </Typography>
          <Switch
            checked={isOn}
            onChange={toggleDevice}
            color="primary"
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      </Paper>
    </Stack>
  );
};

export default DeviceControl;
