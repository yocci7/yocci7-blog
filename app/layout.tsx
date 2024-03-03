import type { Metadata } from "next";
import "@/public/css/app.css";
import * as layouts from "@/app/components/layouts/Index"

export const metadata: Metadata = {
  title: "YOCCI_ii7 BLOG by Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <layouts.Header />
        <layouts.Sidebar />
        <layouts.Footer />
        {children}
        </body>
    </html>
  );
}
