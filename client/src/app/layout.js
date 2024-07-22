import { Inter } from "next/font/google";
import "./globals.css";
import { NavLink } from "./nav-link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travlr",
  description: "Capstone Project for CS-499",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background px-24 pt-4">
          <header>
            <img src="/images/logo.png" className="mb-4"/>
            <nav className="bg-teal-700">
              <ul className="grid grid-flow-col auto-cols-auto divide-x divide-teal-600">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/trips">Trips</NavLink>
                <NavLink href="/rooms">Rooms</NavLink>
                <NavLink href="/meals">Meals</NavLink>
                <NavLink href="/news">News</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </ul>
            </nav>
          </header>
          {children}
          <footer>
            
          </footer>
        </div>
      </body>
    </html>
  );
}
