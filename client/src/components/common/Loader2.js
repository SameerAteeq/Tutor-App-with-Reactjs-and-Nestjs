import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const Loader2 = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      gap={"10px"}
      height={"50vh"}
    >
      <CircularProgress />
      <Typography variant="h6">Please wait</Typography>
    </Stack>
  );
};

export default Loader2;
