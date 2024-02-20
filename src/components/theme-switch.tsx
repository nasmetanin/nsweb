'use client';
import styles from '@/styles/theme.module.css';
import { useEffect, useState } from "react";
import Image from 'next/image';

type Theme = 'dark' | 'light';

export const ThemeSwitch = () => {

    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        setTheme(localStorage.getItem('theme') as Theme || 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const selectTheme = (theme: Theme) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
        document.documentElement.setAttribute('data-theme', theme);
    }

    return (
        <>
            <button title='theme' type='button' className={styles.btn} onClick={() => selectTheme(
                theme === 'light' ? 'dark' : 'light'
            )}>
                <Image src={`/img/${theme}.svg`} alt={theme} width={25} height={25} />
            </button>
        </>
    )
}
