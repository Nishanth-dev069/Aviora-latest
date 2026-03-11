import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.brand}>
                    <h2 className={styles.logo}>AVIORA</h2>
                    <p className={styles.tagline}>Where Legends Learn to Command the Sky.</p>
                </div>
                <div className={styles.links}>
                    <div className={styles.col}>
                        <span className={styles.heading}>Academy</span>
                        <Link href="/about">About Us</Link>
                        <Link href="/facilities">Facilities</Link>
                        <Link href="/mentors">Mentors & Instructors</Link>
                    </div>
                    <div className={styles.col}>
                        <span className={styles.heading}>Programs</span>
                        <Link href="/programs#pilot">Pilot Training</Link>
                        <Link href="/programs#cabin-crew">Cabin Crew</Link>
                        <Link href="/global-training">Global Training</Link>
                    </div>
                    <div className={styles.col}>
                        <span className={styles.heading}>Contact</span>
                        <Link href="/admissions">Admissions</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/faq">FAQs</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} Aviora Aviation Academy. All rights reserved.</p>
                <div className={styles.legal}>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
