import Link from 'next/link';
import styles from '../styles/about.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <div className={styles.about_inner}>
            <div className={styles.text_section}>

                <div className={styles.greeting_wrap}>
                    <p className={styles.greeting}>
                        Вітаю!
                    </p>

                    <div className={styles.explanation}>
                        "Вітаю" - means "Hello" in Ukrainian.
                    </div>
                </div>

                <p>
                    I am a software developer with a passion for creating beautiful and functional websites, web apps, mobile apps, and more.
                </p>

                <p>
                    I am a full-stack developer, meaning I can work on both the front-end and back-end of a project.
                </p>

                <p>
                    I am currently a Software Engineer at 35FIT.
                </p>

                <div className={styles.about_footer}>
                    <div className={styles.social}>
                        <Link href="https://github.com/nasmetanin"
                            target='_blank'>

                            <Image src="/img/github.svg"
                                className={styles.social_icon}
                                alt="Github" width={30} height={30} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/nasmetanin/"
                            target='_blank'
                        >
                            <Image src="/img/linkedin.svg"
                                className={styles.social_icon}
                                alt="LinkedIn" width={30} height={30} />
                        </Link>
                        <Link href="https://t.me/nasmetanin"
                            target='_blank'
                        >
                            <Image src="/img/telegram.svg"
                                className={styles.social_icon}
                                alt="Telegram" width={30} height={30} />
                        </Link>
                        <Link href="mailto:nikita@nsweb.tech"
                            target='_blank'
                        >
                            <Image src="/img/email.svg"
                                className={styles.social_icon}
                                alt="Email" width={30} height={30} />
                        </Link>
                    </div>

                    <Link className='btn' href="/files/cv-smetanin.pdf" target='_blank'>
                        View CV
                    </Link>
                </div>
            </div>

            <Image className={styles.photo} src='/img/nikita.jpg' alt='Nikita Smetanin' width={600} height={400} />
        </div>

    )
}
