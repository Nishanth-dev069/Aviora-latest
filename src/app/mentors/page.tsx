import React from 'react';
import PageHero from '@/components/PageHero';
import styles from '../about/page.module.css';

export default function Mentors() {
    return (
        <article>
            <PageHero
                eyebrow="The Instructors"
                title={<>Tested by the <em>Sky.</em></>}
                subtitle="Learn exclusively from professionals who have commanded commercial airliners."
            />
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Student Mentorship by Airline Pilots</h3>
                    <p>
                        At Aviora, you don't just learn from instructors; you are mentored by active and retired commercial airline pilots. They bring thousands of hours of real-world flight experience directly into the classroom.
                    </p>
                    <ul className={styles.list}>
                        <li>A320 and B737 Type-Rated Captains</li>
                        <li>Former Airline Check-Pilots and Examiners</li>
                        <li>Decades of combined international operational experience</li>
                        <li>One-on-one career counseling and airline interview preparation</li>
                    </ul>
                </div>
            </div>
        </article>
    );
}
