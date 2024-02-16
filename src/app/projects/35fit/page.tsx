import { ProjectHead } from '@/components/project-head';
import styles from '@/styles/project_page.module.css'
import { Metadata } from 'next';

let project_description = {
    title: `35FIT - Nikita Smetanin`,
    description: 'Personal portfolio website made with React/Next.js and Typescript. Hosted on Vercel',
}

export default function ProjectPage() {
    return (
        <main className={styles.project_page}>
            <ProjectHead title={'35FIT'} moto={''} link={''} children={undefined} />
        </main>
    )
}

export const metadata: Metadata = project_description
