import { ProjectHead } from '@/components/project-head';
import styles from '@/styles/project_page.module.css'
import { Metadata } from 'next';
import Link from 'next/link';
import { ImageCaption } from '@/components/image-caption';
import { Stack } from '@/components/stack';
import { ProjectFooter } from '@/components/project-footer';

let project_description = {
    title: `Radio drUzi - Nikita Smetanin`,
    description: 'First Ukrainian radio in Estonia. Website and mobile app project made with Vue.js/Nuxt.js and Flutter. Hosted on Vercel',
    // next js seo
    openGraph: {
        title: 'Radio drUzi - Nikita Smetanin',
        description: 'First Ukrainian radio in Estonia. Website and mobile app project made with Vue.js/Nuxt.js and Flutter. Hosted on Vercel',
        images: [
            {
                url: 'https://nsweb.tech/projects/druzi.png',
                width: 585,
                height: 380,
                alt: 'Radio drUzi website'
            }
        ],
        url: '/projects/druzi',
        siteName: 'Nikita Smetanin',
    },
}



export default function DruziPage(
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
            name: 'Flutter',
            logo: '/img/flutter.svg'
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
                    title={'Radio drUzi'}
                    moto={'First Ukrainian radio in Estonia.'}
                >
                    <p>
                        drUzi is the first Ukrainian radio in Estonia. It's a great place to listen to Ukrainian music and to stay in touch with the Ukrainian community in Estonia. It was a charity project and I was happy to help with it.
                    </p>

                    <p>
                        Their mission is to support harmonious cultural exchange and contribute to the preservation and development of Ukrainian identity in Estonia.
                    </p>

                    <p>
                        Visit the website:
                        <Link href="https://druzi.ee" title='drUzi' className='accent'>
                            druzi.ee
                        </Link>
                    </p>
                </ProjectHead>

                <ImageCaption src="/projects/druzi/druzi-title.png" alt='drUzi title page' caption='1. drUzi title page' />

                <section>
                    <h2>Tech stack</h2>

                    <Stack stackItems={stack} />

                    <p>
                        The website is built with Vue.js and Nuxt.js. It's a great combination for building fast and SEO friendly websites. I used Typescript for writing the code. It's a great way to keep the code organized and to catch errors early.
                    </p>

                    <p>
                        The website is styled with CSS with some GSAP animations. I used Node.js for server side code and Vercel for hosting. It's a great platform for hosting Nuxt.js apps. It's fast and easy to use.
                    </p>

                    <p>
                        The website is fully responsive and works great on all devices.
                    </p>
                </section>

                <section>
                    <h2>Mobile application</h2>
                    <p>
                        I also made a mobile application for drUzi. It's a great way to listen to the radio on the go. The app is built with Flutter and it's going to be soon available for both iOS and Android.
                    </p>


                </section>

                <ImageCaption src="/projects/druzi/druzi-app.png" alt="druzi app preview" caption='2. drUzi app development preview' />

                <section>
                    <h2>Challenge</h2>

                    <p>
                        The main challenge was to make sure that audio streaming works great, has no lags and syncs well with the website.
                    </p>

                    <p>
                        What is more, I had to make sure streaming is syncronized with the phone player and the website player. It was a great challenge and I'm happy with the result.
                    </p>
                </section>

                <ImageCaption src="/projects/druzi/druzi-player.png" alt="druzi player preview" caption='3. drUzi system player preview' />
            </main>

            <ProjectFooter currentProjectName="Radio drUzi" />
        </>
    )
}

export const metadata: Metadata = project_description
