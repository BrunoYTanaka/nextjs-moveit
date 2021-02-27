import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/BrunoYTanaka.png" alt="Bruno Y. Tanaka" />
      <div>
        <strong>Bruno</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level {level}
          </p>
      </div>
    </div>
  )
}

export default Profile
