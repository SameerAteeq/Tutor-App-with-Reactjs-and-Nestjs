import { MenuBook } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const MainStudentDashboardBox = ({ title, total, fee }) => {
  return (
    <Box
      sx={{
        p: "20px",
        backgroundColor: "#9098F9",
        maxWidth: "400px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        color: "#444",
      }}
    >
      <MenuBook sx={{ fontSize: "60px" }} />
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h6">{total}</Typography>
      <Typography variant="h6">{fee}</Typography>
    </Box>
  );
};

export default MainStudentDashboardBox;
