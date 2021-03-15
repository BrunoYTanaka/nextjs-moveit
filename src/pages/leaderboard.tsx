import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'
import Card from '../components/Card'
import CardHeader from '../components/Card/CardHeader'
import styles from '../styles/pages/Leaderboard.module.css'

function leaderboard(): ReactElement {
  return (
    <div className={styles.container}>
      <h1>LeaderBoard</h1>
      <CardHeader />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default leaderboard

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
