'use client';

import Hero from './hero/hero';
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
      </div>
    </main>
  )
}
