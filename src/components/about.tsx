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
                    As a full-stack developer with the focus on front-end development I have experience in building web applications using modern technologies such as React and Vue.js. I also have experience in building mobile applications using Swift and Flutter.
                </p>

                <p>
                    I am currently a Software Engineer at Betsson Group.
                </p>

                <div className={styles.about_footer}>
                    <div className={styles.social}>
                        <Link href="https://github.com/nasmetanin"
                            target='_blank'>

                            <Image src="/img/github.svg"
                                className='social_icon'
                                alt="Github" width={30} height={30} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/nasmetanin/"
                            target='_blank'
                        >
                            <Image src="/img/linkedin.svg"
                                className='social_icon'
                                alt="LinkedIn" width={30} height={30} />
                        </Link>
                        <Link href="https://t.me/nasmetanin"
                            target='_blank'
                        >
                            <Image src="/img/telegram.svg"
                                className='social_icon'
                                alt="Telegram" width={30} height={30} />
                        </Link>
                        <Link href="mailto:nikita@nsweb.dev"
                            target='_blank'
                        >
                            <Image src="/img/email.svg"
                                className='social_icon'
                                alt="Email" width={30} height={30} />
                        </Link>
                    </div>

                    <Link className='btn' href="/files/cv-smetanin.pdf" target='_blank' prefetch={false}>
                        View CV
                    </Link>
                </div>
            </div>

            <Image className={styles.photo} src='/img/nikita.jpg' alt='Nikita Smetanin' width={600} height={400} />
        </div>

    )
}
