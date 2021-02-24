import Head from 'next/head';
import { ExperienceBar } from "../components/ExperirenceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/Pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  )
}