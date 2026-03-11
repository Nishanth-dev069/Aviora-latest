"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Explore", href: "/explore" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

export default function Nav() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="main-nav" className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <Link href="/" className={styles.navLogo}>
                AVIORA
            </Link>

            <ul className={styles.navLinks}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                        <li key={link.name}>
                            <Link href={link.href} className={isActive ? styles.active : ""}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <Link href="/admissions" className={styles.navCta}>
                Apply Now
            </Link>

            <div className={styles.navHamburger}>
                <span />
                <span />
            </div>
        </nav>
    );
}
