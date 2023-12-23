"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./util/PrivateRoutes";
import Login from "./login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Budget",
  description: "PWA for managing your budget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className}>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={children} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </body>
    </html>
  );
}
