import styles from './TeamSection.module.css'

interface TeamMember {
  role: string
  responsibilities: string[]
}

const teamData: TeamMember[] = [
  {
    role: "Mr. CEO",
    responsibilities: [
      "Identify daily roadblocks",
      "Set & track priorities", 
      "Monitor weekly progress",
      "Analyze company growth",
      "Summarize team updates"
    ]
  },
  {
    role: "Mr. CMO",
    responsibilities: [
      "Analyze customer behavior",
      "Generate content ideas",
      "Spot market trends",
      "Plan & calendar campaigns",
      "Track performance metrics"
    ]
  },
  {
    role: "Mr. COO",
    responsibilities: [
      "Monitor delays & blockers",
      "Optimize internal workflow",
      "Predict operational risks",
      "Track process KPIs",
      "Auto-generate ops reports"
    ]
  },
  {
    role: "Mr. CFO",
    responsibilities: [
      "Forecast cash flow",
      "Detect spending leaks",
      "Automate billing & invoicing",
      "Generate pricing insights",
      "Weekly finance summary"
    ]
  },
  {
    role: "Sales Agent",
    responsibilities: [
      "Score incoming leads",
      "Send personalized outreach",
      "Track deal pipeline",
      "Highlight hot prospects",
      "Log meeting notes automatically"
    ]
  },
  {
    role: "Customer Support",
    responsibilities: [
      "Predict customer churn",
      "Automate onboarding journeys",
      "Provide FAQ support",
      "Identify upsell opportunity",
      "Track satisfaction feedback"
    ]
  }
]

const getRoleIcon = (role: string): string => {
  const iconMap: { [key: string]: string } = {
    "Mr. CEO": "👨‍💼",
    "Mr. CMO": "📈",
    "Mr. COO": "⚙️",
    "Mr. CFO": "💰",
    "Sales Agent": "🎯",
    "Customer Support": "🤝"
  }
  return iconMap[role] || "👤"
}

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Meet Your Team</h2>
          <p>Our AI-powered team members working 24/7 to automate your business operations</p>
        </div>
        
        <div className={styles.teamGrid}>
          {teamData.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.cardHeader}>
                <div className={styles.roleIcon}>
                  {getRoleIcon(member.role)}
                </div>
                <h3 className={styles.roleTitle}>{member.role}</h3>
              </div>
              
              <div className={styles.responsibilities}>
                <h4>Key Responsibilities:</h4>
                <ul className={styles.responsibilityList}>
                  {member.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className={styles.responsibilityItem}>
                      <span className={styles.checkmark}>✓</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}