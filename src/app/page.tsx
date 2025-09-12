import styles from "@/styles/main.module.css";
import { Metadata } from "next";
import About from "@/components/about";
import { Projects } from "@/components/projects";
import { Lottie } from "@/components/lottie";

export const metadata: Metadata = {
  title: "Nikita Smetanin - Software Engineer",
  description:
    "Creative full-stack engineer that brings your dream to reality. Websites, web apps, mobile apps, backend API services, and more.",
  robots: "index, follow",
  openGraph: {
    title: "Nikita Smetanin - Software Engineer",
    description:
      "Creative full-stack engineer that brings your dream to reality. Websites, web apps, mobile apps, backend API services, and more.",
    images: [
      {
        url: "https://nsweb.tech/projects/placeholder.png",
        width: 585,
        height: 380,
        alt: "Nikita Smetanin - Software Engineer",
      },
    ],
    url: "/",
    siteName: "Nikita Smetanin",
  },
};

export default async function Home() {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.intro_inner}>
          <h1>
            I'm <span>Nikita</span>,<br />A software engineer
          </h1>
          <h2>and this what I've been working on:</h2>
        </div>
        <Lottie
          src="/assets/deal_out_duck.json"
          autoplay
          loop
          className={styles.intro_lottie}
        />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section>
        <About />
      </section>
    </main>
  );
}
