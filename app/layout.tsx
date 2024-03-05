import type { Metadata } from "next";
import "@/public/css/app.css";
import * as layouts from "@/app/components/layouts/Index"

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7672438019900336"crossOrigin="anonymous"></script>
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
