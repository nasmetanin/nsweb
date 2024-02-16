
import styles from '@/styles/project_page.module.css'
import Link from 'next/link'

type ProjectHeadProps = {
    title: string,
    moto: string,
    children: React.ReactNode
}

export const ProjectHead = (
    props: ProjectHeadProps
) => {
    const { title, moto, children } = props

    return (
        <>
            <section className={styles.project_description}>
                <Link className={styles.go_back} href='/'>
                    to main
                </Link>
                <h1>
                    {title}
                </h1>
                <h2>
                    {moto}
                </h2>
                {children}
            </section>
        </>
    )
}
