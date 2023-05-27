import { Add, SentimentVeryDissatisfied } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, btnText }) => {
  const navigate = useNavigate();
  return (
    <Box
      height={"50vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"10px"}
    >
      <SentimentVeryDissatisfied sx={{ fontSize: "50px" }} />
      <Typography variant="h6">{title}</Typography>
      {btnText && (
        <Button
          onClick={() => navigate("/Post-Request")}
          variant="outlined"
          startIcon={<Add />}
        >
          {btnText}
        </Button>
      )}
    </Box>
  );
};

export default Empty;
