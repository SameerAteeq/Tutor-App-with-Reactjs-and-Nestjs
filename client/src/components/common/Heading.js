import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = ({ text, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography variant="h4" color="#444">
        {text}
      </Typography>
      <Typography variant="h6" color="#444">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Heading;
