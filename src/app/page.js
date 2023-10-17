import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.nav}><div className={styles.nav_right}>Logo</div>
          <div className={styles.nav_center}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>servicing</li>
              <li>Portfolio</li>
              <li>Pricing</li>

            </ul></div>
          <div className={styles.nav_left}><div className="nav_search"></div>
            <div className="nav_hamburger"><FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: "#f7f7f8", }} /></div>
          </div>
        </div>
      </div>

    </main>
  )
}
