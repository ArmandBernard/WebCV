import type { Metadata } from "next";
import "./index.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Armand's Web CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="shortcut icon" href="#" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
