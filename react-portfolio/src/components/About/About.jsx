import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils';


const About = () => {
  return (
    <section  className={styles.container}  id='about'>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt='me' />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}> 
                <img src={getImageUrl('about/cursorIcon.png')} alt='cursor icon' />
        <div className={styles.aboutItemText}>
            <h3>
                Frontend Developer
            </h3>
            <p>I'm a frontend developer with experience building and optmizing sites</p>
        </div>
        </li>

        <li className={styles.aboutItem}>
                <img src={getImageUrl('about/serverIcon.png')} alt='cursor icon' />
        <div className={styles.aboutItemText}>
            <h3>
                Backend Developer
            </h3>
            <p>I have experience developing fast and optimised back-end systems and APIs </p>
        </div>
        </li>
        <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt='UI icon' />
        <div className={styles.aboutItemText}>
            <h3>
                UI Design
            </h3>
            <p>I have designed multiple landing pages and have created design
                systems as well</p>
        </div>
        </li>
        
        
        </ul>
        </div>
    </section>

)
}

export default About