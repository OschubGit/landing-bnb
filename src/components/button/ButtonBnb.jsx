import React from "react";
import { Button } from "@mui/material";

const ButtonBnb = ({ text, color, variant, size }) => {
  return (
    <div>
      <Button variant={variant} color={color} size={size}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonBnb;
