import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Budget",
  description: "PWA for managing your budget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center items-center text-4xl m-8">
          <h1 className="font-medium">Smart Budget</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
