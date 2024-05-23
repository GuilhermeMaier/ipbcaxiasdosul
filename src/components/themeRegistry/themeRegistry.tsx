"use client";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, getInitColorSchemeScript } from "@mui/joy/styles";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
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
          <Main>{children}</Main>
          <Footer />
        </body>
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
