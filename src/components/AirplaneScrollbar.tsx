"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./AirplaneScrollbar.module.css";
import gsap from "gsap";

export default function AirplaneScrollbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const planeRef = useRef<HTMLDivElement>(null);

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
            setIsTouch(true);
            // Restore native scrollbar for touch
            document.body.style.scrollbarWidth = "auto";
            return;
        }

        let lastScrollY = window.scrollY;
        let velocity = 0;
        let animationFrameId: number;

        const updateScrollbar = () => {
            const scrollY = window.scrollY;
            const tHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = tHeight > 0 ? clamp(scrollY / tHeight, 0, 1) : 0;

            // Calculate velocity
            velocity = scrollY - lastScrollY;
            lastScrollY = scrollY;

            // Decay velocity over time if we stop scrolling
            velocity *= 0.9;

            const trackHeight = trackRef.current ? trackRef.current.clientHeight : 0;
            const planeHeight = 20; // 20px wide SVG mapped to height ~20px
            const yPos = progress * (trackHeight - planeHeight);

            // Tilt plane based on velocity (max ±5deg)
            const tilt = clamp(velocity * 0.1, -5, 5);

            if (progressRef.current && planeRef.current) {
                progressRef.current.style.height = `${progress * 100}%`;
                gsap.set(planeRef.current, {
                    y: yPos,
                    rotation: tilt,
                });
            }

            animationFrameId = requestAnimationFrame(updateScrollbar);
        };

        animationFrameId = requestAnimationFrame(updateScrollbar);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const clamp = (val: number, min: number, max: number) =>
        Math.min(Math.max(val, min), max);

    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const scrollRatio = clickY / rect.height;

        window.scrollTo({
            top: scrollRatio * (document.documentElement.scrollHeight - window.innerHeight),
            behavior: "smooth"
        });
    };

    if (isTouch) return null;

    return (
        <div className={styles.scrollbarContainer} ref={containerRef}>
            <div
                className={styles.track}
                ref={trackRef}
                onClick={handleTrackClick}
            >
                <div className={styles.progressFill} ref={progressRef} />
                <div className={styles.planeTarget} ref={planeRef}>
                    <svg
                        className={styles.planeIcon}
                        viewBox="0 0 24 24"
                        fill="var(--gold)"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12,2 C12,2 11,3.5 11,5 L11,9.5 L2,10.5 L2,12.5 L11,12 L11,18 L8,20 L8,22 L12,21.5 L16,22 L16,20 L13,18 L13,12 L22,12.5 L22,10.5 L13,9.5 L13,5 C13,3.5 12,2 12,2 Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
