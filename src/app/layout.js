import "./globals.css";
import { Inter } from "next/font/google";
import { Provider, defaultTheme, darkTheme, Button } from "@adobe/react-spectrum";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Budget",
  description: "PWA for managing your budget",
};

export default function RootLayout({ children }) {
  return (
    <html>
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body className={inter.className} style={{height:"100vh"}}>
          <Provider theme={defaultTheme} colorScheme="light" height="100vh">
            {children}
          </Provider>
        </body>
    </html>
  );
}
