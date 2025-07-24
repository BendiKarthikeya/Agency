'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['EMIT', 'COLL', 'CRM DATA', 'Business']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            Automate your
            <br />
            <span className={styles.animatedText}>
              {words[currentWord]}
            </span>
            <br />
            <span className={styles.tagline}>Automate smarter, scale faster</span>
          </h1>
          <button className={styles.ctaButton}>
            Get Started Today
          </button>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2>Why Choose Automation?</h2>
          <div className={styles.featureGrid}>
            <div className="card">
              <h3>Save Time</h3>
              <p>Eliminate repetitive tasks and focus on what matters most to your business growth.</p>
            </div>
            <div className="card">
              <h3>Reduce Errors</h3>
              <p>Automated processes minimize human error and ensure consistent, reliable results.</p>
            </div>
            <div className="card">
              <h3>Scale Efficiently</h3>
              <p>Handle increased workload without proportional increases in manual effort or costs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}