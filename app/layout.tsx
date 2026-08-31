import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garden of Messiah Building & Construction LTD",
  description:
    "Professional building and construction services by Garden of Messiah Building & Construction LTD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
