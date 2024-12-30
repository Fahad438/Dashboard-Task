import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Paper } from "@mui/material"; // استيراد Paper

const data = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
];

const Graph = () => (
  <Paper
    sx={{
      width: { xs: "100%", sm: "100%", md: "50%" },
      padding: 2,
      boxShadow: 3,
      borderRadius: 2,
    }}
  >
    <ResponsiveContainer
      height={370}
      sx={{
        width: { xs: "100%", sm: "100%", md: "100%" },
        mx: "auto",
      }}
    >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </Paper>
);

export default Graph;
