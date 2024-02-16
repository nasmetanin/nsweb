import styles from '@/styles/stack.module.css'
import Image from 'next/image'

type StackGridProps = {
    stackItems: {
        name: string,
        logo: string
    }[]
}

export const Stack = (props: StackGridProps) => {

    const { stackItems } = props;

    return (
        <div className={styles.grid}>
            {
                stackItems.map((item, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            <Image src={item.logo} alt={item.name} width={30} height={30} />
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
