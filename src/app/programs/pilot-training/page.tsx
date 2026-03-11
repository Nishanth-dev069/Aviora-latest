'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import s from './pilot.module.css';

const PILOT_PATHWAY = [
    {
        phase: 'Phase 1',
        title: 'DGCA Ground School',
        desc: 'Structured classroom instruction across all five DGCA CPL examination subjects — Air Navigation, Air Regulations, Aviation Meteorology, Technical General, and Technical Specific. Aviora\'s ground school follows the latest DGCA syllabus (CAR Section 7, Series B) with small batches of maximum 15 cadets. Includes topic-wise mock papers, full-length timed tests, and one-on-one doubt sessions with DGCA-approved instructors. Target pass rate: 95% first attempt.',
        duration: '4 – 6 Months',
        detail: 'Max 15 cadets per batch · DGCA-approved instructors · 5 subject papers',
    },
    {
        phase: 'Phase 2',
        title: 'FBS Simulator Training',
        desc: 'Hands-on time in a Flight Based Simulator replicating the Cessna 172 cockpit — same instruments, same feel, same emergency scenarios you\'ll face in the air. FBS hours count toward total flight time under DGCA rules. Cadets train instrument approaches (ILS, VOR, NDB), crosswind landings, engine-out procedures, stall recovery, and ATC communication under simulated IMC conditions. Builds the muscle memory that makes real flying instinctive rather than reactive.',
        duration: '2 – 3 Months',
        detail: 'DGCA-counted sim hours · IMC / IFR scenarios · Emergency drill library',
    },
    {
        phase: 'Phase 3',
        title: 'International Flight Training — USA',
        desc: 'All practical flight hours are flown in the United States on FAA-registered Cessna 172 aircraft from Part 141-approved flight schools in Phoenix, Arizona and Florida. The USA provides uncongested airspace, year-round VFR weather, and professional general aviation infrastructure unavailable in most Indian metros. Cadets accumulate a minimum of 200 hours total time — including 100 hours PIC, 20 hours cross-country, 10 hours instrument, and 5 hours night flying — meeting DGCA CPL hour requirements in full. An Aviora instructor accompanies every batch.',
        duration: '6 – 10 Months',
        detail: 'FAA Part 141 schools · Phoenix AZ + Florida · 200 hours minimum',
    },
    {
        phase: 'Phase 4',
        title: 'Airline Preparation & CPL Skill Test',
        desc: 'The final stage transitions cadets from trained pilots to airline-ready professionals. Includes DGCA CPL Skill Test preparation (Route check, Instrument check, and General flying test), psychometric and aptitude test coaching, airline group exercise workshops, and mock technical and HR interviews with active airline captains. Aviora\'s placement desk actively coordinates with 42 airline partners for batch walk-ins, simulator assessments, and type rating sponsorship discussions.',
        duration: '1 – 2 Months',
        detail: 'DGCA Skill Test prep · Psychometric coaching · 42 airline partner network',
    },
];

const DGCA_SUBJECTS = [
    {
        name: 'Air Navigation',
        desc: 'The science of finding your way from A to B in three dimensions. Covers charts and map projections, magnetic variation and deviation, dead reckoning, VOR / NDB / GPS position fixing, flight planning (fuel calculations, alternate selection, ATC filing), time and speed calculations, and en-route track corrections. DGCA Paper 1 — typically the highest failure rate subject. Aviora allocates maximum hours here.',
    },
    {
        name: 'Air Regulations',
        desc: 'The legal framework of aviation. ICAO Annexes 1–19, DGCA CARs and AIC circulars, Air Traffic Services structure, airspace classification, Rules of the Air (ICAO Annex 2), licence requirements and validity, aircraft registration and certificates, accident / incident reporting under AAIB. Understanding not just the rules but the reasoning behind each one — essential for command decisions.',
    },
    {
        name: 'Aviation Meteorology',
        desc: 'The atmosphere as a dynamic system that kills pilots who ignore it. Covers ICAO standard atmosphere, pressure and density altitude, clouds (all 10 genera), visibility and fog formation, thunderstorm structure and avoidance, mountain wave turbulence, wind shear and microbursts, icing (structural and induction), tropical weather systems, METAR / TAF / SIGMET decoding, and flight planning around hazardous weather.',
    },
    {
        name: 'Technical General',
        desc: 'How aircraft fly and why they sometimes don\'t. Principles of flight (lift, drag, thrust, weight), high-speed aerodynamics, aircraft structures and materials, piston and turbine engine theory, propellers, carburettor icing, fuel systems, hydraulics, pneumatics, oxygen systems, electrical systems, pressurisation, and ice protection. Gives you the engineering instinct to diagnose failures before they cascade.',
    },
    {
        name: 'Technical Specific',
        desc: 'All of the above applied to specific aircraft types. For CPL candidates: the Cessna 172 (training aircraft) in full — POH limitations, weight and balance, performance charts (take-off, climb, cruise, landing distances), systems descriptions, emergency checklists, and aircraft-specific DGCA regulations. Aviora uses the actual Cessna 172S POH for this module — same document you\'ll reference in the cockpit.',
    },
];

