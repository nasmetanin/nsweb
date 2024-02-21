import { ProjectHead } from '@/components/project-head';
import styles from '@/styles/project_page.module.css'
import { Metadata } from 'next';
import Link from 'next/link';
import { ImageCaption } from '@/components/image-caption';
import { Stack } from '@/components/stack';
import { ProjectFooter } from '@/components/project-footer';

let project_description = {
    title: `35FIT - Nikita Smetanin`,
    description: 'First AI Gym in Estonia! CRM, website, mobile app and automatisation project.',
    // next js seo
    openGraph: {
        title: '35FIT - Nikita Smetanin',
        description: 'First AI Gym in Estonia! CRM, website, mobile app and automatisation project.',
        images: [
            {
                url: 'https://nsweb.tech/projects/35fit.png',
                width: 585,
                height: 380,
                alt: '35FIT project preview'
            }
        ],
        url: '/projects/35fit',
        siteName: 'Nikita Smetanin',
    },
}

export default function GymPage(
) {

    const stack = [
        {
            name: 'Vue.js',
            logo: '/img/vue.svg'
        },
        {
            name: 'CSS',
            logo: '/img/css.svg'
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
            name: 'Flutter',
            logo: '/img/flutter.svg'
        },
        {
            name: 'Swift',
            logo: '/img/swift.svg'
        }
    ];

    return (
        <>
            <main className={styles.project_page}>
                <ProjectHead
                    title={'35FIT'}
                    moto={'First AI gym in Estonia.'}
                >
                    <p>
                        35FIT is a modern gym in Tallinn, Estonia. It's the first gym in Estonia that uses advanced cloud tech to track your progress and help you to reach your fitness goals. The gym is equipped with the latest AI machines and has a great team of professional trainers to help you with your workouts.
                    </p>

                    <p>
                        I was responsible for building the website, mobile application and CRM system for 35FIT. I also helped with automating the gym's processes like billing and member management.
                    </p>

                    <p>
                        Visit the website:
                        <Link href="https://35fit.com" title='35FIT' className='accent'>
                            35fit.com
                        </Link>
                    </p>
                </ProjectHead>

                <ImageCaption src="/projects/35fit.png" alt='35FIT logo with patterns' caption='1. 35FIT logo with patterns' />

                <section>
                    <h2>Tech solutions</h2>

                    <Stack stackItems={stack} />

                    <h3>Website</h3>

                    <p>
                        The first version of website was built with Ruby on Rails by developers from Ukraine. For the first time when I came to the company as a software engineer, I was responsible for maintaining the website and adding new features. We faced many issues and bugs with the website, so my first task was to fix it.
                    </p>

                    <p>
                        Some time after that, we worked closely with the owner and designers to improve the design and usability of the website. Let's say, we came up with version 1.2. It was a great improvement, but was not enough. The resource lacked modern design, animations and reactivity of new modern webapps. So we decided to rebuild the website from scratch using the experience we got from the first version.
                    </p>

                    <p>
                        I decided to use Vue.js for the frontend as it is a great framework for building modern web applications. That was my first time using Vue.js and I was really impressed with it. It's a great framework for building modern web applications. The app use REST API to communicate with the backend, which is built with Ruby on Rails.
                    </p>

                    <ImageCaption src="/projects/35fit/35fit-2.png" alt='35FIT login' caption='2. 35FIT version 2.0' />

                    <ImageCaption src="/projects/35fit/35fit-register.png" alt='35FIT register' caption='3. 35FIT version 2.0 register page' />
                    <p>
                        As for now, the website is fully responsive and works great on all devices. I added a little bit of animations and transitions to make the website look more modern and attractive.
                    </p>

                    <ImageCaption src="/projects/35fit/35fit-title.png" alt='35FIT title page' caption='4. 35FIT version 2.0' />

                    <h3>CRM subsystem</h3>

                    <p>
                        As I already knew how to work with Ruby on Rails, we decided to move on with it to build a CRM subsystem, that would be a layer between CRM we already used and the website.
                    </p>

                    <p>
                        It began with a need of automated invoicing, so the accountant doesn't need to keep track of all the user's package plans, payment dates etc. I built a system that automatically generates invoices and sends them to the users. It also keeps track of all the payments and sends reminders to the users if they are late with the payment.
                    </p>

                    <p>
                        We also made an integration with Paysera and Stebby, so the users can pay their invoices online. It was a great improvement and the users loved it.
                    </p>

                    <p>
                        Later on I have added a possibility to use a water machine for those who had a possibility to use it in their package. The system keeps track of how much water the user has used. It communicates with machines using sockets and send info to the CRM using REST API.
                    </p>

                    <p>
                        This led us to another project known as
                        <Link href="/projects/lifefuel" title='LifeFuel' className='accent'>
                            LifeFuel
                        </Link>
                    </p>

                    <h3>Mobile application</h3>

                    <p>
                        An application for users was planned for a long time. It was a great way to keep users engaged and motivated. For now it is still in development, but have managed to finish an internal application for the gym's staff. It was built with Swift and it's a great way to keep track of user's workouts. It also gives an unlimited access to water machine to the staff members.
                    </p>

                    <ImageCaption src="/projects/35fit/35fit-app.png" alt='35FIT app' caption='5. 35FIT trainer app' />

                    <p>
                        Whenever a training that needs a trainer is booked, trainers receive a notification about it.
                    </p>

                </section>

                <section>
                    <h2>Challenge</h2>

                    <p>
                        The main challenge was to build a system I had never done before. It is complex and has many parts that need to work together. I had to make sure the website is secure and the user's data is safe. I also had to make sure the website is fast and responsive. It was a great challenge, still has a room for improvement, but all in all solution we made works great.
                    </p>

                    <p>
                        The second challenge was to build a system that is easy to use for the gym's staff. I had to make sure the system is easy to use and has all the features they need.
                    </p>
                </section>

            </main>

            <ProjectFooter currentProjectName="35FIT" />
        </>
    )
}

export const metadata: Metadata = project_description
