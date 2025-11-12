import styles from "@/styles/project_page.module.css";
import Link from "next/link";
import Image from "next/image";

type ProjectHeadProps = {
  title: string;
  moto: string;
  children: React.ReactNode;
};

export const ProjectHead = (props: ProjectHeadProps) => {
  const { title, moto, children } = props;

  return (
    <>
      <section className={styles.project_description}>
        <Link className={styles.go_back} href="/">
          <Image
            src="/img/arrow-back.svg"
            alt="Back to main"
            width={20}
            height={20}
          />
          to main
        </Link>
        <h1>{title}</h1>
        <h2>{moto}</h2>
        {children}
      </section>
    </>
  );
};
