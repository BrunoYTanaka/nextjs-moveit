import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  ReactElement,
} from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import LevelUpModal from '../components/LevelUpModal'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  previousExperience: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps): ReactElement {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [previousExperience, setPreviousExperience] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  )
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = ((level + 1) * 4) ** 2

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('previousExperience', String(previousExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, challengesCompleted, currentExperience, previousExperience])

  const levelUp = () => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  const closeLevelUpModal = () => setIsLevelUpModalOpen(false)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`,
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  const completeChallenge = () => {
    if (!activeChallenge) {
      return
    }
    const { amount } = activeChallenge
    setPreviousExperience(currentExperience)
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel

      setCurrentExperience(experienceToNextLevel)
      setActiveChallenge(null)

      setTimeout(() => {
        setPreviousExperience(0)
        setCurrentExperience(finalExperience)
        setChallengesCompleted(challengesCompleted + 1)
        levelUp()
      }, 1000)

      return
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        previousExperience,
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
