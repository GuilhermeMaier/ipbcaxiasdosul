"use client";
import { Avatar, Box, Sheet } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import ThemeToggle from "../themeToggle";

export default function Header() {
  const { mode } = useColorScheme();
  return (
    <Sheet
      variant="solid"
      color="primary"
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 1,
      }}
    >
      <Box>
        <Avatar
          src={
            mode === "light"
              ? "/images/l-horizontal_bege.png"
              : "/images/l-horizontal_preto.png"
          }
          alt="Logo"
          sx={{
            background: "transparent",
            width: "fit-content",
            borderRadius: 0,
          }}
        />
      </Box>
      <ThemeToggle />
    </Sheet>
  );
}
