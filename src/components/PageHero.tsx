import React from "react";
import styles from "./PageHero.module.css";
import Eyebrow from "./Eyebrow";

interface PageHeroProps {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
    bgImage?: string;
}

export default function PageHero({ eyebrow, title, subtitle, bgImage }: PageHeroProps) {
    return (
        <section className={styles.heroSection}>
            {bgImage && (
                <div
                    className={styles.bgImage}
                    style={{ backgroundImage: `url(${bgImage})` }}
                    aria-hidden="true"
                />
            )}
            <div className={styles.grain} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>

            <div className={styles.bottomGradient} aria-hidden="true" />
        </section>
    );
}
