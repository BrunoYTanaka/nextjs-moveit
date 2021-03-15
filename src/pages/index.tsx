import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import Main from '../components/Main'

export default function Home(): ReactElement {
  return <Main />
}

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
