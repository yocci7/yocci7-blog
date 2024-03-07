import "@/public/css/app.css";
import * as layouts from "@/app/components/layouts/Index"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOCCI_ii7 BLOG by Nextjs",
  description: "プログラミング初心者の主が学習したプログラミング知識やMinecraftの自作Modを記事にまとめているサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        <head>
        <layouts.IndexHead />
      </head>
      <body>
        <layouts.Header />
        <layouts.Sidebar />
        <main className="main">
          {children}
        </main>
        <layouts.Footer />
        </body>
    </html>
  );
}
