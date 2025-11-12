"use client";

import styles from "@/styles/footer.module.css";

const Footer = () => {
  const contact = () => {
    window.location.href =
      "mailto:nikita@nsweb.dev?subject=Order a project&body=Hi, I would like to order a project. Here are the details:";
  };

  return (
    <footer>
      <div className={styles.description}>
        <h2>Let's build together!</h2>
        <p>
          Achieve your goals with a professional website, service or web app.
        </p>
        <button onClick={contact} className="btn">
          Order a project
        </button>
      </div>

      <p className={styles.copyright}>
        All rights reserved © Nikita Smetanin 2025
      </p>
    </footer>
  );
};

export default Footer;
