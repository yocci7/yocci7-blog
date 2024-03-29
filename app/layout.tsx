import "@/public/Styles/app.css";
import * as layouts from "@/app/components/layouts/Index"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <layouts.IndexHead/>
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
