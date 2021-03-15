import React, { ReactElement } from 'react'
import styles from '../../styles/components/Card/CardHeader.module.css'

function CardHeader(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.position}>Posição</div>
      <div className={styles.user}>Usuário</div>
      <div className={styles.challengedCompleted}>Desafios</div>
      <div className={styles.experience}>Experiência</div>
    </div>
  )
}

export default CardHeader
