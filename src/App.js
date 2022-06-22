import React from "react";
import Title from "./components/Title";
import Generator from "./components/Generator";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%)",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Title />
        <Generator />
      </Box>
    </>
  );
}
