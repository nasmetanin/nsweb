"use client";
import styles from "./Intro.module.css";
import LightRays from "@/components/LightRays/LightRays";
import SplitText from "@/components/SplitText/SplitText";
import FadeContent from "@/components/FadeContent/FadeContent";
import ClickSpark from "../ClickSpark";

const Intro = () => {
  const scrollToProjects = () => {
    const projects = document.getElementById("projects");

    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ClickSpark sparkSize={15} duration={300} sparkCount={12}>
      <section className={styles.intro}>
        <div className={styles.intro_rays}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00dc82"
            raysSpeed={1}
            lightSpread={1.4}
            rayLength={2}
            saturation={2}
            pulsating
            followMouse={true}
            mouseInfluence={0.2}
            fadeDistance={2}
            noiseAmount={0.1}
            className="custom-rays"
          />
        </div>
        <div className={styles.intro_inner}>
          <SplitText
            text="Nikita Smetanin"
            className={styles.intro_title}
            delay={600}
            duration={1}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.4}
            rootMargin="-100px"
            textAlign="center"
            tag="h1"
          />
          <FadeContent
            blur={true}
            delay={1000}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <p>
              Creative full-stack engineer that brings your dream to reality. I
              create websites, web apps, mobile apps, backend API services, and
              more.
            </p>
          </FadeContent>
          <FadeContent
            blur={true}
            delay={1500}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <button
              className={`btn ${styles.browseProjects}`}
              onClick={scrollToProjects}
              aria-label="Scroll to projects section"
            >
              Browse projects
            </button>
          </FadeContent>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Intro;
