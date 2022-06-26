import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Title() {
  const matches = useMediaQuery("(max-width:480px)");
  return (
    <Box flexWrap="wrap">
      <Typography
        variant={matches ? "h2" : "h1"}
        fontWeight="bold"
        textAlign="center"
        color="white"
        margin="0 0 1.5rem 0"
      >
        Password Generator
      </Typography>
    </Box>
  );
}
