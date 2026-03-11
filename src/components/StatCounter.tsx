"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StatCounter.module.css";
import gsap from "gsap";

interface StatCounterProps {
    endValue: number;
    suffix?: string;
    prefix?: string;
    label: string;
}

export default function StatCounter({ endValue, suffix = "", prefix = "", label }: StatCounterProps) {
    const [value, setValue] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const rawObj = { stat: 0 };
                    gsap.to(rawObj, {
                        stat: endValue,
                        duration: 2.2,
                        ease: "power2.out",
                        onUpdate: () => {
                            setValue(Math.floor(rawObj.stat));
                        },
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [endValue]);

    return (
        <div className={styles.statBox} ref={containerRef}>
            <div className={styles.valueRow}>
                {prefix}
                <span className="stat-number">{value.toLocaleString()}</span>
                {suffix}
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    );
}
