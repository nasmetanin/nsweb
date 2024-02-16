import { ProjectHead } from '@/components/project-head';
import styles from '@/styles/project_page.module.css'
import { Metadata } from 'next';
import Link from 'next/link';
import { ImageCaption } from '@/components/image-caption';
import { Stack } from '@/components/stack';
import { ProjectFooter } from '@/components/project-footer';


let project_description = {
    title: `nsweb - Nikita Smetanin`,
    description: 'Personal space for personal ideas. Website project made with Next.js. Hosted on Vercel',
    openGraph: {
        title: 'nsweb - Nikita Smetanin',
        description: 'Personal space for personal ideas. Website project made with Next.js. Hosted on Vercel',
        images: [
            {
                url: '/projects/placeholder.png',
                width: 585,
                height: 380,
                alt: 'nsweb website'
            }
        ],
        url: '/projects/nsweb',
        site_name: 'Nikita Smetanin',
    },
}


export default function ProjectPage(
) {

    const stack = [
        {
            name: 'React',
            logo: '/img/react.svg'
        },
        {
            name: 'Next.js',
            logo: '/img/next.svg'
        },
        {
            name: 'Typescript',
            logo: '/img/ts.svg'
        },
        {
            name: 'CSS',
            logo: '/img/css.svg'
        },
        {
            name: 'Node.js',
            logo: '/img/node.svg'
        },
        {
            name: 'Vercel',
            logo: '/img/vercel.svg'
        },

    ];

    return (
        <>
            <main className={styles.project_page}>
                <ProjectHead
                    title={'nsweb'}
                    moto={'Personal space for personal ideas.'}
                >
                    <p>
                        At some point I realized that I need a place to put all my ideas and projects. First ideas were too complex, with heavy animation and 3D. But then I realized that I need something simple and fast. It's functional, fast and easy to use.
                    </p>

                    <p>
                        Visit the website:
                        <Link href="/" title='nsweb'>
                            nsweb.tech
                        </Link>
                    </p>
                </ProjectHead>

                <ImageCaption src="/projects/nsweb/nsweb-title.png" alt='nsweb title page' caption='1. nsweb title page' />

                <section>
                    <h2>Tech stack</h2>

                    <Stack stackItems={stack} />

                    <p>
                        I used Next.js for server side rendering and routing. The website is hosted on Vercel, which is a great platform for hosting Next.js apps. It's fast and easy to use. I used Typescript for static type checking and Node.js for server side code.
                    </p>

                    <p>
                        The website is styled with CSS. I used CSS modules for styling components. It's easy to use and it's a great way to keep styles organized.
                    </p>

                    <p>
                        The website is fully responsive and works great on all devices.
                    </p>
                </section>
            </main>

            <ProjectFooter currentProjectName="nsweb" />
        </>
    )
}

export const metadata: Metadata = project_description
