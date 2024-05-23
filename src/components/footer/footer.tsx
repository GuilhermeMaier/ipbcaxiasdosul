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
