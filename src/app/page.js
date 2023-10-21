import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar/navbar';
import insta from "../../assets/icons/insta.svg"
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";


export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.section}> <Navbar />
                <div className={styles.first_section}>
                    <div className={styles.left_socials}> <div className={styles.social}>
                        <Image src={insta} />
                        <div className={styles.text}>Instagram</div></div>
                        <div className={styles.social}><Image src={twitter} /><div className={styles.text}>Twitter</div></div>
                        <div className={styles.social}><Image src={facebook} /><div className={styles.text}>Facebook</div></div>
                    </div>
                    <div className={styles.center_text}> Build Digital Product<div className={styles.animation}>
                        <div className={styles.first}>Community</div>
                        <div className={styles.second}>Marketing</div>
                        <div className={styles.third}>Website</div>
                    </div>
                    </div>
                    <div className={styles.right_nav}>nav nav nav</div>
                </div>
            </section>

            <section className={styles.section}></section>
            <section className={styles.section}>2</section>
            <section className={styles.section}>2</section>
            <section className={styles.section}>4</section>

            <div className={`${styles.light} ${styles.x1}`}></div>
            <div className={`${styles.light} ${styles.x2}`}></div>
            <div className={`${styles.light} ${styles.x3}`}></div>
            <div className={`${styles.light} ${styles.x4}`}></div>
            <div className={`${styles.light} ${styles.x5}`}></div>
            <div className={`${styles.light} ${styles.x6}`}></div>
            <div className={`${styles.light} ${styles.x7}`}></div>
            <div className={`${styles.light} ${styles.x8}`}></div>
            <div className={`${styles.liht} ${styles.x9}`}></div>

        </main >
    )
}


//https://html.themexriver.com/Orixy/index-1.html