export default function PilotTrainingPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(s.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        document.querySelectorAll(`.${s.fadeUp}`).forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className={s.page}>

            {/* BREADCRUMB */}
            <div className={s.breadcrumb}>
                <Link href="/programs" className={s.breadcrumbLink}>&larr; All Programs</Link>
                <span className={s.breadcrumbSep}>/</span>
                <span className={s.breadcrumbCurrent}>Pilot Training</span>
            </div>

            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroBgImg}>
                    <img
                        src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80"
                        alt="Cessna 172 cockpit view during flight"
                        className={s.heroBgImgEl}
                    />
                </div>
                <div className={s.heroOverlay} />
                <div className={s.container}>
                    <div className={s.heroTag}>01 — Commercial Aviation</div>
                    <h1 className={s.heroH1}>Pilot Training<br /><em>Program</em></h1>
                    <p className={s.heroSub}>
                        DGCA ground school · FBS simulator · International flight training in the USA.
                        The complete Zero to Hero pathway from cadet to commercial pilot.
                    </p>
                    <div className={s.heroMeta}>
                        {[
                            { label: 'Duration', val: '18–24 Months' },
                            { label: 'Eligibility', val: '10+2 Physics & Maths' },
                            { label: 'Outcome', val: 'CPL · DGCA Certified' },
                            { label: 'Min. Age', val: '17 Years' },
                        ].map((m, i) => (
                            <div className={s.heroMetaItem} key={i}>
                                <span className={s.heroMetaLabel}>{m.label}</span>
                                <span className={s.heroMetaVal}>{m.val}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/admissions" className={s.heroCta}>Apply Now &rarr;</Link>
                </div>
            </section>

            {/* PATHWAY TIMELINE */}
            <section className={s.pathwaySection}>
                <div className={`${s.container} ${s.fadeUp}`}>
                    <div className={s.eyebrow}>Training Pathway</div>
                    <h2 className={s.sectionH2}>Your Journey from<br /><em>Zero to the Cockpit</em></h2>
                    <div className={s.timeline}>
                        {PILOT_PATHWAY.map((step, i) => (
                            <div className={s.timelineStep} key={i}>
                                <div className={s.stepLeft}>
                                    <div className={s.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                                    {i < PILOT_PATHWAY.length - 1 && <div className={s.stepConnector} />}
                                </div>
                                <div className={s.stepContent}>
                                    <div className={s.stepPhase}>{step.phase}</div>
                                    <h3 className={s.stepTitle}>{step.title}</h3>
                                    <p className={s.stepDesc}>{step.desc}</p>
                                    <div className={s.stepDuration}>{step.duration}</div>
                                    <div className={s.stepDetail}>{step.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={s.scanLine} />

            {/* GALLERY STRIP */}
            <section className={s.galleryStrip}>
                <div className={`${s.galleryGrid} ${s.fadeUp}`}>
                    <div className={s.galleryItem}>
                        <img
                            src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=75"
                            alt="Student pilot pre-flight check on Cessna 172"
                            className={s.galleryImg}
                        />
                        <div className={s.galleryOverlay} />
                        <div className={s.galleryCaption}>Pre-flight · Cessna 172</div>
                    </div>
                    <div className={s.galleryItem}>
                        <img
                            src="https://images.unsplash.com/photo-1559628233-100c798642d8?w=800&q=75"
                            alt="Cockpit instrument panel in flight"
                            className={s.galleryImg}
                        />
                        <div className={s.galleryOverlay} />
                        <div className={s.galleryCaption}>In the cockpit · Instrument flight</div>
                    </div>
                    <div className={s.galleryItem}>
                        <img
                            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=75"
                            alt="Aerial view over USA training airspace"
                            className={s.galleryImg}
                        />
                        <div className={s.galleryOverlay} />
                        <div className={s.galleryCaption}>USA training · Open airspace</div>
                    </div>
                </div>
            </section>

            <div className={s.scanLine} />

            {/* DGCA SUBJECTS */}
            <section className={s.dgcaSection}>
                <div className={`${s.container} ${s.fadeUp}`}>
                    <div className={s.eyebrow}>Ground School</div>
                    <h2 className={s.sectionH2}>DGCA Examination<br /><em>Subjects</em></h2>
                    <div className={s.subjectsGrid}>
                        {DGCA_SUBJECTS.map((sub, i) => (
                            <div className={s.subjectCard} key={i}>
                                <div className={s.subjectNum}>0{i + 1}</div>
                                <div className={s.subjectName}>{sub.name}</div>
                                <p className={s.subjectDesc}>{sub.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={s.scanLine} />

            {/* CTA STRIP */}
            <section className={s.ctaStrip}>
                <div className={`${s.ctaInner} ${s.fadeUp}`}>
                    <div>
                        <div className={s.eyebrow}>Ready to Fly?</div>
                        <h2 className={s.ctaH2}>Begin Your Pilot<br /><em>Journey Today.</em></h2>
                    </div>
                    <div className={s.ctaBtns}>
                        <Link href="/admissions" className={s.btnGold}>Apply Now &rarr;</Link>
                        <Link href="/contact" className={s.btnOutline}>Speak to a Counsellor</Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
