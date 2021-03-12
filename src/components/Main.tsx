import React, { ReactElement, useContext } from 'react'
import {
  ChallengesContext,
  ChallengesProvider,
} from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import ChallengeBox from './ChallengeBox'
import CompletedChallenges from './CompletedChallenges'
import Countdown from './Countdown'
import ExperienceBar from './ExperienceBar'
import Profile from './Profile'
import styles from '../styles/pages/Home.module.css'

function Main(): ReactElement {
  const { level, currentExperience, challengesCompleted } = useContext(
    ChallengesContext,
  )

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export default Main
