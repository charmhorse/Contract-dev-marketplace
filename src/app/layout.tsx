import React from "react";
import { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "@/layout/context/layoutcontext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import Layout from "@/layout/layout";
import { ChildContainerProps } from "@/types/types";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Commune-dev-marketplace",
  description:
    "The marketplace to make the contract with developers and others for commune",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "Sakai by PrimeReact | Free Admin Template for NextJS",
    url: "https://www.primefaces.org/sakai-react",
    description:
      "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
    images: ["https://www.primefaces.org/static/social/sakai-nextjs.png"],
    ttl: 604800,
  },
  icons: {
    icon: "./favicon.ico",
  },
};

const RootLayout = ({ children }: ChildContainerProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LayoutProvider>
              <Layout>{children}</Layout>
            </LayoutProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };
