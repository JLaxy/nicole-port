import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "maivlltr ♡",
  description: "Developed by JLaxy and Sehae",
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
