import useSWR from 'swr'
import { GetServerSideProps } from 'next'
import React, { Fragment, ReactElement, useMemo } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import CardHeader from '../components/Card/CardHeader'
import styles from '../styles/pages/Leaderboard.module.css'

interface User {
  id: {
    value: string
  }
  name: {
    first: string
    last: string
  }
  picture: {
    thumbnail: string
  }
}

interface Leaderboard {
  id: string
  user: {
    name: string
    avatarUrl: string
  }
  position: number
  level: number
  challengedCompleted: number
  currentExperience: number
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const leaderboardFetcher = (url: string) =>
  axios.get(url).then(res => res.data.results)

function Leaderboard(): ReactElement {
  const { data } = useSWR<User[]>(
    `https://randomuser.me/api/?results=10&inc=id,name,picture&seed=abc`,
    leaderboardFetcher,
  )

  const leaderboard = useMemo(() => {
    if (data) {
      return data.map((user, index) => ({
        id: user.id.value,
        user: {
          name: `${user.name.first} ${user.name.last}`,
          avatarUrl: user.picture.thumbnail,
        },
        position: index + 1,
        currentExperience: randomIntFromInterval(5000, 8000),
        challengedCompleted: randomIntFromInterval(20, 80),
        level: randomIntFromInterval(10, 40),
      }))
    }
    return []
  }, [data])

  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <CardHeader />
      {leaderboard.map((user, index) => (
        <Fragment key={`${user.user.name}-${user.id}`}>
          <Card
            user={user.user}
            position={index + 1}
            level={user.level}
            currentExperience={user.currentExperience}
            challengedCompleted={user.challengedCompleted}
          />
        </Fragment>
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
