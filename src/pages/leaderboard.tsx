import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'

function leaderboard(): ReactElement {
  return <div>LeaderBoard</div>
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
