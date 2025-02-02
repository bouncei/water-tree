import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeafTree",
  description: "Investing in Design-Centric Innovations.",
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
          "h-full bg-[#EBFFEB] text-2xl lg:text-4xl",
          montserrat.className
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}

        {children}
        <Toaster />

        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
