import styles from '@/styles/project.module.css'
import Image from 'next/image'
import Link from 'next/link'

type ProjectTileProps = {
    title: string,
    description: string,
    image: string,
    tags?: string[],
    year: string,
    url: string,
}

export const Project = (props: ProjectTileProps) => {
    const { title, description, image, year, url, tags } = props

    return (
        <Link className={styles.project_tile} href={`/projects/${url}`}>
            <div>
                <Image src={image} alt={title} width={600} height={400}
                    layout='responsive'
                />
                <div className={styles.top_info}>
                    <h2>{title}</h2>

                    <h3>{year}</h3>
                </div>

                <div className={styles.footnote}>
                    {
                        tags && tags.map((tag, index) => {
                            return (
                                <div key={index}>
                                    <span>
                                        {tag}
                                    </span>
                                    {
                                        index < tags.length - 1 &&
                                        <span key={index + 5}>
                                            •
                                        </span>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <p>
                    {description}
                </p>
            </div>
        </Link>
    )
}
