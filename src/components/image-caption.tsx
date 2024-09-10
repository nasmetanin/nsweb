import Image from 'next/image'
import styles from '@/styles/image-caption.module.css'

export const ImageCaption = (props: { src: string, alt: string, caption: string, topMargin?: number, priority?: boolean }) => {
    const { src, alt, caption, topMargin, priority } = props;

    return (
        <div style={topMargin ? { marginTop: `${topMargin}px` } : {}} className={styles.caption_wrap}>
            <Image priority={
                priority ? priority : false
            } src={src} alt={alt} width="3248" height="2112"
                layout="responsive"
            />
            <p>
                {caption}
            </p>
        </div>
    )
}
