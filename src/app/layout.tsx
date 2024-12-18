import ThemeRegistry from "@/components/themeRegistry/themeRegistry";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "IPCXS",
  description: "Igreja Presbiteriana de Caxias do Sul",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon_light.png",
        href: "/images/favicon_light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon_dark.png",
        href: "/images/favicon_dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <ThemeRegistry>{children}</ThemeRegistry>
    </html>
  );
}
