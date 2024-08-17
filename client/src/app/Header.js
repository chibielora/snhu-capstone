"use client";

import { NavLink } from "./nav-link";
import { useUser } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Link from "next/link";


export default function Header() {
  const { user, logoutUser } = useUser();

  return (
    <header className="items-center w-full">
      <div className="flex justify-between items-center">
        <img src="/images/logo.png" className="mb-4" />
        {user ? (
          <div className="flex items-center">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="text-white mr-4">Welcome back, @{user.username}!</span>
            <button onClick={logoutUser} className="ml-auto">Logout</button>
          </div>
        ) : (
          <ul className="flex space-x-4">
            <Link href="/register" className="ml-auto bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition ease-in-out duration-300">Register</Link>
            <Link href="/login" className="ml-auto bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition ease-in-out duration-300">Login</Link>
          </ul>
        )}
      </div>
      <nav className="bg-teal-700 w-full">
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
  );
}
