import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentXP, xpToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round((currentXP * 100) / xpToNextLevel)
 
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%`}}></div>

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
          {currentXP} xp
        </span>
      </div>
      <span>{xpToNextLevel} xp</span>
    </header>
  )
}
