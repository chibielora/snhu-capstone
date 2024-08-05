"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from './Header';
import { UserProvider } from './UserContext';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <div className="background px-24 pt-4">
            <Header />
            <div className="background items-center w-full">
              {children}
            </div>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
