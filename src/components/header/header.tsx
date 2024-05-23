"use client";
import { Avatar, Box, Sheet } from "@mui/joy";
import ThemeToggle from "../themeToggle";

export default function Header() {
  return (
    <Sheet
      variant="solid"
      color="primary"
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 9,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          height: "100px",
          padding: 1,
        }}
      >
        <Box>
          <Avatar
            src="/images/l-horizontal_bege.png"
            alt="Logo"
            sx={{
              background: "transparent",
              width: "fit-content",
              height: "-webkit-fill-available",
              borderRadius: 0,
            }}
          />
        </Box>
        <ThemeToggle />
      </Box>
    </Sheet>
  );
}
