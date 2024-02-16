import Link from 'next/link';
import projectData from '@/json/projects.json';
import styles from '@/styles/project-footer.module.css';

type ProjectFooterProps = {
    currentProjectName: string
}

export const ProjectFooter = (props: ProjectFooterProps) => {
    const { currentProjectName } = props;
    const projects = projectData.data;
    const currentProjectIndex = projects.findIndex(project => project.title === currentProjectName);
    const nextProject = projects[currentProjectIndex + 1] || projects[0];
    const prevProject = projects[currentProjectIndex - 1] || projects[projects.length - 1];

    return (
        <footer className={styles.footer}>
            <Link href={'/projects/' + prevProject.url}>
                To {prevProject.title}
            </Link>

            <Link href={
                '/projects/' + nextProject.url
            }>
                To {nextProject.title}
            </Link>
        </footer>
    )
}
