"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

const exploreItems = [
    {
        href: "/gallery",
        icon: "◉",
        title: "Gallery",
        sub: "Cockpit sessions · Campus life · USA training",
    },
    {
        href: "/blog",
        icon: "◈",
        title: "Blog",
        sub: "DGCA guides · Career roadmaps · Written by pilots",
    },
    {
        href: "/news",
        icon: "◎",
        title: "News",
        sub: "Industry updates · Airline hiring · DGCA circulars",
    },
];

export default function Nav() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const isExploreActive = pathname?.startsWith("/explore") || pathname?.startsWith("/gallery") || pathname?.startsWith("/blog") || pathname?.startsWith("/news");
    
    // Determine if page has a dark hero where transparency overlay is preferred before scroll
    const isDarkHero = pathname === "/" || pathname === "/admissions" || pathname === "/programs" || pathname?.startsWith("/programs/");

    return (
        <nav id="main-nav" suppressHydrationWarning className={`${styles.nav} ${isScrolled ? styles.scrolled : (isDarkHero ? styles.navHeroDark : "")}`}>
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

                {/* Explore dropdown item */}
                <li>
                    <div
                        className={styles.navItemWrap}
                        onMouseEnter={() => setExploreOpen(true)}
                        onMouseLeave={() => setExploreOpen(false)}
                    >
                        <Link
                            href="/explore"
                            className={`${styles.navExploreLink} ${isExploreActive ? styles.active : ""}`}
                        >
                            Explore
                            <span className={styles.dropIcon}>∨</span>
                        </Link>

                        {exploreOpen && (
                            <div className={styles.dropdown}>
                                {exploreItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={styles.dropItem}
                                        onClick={() => setExploreOpen(false)}
                                    >
                                        <div className={styles.dropItemIcon}>{item.icon}</div>
                                        <div className={styles.dropItemContent}>
                                            <div className={styles.dropItemTitle}>{item.title}</div>
                                            <div className={styles.dropItemSub}>{item.sub}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </li>
            </ul>

            <Link href="/admissions" className={styles.navCta}>
                Apply Now
            </Link>

            <div 
                className={`${styles.navHamburger} ${isMobileMenuOpen ? styles.isOpen : ""}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span />
                <span />
                <span />
            </div>

            {/* Mobile Overlay */}
            <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.isOpen : ""}`}>
                <ul className={styles.mobileLinks}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <li key={link.name}>
                                <Link href={link.href} className={isActive ? styles.active : ""} onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link href="/explore" className={isExploreActive ? styles.active : ""} onClick={() => setIsMobileMenuOpen(false)}>
                            Explore
                        </Link>
                    </li>
                </ul>
                <Link href="/admissions" className={`${styles.navCta} ${styles.mobileOverlayCta}`} onClick={() => setIsMobileMenuOpen(false)}>
                    Apply Now
                </Link>
            </div>
        </nav>
    );
}
