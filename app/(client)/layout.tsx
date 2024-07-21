import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import Navbar from "@/components/navbar";

import { Inter as FontSans, Recursive } from "next/font/google";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const recursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MARAN",
  description: "Graphic Designer and Web Deveopment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          recursive.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
