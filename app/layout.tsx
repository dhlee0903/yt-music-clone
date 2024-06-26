import { ThemeProvider } from "@/providers/themeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone Youtuve Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark" //system
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar>
              
              {children}
            </Sidebar>
          </ThemeProvider>
        </body>
    </html>
  );
}
