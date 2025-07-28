'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import ContactModal from '../components/ContactModal'

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['EMAIL', 'CALL', 'CRM DATA', 'Business']
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Get Started Today')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  const openContactModal = (title: string) => {
    setModalTitle(title)
    setIsContactModalOpen(true)
  }

  return (
    <div className={styles.container}>
      {/* Original Hero Section - Keep as is */}
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
          <button 
            className={styles.ctaButton}
            onClick={() => openContactModal('Get Started Today')}
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* New Content Section - Imagine if you could finally focus on growth */}
      <section className={styles.focusSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.focusTitle}>
            Imagine if you could finally focus on growth…
          </h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              You don't reply to WhatsApp or Instagram DMs all day — they're handled automatically.
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              You don't follow up with abandoned carts — your system brings them back for you.
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              You don't miss out on leads or sales — because every customer gets a quick, personal response.
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              You don't hire extra VAs or manage 10 tools — everything runs smoothly in one place.
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              You focus on growth — not day-to-day chaos.
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              You don't waste hours compiling reports — insights are delivered to you automatically in real time.
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className={styles.problems}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>What's Really Holding You Back?</h2>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <h3>Repetitive Work</h3>
              <p>Answering "Where is my order?", updating inventory, copy-pasting messages, manually tracking returns.</p>
            </div>
            <div className={styles.problemCard}>
              <h3>Spending Big on Ads</h3>
              <p>You're running Instagram ads, but missing leads in DMs. Carts get abandoned. No follow-ups.</p>
            </div>
            <div className={styles.problemCard}>
              <h3>Too Many Tasks</h3>
              <p>You're stuck doing everything—from order updates to customer replies—leaving zero space to grow your brand.</p>
            </div>
            <div className={styles.problemCard}>
              <h3>Scattered Tools</h3>
              <p>You're running Instagram ads, but missing leads in DMs. Carts get abandoned. No follow-ups.</p>
            </div>
            <div className={styles.problemCard}>
              <h3>Too much time managing, not enough scaling.</h3>
              <p>Founders get stuck in ops, support & marketing — leaving no space for real growth.</p>
            </div>
            <div className={styles.problemCard}>
              <h3>Growing teams often means growing complexity.</h3>
              <p>Founders burn time training, managing, and still repeating the same tasks daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={styles.solutions}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🤖</div>
              <h3>Automate Repetitive Tasks</h3>
              <p>Let AI handle order tracking, inventory updates, returns, FAQs, and follow-ups.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>⚡</div>
              <h3>Replace Manual Workflows</h3>
              <p>Auto-send reports, sync data across platforms, and manage CRM, all in one flow.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>📈</div>
              <h3>Focus on Scale Not Operation</h3>
              <p>Skip daily firefighting. Focus on strategy, partnerships, and new product launches.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>💰</div>
              <h3>Grow Without Hiring Costs</h3>
              <p>Handle customer support, social posts, invoices, and more — without extra hires.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🧠</div>
              <h3>Smarter Decision-Making</h3>
              <p>Use AI to monitor performance, surface insights, and make data-backed decisions faster.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🔄</div>
              <h3>Always-On Consistency</h3>
              <p>AI runs 24/7 without breaks — ensuring replies, updates, and processes never miss a beat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className={styles.howWeHelp}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>How Can You Build Your Own AI Assistant? That's Where We Come In.</h2>
          <div className={styles.helpContent}>
            <p className={styles.helpDescription}>
              At GoAutomate, we help founders build their own personalized AI agents — designed around your exact business needs, tasks, and workflows.
            </p>
            <p className={styles.helpDescription}>
              We craft intelligent agents that take over your repetitive work — so you can focus on what truly matters: growth, strategy, and scale.
            </p>
            <button 
              className={styles.ctaButtonSecondary}
              onClick={() => openContactModal('Build Your AI Assistant')}
            >
              Build Your AI Assistant
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={modalTitle}
      />
    </div>
  )
}