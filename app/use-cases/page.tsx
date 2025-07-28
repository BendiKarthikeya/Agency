'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface UseCase {
  id: number
  title: string
  description: string
  icon: string
  fullDescription: string
  workflow: string[]
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Email Marketing Automation",
    description: "Streamline your email campaigns with automated sequences, personalization, and performance tracking.",
    icon: "📧",
    fullDescription: "Transform your email marketing with intelligent automation that nurtures leads, segments audiences, and delivers personalized content at scale. Our EMAIL system handles everything from welcome sequences to re-engagement campaigns.",
    workflow: [
      "Lead capture and segmentation",
      "Automated welcome sequence",
      "Behavioral trigger emails",
      "Performance analytics and optimization"
    ]
  },
  {
    id: 2,
    title: "Data Collection & Processing",
    description: "Automate data gathering from multiple sources, clean, and organize information for actionable insights.",
    icon: "📊",
    fullDescription: "Our CALL system automatically gathers data from various sources, processes it through intelligent filters, and delivers clean, organized datasets ready for analysis and decision-making.",
    workflow: [
      "Multi-source data extraction",
      "Data validation and cleaning",
      "Automated categorization",
      "Real-time dashboard updates"
    ]
  },
  {
    id: 3,
    title: "CRM Integration & Management",
    description: "Synchronize customer data across platforms and automate follow-ups, scoring, and relationship management.",
    icon: "🤝",
    fullDescription: "Seamlessly integrate your CRM with other business tools while automating lead scoring, follow-up sequences, and customer journey tracking. Keep your sales team focused on closing deals.",
    workflow: [
      "Cross-platform data synchronization",
      "Automated lead scoring",
      "Follow-up sequence triggers",
      "Customer journey mapping"
    ]
  }
]

export default function UseCases() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null)

  const toggleExpanded = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id)
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Use Cases</h1>
          <p>Discover how our automation solutions transform businesses across industries</p>
        </div>
      </section>

      <section className={styles.cases}>
        <div className={styles.casesContainer}>
          {useCases.map((useCase) => (
            <div key={useCase.id} className={styles.caseCard}>
              <div className={styles.casePreview}>
                <div className={styles.caseIcon}>{useCase.icon}</div>
                <div className={styles.caseContent}>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                  <button 
                    className={styles.learnMoreBtn}
                    onClick={() => toggleExpanded(useCase.id)}
                  >
                    {expandedCase === useCase.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
              
              {expandedCase === useCase.id && (
                <div className={styles.expandedContent}>
                  <div className={styles.fullDescription}>
                    <h4>Overview</h4>
                    <p>{useCase.fullDescription}</p>
                  </div>
                  <div className={styles.workflow}>
                    <h4>Workflow Process</h4>
                    <ul>
                      {useCase.workflow.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}