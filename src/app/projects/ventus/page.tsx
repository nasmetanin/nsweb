import { ProjectHead } from '@/components/project-head';
import styles from '@/styles/project_page.module.css'
import { Metadata } from 'next';
import Link from 'next/link';
import { ImageCaption } from '@/components/image-caption';
import { Stack } from '@/components/stack';
import { ProjectFooter } from '@/components/project-footer';

let project_description = {
    title: `Ventus Studio - Nikita Smetanin`,
    description: 'Digital agency from Kharkiv, Ukraine. Website project made with Vue.js/Nuxt.js. Hosted on Vercel',
    // next js seo
    openGraph: {
        title: 'Ventus Studio - Nikita Smetanin',
        description: 'Digital agency from Kharkiv, Ukraine. Website project made with Vue.js/Nuxt.js. Hosted on Vercel',
        images: [
            {
                url: '/projects/ventus.png',
                width: 585,
                height: 380,
                alt: 'Ventus Studio website'
            }
        ],
        url: '/projects/ventus',
        site_name: 'Nikita Smetanin',
    },
}


export default function VentusPage(
) {

    const stack = [
        {
            name: 'Vue.js',
            logo: '/img/vue.svg'
        },
        {
            name: 'Nuxt.js',
            logo: '/img/nuxt.svg'
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
                    title={'Ventus Studio'}
                    moto={'Digital agency from Kharkiv, Ukraine.'}
                >
                    <p>
                        Ventus Studio was founded in 2020 by two IT business enthusiasts. Starting from a small office, they have focused on creating high quality software and providing professional services to their clients.
                    </p>

                    <p>
                        Visit the website:
                        <Link href="https://ventustudio.com/" title='Ventus Studio'>
                            ventustudio.com
                        </Link>
                    </p>
                </ProjectHead>

                <ImageCaption src="/projects/ventus/ventus-title.png" alt='Ventus Studio website' caption='1. Ventus Studio website title page' />

                <section>
                    <h2>Tech stack</h2>

                    <Stack stackItems={stack} />

                    <p>
                        The website is built with Vue.js and Nuxt.js to better handle SEO and server side rendering. It's a great choice for a website like this. The website is styled with CSS with some GSAP animations and custom animation library for text entry.
                    </p>

                    <p>
                        I also used Three.js for 3D animations and effects. It's a great library for creating 3D and managing all the related stuff. The page has two 3D, one of which is a rotatable abstract figure and the other is a 3D model animates on page scroll.
                    </p>

                    <p>
                        The website is fully responsive and works great on all devices.
                    </p>
                </section>

                <ImageCaption src="/projects/ventus/ventus-projects.png" alt="Project section" caption='2. Project section' />

                <ImageCaption topMargin={30} src="/projects/ventus/ventus-menu.png" alt="Menu section" caption='3. Menu section' />

                <section>
                    <h2>3D sections</h2>

                    <p>
                        We made sure to optimize the 3D sections for performance. I used a technique of lazy loading to load 3D models only when they are in the viewport. This way we can keep the website fast and responsive.
                    </p>

                </section>

                <ImageCaption src="/projects/ventus/ventus-faq.png" alt="FAQ section" caption='4. FAQ section with 3D' />

                <ImageCaption topMargin={30} src="/projects/ventus/ventus-bottom3D.png" alt="Bottom 3D section" caption='5. Bottom section with 3D' />

            </main>

            <ProjectFooter currentProjectName="Ventus Studio" />
        </>
    )
}

export const metadata: Metadata = project_description
