import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'
import Card from '../components/Card'
import CardHeader from '../components/Card/CardHeader'
import styles from '../styles/pages/Leaderboard.module.css'
import leaderboard from '../../leaderboard.json'

function Leaderboard(): ReactElement {
  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <CardHeader />
      {leaderboard.map(user => (
        <Card
          key={user.position}
          user={user.user}
          level={user.level}
          currentExperience={user.currentExperience}
          challengedCompleted={user.challengedCompleted}
          position={user.position}
        />
      ))}
    </div>
  )
}

export default Leaderboard

export const getServerSideProps: GetServerSideProps = async context => {
  const { user } = context.req.cookies

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return { props: {} }
}
