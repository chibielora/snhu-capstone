"use client";
import Link from "next/link";

export function NavLink({ href, children,...props  }) {
    return (
        <li>
            <Link
                href={href} 
                className="
                    inline-block
                    bg-gradient-to-b
                    from-teal-600
                    to-teal-700
                    hover:from-orange-200
                    hover:to-orange-300
                    hover:text-gray-800
                    border-collapse
                    px-10 py-3
                    h-full
                    w-full
                    uppercase text-xl
                "
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}