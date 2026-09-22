"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/meetings", label: "Meetings" },
        { href: "/meetings/current", label: "Current Meeting" },
    ];

    return (
        <nav>
            <ul className="flex gap-6">
                {links.map((link) => {
                    const isActive =
                        pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`font-medium transition ${isActive
                                        ? "text-yellow-300 underline"
                                        : "text-white hover:text-yellow-200"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}