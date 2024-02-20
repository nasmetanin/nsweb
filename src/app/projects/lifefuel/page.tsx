import { ProjectHead } from '@/components/project-head';
import styles from '@/styles/project_page.module.css'
import { Metadata } from 'next';
import Link from 'next/link';
import { ImageCaption } from '@/components/image-caption';
import { Stack } from '@/components/stack';
import { ProjectFooter } from '@/components/project-footer';



let project_description = {
    title: `LifeFuel - Nikita Smetanin`,
    description: 'Sustainable health tech. Full-Stack project for a water subscription service.',
    // next js seo
    openGraph: {
        title: 'LifeFuel - Nikita Smetanin',
        description: 'Sustainable health tech. Full-Stack project for a water subscription service.',
        images: [
            {
                url: 'https://nsweb.tech/projects/lifefuel.png',
                width: 585,
                height: 380,
                alt: 'LifeFuel website'
            }
        ],
        url: '/projects/lifefuel',
        siteName: 'Nikita Smetanin',
    },
}


export default function LifeFuelPage(
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
            name: 'Ruby',
            logo: '/img/ruby.svg'
        },
        {
            name: 'Ruby on Rails',
            logo: '/img/rails.svg'
        },
        {
            name: "Flutter",
            logo: '/img/flutter.svg'
        },
    ];

    return (
        <>
            <main className={styles.project_page}>
                <ProjectHead
                    title={'LifeFuel'}
                    moto={'Cloud subscription service for water stations.'}
                >
                    <p>
                        Subscription to pour vitamin water. Personalised recommendation for smart hydration. Digital statistics always with you. Also has an admin panel for business owners to track and manage their water stations and workers accounts.
                    </p>

                    <p>
                        Visit the website:
                        <Link href="https://lifefuel.io/" title='LifeFuel' className='accent'>
                            lifefuel.io
                        </Link>
                    </p>
                </ProjectHead>

                <ImageCaption src="/projects/lifefuel/lifefuel-title.png" alt='LifeFuel website' caption='1. LifeFuel website title page' />

                <section>
                    <h2>Tech stack</h2>

                    <Stack stackItems={stack} />

                    <p>
                        The front-end website is built with Vue.js and Nuxt.js to better handle SEO and server side rendering. The website is styled with CSS with some GSAP animations. I wanted to keep the website simple and clean, so I used a lot of white space and a minimalistic design.
                    </p>

                    <p>
                        The back-end part on the other hand is built with Ruby on Rails to manage the database, machines and REST API for the front-end.
                    </p>

                    <p>
                        The back-end also has several microservices to manage the water stations, so they safely communicate with client's apps on his phones.
                    </p>

                    <p>
                        The mobile app is built with Flutter, so it can be used on both iOS and Android devices. It has a lot of features like personal hydration statistics, water station map, and a lot more. B2C version has a subscription model, so users can subscribe to pour vitamin water and get personalized recommendations for smart hydration. Station is able to be unlocked with a QR code, so the activation process is very simple and fast.
                    </p>
                </section>

                <ImageCaption src="/projects/lifefuel/lifefuel-app.png" alt="LifeFuel app photos" caption='2. LifeFuel app screens' />

                <ImageCaption topMargin={30} src="/projects/lifefuel/lifefuel-app2.png" alt="LifeFuel app photos" caption='3. LifeFuel app screens' />

            </main>

            <ProjectFooter currentProjectName="LifeFuel" />
        </>
    )
}

export const metadata: Metadata = project_description
