import styles from "@/styles/stack.module.css";
import Image from "next/image";
import { Lottie } from "./lottie";

type StackProps = {
  stackItems: {
    name: string;
    logo: string;
  }[];
};

export const Stack = (props: StackProps) => {
  const { stackItems } = props;

  return (
    <div className={styles.stack_container}>
      <Lottie
        src="/assets/stack_duck.json"
        autoplay
        loop
        className={styles.stack_lottie}
      />
      <div className={styles.grid}>
        {stackItems.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Image src={item.logo} alt={item.name} width={30} height={30} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
