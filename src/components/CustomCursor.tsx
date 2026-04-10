"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";
import gsap from "gsap";

export default function CustomCursor() {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const [isHovering, setIsHovering] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            // Inner cursor precisely follows mouse
            gsap.to(innerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });

            // Outer cursor trails with lerp
            gsap.to(outerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out",
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);


    return (
        <div className={styles.cursorWrapper} aria-hidden="true">
            <div
                ref={outerRef}
                className={`${styles.outer} ${isHovering ? styles.outerHover : ""}`}
            />
            <div
                ref={innerRef}
                className={`${styles.inner} ${isHovering ? styles.innerHover : ""}`}
            >
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
    );
}
