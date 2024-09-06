import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Joanna</h1>
        <p className={styles.description}>
        I'm a full-stack developer with experience in various coding languages. Reach out if you'd like to learn more, or you may browse my project page!
        </p>
        <Link to="/contact" className={styles.contactBtn}>
          Contact Me
        </Link>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
