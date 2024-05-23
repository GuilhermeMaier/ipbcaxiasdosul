"use client";
import { Box, CssBaseline } from "@mui/joy";
import { CssVarsProvider, getInitColorSchemeScript } from "@mui/joy/styles";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import NextAppDirEmotionCacheProvider from "./emotionCache";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <body className={inter.className}>
          {getInitColorSchemeScript({ defaultMode: "system" })}
          <Header />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              padding: 2,
              marginTop: "100px",
              marginBottom: "170px",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "1200px" }}>{children}</Box>
          </Box>
          <Footer />
        </body>
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
