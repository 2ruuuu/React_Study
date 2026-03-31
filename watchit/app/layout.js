import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
