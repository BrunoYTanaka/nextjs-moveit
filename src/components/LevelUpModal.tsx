import { ReactElement, useContext, useEffect, useRef } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

function LevelUpModal(): ReactElement {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  const ref = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLevelUpModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeLevelUpModal])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeLevelUpModal()
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [closeLevelUpModal])

  return (
    <div className={styles.overlay}>
      <div className={styles.container} ref={ref}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>
        <button
          type="button"
          onClick={closeLevelUpModal}
          className={styles.closeButton}
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
      <button type="button" className={styles.twitterButton}>
        <span>
          Compartilhar no Twitter
          <AiOutlineTwitter size={24} />
        </span>
      </button>
    </div>
  )
}

export default LevelUpModal
