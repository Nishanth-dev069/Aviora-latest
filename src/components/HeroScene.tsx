"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./HeroScene.module.css";
import Button from "./Button";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const phases = [
    { label: "On Ground · Pre-Departure", headline: "Where Legends Learn to Command the Sky.", spd: 0, alt: 0 },
    { label: "Engine Start · APU Shutdown", headline: "Precision Before Every Single Takeoff.", spd: 8, alt: 0 },
    { label: "Taxiing · Runway 28L", headline: "Runway in Sight — Cleared for Take-off.", spd: 22, alt: 0 },
    { label: "Take-off Roll · Thrust Set", headline: "Full Thrust. Maximum Performance.", spd: 115, alt: 0 },
    { label: "V1 · Decision Speed", headline: "V1 — No Return. Commitment to the Sky.", spd: 175, alt: 0 },
    { label: "ROTATE · Nose Up", headline: "ROTATE — Ascending Into Legend.", spd: 195, alt: 100 },
    { label: "Airborne · Gear Up", headline: "Wheels Up. Your World Just Changed.", spd: 240, alt: 1800 },
    { label: "Climbing · FL350 Cruise", headline: "Cruising at Flight Level Three-Five-Zero.", spd: 487, alt: 35000 }
];

export default function HeroScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<HTMLCanvasElement>(null);

    const [currentPhase, setCurrentPhase] = useState(0);
    const [hudStats, setHudStats] = useState({ spd: 0, alt: 0 });
    const [showCTA, setShowCTA] = useState(true);

    const frameCount = 137;
    const imagesRef = useRef<HTMLImageElement[]>(new Array(137));

    useEffect(() => {
        const heroCanvas = canvasRef.current;
        const hctx = heroCanvas?.getContext("2d");
        const container = containerRef.current;

        if (!heroCanvas || !hctx || !container) return;

        // Step 1: Set canvas to full viewport size IMMEDIATELY
        heroCanvas.width = window.innerWidth;
        heroCanvas.height = window.innerHeight;

        // Step 2: Fill with a warm dark tone
        hctx.fillStyle = '#1a1208';
        hctx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

        // Step 4: Load frame 0 with a priority flag - draws the moment it's ready
        const frame0 = new Image();
        frame0.fetchPriority = 'high';
        frame0.decoding = 'sync';
        frame0.onload = () => {
            heroCanvas.width = frame0.naturalWidth || window.innerWidth;
            heroCanvas.height = frame0.naturalHeight || window.innerHeight;
            hctx.drawImage(frame0, 0, 0, heroCanvas.width, heroCanvas.height);
        };
        frame0.src = '/hero-sequence/0050.webp';
        imagesRef.current[0] = frame0;

        // Step 5: Load frames 1–49 right away (eager preload)
        for (let i = 1; i < 50; i++) {
            const img = new Image();
            img.src = `/hero-sequence/${String(50 + i).padStart(4, '0')}.webp`;
            imagesRef.current[i] = img;
        }

        // Step 6: Load frames 50-299 in idle time
        const loadRestFrames = () => {
            for (let i = 50; i < frameCount; i++) {
                const img = new Image();
                img.src = `/hero-sequence/${String(50 + i).padStart(4, '0')}.webp`;
                imagesRef.current[i] = img;
            }
        };

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(loadRestFrames, { timeout: 2000 });
        } else {
            setTimeout(loadRestFrames, 1500);
        }

        const renderFrame = (frameIndex: number) => {
            const img = imagesRef.current[frameIndex];
            if (img && img.complete && img.naturalWidth > 0) {
                if (heroCanvas.width !== img.naturalWidth) {
                    heroCanvas.width = img.naturalWidth;
                    heroCanvas.height = img.naturalHeight;
                }
                hctx.drawImage(img, 0, 0, heroCanvas.width, heroCanvas.height);
            }
            // If image isn't loaded yet, keep showing whatever was last drawn
        };

        const trigger = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "+=4000",
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
                const progress = self.progress;

                // 1. Calculate and update frame
                const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));
                requestAnimationFrame(() => renderFrame(frameIndex));

                // 2. Map progress to phases
                const phaseIndex = Math.min(phases.length - 1, Math.floor(progress * phases.length));
                if (phaseIndex !== currentPhase) {
                    setCurrentPhase(phaseIndex);
                }

                // 3. Interpolate HUD logic exactly based on phases
                const p1 = phases[Math.floor(progress * (phases.length - 1))];
                const p2 = phases[Math.ceil(progress * (phases.length - 1))];
                const phaseLocalProg = (progress * (phases.length - 1)) % 1;

                const currentSpd = Math.round(p1.spd + (p2.spd - p1.spd) * phaseLocalProg);
                const currentAlt = Math.round(p1.alt + (p2.alt - p1.alt) * phaseLocalProg);
                setHudStats({ spd: currentSpd, alt: currentAlt });

                // 4. Update CTA visibility
                if (progress > 0.05 && showCTA) setShowCTA(false);
                if (progress <= 0.05 && !showCTA) setShowCTA(true);

                // 5. Sky gradient and stars fade
                const skyEl = document.getElementById("atm-sky");
                const starsEl = starsRef.current;
                if (skyEl) {
                    // Deepen sky color above progress > 0.6
                    const opacity = Math.max(0, (progress - 0.6) / 0.4);
                    skyEl.style.opacity = opacity.toString();
                }
                if (starsEl) {
                    const starOpacity = Math.max(0, (progress - 0.75) / 0.25) * 0.9;
                    starsEl.style.opacity = starOpacity.toString();
                }
            }
        });

        return () => {
            trigger.kill();
        };
    }, [currentPhase, showCTA]);

    // Star canvas rendering function
    useEffect(() => {
        const starCanvas = starsRef.current;
        if (!starCanvas) return;
        const sCtx = starCanvas.getContext("2d");
        if (!sCtx) return;

        starCanvas.width = window.innerWidth;
        starCanvas.height = window.innerHeight;

        sCtx.fillStyle = "#ffffff";
        for (let i = 0; i < 300; i++) {
            const x = Math.random() * starCanvas.width;
            const y = Math.random() * starCanvas.height;
            const s = Math.random() * 2;
            sCtx.beginPath();
            sCtx.arc(x, y, s, 0, Math.PI * 2);
            sCtx.fill();
        }
    }, []);

    return (
        <section ref={containerRef} className={styles.scene}>
            <div className={styles.stickyWrapper}>
                <canvas
                    ref={canvasRef}
                    className={styles.heroCanvas}
                    id="hero-canvas"
                    width={1280}
                    height={720}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        background: '#1a1208',
                    }}
                />

                <div id="atm-sky" className={styles.atmSky} />
                <div id="atm-dark" className={styles.atmDark} />
                <canvas ref={starsRef} id="stars" className={styles.starsCanvas} />
                <div className={styles.grain} />

                {/* HUD Elements */}

                <div id="hud-l" className={styles.hudLeft}>
                    <div className={styles.hudLabel}>IAS KTS</div>
                    <div className={styles.hudValue}>{hudStats.spd.toString().padStart(3, '0')}</div>
                </div>

                <div id="hud-r" className={styles.hudRight}>
                    <div className={styles.hudLabel}>ALT FT</div>
                    <div className={styles.hudValue}>{(hudStats.alt / 100).toFixed(0).padStart(3, '0')}</div>
                    <div className={styles.hudSub}>FLIGHT LEVEL</div>
                </div>

                {/* Center UI */}
                <div className={styles.centerOverlay}>
                    {showCTA && (
                        <div className={styles.ctaGroup}>
                            <Button href="/programs#pilot" variant="primary">Explore Pilot Training</Button>
                            <Button href="/programs#cabin-crew" variant="outline">Become Cabin Crew</Button>
                        </div>
                    )}
                </div>

                {/* Timeline Phase Info */}
                <div id="phases" className={styles.phasesTrack}>
                    {phases.map((p, idx) => (
                        <div key={idx} className={`${styles.phaseDot} ${currentPhase === idx ? styles.activeDot : ""}`} />
                    ))}
                </div>

                <div id="phase-text" className={styles.phaseText}>
                    <div className="eyebrow">{phases[currentPhase].label}</div>
                    <h2><em>{phases[currentPhase].headline.split(' ')[0]}</em> {phases[currentPhase].headline.split(' ').slice(1).join(' ')}</h2>
                </div>

                {/* Scroll Hint */}
                {showCTA && (
                    <div id="scroll-hint" className={styles.scrollHint}>
                        <div className={styles.scrollLine} />
                        <span>Scroll to Take Off</span>
                    </div>
                )}
            </div>
        </section>
    );
}
