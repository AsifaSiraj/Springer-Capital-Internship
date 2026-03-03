import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Dashboard — 2022–2024",
  description:
    "Annual sales analytics dashboard with multi-year comparison, category breakdown, and regional distribution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
