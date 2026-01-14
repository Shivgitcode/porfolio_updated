import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivansh Portfolio",
  icons: {
    icon: "/shiv.jpeg",
  },
  description: "this is my personal portfolio website",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} ${jetbrains.className} bg-main-background`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
