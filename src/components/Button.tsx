import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    onClick?: () => void;
    className?: string;
}

export default function Button({ children, href, variant = 'primary', onClick, className = '' }: ButtonProps) {
    const btnClass = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={btnClass}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={btnClass}>
            {children}
        </button>
    );
}
