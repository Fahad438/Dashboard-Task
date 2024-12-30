/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

//coustem styled component
const WidgetPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
  boxShadow: theme.shadows[4],
  background: theme.palette.background.paper,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[8],
  },
}));

export const Widgets = ({ title, value, icon, width }) => {
  return (
    <WidgetPaper sx={{ minWidth: width }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        {value}
      </Typography>
      {icon}
    </WidgetPaper>
  );
};
