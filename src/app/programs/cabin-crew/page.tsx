'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import s from './cabin.module.css';

const CABIN_PATHWAY = [
    {
        phase: 'Module 1',
        title: 'Grooming & Personality Development',
        desc: 'Airlines hire on presentation before they hire on qualification. This module covers the complete grooming standard expected by India\'s top domestic and international carriers — hair, makeup, uniform presentation, fragrance, dental, skin, and fitness norms. Beyond appearance: posture and body language training, stage confidence, positive energy, and first-impression psychology. Students are evaluated by industry-standard grooming scorecards identical to those used at IndiGo, Air India, and Emirates walk-in assessments.',
        duration: '3 Weeks',
        detail: 'Industry grooming scorecards · IndiGo / Emirates standards',
    },
    {
        phase: 'Module 2',
        title: 'Communication & Passenger Handling',
        desc: 'A calm voice and clear English can prevent panic at 35,000 feet. This module develops spoken English fluency, correct aviation phraseology, public announcement (PA) delivery technique, and the art of de-escalating difficult passenger situations. Includes active listening, cultural sensitivity for international routes, upward communication with flight crew, and the specific communication protocols mandated by IATA and DGCA cabin crew regulations. Assessed by recorded PA sessions and role-play passenger simulations.',
        duration: '3 Weeks',
        detail: 'PA delivery · IATA protocols · Difficult passenger simulations',
    },
    {
        phase: 'Module 3',
        title: 'Cabin Safety & Emergency Procedures',
        desc: 'This is the technical core of cabin crew training — the module that separates hospitality from aviation. Covers: emergency exits (10 door types), evacuation commands and crowd control, Brace commands and body positioning, ditching procedures and life raft deployment, supplemental oxygen systems, fire classification and extinguisher selection, cabin depressurisation recognition and response, turbulence and unusual attitude protocols, and DGCA-mandated pre-departure safety briefings. All drills are conducted in Aviora\'s mock aircraft cabin.',
        duration: '4 Weeks',
        detail: 'Mock cabin drills · DGCA safety briefings · 10 door type protocols',
    },
    {
        phase: 'Module 4',
        title: 'First Aid & Inflight Medical Response',
        desc: 'Medical emergencies mid-flight with no hospital 35,000 feet below. This certified first aid module prepares cabin crew for the 12 most common inflight medical events — cardiac arrest, stroke, DVT, diabetic emergencies, anaphylaxis, seizures, childbirth, and passenger death. Hands-on CPR certification (American Heart Association standard), AED (Automated External Defibrillator) operation, oxygen mask administration, medical kit inventory and usage, and documentation of inflight medical incidents per ICAO standards.',
        duration: '2 Weeks',
        detail: 'AHA CPR certified · AED operation · ICAO incident documentation',
    },
    {
        phase: 'Module 5',
        title: 'Mock Cabin Practicals & Airline Interview Prep',
        desc: 'The final two weeks simulate an actual airline selection process. Mock cabin service runs — boarding, in-flight service, meal service sequencing, disembarkation. Then: airline interview preparation with former IndiGo, Air India, and SpiceJet HR managers. Group discussion exercises, situational judgment tests, reach-height assessments, and full uniform mock interviews with written feedback. Aviora\'s placement team simultaneously circulates candidate profiles to 42+ airline partners and coordinates walk-in dates.',
        duration: '3 Weeks',
        detail: 'Industry HR interviews · 42 airline placement network · Profile circulation',
    },
];

export default function CabinCrewPage() {
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
                <span className={s.breadcrumbCurrent}>Cabin Crew</span>
            </div>

            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroBgImg}>
                    <img
                        src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80"
                        alt="Professional cabin crew in airline uniform"
                        className={s.heroBgImgEl}
                    />
                </div>
                <div className={s.heroOverlay} />
                <div className={s.container}>
                    <div className={s.heroTag}>02 — Cabin Crew</div>
                    <h1 className={s.heroH1}>Cabin Crew<br /><em>Program</em></h1>
                    <p className={s.heroSub}>
                        Grooming · safety · service · interview prep. Transform into a
                        confident, airline-ready flight attendant in just 6 months.
                    </p>
                    <div className={s.heroMeta}>
                        {[
                            { label: 'Duration', val: '6 Months' },
                            { label: 'Eligibility', val: '10+2 Any Stream' },
                            { label: 'Outcome', val: 'Airline Ready' },
                            { label: 'Min. Age', val: '18 Years' },
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

            {/* MODULE TIMELINE */}
            <section className={s.pathwaySection}>
                <div className={`${s.container} ${s.fadeUp}`}>
                    <div className={s.eyebrow}>Training Modules</div>
                    <h2 className={s.sectionH2}>Your 6-Month<br /><em>Transformation</em></h2>
                    <div className={s.timeline}>
                        {CABIN_PATHWAY.map((step, i) => (
                            <div className={s.timelineStep} key={i}>
                                <div className={s.stepLeft}>
                                    <div className={s.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                                    {i < CABIN_PATHWAY.length - 1 && <div className={s.stepConnector} />}
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
                            src="https://images.unsplash.com/photo-1540339832862-474599807836?w=800&q=75"
                            alt="Airline cabin interior — economy class"
                            className={s.galleryImg}
                        />
                        <div className={s.galleryOverlay} />
                        <div className={s.galleryCaption}>Mock cabin · Practical training</div>
                    </div>
                    <div className={s.galleryItem}>
                        <img
                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=75"
                            alt="Professional aviation grooming session"
                            className={s.galleryImg}
                        />
                        <div className={s.galleryOverlay} />
                        <div className={s.galleryCaption}>Grooming · Personality development</div>
                    </div>
                    <div className={s.galleryItem}>
                        <img
                            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=75"
                            alt="Aircraft on tarmac at sunset"
                            className={s.galleryImg}
                        />
                        <div className={s.galleryOverlay} />
                        <div className={s.galleryCaption}>Your future · Starts here</div>
                    </div>
                </div>
            </section>

            <div className={s.scanLine} />

            {/* CTA STRIP */}
            <section className={s.ctaStrip}>
                <div className={`${s.ctaInner} ${s.fadeUp}`}>
                    <div>
                        <div className={s.eyebrow}>Ready to Begin?</div>
                        <h2 className={s.ctaH2}>Start Your Cabin Crew<br /><em>Journey Today.</em></h2>
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
