import { Button } from "@mui/material";
import React from "react";

const CommonBtn = ({ text, onclick, variant, color, fullwidt }) => {
  return (
    <Button variant={variant} onClick={onclick} color={color}>
      {text}
    </Button>
  );
};

export default CommonBtn;
