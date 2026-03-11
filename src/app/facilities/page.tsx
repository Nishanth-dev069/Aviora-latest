import React from 'react';
import PageHero from '@/components/PageHero';
import styles from '../about/page.module.css';

export default function Facilities() {
    return (
        <article>
            <PageHero
                eyebrow="The Infrastructure"
                title={<>Where Theory Meets <em>Application.</em></>}
                subtitle="Experience aviation training in a modern, industry-aligned environment."
            />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h3>Aviation Classrooms</h3>
                        <p>Spacious, digital smart classrooms equipped with the latest audio-visual technology and real-time aviation tracking displays to create an immersive learning environment.</p>
                    </div>
                    <div className={styles.col}>
                        <h3>FBS Flight Simulator Training</h3>
                        <p>Our Flight Based Simulator allows students to master aircraft systems, navigation, and emergency procedures in a zero-risk, high-fidelity environment before stepping into an actual cockpit.</p>
                    </div>
                    <div className={styles.col}>
                        <h3>Dedicated Grooming Lab</h3>
                        <p>A specialized facility for cabin crew trainees featuring aircraft mock-ups, service carts, and grooming stations to perfect airline service etiquette and safety procedures.</p>
                    </div>
                    <div className={styles.col}>
                        <h3>Resource Library</h3>
                        <p>An extensive collection of aviation manuals, DGCA textbooks, global aviation case studies, and digital resources accessible to all students.</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
