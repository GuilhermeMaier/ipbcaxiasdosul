"use client";
import { Box } from "@mui/joy";
import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <Box
      component={"main"}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          overflowX: "auto",
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
