"use client";
import Link from 'next/link'
import styles from '@/styles/error.module.css'
import Image from 'next/image'
import { Metadata } from 'next';

export const metadata: Metadata = {
    robots: 'noindex, nofollow'
}

export default function NotFound() {

    return (
        <section className={styles.error_page}>
            <Image src="/img/error.svg" alt={'Error 404'} width={320} height={186} />
            <h2>Not Found</h2>
            <p>
                Could not find requested page.
                Please try again or return to the homepage.
            </p>
            <Link
                className='btn'
                href="/">
                Return Home
            </Link>
        </section>
    )
}

