import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import "./globals.css";
import { LayoutProvider } from "@/layout/context/layoutcontext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
// import theme from "@/theme";
import Layout from "@/layout/layout";
import { ChildContainerProps } from "@/types/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contract-Marketplace",
  description: "Communicate with Developers and Others",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AppRouterCacheProvider>
          <LayoutProvider>
           {children}
          </LayoutProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
