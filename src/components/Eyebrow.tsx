import React from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
    children: React.ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
    return <div className={styles.eyebrow}>{children}</div>;
}
