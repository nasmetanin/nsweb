import { Metadata } from "next";
import About from "@/components/about";
import { Projects } from "@/components/projects";
import ClickSpark from "@/components/ClickSpark";
import Intro from "@/components/Intro/Intro";

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
      <Intro />
      <ClickSpark>
        <section id="projects">
          <Projects />
        </section>
      </ClickSpark>

      <section>
        <About />
      </section>
    </main>
  );
}
