"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from './Header';
import Footer from './Footer';
import { UserProvider } from './UserContext';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Travlr Getaways</title>
      </head>
      <body className={inter.className}>
        <UserProvider>
          <div className="background px-24 pt-4">
            <Header />
            <div className="pt-2 items-center max-w-screen-lg mx-auto">
              {children}
            </div>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
