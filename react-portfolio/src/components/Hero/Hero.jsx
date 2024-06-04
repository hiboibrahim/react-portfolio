import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (

  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hibo</h1>
        <p className={styles.description}>I'm a Full-Stack Developer with a passion for Educational Technology. Reach out to learn more about what I offer  </p>
        <a className={styles.contactBtn} href='mailto:hibo.ibrahim@googlemail.com'>Get in Touch</a>
    </div>
    <img className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero