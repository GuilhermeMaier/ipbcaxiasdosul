"use client";
import { Avatar, Box, Sheet } from "@mui/joy";

export default function Footer() {
  return (
    <Sheet
      variant="solid"
      color="primary"
      component={"footer"}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          height: "170px",
          padding: 2,
        }}
      >
        <Box>
          <Avatar
            src={"/images/l-vertical_bege.png"}
            alt="Logo"
            sx={{
              background: "transparent",
              width: "fit-content",
              height: "-webkit-fill-available",
              borderRadius: 0,
            }}
          />
        </Box>
      </Box>
    </Sheet>
  );
}
