import React, { ReactElement } from 'react'
import { ImArrowUp } from 'react-icons/im'
import styles from '../../styles/components/Card/Card.module.css'

function Card(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.position}>1</div>
      <div className={styles.user}>
        <img
          src="https://avatars.githubusercontent.com/u/37604496?s=460&u=123782f9b617910f601ffc0253173958b8f3992e&v=4"
          alt="logo"
        />
        <div className={styles.userInfo}>
          <strong>Bruno Yoichi Tanaka</strong>
          <span>
            <ImArrowUp />
            Level 43
          </span>
        </div>
      </div>
      <div className={styles.challengedCompleted}>
        <span>127</span>
        completados
      </div>
      <div className={styles.experience}>
        <span>15400</span>
        xp
      </div>
    </div>
  )
}

export default Card
