import React from 'react';
import PageHero from '@/components/PageHero';
import styles from '../about/page.module.css';

export default function GlobalTraining() {
    return (
        <article>
            <PageHero
                eyebrow="International Footprint"
                title={<>Fly Without <em>Borders.</em></>}
                subtitle="Take your training global with our international partner flight schools."
            />
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>International Flight Training in the United States</h3>
                    <p>
                        For students seeking FAA certification and international exposure, Aviora partners with premier flight academies in the United States. Experience flying in complex international airspace and build hours efficiently in optimal weather conditions.
                    </p>
                    <ul className={styles.list}>
                        <li>FAA Part 141 Approved Training Partners</li>
                        <li>Modern fleet of glass-cockpit training aircraft</li>
                        <li>Accelerated timeline for Commercial Pilot License (CPL)</li>
                        <li>Assistance with DGCA conversion upon return to India</li>
                        <li>Visa and accommodation support</li>
                    </ul>
                </div>
            </div>
        </article>
    );
}
