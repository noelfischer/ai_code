'use client';

import PullRequestFeature from './components/preview/PullRequestFeature';
import Hero from './hero/hero';
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <PullRequestFeature />
      <div className={styles.content}>
      </div>
    </main>
  )
}
