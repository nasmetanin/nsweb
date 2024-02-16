import styles from '@/styles/header.module.css'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                NS.
            </Link>

            <Link href="https://github.com/nasmetanin"
                target='_blank'
                title="Github"
            >

                <Image src="/img/github.svg"
                    className={styles.github}
                    alt="Github" width={25} height={25} />
            </Link>
        </header>
    )
}
