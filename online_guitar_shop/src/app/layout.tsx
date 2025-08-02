import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GraphQLProvider } from "./providers/graphql-provider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrandProvider } from "./providers/BrandContext";
import { LanguageProvider } from "./providers/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Vibe Strings",
  description: "Guitar Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <GraphQLProvider>
          <BrandProvider>
            <LanguageProvider>
              <>
                <NavBar />
                {children}
                <Footer />
              </>
            </LanguageProvider>
          </BrandProvider>
        </GraphQLProvider>
      </body>
    </html>
  );
}
