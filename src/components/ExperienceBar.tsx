import React, { ReactElement, useContext } from 'react'
import { motion } from 'framer-motion'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

function ExperienceBar(): ReactElement {
  const {
    currentExperience,
    experienceToNextLevel,
    previousExperience,
  } = useContext(ChallengesContext)

  const percentPreviousExperience =
    Math.round(previousExperience * 100) / experienceToNextLevel

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span> 0 xp</span>
      <div>
        <motion.div
          animate={{
            width: [`${percentPreviousExperience}%`, `${percentToNextLevel}%`],
          }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className={styles.currentExperience}
            animate={{
              left: [`${percentPreviousExperience}%`, `${percentToNextLevel}%`],
            }}
            transition={{ duration: 1 }}
          >
            {currentExperience} xp
          </motion.span>
        </motion.div>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  )
}

export default ExperienceBar
