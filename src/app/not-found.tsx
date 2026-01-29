"use client";
import Link from "next/link";
import styles from "@/styles/error.module.css";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <section className={styles.error_page}>
      <div className={styles.error_page_inner}>
        <DotLottieReact
          src="/assets/sad_duck.json"
          autoplay
          loop
          style={{ width: "250px", height: "250px" }}
        />
        <h2>Not Found</h2>
        <p>
          Could not find requested page. Please try again or return to the
          homepage.
        </p>
        <Link className="btn" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
