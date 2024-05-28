"use client";
import {
  Avatar,
  Box,
  Card,
  CardCover,
  Typography,
  useColorScheme,
} from "@mui/joy";

export default function Building() {
  const { mode } = useColorScheme();
  return (
    <Card
      variant="plain"
      sx={{
        width: 300,
        p: 0,
      }}
    >
      <Box sx={{ position: "relative", padding: 2 }}>
        <Avatar
          src={
            mode === "dark"
              ? "/images/simbolo_bege.png"
              : "/images/simbolo_preto.png"
          }
          alt="Logo"
          sx={{
            background: "transparent",
            position: "relative",
            width: "100%",
            height: "auto",
            borderRadius: 0,
            img: {
              height: "auto",
            },
          }}
        />
        <CardCover
          className="gradient-cover"
          sx={{
            "&:hover, &:focus-within": {
              opacity: 1,
            },
            opacity: 0,
            transition: "0.1s ease-in",
            background:
              "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
          }}
        >
          <div>
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                flexGrow: 1,
                alignSelf: "flex-end",
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                Em construção
              </Typography>
            </Box>
          </div>
        </CardCover>
      </Box>
    </Card>
  );
}
