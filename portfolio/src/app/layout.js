import localFont from "next/font/local";
import "./globals.css";
import LanguageWrapper from "@/context/LanguageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio - Thibault BARBE",
  description: "A portfolio for Thibault BARBE",
  icons: {
    icon: "/logo.png",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageWrapper>
          {children}
        </LanguageWrapper>
      </body>
    </html>
  );
}
