'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import TeamSection from '../../components/TeamSection'
import ContactModal from '../../components/ContactModal'

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const router = useRouter()

  const handleScheduleConsultation = () => {
    setIsContactModalOpen(true)
  }

  const handleViewCaseStudies = () => {
    router.push('/use-cases')
  }
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1>About Go Automate</h1>
          <p>Empowering businesses through intelligent automation solutions</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.section}>
            <div className="card">
              <h2>Our Mission</h2>
              <p>
                At Go Automate, we believe that every business deserves to operate at peak efficiency. 
                Our mission is to eliminate repetitive tasks and streamline workflows, allowing you to 
                focus on what truly matters - growing your business and serving your customers.
              </p>
              <p>
                We specialize in creating custom automation solutions that integrate seamlessly with 
                your existing systems, delivering measurable results from day one.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <div className="card">
              <h2>Why Choose Us</h2>
              <div className={styles.valueProps}>
                <div className={styles.valueProp}>
                  <h3>🎯 Tailored Solutions</h3>
                  <p>Every automation is custom-built for your specific needs and workflows</p>
                </div>
                <div className={styles.valueProp}>
                  <h3>⚡ Rapid Implementation</h3>
                  <p>Get up and running quickly with our streamlined deployment process</p>
                </div>
                <div className={styles.valueProp}>
                  <h3>🔧 Ongoing Support</h3>
                  <p>Continuous monitoring and optimization to ensure peak performance</p>
                </div>
                <div className={styles.valueProp}>
                  <h3>📈 Proven Results</h3>
                  <p>Track record of delivering 40-80% efficiency improvements</p>
                </div>
                <div className={styles.valueProp}>
                  <h3>🤖 Scalable AI Agents</h3>
                  <p>Easily expand automation as your business grows without added headcount.</p>
                </div>
                <div className={styles.valueProp}>
                  <h3>🔒 Data Security First</h3>
                  <p>Enterprise-grade protection to keep your operations and customer data safe.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className="card">
              <h2>Our Services</h2>
              <div className={styles.services}>
                <div className={styles.service}>
                  <h3>Email Marketing Automation (EMAIL)</h3>
                  <p>Intelligent email sequences that nurture leads and drive conversions</p>
                </div>
                <div className={styles.service}>
                  <h3>Data Collection Systems (CALL)</h3>
                  <p>Automated data gathering, processing, and analysis from multiple sources</p>
                </div>
                <div className={styles.service}>
                  <h3>CRM Integration & Management</h3>
                  <p>Seamless customer relationship management across all your platforms</p>
                </div>
                <div className={styles.service}>
                  <h3>Custom Business Automation</h3>
                  <p>Bespoke solutions for your unique business processes and requirements</p>
                </div>
                <div className={styles.service}>
                  <h3>🔄 Workflow Orchestration</h3>
                  <p>Connect and automate apps like Shopify, HubSpot, and Google Sheets with powerful workflows</p>
                </div>
                <div className={styles.service}>
                  <h3>📊 Real-Time Reporting & Alerts</h3>
                  <p>Autogenerate reports and get instant alerts for key business events and KPIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.section}>
            <div className={`card ${styles.contactCard}`}>
              <h2>Ready to Get Started?</h2>
              <p>
                Transform your business operations with intelligent automation. 
                Contact us today for a free consultation and discover how we can help you 
                automate smarter and scale faster.
              </p>
              <div className={styles.contactButtons}>
                <button 
                  className={styles.primaryBtn}
                  onClick={handleScheduleConsultation}
                >
                  Schedule Consultation
                </button>
                <button 
                  className={styles.secondaryBtn}
                  onClick={handleViewCaseStudies}
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Schedule Consultation"
      />
    </div>
  )
}