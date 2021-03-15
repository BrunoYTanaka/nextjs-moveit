import React, { ReactElement } from 'react'
import { ImArrowUp } from 'react-icons/im'
import styles from '../../styles/components/Card/Card.module.css'

interface User {
  name: string
  avatarUrl: string
}
interface CardProps {
  position: number
  user: User
  level: number
  challengedCompleted: number
  currentExperience: number
}

function Card({
  position,
  challengedCompleted,
  currentExperience,
  level,
  user,
}: CardProps): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.position}>{position}</div>
      <div className={styles.user}>
        <img src={user.avatarUrl} alt={user.name} />
        <div className={styles.userInfo}>
          <strong>{user.name}</strong>
          <span>
            <ImArrowUp />
            Level {level}
          </span>
        </div>
      </div>
      <div className={styles.challengedCompleted}>
        <span>{challengedCompleted}</span>
        completados
      </div>
      <div className={styles.experience}>
        <span>{currentExperience}</span>
        xp
      </div>
    </div>
  )
}

export default Card
