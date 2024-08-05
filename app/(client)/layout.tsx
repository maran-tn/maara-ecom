import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";

import { Karla as FontSans, Inter, Karla } from "next/font/google";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { HeaderUi } from "@/components/header-ui";

const fontSans = Karla({
  subsets: ["latin"],
  // variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "MAARA",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(fontSans.className,
          "min-h-screen bg-background antialiased"
          
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col ">
            <HeaderUi />
            {/* <Navbar /> */}
            <main className="bg-gray-50">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
